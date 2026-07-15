export type RepoHost = 'github' | 'codeberg';

export function parseRepoUrl(url: string): { host: RepoHost; owner: string; repo: string } | null {
	let parsed: URL;
	try {
		parsed = new URL(url.trim());
	} catch {
		return null;
	}
	const host: RepoHost | null =
		parsed.hostname === 'github.com' || parsed.hostname === 'www.github.com'
			? 'github'
			: parsed.hostname === 'codeberg.org'
				? 'codeberg'
				: null;
	if (!host) return null;

	const [owner, repoRaw] = parsed.pathname.replace(/^\/+/, '').split('/');
	if (!owner || !repoRaw) return null;
	return { host, owner, repo: repoRaw.replace(/\.git$/, '') };
}

export interface RepoAutofillData {
	name: string;
	short_description?: string;
	description?: string;
	website?: string;
	author: string;
	license?: string;
	language?: string;
	tags: string[];
}

interface GitHubRepoResponse {
	name: string;
	description: string | null;
	homepage: string | null;
	owner: { login: string };
	license: { spdx_id: string | null; name: string | null } | null;
	language: string | null;
	topics?: string[];
}

// Called with the visitor's own OAuth token when signed in (falls back to an
// unauthenticated request otherwise, subject to GitHub's lower rate limit).
async function fetchGitHubAutofill(token: string | null, owner: string, repo: string): Promise<RepoAutofillData> {
	const headers: HeadersInit = { Accept: 'application/vnd.github+json' };
	if (token) headers.Authorization = `Bearer ${token}`;

	const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
	if (res.status === 404) throw new Error('Repository not found.');
	if (!res.ok) throw new Error('Could not fetch repository info.');

	const data = (await res.json()) as GitHubRepoResponse;
	const description = data.description?.trim() || undefined;
	const spdxId = data.license?.spdx_id;
	const license = spdxId && spdxId !== 'NOASSERTION' ? spdxId : (data.license?.name ?? undefined);

	return {
		name: data.name,
		short_description: description?.slice(0, 140),
		description,
		website: data.homepage?.trim() || undefined,
		author: data.owner.login,
		license: license ?? undefined,
		language: data.language ?? undefined,
		tags: Array.isArray(data.topics) ? data.topics : [],
	};
}

interface CodebergRepoResponse {
	name: string;
	description: string | null;
	website: string | null;
	owner: { login: string };
	language: string | null;
}

// Codeberg's (Gitea) API is unauthenticated here — the visitor's GitHub OAuth
// token isn't valid against it, and public repo reads don't need one.
async function fetchCodebergAutofill(owner: string, repo: string): Promise<RepoAutofillData> {
	const res = await fetch(`https://codeberg.org/api/v1/repos/${owner}/${repo}`);
	if (res.status === 404) throw new Error('Repository not found.');
	if (!res.ok) throw new Error('Could not fetch repository info.');

	const data = (await res.json()) as CodebergRepoResponse;
	const description = data.description?.trim() || undefined;

	const topicsRes = await fetch(`https://codeberg.org/api/v1/repos/${owner}/${repo}/topics`);
	const topicsData = topicsRes.ok ? ((await topicsRes.json()) as { topics?: string[] }) : undefined;

	return {
		name: data.name,
		short_description: description?.slice(0, 140),
		description,
		website: data.website?.trim() || undefined,
		author: data.owner.login,
		// Codeberg's repo API doesn't expose SPDX license info.
		license: undefined,
		language: data.language ?? undefined,
		tags: topicsData?.topics ?? [],
	};
}

export async function fetchRepoAutofill(
	token: string | null,
	host: RepoHost,
	owner: string,
	repo: string,
): Promise<RepoAutofillData> {
	return host === 'codeberg' ? fetchCodebergAutofill(owner, repo) : fetchGitHubAutofill(token, owner, repo);
}
