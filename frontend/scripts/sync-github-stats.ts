import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { fetchWithRetry, parseRepoUrl, type RepoHost } from './lib/github.ts';
import { spliceFrontmatterFields } from './lib/frontmatter.ts';
import { chunk } from './lib/util.ts';

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

interface RepoStats {
	stars: number;
	updated: string; // ISO YYYY-MM-DD, repo's last push date
	created: string; // ISO YYYY-MM-DD, repo creation date
	release: string | null;
	releaseDate: string | null; // ISO YYYY-MM-DD, latest release's publish date
}

interface ToolFile {
	file: string;
	fullPath: string;
	host: RepoHost;
	owner: string;
	repo: string;
}

const REPO_FIELD_PATTERN = /^repo_(stars|updated|release|release_date|created):/;
const COMMENTS_FIELD_PATTERN = /^comments:/;

interface GitHubRepoStats {
	stargazerCount: number;
	pushedAt: string;
	createdAt: string;
	latestRelease: { tagName: string; publishedAt: string } | null;
	// Fallback for repos with no GitHub Releases: most recently created tag.
	refs: {
		nodes: Array<{
			name: string;
			target: {
				committedDate?: string; // present when target is a Commit
				tagger?: { date: string } | null; // present when target is an annotated Tag
				target?: { committedDate: string } | null; // annotated Tag's underlying commit
			};
		}>;
	};
}

// Repos without any GitHub Releases fall back to their most recently created
// tag as the version, using the tag's (or its annotated tag object's) commit
// date since tags have no publishedAt of their own.
function latestVersionFromGitHub(stats: GitHubRepoStats): { release: string | null; releaseDate: string | null } {
	if (stats.latestRelease) {
		return { release: stats.latestRelease.tagName, releaseDate: stats.latestRelease.publishedAt.slice(0, 10) };
	}

	const tag = stats.refs.nodes[0];
	if (!tag) return { release: null, releaseDate: null };

	const date = tag.target.committedDate ?? tag.target.target?.committedDate ?? tag.target.tagger?.date ?? null;
	return { release: tag.name, releaseDate: date ? date.slice(0, 10) : null };
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
    latestRelease { tagName publishedAt }
    refs(refPrefix: "refs/tags/", first: 1, orderBy: {field: TAG_COMMIT_DATE, direction: DESC}) {
      nodes {
        name
        target {
          ... on Commit { committedDate }
          ... on Tag {
            tagger { date }
            target { ... on Commit { committedDate } }
          }
        }
      }
    }
  }`,
		)
		.join('\n');

	const res = await fetchWithRetry('https://api.github.com/graphql', {
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
		results.set(tool.file, stats ? { stars: stats.stargazerCount, updated: stats.pushedAt.slice(0, 10), created: stats.createdAt.slice(0, 10), ...latestVersionFromGitHub(stats) } : null);
	});

	return results;
}

async function fetchGitHubStats(tools: ToolFile[]): Promise<Map<string, RepoStats | null>> {
	const results = new Map<string, RepoStats | null>();
	for (const batch of chunk(tools, CHUNK_SIZE)) {
		try {
			const batchStats = await fetchGitHubStatsBatch(batch);
			for (const [file, stats] of batchStats) {
				results.set(file, stats);
			}
		} catch (error) {
			console.warn(`⚠️  GitHub batch of ${batch.length} repos failed, skipping: ${error instanceof Error ? error.message : error}`);
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
	const repoRes = await fetchWithRetry(`https://codeberg.org/api/v1/repos/${tool.owner}/${tool.repo}`, {});
	if (!repoRes.ok) return null;
	const repoData = (await repoRes.json()) as CodebergRepoResponse;

	// 404 simply means the repo has no releases yet, not an error.
	const releaseRes = await fetchWithRetry(`https://codeberg.org/api/v1/repos/${tool.owner}/${tool.repo}/releases/latest`, {});
	const releaseData = releaseRes.ok ? ((await releaseRes.json()) as { tag_name: string; published_at: string }) : null;

	let release = releaseData?.tag_name ?? null;
	let releaseDate = releaseData?.published_at.slice(0, 10) ?? null;

	// Repos without any Releases fall back to their most recent tag (the Gitea
	// API returns tags newest-first) as the version, using its commit date.
	if (!release) {
		const tagsRes = await fetchWithRetry(`https://codeberg.org/api/v1/repos/${tool.owner}/${tool.repo}/tags?limit=1`, {});
		const tags = tagsRes.ok ? ((await tagsRes.json()) as Array<{ name: string; commit: { created: string } }>) : [];
		if (tags[0]) {
			release = tags[0].name;
			releaseDate = tags[0].commit.created.slice(0, 10);
		}
	}

	return {
		stars: repoData.stars_count,
		updated: repoData.updated_at.slice(0, 10),
		created: repoData.created_at.slice(0, 10),
		release,
		releaseDate,
	};
}

async function fetchCodebergStatsAll(tools: ToolFile[]): Promise<Map<string, RepoStats | null>> {
	const results = new Map<string, RepoStats | null>();
	for (const batch of chunk(tools, CODEBERG_CONCURRENCY)) {
		try {
			const batchStats = await Promise.all(batch.map((tool) => fetchCodebergStats(tool)));
			batch.forEach((tool, i) => results.set(tool.file, batchStats[i]));
		} catch (error) {
			console.warn(`⚠️  Codeberg batch of ${batch.length} repos failed, skipping: ${error instanceof Error ? error.message : error}`);
		}
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

const [githubStats, codebergStats] = await Promise.all([fetchGitHubStats(githubTools), fetchCodebergStatsAll(codebergTools)]);

const stats = new Map<string, RepoStats | null>();
for (const [file, repoStats] of githubStats) {
	stats.set(file, repoStats);
}
for (const [file, repoStats] of codebergStats) {
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
		...(repoStats.releaseDate ? [`repo_release_date: ${JSON.stringify(repoStats.releaseDate)}`] : []),
	];

	const updated = spliceFrontmatterFields(raw, newLines, REPO_FIELD_PATTERN, COMMENTS_FIELD_PATTERN);
	if (updated !== raw) {
		fs.writeFileSync(tool.fullPath, updated);
		updatedCount += 1;
		console.log(`✅ ${tool.file}: updated (${repoStats.stars}★, ${repoStats.updated}${repoStats.release ? `, ${repoStats.release}${repoStats.releaseDate ? ` (${repoStats.releaseDate})` : ''}` : ''})`);
	}
}

console.log(`\nDone. ${updatedCount}/${toolFiles.length} tool files updated.`);
