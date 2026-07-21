export type RepoHost = 'github' | 'codeberg' | 'gitlab';

export function parseRepoUrl(repositoryUrl: string): { host: RepoHost; owner: string; repo: string } | null {
	const github = repositoryUrl.match(/^https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/i);
	if (github) return { host: 'github', owner: github[1], repo: github[2] };

	const codeberg = repositoryUrl.match(/^https?:\/\/codeberg\.org\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/i);
	if (codeberg) return { host: 'codeberg', owner: codeberg[1], repo: codeberg[2] };

	// GitLab projects can live under nested subgroups (owner/subgroup/.../repo),
	// unlike GitHub/Codeberg's flat owner/repo — capture everything before the
	// final segment as "owner" so fetchGitLabStats can rejoin the full path.
	const gitlab = repositoryUrl.match(/^https?:\/\/gitlab\.com\/(.+)\/([^/]+?)(?:\.git)?\/?$/i);
	if (gitlab) return { host: 'gitlab', owner: gitlab[1], repo: gitlab[2] };

	return null;
}

function retryDelayMs(res: Response, attempt: number, baseDelayMs: number): number {
	const retryAfter = res.headers.get('retry-after');
	if (retryAfter && !Number.isNaN(Number(retryAfter))) return Number(retryAfter) * 1000;

	const rateLimitReset = res.headers.get('x-ratelimit-reset');
	if (rateLimitReset && res.headers.get('x-ratelimit-remaining') === '0') {
		const resetMs = Number(rateLimitReset) * 1000 - Date.now();
		if (resetMs > 0) return resetMs;
	}

	return baseDelayMs * 2 ** attempt;
}

// Retries on 403 (GitHub's secondary rate limit uses this status), 429, and
// 5xx, honoring Retry-After / X-RateLimit-Reset when present and falling
// back to exponential backoff otherwise. Never throws on a non-ok response —
// returns it as-is once retries are exhausted so callers keep their existing
// `if (!res.ok)` handling.
export async function fetchWithRetry(url: string, init: RequestInit, opts: { maxRetries?: number; baseDelayMs?: number } = {}): Promise<Response> {
	const { maxRetries = 3, baseDelayMs = 1000 } = opts;

	let res = await fetch(url, init);
	for (let attempt = 0; attempt < maxRetries; attempt++) {
		if (res.ok) return res;
		const retryable = res.status === 403 || res.status === 429 || res.status >= 500;
		if (!retryable) return res;

		const delay = retryDelayMs(res, attempt, baseDelayMs);
		console.warn(`⚠️  ${url}: ${res.status}, retrying in ${Math.round(delay / 1000)}s (attempt ${attempt + 1}/${maxRetries})`);
		await new Promise((resolve) => setTimeout(resolve, delay));
		res = await fetch(url, init);
	}

	return res;
}
