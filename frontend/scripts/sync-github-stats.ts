import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { fetchWithRetry, parseRepoUrl, type RepoHost } from './lib/github.ts';
import { spliceFrontmatterFields } from './lib/frontmatter.ts';
import { chunk } from './lib/util.ts';
import { readmeLinksBack } from '../src/lib/badge.ts';

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

// GitLab.com's REST API has no batch query either, and we call it
// unauthenticated (no GITHUB_TOKEN equivalent), so keep concurrency modest.
const GITLAB_CONCURRENCY = 8;

// README fetches are one REST call per repo on every host.
const README_CONCURRENCY = 8;

// "Trending" window for repo_stars_recent. GitHub hides stargazer timestamps
// on most repos, so instead we diff against the repo_stars this same script
// committed RECENT_STARS_DAYS ago — git history is the time series. The
// workflow deepens its shallow clone far enough to reach that commit.
const RECENT_STARS_DAYS = 14;

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
	badge: boolean; // current repo_badge value, kept when the README can't be fetched
}

const REPO_FIELD_PATTERN = /^repo_(stars|stars_recent|updated|release|release_date|created|badge):/;
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

interface GitLabRepoResponse {
	star_count: number;
	last_activity_at: string;
	created_at: string;
}

async function fetchGitLabStats(tool: ToolFile): Promise<RepoStats | null> {
	// Nested subgroups mean the full path (not just owner/repo) is the project
	// identifier; encodeURIComponent escapes the internal "/" as required.
	const projectPath = encodeURIComponent(`${tool.owner}/${tool.repo}`);

	const repoRes = await fetchWithRetry(`https://gitlab.com/api/v4/projects/${projectPath}`, {});
	if (!repoRes.ok) return null;
	const repoData = (await repoRes.json()) as GitLabRepoResponse;

	const releasesRes = await fetchWithRetry(`https://gitlab.com/api/v4/projects/${projectPath}/releases?per_page=1`, {});
	const releases = releasesRes.ok ? ((await releasesRes.json()) as Array<{ tag_name: string; released_at: string }>) : [];

	let release = releases[0]?.tag_name ?? null;
	let releaseDate = releases[0]?.released_at.slice(0, 10) ?? null;

	// Repos without any Releases fall back to their most recently updated tag.
	if (!release) {
		const tagsRes = await fetchWithRetry(`https://gitlab.com/api/v4/projects/${projectPath}/repository/tags?per_page=1`, {});
		const tags = tagsRes.ok ? ((await tagsRes.json()) as Array<{ name: string; commit: { created_at: string } }>) : [];
		if (tags[0]) {
			release = tags[0].name;
			releaseDate = tags[0].commit.created_at.slice(0, 10);
		}
	}

	return {
		stars: repoData.star_count,
		updated: repoData.last_activity_at.slice(0, 10),
		created: repoData.created_at.slice(0, 10),
		release,
		releaseDate,
	};
}

async function fetchGitLabStatsAll(tools: ToolFile[]): Promise<Map<string, RepoStats | null>> {
	const results = new Map<string, RepoStats | null>();
	for (const batch of chunk(tools, GITLAB_CONCURRENCY)) {
		try {
			const batchStats = await Promise.all(batch.map((tool) => fetchGitLabStats(tool)));
			batch.forEach((tool, i) => results.set(tool.file, batchStats[i]));
		} catch (error) {
			console.warn(`⚠️  GitLab batch of ${batch.length} repos failed, skipping: ${error instanceof Error ? error.message : error}`);
		}
	}
	return results;
}

// Returns the README text, '' when the repo has none, or null when the
// request failed (so the caller keeps the previous badge state rather than
// un-verifying a tool over a transient error).
async function fetchReadme(tool: ToolFile): Promise<string | null> {
	let res: Response;
	if (tool.host === 'github') {
		res = await fetchWithRetry(`https://api.github.com/repos/${tool.owner}/${tool.repo}/readme`, {
			headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.raw+json' },
		});
	} else if (tool.host === 'codeberg') {
		// Gitea has no "the README, whatever it's called" endpoint; the raw
		// endpoint reads from the default branch.
		res = await fetchWithRetry(`https://codeberg.org/api/v1/repos/${tool.owner}/${tool.repo}/raw/README.md`, {});
	} else {
		const projectRes = await fetchWithRetry(`https://gitlab.com/api/v4/projects/${encodeURIComponent(`${tool.owner}/${tool.repo}`)}`, {});
		if (!projectRes.ok) return null;
		const { readme_url: readmeUrl } = (await projectRes.json()) as { readme_url: string | null };
		if (!readmeUrl) return '';
		res = await fetchWithRetry(readmeUrl.replace('/-/blob/', '/-/raw/'), {});
	}
	if (res.status === 404) return '';
	return res.ok ? res.text() : null;
}

