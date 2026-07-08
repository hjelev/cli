export function parseRepoUrl(url: string): { owner: string; repo: string } | null {
	let parsed: URL;
	try {
		parsed = new URL(url.trim());
	} catch {
		return null;
	}
	if (parsed.hostname !== 'github.com' && parsed.hostname !== 'www.github.com') return null;

	const [owner, repoRaw] = parsed.pathname.replace(/^\/+/, '').split('/');
	if (!owner || !repoRaw) return null;
	return { owner, repo: repoRaw.replace(/\.git$/, '') };
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
export async function fetchRepoAutofill(token: string | null, owner: string, repo: string): Promise<RepoAutofillData> {
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
