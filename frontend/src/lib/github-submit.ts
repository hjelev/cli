import { dump, load } from 'js-yaml';
import { TARGET_BRANCH, TARGET_OWNER, TARGET_REPO } from './config';
import { slugify } from './slug';
import { buildUploadUrl, extensionForFile, fileToBase64, type UploadableField } from './upload';
import type { PreservedToolFields, ToolFormData } from './schema';

export type { ToolFormData };

const GITHUB_API = 'https://api.github.com';

function authHeaders(token: string): HeadersInit {
	return {
		Authorization: `Bearer ${token}`,
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28',
	};
}

// Runs with the visitor's own OAuth token. The Worker has its own bot-token
// twin (`ghApi` in worker/src/index.ts) — keep the two in sync.
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

// Reads the SHA from the *fork's* branch, not upstream's: a returning
// submitter's fork may be behind, and creating a ref that points at a SHA the
// fork doesn't have fails. A slightly older base is fine — the PR only adds a
// new file.
async function getForkBranchSha(token: string, login: string): Promise<string> {
	const res = await ghFetch(token, `/repos/${login}/${TARGET_REPO}/git/ref/heads/${TARGET_BRANCH}`);
	if (!res.ok) throw new Error(await readErrorMessage(res, 'Could not read your fork’s default branch.'));
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

// Best-effort fast-forward of the fork's target branch to match upstream.
// Only used before editing: a stale fork copy of the file being edited could
// resurrect comments/github_* that changed upstream since the fork
// was created. Failures are swallowed — worst case we fall back to the
// fork's own (possibly slightly stale) branch tip, same as submitTool always
// has, which is an acceptable degraded path, not silent corruption.
async function syncForkWithUpstream(token: string, login: string): Promise<void> {
	await ghFetch(token, `/repos/${login}/${TARGET_REPO}/merge-upstream`, {
		method: 'POST',
		body: JSON.stringify({ branch: TARGET_BRANCH }),
	}).catch(() => undefined);
}

// Duplicated in worker/src/index.ts (separate deploy bundle) — keep in sync.
function toBase64Utf8(str: string): string {
	const bytes = new TextEncoder().encode(str);
	let binary = '';
	bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
	return btoa(binary);
}

// Duplicated in worker/src/index.ts (separate deploy bundle) — keep in sync.
function fromBase64Utf8(base64: string): string {
	const binary = atob(base64.replace(/\n/g, ''));
	const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
	return new TextDecoder().decode(bytes);
}

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

function buildFrontmatter(data: ToolFormData, preserved?: PreservedToolFields): Record<string, unknown> {
	const frontmatter: Record<string, unknown> = {
		name: data.name,
		category: data.category,
		short_description: data.short_description,
		description: data.description,
		repository_url: data.repository_url,
		website: data.website,
		author: data.author,
		license: data.license,
		language: data.language,
		installation: data.installation,
		platforms: data.platforms,
		tags: data.tags,
		media: data.media,
		logo: data.logo,
		updated: new Date().toISOString().slice(0, 10),
		...preserved,
	};
	// js-yaml would serialize absent optional fields as `key: undefined`.
	for (const key of Object.keys(frontmatter)) {
		if (frontmatter[key] === undefined) delete frontmatter[key];
	}
	return frontmatter;
}

function buildToolFileContent(data: ToolFormData): string {
	return `---\n${dump(buildFrontmatter(data))}---\n`;
}

// Merges edited form data into the current file's frontmatter, carrying
// forward comments/github_* (never collected by the form) and the
// trailing markdown body verbatim.
function buildEditedToolFileContent(data: ToolFormData, currentFileText: string): string {
	const match = currentFileText.match(FRONTMATTER_RE);
	if (!match) throw new Error('The existing tool file has malformed frontmatter.');

	const current = (load(match[1]) ?? {}) as Record<string, unknown>;
	const body = match[2];

	const preserved: PreservedToolFields = {
		comments: Array.isArray(current.comments) ? (current.comments as PreservedToolFields['comments']) : [],
		github_stars: current.github_stars as PreservedToolFields['github_stars'],
		github_updated: current.github_updated as PreservedToolFields['github_updated'],
		github_release: current.github_release as PreservedToolFields['github_release'],
	};

	const frontmatter = buildFrontmatter(data, preserved);
	return `---\n${dump(frontmatter)}---\n${body}`;
}

async function getFileOnBranch(
	token: string,
	login: string,
	path: string,
	branch: string,
): Promise<{ text: string; sha: string } | null> {
	const res = await ghFetch(token, `/repos/${login}/${TARGET_REPO}/contents/${path}?ref=${branch}`);
	if (res.status === 404) return null;
	if (!res.ok) throw new Error(await readErrorMessage(res, 'Could not read the existing tool file from your fork.'));
	const data = (await res.json()) as { content: string; sha: string };
	return { text: fromBase64Utf8(data.content), sha: data.sha };
}

// Shared PUT for both text (markdown) and binary (upload) commits — callers
// encode `contentBase64` themselves since the encoding strategy differs
// (toBase64Utf8 for text, fileToBase64 for uploaded binaries).
async function commitFile(
	token: string,
	login: string,
	branch: string,
	path: string,
	contentBase64: string,
	message: string,
	sha?: string,
): Promise<void> {
	const res = await ghFetch(token, `/repos/${login}/${TARGET_REPO}/contents/${path}`, {
		method: 'PUT',
		body: JSON.stringify({ message, content: contentBase64, branch, ...(sha ? { sha } : {}) }),
	});
	if (!res.ok) throw new Error(await readErrorMessage(res, 'Could not commit the file to your fork.'));
}

// Like getFileOnBranch but skips decoding content — binary uploads (images,
// video) aren't valid UTF-8 text and fromBase64Utf8 shouldn't run against
// them. Returns undefined for a path that doesn't exist yet on this branch,
// so the caller's PUT omits `sha` (fresh file) instead of erroring.
async function getExistingFileSha(token: string, login: string, path: string, branch: string): Promise<string | undefined> {
	const res = await ghFetch(token, `/repos/${login}/${TARGET_REPO}/contents/${path}?ref=${branch}`);
	if (res.status === 404) return undefined;
	if (!res.ok) throw new Error(await readErrorMessage(res, 'Could not check for an existing upload on your fork.'));
	const data = (await res.json()) as { sha: string };
	return data.sha;
}

// Commits an uploaded logo/media file to `frontend/public/uploads/{slug}/{field}.{ext}`
// and returns the final production URL to store in frontmatter. If a prior
// upload used a different extension (e.g. was .png, now .gif), the old file
// is left orphaned rather than deleted — harmless once frontmatter stops
// pointing at it, and not worth a second sha-lookup/DELETE call to clean up.
async function commitUpload(
	token: string,
	login: string,
	branch: string,
	slug: string,
	field: UploadableField,
	file: File,
): Promise<string> {
	const ext = extensionForFile(file);
	if (!ext) throw new Error(`${file.name} isn't a supported file type.`);
	const path = `frontend/public/uploads/${slug}/${field}.${ext}`;
	const sha = await getExistingFileSha(token, login, path, branch);
	const contentBase64 = await fileToBase64(file);
	await commitFile(token, login, branch, path, contentBase64, `Add ${field} for ${slug}`, sha);
	return buildUploadUrl(slug, field, ext);
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

export async function submitTool(
	token: string,
	data: ToolFormData,
	files?: Partial<Record<UploadableField, File>>,
): Promise<{ prUrl: string }> {
	const login = await getAuthenticatedLogin(token);
	await ensureFork(token, login);
	const sha = await getForkBranchSha(token, login);

	const slug = slugify(data.name);
	const branch = `submission-${slug}-${Date.now()}`;
	await createBranch(token, login, branch, sha);

	const resolved: ToolFormData = { ...data };
	if (files?.logo) resolved.logo = await commitUpload(token, login, branch, slug, 'logo', files.logo);
	if (files?.media) resolved.media = await commitUpload(token, login, branch, slug, 'media', files.media);

	const content = buildToolFileContent(resolved);
	await commitFile(
		token,
		login,
		branch,
		`frontend/src/content/tools/${slug}.md`,
		toBase64Utf8(content),
		`Add ${data.name} to the directory`,
	);

	const prUrl = await openPullRequest(
		token,
		login,
		branch,
		`Add ${data.name}`,
		`Submitted by @${login} via the directory's submission form.`,
	);
	return { prUrl };
}

// The tool's id/filename never changes here, even if `data.name` did — the
// path is the file's identity (see content.config.ts's glob loader), not
// derived from frontmatter. Re-slugifying the (possibly edited) name would
// silently orphan the original file and create a duplicate instead.
export async function editTool(
	token: string,
	toolId: string,
	data: ToolFormData,
	files?: Partial<Record<UploadableField, File>>,
): Promise<{ prUrl: string }> {
	const login = await getAuthenticatedLogin(token);
	await ensureFork(token, login);
	await syncForkWithUpstream(token, login);
	const sha = await getForkBranchSha(token, login);

	const branch = `edit-${toolId}-${Date.now()}`;
	await createBranch(token, login, branch, sha);

	const path = `frontend/src/content/tools/${toolId}.md`;
	const current = await getFileOnBranch(token, login, path, branch);
	if (!current) throw new Error(`Could not find ${toolId} in the repository. It may have been renamed or removed.`);

	const resolved: ToolFormData = { ...data };
	if (files?.logo) resolved.logo = await commitUpload(token, login, branch, toolId, 'logo', files.logo);
	if (files?.media) resolved.media = await commitUpload(token, login, branch, toolId, 'media', files.media);

	const content = buildEditedToolFileContent(resolved, current.text);
	await commitFile(token, login, branch, path, toBase64Utf8(content), `Update ${data.name}`, current.sha);

	const prUrl = await openPullRequest(
		token,
		login,
		branch,
		`Update ${data.name}`,
		`Edited by @${login} via the directory's edit form.`,
	);
	return { prUrl };
}