async function fetchBadgeStatusAll(tools: ToolFile[]): Promise<Map<string, boolean>> {
	const results = new Map<string, boolean>();
	for (const batch of chunk(tools, README_CONCURRENCY)) {
		const readmes = await Promise.all(batch.map((tool) => fetchReadme(tool).catch(() => null)));
		batch.forEach((tool, i) => {
			const readme = readmes[i];
			if (readme === null) console.warn(`⚠️  ${tool.file}: could not fetch README, keeping repo_badge as-is`);
			results.set(tool.file, readme === null ? tool.badge : readmeLinksBack(readme, tool.file.replace(/\.md$/, '')));
		});
	}
	return results;
}

// repo_stars per tool file as committed at the start of the trending window.
// Tools missing from that snapshot (listed more recently) get no value, as
// does everything when history doesn't reach back that far.
function starsAtWindowStart(): Map<string, number> {
	const snapshot = new Map<string, number>();
	const git = (...args: string[]) => execFileSync('git', args, { cwd: toolsDir, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });

	let commit: string;
	try {
		commit = git('rev-list', '-1', `--before=${RECENT_STARS_DAYS} days ago`, 'HEAD').trim();
	} catch {
		commit = '';
	}
	if (!commit) {
		console.warn(`⚠️  No commit older than ${RECENT_STARS_DAYS} days in history (shallow clone?), skipping repo_stars_recent`);
		return snapshot;
	}

	const oldFiles = git('ls-tree', '--name-only', commit, './').split('\n').filter((file) => file.endsWith('.md'));
	for (const file of oldFiles) {
		const stars = git('show', `${commit}:./${file}`).match(/^repo_stars:\s*(\d+)\s*$/m);
		if (stars) snapshot.set(file, Number(stars[1]));
	}
	return snapshot;
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
		console.warn(`⚠️  ${file}: repository_url is not a github.com, codeberg.org, or gitlab.com URL, skipping`);
		continue;
	}

	toolFiles.push({ file, fullPath, host: parsed.host, owner: parsed.owner, repo: parsed.repo, badge: data.repo_badge === true });
}

const githubTools = toolFiles.filter((tool) => tool.host === 'github');
const codebergTools = toolFiles.filter((tool) => tool.host === 'codeberg');
const gitlabTools = toolFiles.filter((tool) => tool.host === 'gitlab');

const [githubStats, codebergStats, gitlabStats, badgeStatus] = await Promise.all([
	fetchGitHubStats(githubTools),
	fetchCodebergStatsAll(codebergTools),
	fetchGitLabStatsAll(gitlabTools),
	fetchBadgeStatusAll(toolFiles),
]);

const stats = new Map<string, RepoStats | null>();
for (const [file, repoStats] of githubStats) {
	stats.set(file, repoStats);
}
for (const [file, repoStats] of codebergStats) {
	stats.set(file, repoStats);
}
for (const [file, repoStats] of gitlabStats) {
	stats.set(file, repoStats);
}

const pastStars = starsAtWindowStart();

let updatedCount = 0;
for (const tool of toolFiles) {
	const repoStats = stats.get(tool.file);
	if (!repoStats) {
		console.warn(`⚠️  ${tool.file}: could not fetch ${tool.owner}/${tool.repo} (private, renamed, or deleted?)`);
		continue;
	}

	const raw = fs.readFileSync(tool.fullPath, 'utf8');

	// Clamped: net unstars shouldn't read as negative trending.
	const past = pastStars.get(tool.file);
	const recentStars = past === undefined ? null : Math.max(0, repoStats.stars - past);

	const newLines = [
		`repo_stars: ${repoStats.stars}`,
		...(recentStars !== null ? [`repo_stars_recent: ${recentStars}`] : []),
		`repo_updated: ${JSON.stringify(repoStats.updated)}`,
		`repo_created: ${JSON.stringify(repoStats.created)}`,
		...(repoStats.release ? [`repo_release: ${JSON.stringify(repoStats.release)}`] : []),
		...(repoStats.releaseDate ? [`repo_release_date: ${JSON.stringify(repoStats.releaseDate)}`] : []),
		...(badgeStatus.get(tool.file) ? ['repo_badge: true'] : []),
	];

	const updated = spliceFrontmatterFields(raw, newLines, REPO_FIELD_PATTERN, COMMENTS_FIELD_PATTERN);
	if (updated !== raw) {
		fs.writeFileSync(tool.fullPath, updated);
		updatedCount += 1;
		console.log(`✅ ${tool.file}: updated (${repoStats.stars}★${recentStars ? ` +${recentStars}` : ''}, ${repoStats.updated}${repoStats.release ? `, ${repoStats.release}${repoStats.releaseDate ? ` (${repoStats.releaseDate})` : ''}` : ''}${badgeStatus.get(tool.file) ? ', badge ✓' : ''})`);
	}
}

console.log(`\nDone. ${updatedCount}/${toolFiles.length} tool files updated.`);
