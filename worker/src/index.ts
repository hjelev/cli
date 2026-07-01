import { load, dump } from 'js-yaml';

export interface Env {
	GITHUB_CLIENT_ID: string;
	GITHUB_CLIENT_SECRET: string;
	// Fine-grained PAT (or GitHub App installation token) with contents:write
	// on the target repo. Used only server-side to commit user feedback.
	GITHUB_BOT_TOKEN: string;
}

const ALLOWED_ORIGINS = new Set(['https://cli.masoko.net', 'http://localhost:4321']);

// Target repository for feedback commits. Mirrors frontend/src/lib/config.ts.
const REPO_OWNER = 'hjelev';
const REPO_NAME = 'cli';
const REPO_BRANCH = 'master';
const TOOLS_DIR = 'src/content/tools';
const MAX_COMMENT_LENGTH = 2000;

function corsHeaders(origin: string | null): HeadersInit {
	const allowOrigin = origin && ALLOWED_ORIGINS.has(origin) ? origin : '';
	return {
		'Access-Control-Allow-Origin': allowOrigin,
		'Access-Control-Allow-Methods': 'POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
		Vary: 'Origin',
	};
}

function json(body: unknown, status: number, origin: string | null): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
	});
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const origin = request.headers.get('Origin');
		const url = new URL(request.url);

		if (request.method === 'OPTIONS') {
			return new Response(null, { status: 204, headers: corsHeaders(origin) });
		}

		if (request.method !== 'POST') {
			return json({ error: 'not_found' }, 404, origin);
		}

		if (url.pathname === '/auth/github/token') {
			return handleTokenExchange(request, env, origin);
		}

		if (url.pathname === '/feedback') {
			return handleFeedback(request, env, origin);
		}

		return json({ error: 'not_found' }, 404, origin);
	},
};

async function handleTokenExchange(request: Request, env: Env, origin: string | null): Promise<Response> {
	let code: unknown;
	try {
		const body = (await request.json()) as { code?: unknown };
		code = body.code;
	} catch {
		return json({ error: 'invalid_json_body' }, 400, origin);
	}

	if (typeof code !== 'string' || code.length === 0) {
		return json({ error: 'missing_code' }, 400, origin);
	}

	const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify({
			client_id: env.GITHUB_CLIENT_ID,
			client_secret: env.GITHUB_CLIENT_SECRET,
			code,
		}),
	});

	const tokenData = await tokenResponse.json<{
		access_token?: string;
		error?: string;
		error_description?: string;
	}>();

	if (!tokenResponse.ok || tokenData.error || !tokenData.access_token) {
		return json(
			{ error: tokenData.error ?? 'token_exchange_failed', error_description: tokenData.error_description },
			502,
			origin,
		);
	}

	return json({ access_token: tokenData.access_token }, 200, origin);
}

interface Rating {
	user: string;
	value: number;
	date: string;
}

interface Comment {
	user: string;
	body: string;
	date: string;
}

async function handleFeedback(request: Request, env: Env, origin: string | null): Promise<Response> {
	if (!env.GITHUB_BOT_TOKEN) {
		return json({ error: 'feedback_not_configured' }, 503, origin);
	}

	let body: { token?: unknown; toolId?: unknown; rating?: unknown; comment?: unknown };
	try {
		body = (await request.json()) as typeof body;
	} catch {
		return json({ error: 'invalid_json_body' }, 400, origin);
	}

	const { token } = body;
	if (typeof token !== 'string' || token.length === 0) {
		return json({ error: 'missing_token' }, 400, origin);
	}

	// toolId maps directly to a file path, so constrain it to a safe slug.
	const toolId = typeof body.toolId === 'string' ? body.toolId.trim() : '';
	if (!/^[a-z0-9][a-z0-9-]*$/.test(toolId)) {
		return json({ error: 'invalid_tool_id' }, 400, origin);
	}

	let rating: number | undefined;
	if (body.rating !== undefined && body.rating !== null) {
		const value = Number(body.rating);
		if (!Number.isInteger(value) || value < 1 || value > 5) {
			return json({ error: 'invalid_rating' }, 400, origin);
		}
		rating = value;
	}

	let comment: string | undefined;
	if (body.comment !== undefined && body.comment !== null) {
		if (typeof body.comment !== 'string') {
			return json({ error: 'invalid_comment' }, 400, origin);
		}
		const trimmed = body.comment.trim();
		if (trimmed.length > MAX_COMMENT_LENGTH) {
			return json({ error: 'comment_too_long' }, 400, origin);
		}
		if (trimmed.length > 0) comment = trimmed;
	}

	if (rating === undefined && comment === undefined) {
		return json({ error: 'empty_feedback' }, 400, origin);
	}

	// Verify the visitor's identity from their own token — never trust a
	// client-supplied login. This is what "requires GitHub auth" enforces.
	const user = await fetchGitHubUser(token);
	if (!user) {
		return json({ error: 'invalid_credentials' }, 401, origin);
	}

	const date = new Date().toISOString();

	try {
		await commitFeedback(env.GITHUB_BOT_TOKEN, toolId, user.login, { rating, comment, date });
	} catch (err) {
		if (err instanceof ToolNotFoundError) {
			return json({ error: 'tool_not_found' }, 404, origin);
		}
		return json({ error: 'commit_failed' }, 502, origin);
	}

	return json({ ok: true, user, rating, comment, date }, 200, origin);
}

