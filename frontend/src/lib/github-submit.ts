import { dump } from 'js-yaml';
import { TARGET_BRANCH, TARGET_OWNER, TARGET_REPO } from './config';

const GITHUB_API = 'https://api.github.com';

export interface ToolFormData {
	name: string;
	category: string;
	short_description: string;
	description: string;
	repository_url: string;
	website?: string;
	author: string;
	license: string;
	language: string;
	installation: string;
	platforms: string[];
	tags: string[];
	media?: string;
	logo?: string;
}

function authHeaders(token: string): HeadersInit {
	return {
		Authorization: `Bearer ${token}`,
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28',
	};
}

async function ghFetch(token: string, path: string, init: RequestInit = {}): Promise<Response> {
	return fetch(`${GITHUB_API}${path}`, {
		...init,
		headers: { ...authHeaders(token), ...(init.headers ?? {}) },
	});
}

async function readErrorMessage(res: Response, fallback: string): Promise<string> {
	const body = (await res.json().catch(() => ({}))) as { message?: string };
	return body.message ?? fallback;
}

export async function getAuthenticatedLogin(token: string): Promise<string> {
	const res = await ghFetch(token, '/user');
	if (!res.ok) throw new Error(await readErrorMessage(res, 'Could not verify your GitHub account.'));
	const data = (await res.json()) as { login: string };
	return data.login;
}

async function ensureFork(token: string, login: string): Promise<void> {
	const existing = await ghFetch(token, `/repos/${login}/${TARGET_REPO}`);
	if (existing.ok) return;

	const forkRes = await ghFetch(token, `/repos/${TARGET_OWNER}/${TARGET_REPO}/forks`, { method: 'POST' });
	if (!forkRes.ok) throw new Error(await readErrorMessage(forkRes, 'Could not fork the repository.'));

	for (let attempt = 0; attempt < 10; attempt++) {
		await new Promise((resolve) => setTimeout(resolve, 1500));
		const check = await ghFetch(token, `/repos/${login}/${TARGET_REPO}`);
		if (check.ok) return;
	}
	throw new Error('Timed out waiting for your fork to become ready. Please try submitting again.');
}

async function getDefaultBranchSha(token: string): Promise<string> {
	const res = await ghFetch(token, `/repos/${TARGET_OWNER}/${TARGET_REPO}/git/ref/heads/${TARGET_BRANCH}`);
	if (!res.ok) throw new Error(await readErrorMessage(res, 'Could not read the upstream default branch.'));
	const data = (await res.json()) as { object: { sha: string } };
	return data.object.sha;
}

async function createBranch(token: string, login: string, branch: string, sha: string): Promise<void> {
	const res = await ghFetch(token, `/repos/${login}/${TARGET_REPO}/git/refs`, {
		method: 'POST',
		body: JSON.stringify({ ref: `refs/heads/${branch}`, sha }),
	});
	if (!res.ok) throw new Error(await readErrorMessage(res, 'Could not create a branch on your fork.'));
}

export function slugify(name: string): string {
	return name
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function toBase64Utf8(str: string): string {
	const bytes = new TextEncoder().encode(str);
	let binary = '';
	bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
	return btoa(binary);
}

function buildToolFileContent(data: ToolFormData): string {
	const frontmatter: Record<string, unknown> = {
		name: data.name,
		category: data.category,
		short_description: data.short_description,
		description: data.description,
		repository_url: data.repository_url,
		...(data.website ? { website: data.website } : {}),
		author: data.author,
		license: data.license,
		language: data.language,
		installation: data.installation,
		platforms: data.platforms,
		tags: data.tags,
		...(data.media ? { media: data.media } : {}),
		...(data.logo ? { logo: data.logo } : {}),
	};
	return `---\n${dump(frontmatter)}---\n`;
}

async function commitToolFile(
	token: string,
	login: string,
	branch: string,
	path: string,
	content: string,
	message: string,
): Promise<void> {
	const res = await ghFetch(token, `/repos/${login}/${TARGET_REPO}/contents/${path}`, {
		method: 'PUT',
		body: JSON.stringify({ message, content: toBase64Utf8(content), branch }),
	});
	if (!res.ok) throw new Error(await readErrorMessage(res, 'Could not commit the tool file to your fork.'));
}

async function openPullRequest(token: string, login: string, branch: string, title: string, body: string): Promise<string> {
	const res = await ghFetch(token, `/repos/${TARGET_OWNER}/${TARGET_REPO}/pulls`, {
		method: 'POST',
		body: JSON.stringify({ title, head: `${login}:${branch}`, base: TARGET_BRANCH, body }),
	});
	if (!res.ok) throw new Error(await readErrorMessage(res, 'Could not open the pull request.'));
	const data = (await res.json()) as { html_url: string };
	return data.html_url;
}

export async function submitTool(token: string, data: ToolFormData): Promise<{ prUrl: string }> {
	const login = await getAuthenticatedLogin(token);
	await ensureFork(token, login);
	const sha = await getDefaultBranchSha(token);

	const slug = slugify(data.name);
	const branch = `submission-${slug}-${Date.now()}`;
	await createBranch(token, login, branch, sha);

	const content = buildToolFileContent(data);
	await commitToolFile(token, login, branch, `src/content/tools/${slug}.md`, content, `Add ${data.name} to the directory`);

	const prUrl = await openPullRequest(
		token,
		login,
		branch,
		`Add ${data.name}`,
		`Submitted by @${login} via the directory's submission form.`,
	);
	return { prUrl };
}
