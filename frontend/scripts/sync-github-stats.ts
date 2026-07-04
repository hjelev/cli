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

interface RepoStats {
	stargazerCount: number;
	pushedAt: string;
	latestRelease: { tagName: string } | null;
}

interface ToolFile {
	file: string;
	fullPath: string;
	owner: string;
	repo: string;
}

function parseGitHubRepo(repositoryUrl: string): { owner: string; repo: string } | null {
	const match = repositoryUrl.match(/^https?:\/\/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/i);
	if (!match) return null;
	return { owner: match[1], repo: match[2] };
}

const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;
const GITHUB_FIELD_PATTERN = /^github_(stars|updated|release):/;

// Rewrites only our own `github_*` keys in-place, leaving every other line
// byte-for-byte untouched — a full YAML parse+dump round-trip (e.g. via
// gray-matter/js-yaml) would re-quote unrelated fields and produce noisy
// diffs on every daily run.
function setFrontmatterFields(raw: string, newLines: string[]): string {
	const match = raw.match(FRONTMATTER_PATTERN);
	if (!match) throw new Error('file has no frontmatter block');

	const lines = match[1].split('\n').filter((line) => !GITHUB_FIELD_PATTERN.test(line));
	const anchor = lines.findIndex((line) => /^(ratings|comments):/.test(line));
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

async function fetchStatsBatch(tools: ToolFile[]): Promise<Map<string, RepoStats | null>> {
	const results = new Map<string, RepoStats | null>();
	if (tools.length === 0) return results;

	const fields = tools
		.map(
			(tool, i) => `
  repo${i}: repository(owner: ${JSON.stringify(tool.owner)}, name: ${JSON.stringify(tool.repo)}) {
    stargazerCount
    pushedAt
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
		throw new Error(`GraphQL request failed: ${res.status} ${await res.text()}`);
	}

	const body = (await res.json()) as {
		data: Record<string, RepoStats | null> | null;
		errors?: Array<{ message: string; path?: string[] }>;
	};

	for (const error of body.errors ?? []) {
		console.warn(`⚠️  GraphQL error: ${error.message}`);
	}

	tools.forEach((tool, i) => {
		results.set(tool.file, body.data?.[`repo${i}`] ?? null);
	});

	return results;
}

const files = fs.readdirSync(toolsDir).filter((file) => file.endsWith('.md'));

const toolFiles: ToolFile[] = [];
for (const file of files) {
	const fullPath = path.join(toolsDir, file);
	const raw = fs.readFileSync(fullPath, 'utf8');
	const { data } = matter(raw);
	const repositoryUrl = data.repository_url as string | undefined;
	const parsed = repositoryUrl ? parseGitHubRepo(repositoryUrl) : null;

	if (!parsed) {
		console.warn(`⚠️  ${file}: repository_url is not a github.com URL, skipping`);
		continue;
	}

	toolFiles.push({ file, fullPath, owner: parsed.owner, repo: parsed.repo });
}

const stats = new Map<string, RepoStats | null>();
for (const batch of chunk(toolFiles, CHUNK_SIZE)) {
	const batchStats = await fetchStatsBatch(batch);
	for (const [file, result] of batchStats) {
		stats.set(file, result);
	}
}

let updatedCount = 0;
for (const tool of toolFiles) {
	const repoStats = stats.get(tool.file);
	if (!repoStats) {
		console.warn(`⚠️  ${tool.file}: could not fetch ${tool.owner}/${tool.repo} (private, renamed, or deleted?)`);
		continue;
	}

	const raw = fs.readFileSync(tool.fullPath, 'utf8');
	const githubUpdated = repoStats.pushedAt.slice(0, 10);
	const githubRelease = repoStats.latestRelease?.tagName;

	const newLines = [
		`github_stars: ${repoStats.stargazerCount}`,
		`github_updated: ${JSON.stringify(githubUpdated)}`,
		...(githubRelease ? [`github_release: ${JSON.stringify(githubRelease)}`] : []),
	];

	const updated = setFrontmatterFields(raw, newLines);
	if (updated !== raw) {
		fs.writeFileSync(tool.fullPath, updated);
		updatedCount += 1;
		console.log(`✅ ${tool.file}: updated (${repoStats.stargazerCount}★, ${githubUpdated}${githubRelease ? `, ${githubRelease}` : ''})`);
	}
}

console.log(`\nDone. ${updatedCount}/${toolFiles.length} tool files updated.`);
