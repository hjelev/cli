import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import matter from 'gray-matter';
import { fetchWithRetry, parseRepoUrl } from './lib/github.ts';
import { replaceFrontmatterListField } from './lib/frontmatter.ts';
import { chunk } from './lib/util.ts';

const frontendRoot = path.resolve(import.meta.dirname, '..');
const toolsDir = path.join(frontendRoot, 'src/content/tools');

const dryRun = process.argv.includes('--dry-run');

function getToken(): string {
	if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
	try {
		return execFileSync('gh', ['auth', 'token'], { encoding: 'utf8' }).trim();
	} catch {
		console.error('No GITHUB_TOKEN set and `gh auth token` failed. Run `gh auth login` or set GITHUB_TOKEN.');
		process.exit(1);
	}
}

const token = getToken();

// GraphQL query complexity/response size grows with batch size, so chunk
// well below GitHub's limits even as the tool list grows past today's count.
const CHUNK_SIZE = 50;

interface RepoTopics {
	repositoryTopics: { nodes: Array<{ topic: { name: string } }> };
}

interface ToolFile {
	file: string;
	fullPath: string;
	owner: string;
	repo: string;
}

function parseGitHubRepo(repositoryUrl: string): { owner: string; repo: string } | null {
	const parsed = parseRepoUrl(repositoryUrl);
	return parsed && parsed.host === 'github' ? { owner: parsed.owner, repo: parsed.repo } : null;
}

async function fetchTopicsBatch(tools: ToolFile[]): Promise<Map<string, string[] | null>> {
	const results = new Map<string, string[] | null>();
	if (tools.length === 0) return results;

	const fields = tools
		.map(
			(tool, i) => `
  repo${i}: repository(owner: ${JSON.stringify(tool.owner)}, name: ${JSON.stringify(tool.repo)}) {
    repositoryTopics(first: 20) { nodes { topic { name } } }
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
		throw new Error(`GraphQL request failed: ${res.status} ${await res.text()}`);
	}

	const body = (await res.json()) as {
		data: Record<string, RepoTopics | null> | null;
		errors?: Array<{ message: string; path?: string[] }>;
	};

	for (const error of body.errors ?? []) {
		console.warn(`⚠️  GraphQL error: ${error.message}`);
	}

	tools.forEach((tool, i) => {
		const repo = body.data?.[`repo${i}`];
		const topics = repo?.repositoryTopics.nodes.map((node) => node.topic.name) ?? null;
		results.set(tool.file, topics);
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

const topicsByFile = new Map<string, string[] | null>();
for (const batch of chunk(toolFiles, CHUNK_SIZE)) {
	try {
		const batchTopics = await fetchTopicsBatch(batch);
		for (const [file, result] of batchTopics) {
			topicsByFile.set(file, result);
		}
	} catch (error) {
		console.warn(`⚠️  GitHub batch of ${batch.length} repos failed, skipping: ${error instanceof Error ? error.message : error}`);
	}
}

let updatedCount = 0;
for (const tool of toolFiles) {
	const topics = topicsByFile.get(tool.file);
	if (topics === null || topics === undefined) {
		console.warn(`⚠️  ${tool.file}: could not fetch ${tool.owner}/${tool.repo} (private, renamed, or deleted?)`);
		continue;
	}

	const raw = fs.readFileSync(tool.fullPath, 'utf8');
	const { data } = matter(raw);
	const existingTags = (data.tags as string[] | undefined) ?? [];
	const existingLower = new Set(existingTags.map((tag) => tag.toLowerCase()));

	const newTopics = topics.filter((topic) => !existingLower.has(topic.toLowerCase()));
	if (newTopics.length === 0) {
		continue;
	}

	const mergedTags = [...existingTags, ...newTopics];
	console.log(`✅ ${tool.file}: +${newTopics.join(', +')}`);

	if (!dryRun) {
		const updated = replaceFrontmatterListField(raw, 'tags', mergedTags);
		fs.writeFileSync(tool.fullPath, updated);
	}
	updatedCount += 1;
}

console.log(`\n${dryRun ? '[dry run] ' : ''}Done. ${updatedCount}/${toolFiles.length} tool files ${dryRun ? 'would be' : 'were'} updated.`);