async function fetchGitHubUser(token: string): Promise<{ login: string; avatar_url: string } | null> {
	const res = await fetch('https://api.github.com/user', {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/vnd.github+json',
			'User-Agent': 'cli-directory-worker',
		},
	});
	if (!res.ok) return null;
	const data = (await res.json()) as { login?: string; avatar_url?: string };
	if (!data.login) return null;
	return { login: data.login, avatar_url: data.avatar_url ?? '' };
}

class ToolNotFoundError extends Error {}

interface FeedbackPayload {
	rating?: number;
	comment?: string;
	date: string;
}

// Reads the tool's .md, appends the feedback to its frontmatter, and commits
// it back with the bot token. Retries on the optimistic-lock (409) that
// GitHub returns when the file SHA changed between read and write.
async function commitFeedback(
	botToken: string,
	toolId: string,
	login: string,
	payload: FeedbackPayload,
): Promise<void> {
	const path = `${TOOLS_DIR}/${toolId}.md`;

	for (let attempt = 0; attempt < 3; attempt++) {
		const file = await getFile(botToken, path);
		if (!file) throw new ToolNotFoundError(toolId);

		const updated = applyFeedback(file.text, login, payload);
		const message = buildCommitMessage(login, payload);

		const res = await ghApi(botToken, `/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`, {
			method: 'PUT',
			body: JSON.stringify({
				message,
				content: toBase64Utf8(updated),
				sha: file.sha,
				branch: REPO_BRANCH,
			}),
		});

		if (res.ok) return;
		// 409 = SHA conflict; re-read and retry. Anything else is fatal.
		if (res.status !== 409) throw new Error(`commit failed: ${res.status}`);
	}

	throw new Error('commit failed after retries');
}

function buildCommitMessage(login: string, payload: FeedbackPayload): string {
	const parts: string[] = [];
	if (payload.rating !== undefined) parts.push(`${payload.rating}★ rating`);
	if (payload.comment !== undefined) parts.push('comment');
	return `Add ${parts.join(' + ')} from @${login}`;
}

async function getFile(botToken: string, path: string): Promise<{ text: string; sha: string } | null> {
	const res = await ghApi(
		botToken,
		`/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${REPO_BRANCH}`,
	);
	if (res.status === 404) return null;
	if (!res.ok) throw new Error(`read failed: ${res.status}`);
	const data = (await res.json()) as { content: string; sha: string };
	return { text: fromBase64Utf8(data.content), sha: data.sha };
}

function ghApi(botToken: string, path: string, init: RequestInit = {}): Promise<Response> {
	return fetch(`https://api.github.com${path}`, {
		...init,
		headers: {
			Authorization: `Bearer ${botToken}`,
			Accept: 'application/vnd.github+json',
			'X-GitHub-Api-Version': '2022-11-28',
			'User-Agent': 'cli-directory-worker',
			...(init.headers ?? {}),
		},
	});
}

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

// Parses the `---` frontmatter block, appends the feedback to the ratings /
// comments arrays, and re-serializes. A visitor's rating replaces their own
// previous rating (one rating per GitHub login).
function applyFeedback(fileText: string, login: string, payload: FeedbackPayload): string {
	const match = fileText.match(FRONTMATTER_RE);
	if (!match) throw new Error('malformed frontmatter');

	const data = (load(match[1]) ?? {}) as Record<string, unknown>;
	const body = match[2];

	if (payload.rating !== undefined) {
		const ratings = Array.isArray(data.ratings) ? (data.ratings as Rating[]) : [];
		const withoutMine = ratings.filter((r) => r && r.user !== login);
		withoutMine.push({ user: login, value: payload.rating, date: payload.date });
		data.ratings = withoutMine;
	}

	if (payload.comment !== undefined) {
		const comments = Array.isArray(data.comments) ? (data.comments as Comment[]) : [];
		comments.push({ user: login, body: payload.comment, date: payload.date });
		data.comments = comments;
	}

	// lineWidth: -1 keeps long descriptions/URLs on one line, minimizing churn.
	const frontmatter = dump(data, { lineWidth: -1 });
	return `---\n${frontmatter}---\n${body}`;
}

function toBase64Utf8(str: string): string {
	const bytes = new TextEncoder().encode(str);
	let binary = '';
	bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
	return btoa(binary);
}

function fromBase64Utf8(base64: string): string {
	const binary = atob(base64.replace(/\n/g, ''));
	const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
	return new TextDecoder().decode(bytes);
}
