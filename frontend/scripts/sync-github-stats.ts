import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const frontendRoot = path.resolve(import.meta.dirname, '..');
const toolsDir = path.join(frontendRoot, 'src/content/tools');

const token = process.env.GITHUB_TOKEN;
if (!token) {
	console.error('GITHUB_TOKEN environment variable is required.');
	process.exit(1);
}

// GraphQL query complexity/response size grows with batch size, so chunk
// well below GitHub's limits even as the tool list grows past today's count.
const CHUNK_SIZE = 50;

// Codeberg (Gitea) has no batch/GraphQL API, so its repos are fetched one at
// a time; capping concurrency keeps us polite to a much smaller instance
// than GitHub.
const CODEBERG_CONCURRENCY = 8;

type RepoHost = 'github' | 'codeberg';

interface RepoStats {
	stars: number;
	updated: string; // ISO YYYY-MM-DD, repo's last push date
	created: string; // ISO YYYY-MM-DD, repo creation date
	release: string | null;
}

interface ToolFile {
	file: string;
	fullPath: string;
	host: RepoHost;
	owner: string;
	repo: string;
}

function parseRepoUrl(repositoryUrl: string): { host: RepoHost; owner: string; repo: string } | null {
	const github = repositoryUrl.match(/^https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/i);
	if (github) return { host: 'github', owner: github[1], repo: github[2] };

	const codeberg = repositoryUrl.match(/^https?:\/\/codeberg\.org\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/i);
	if (codeberg) return { host: 'codeberg', owner: codeberg[1], repo: codeberg[2] };

	return null;
}

const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;
const REPO_FIELD_PATTERN = /^repo_(stars|updated|release|created):/;

// Rewrites only our own `repo_*` keys in-place, leaving every other line
// byte-for-byte untouched — a full YAML parse+dump round-trip (e.g. via
// gray-matter/js-yaml) would re-quote unrelated fields and produce noisy
// diffs on every daily run.
function setFrontmatterFields(raw: string, newLines: string[]): string {
	const match = raw.match(FRONTMATTER_PATTERN);
	if (!match) throw new Error('file has no frontmatter block');

	const lines = match[1].split('\n').filter((line) => !REPO_FIELD_PATTERN.test(line));
	const anchor = lines.findIndex((line) => /^comments:/.test(line));
	if (anchor === -1) {
		lines.push(...newLines);
	} else {
		lines.splice(anchor, 0, ...newLines);
	}

	const newFrontmatter = `---\n${lines.join('\n')}\n---\n`;
	return raw.slice(0, match.index) + newFrontmatter + raw.slice(match.index! + match[0].length);
}

function chunk<T>(items: T[], size: number): T[][] {
	const chunks: T[][] = [];
	for (let i = 0; i < items.length; i += size) {
		chunks.push(items.slice(i, i + size));
	}
	return chunks;
}

interface GitHubRepoStats {
	stargazerCount: number;
	pushedAt: string;
	createdAt: string;
	latestRelease: { tagName: string } | null;
}

async function fetchGitHubStatsBatch(tools: ToolFile[]): Promise<Map<string, RepoStats | null>> {
	const results = new Map<string, RepoStats | null>();
	if (tools.length === 0) return results;

	const fields = tools
		.map(
			(tool, i) => `
  repo${i}: repository(owner: ${JSON.stringify(tool.owner)}, name: ${JSON.stringify(tool.repo)}) {
    stargazerCount
    pushedAt
    createdAt
    latestRelease { tagName }
  }`,
		)
		.join('\n');

	const res = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query: `query {${fields}\n}` }),
	});

	if (!res.ok) {
		throw new Error(`GitHub GraphQL request failed: ${res.status} ${await res.text()}`);
	}

	const body = (await res.json()) as {
		data: Record<string, GitHubRepoStats | null> | null;
		errors?: Array<{ message: string; path?: string[] }>;
	};

	for (const error of body.errors ?? []) {
		console.warn(`⚠️  GitHub GraphQL error: ${error.message}`);
	}

	tools.forEach((tool, i) => {
		const stats = body.data?.[`repo${i}`];
		results.set(
			tool.file,
			stats
				? {
						stars: stats.stargazerCount,
						updated: stats.pushedAt.slice(0, 10),
						created: stats.createdAt.slice(0, 10),
						release: stats.latestRelease?.tagName ?? null,
					}
				: null,
		);
	});

	return results;
}

