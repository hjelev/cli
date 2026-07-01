export interface Env {
	GITHUB_CLIENT_ID: string;
	GITHUB_CLIENT_SECRET: string;
}

const ALLOWED_ORIGINS = new Set(['https://cli.masoko.net', 'http://localhost:4321']);

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

		if (url.pathname !== '/auth/github/token' || request.method !== 'POST') {
			return json({ error: 'not_found' }, 404, origin);
		}

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
	},
};