async function fetchGitHubStats(tools: ToolFile[]): Promise<Map<string, RepoStats | null>> {
	const results = new Map<string, RepoStats | null>();
	for (const batch of chunk(tools, CHUNK_SIZE)) {
		const batchStats = await fetchGitHubStatsBatch(batch);
		for (const [file, stats] of batchStats) {
			results.set(file, stats);
		}
	}
	return results;
}

interface CodebergRepoResponse {
	stars_count: number;
	updated_at: string;
	created_at: string;
}

async function fetchCodebergStats(tool: ToolFile): Promise<RepoStats | null> {
	const repoRes = await fetch(`https://codeberg.org/api/v1/repos/${tool.owner}/${tool.repo}`);
	if (!repoRes.ok) return null;
	const repoData = (await repoRes.json()) as CodebergRepoResponse;

	// 404 simply means the repo has no releases yet, not an error.
	const releaseRes = await fetch(`https://codeberg.org/api/v1/repos/${tool.owner}/${tool.repo}/releases/latest`);
	const releaseData = releaseRes.ok ? ((await releaseRes.json()) as { tag_name: string }) : null;

	return {
		stars: repoData.stars_count,
		updated: repoData.updated_at.slice(0, 10),
		created: repoData.created_at.slice(0, 10),
		release: releaseData?.tag_name ?? null,
	};
}

async function fetchCodebergStatsAll(tools: ToolFile[]): Promise<Map<string, RepoStats | null>> {
	const results = new Map<string, RepoStats | null>();
	for (const batch of chunk(tools, CODEBERG_CONCURRENCY)) {
		const batchStats = await Promise.all(batch.map((tool) => fetchCodebergStats(tool)));
		batch.forEach((tool, i) => results.set(tool.file, batchStats[i]));
	}
	return results;
}

const files = fs.readdirSync(toolsDir).filter((file) => file.endsWith('.md'));

const toolFiles: ToolFile[] = [];
for (const file of files) {
	const fullPath = path.join(toolsDir, file);
	const raw = fs.readFileSync(fullPath, 'utf8');
	const { data } = matter(raw);
	const repositoryUrl = data.repository_url as string | undefined;
	const parsed = repositoryUrl ? parseRepoUrl(repositoryUrl) : null;

	if (!parsed) {
		console.warn(`⚠️  ${file}: repository_url is not a github.com or codeberg.org URL, skipping`);
		continue;
	}

	toolFiles.push({ file, fullPath, host: parsed.host, owner: parsed.owner, repo: parsed.repo });
}

const githubTools = toolFiles.filter((tool) => tool.host === 'github');
const codebergTools = toolFiles.filter((tool) => tool.host === 'codeberg');

const stats = new Map<string, RepoStats | null>();
for (const [file, repoStats] of await fetchGitHubStats(githubTools)) {
	stats.set(file, repoStats);
}
for (const [file, repoStats] of await fetchCodebergStatsAll(codebergTools)) {
	stats.set(file, repoStats);
}

let updatedCount = 0;
for (const tool of toolFiles) {
	const repoStats = stats.get(tool.file);
	if (!repoStats) {
		console.warn(`⚠️  ${tool.file}: could not fetch ${tool.owner}/${tool.repo} (private, renamed, or deleted?)`);
		continue;
	}

	const raw = fs.readFileSync(tool.fullPath, 'utf8');

	const newLines = [
		`repo_stars: ${repoStats.stars}`,
		`repo_updated: ${JSON.stringify(repoStats.updated)}`,
		`repo_created: ${JSON.stringify(repoStats.created)}`,
		...(repoStats.release ? [`repo_release: ${JSON.stringify(repoStats.release)}`] : []),
	];

	const updated = setFrontmatterFields(raw, newLines);
	if (updated !== raw) {
		fs.writeFileSync(tool.fullPath, updated);
		updatedCount += 1;
		console.log(`✅ ${tool.file}: updated (${repoStats.stars}★, ${repoStats.updated}${repoStats.release ? `, ${repoStats.release}` : ''})`);
	}
}

console.log(`\nDone. ${updatedCount}/${toolFiles.length} tool files updated.`);
