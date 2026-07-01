import { GITHUB_CLIENT_ID, OAUTH_SCOPE, WORKER_URL } from './config';

const STATE_KEY = 'gh_oauth_state';
const RETURN_TO_KEY = 'gh_oauth_return_to';
const TOKEN_KEY = 'gh_access_token';

export function redirectToGitHubSignIn(returnTo: string): void {
	const state = crypto.randomUUID();
	sessionStorage.setItem(STATE_KEY, state);
	sessionStorage.setItem(RETURN_TO_KEY, returnTo);

	const url = new URL('https://github.com/login/oauth/authorize');
	url.searchParams.set('client_id', GITHUB_CLIENT_ID);
	url.searchParams.set('redirect_uri', `${window.location.origin}/auth/callback`);
	url.searchParams.set('scope', OAUTH_SCOPE);
	url.searchParams.set('state', state);
	window.location.href = url.toString();
}

export type CallbackResult = { ok: true; returnTo: string } | { ok: false; error: string };

export async function handleOAuthCallback(): Promise<CallbackResult> {
	const params = new URLSearchParams(window.location.search);
	const expectedState = sessionStorage.getItem(STATE_KEY);
	const returnTo = sessionStorage.getItem(RETURN_TO_KEY) ?? '/submit';
	sessionStorage.removeItem(STATE_KEY);
	sessionStorage.removeItem(RETURN_TO_KEY);

	if (params.get('error')) {
		return { ok: false, error: params.get('error_description') ?? params.get('error')! };
	}

	const code = params.get('code');
	const state = params.get('state');
	if (!code || !state || state !== expectedState) {
		return { ok: false, error: 'Sign-in could not be verified. Please try again.' };
	}

	const response = await fetch(`${WORKER_URL}/auth/github/token`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ code }),
	});
	const data = (await response.json()) as { access_token?: string; error?: string };
	if (!response.ok || !data.access_token) {
		return { ok: false, error: data.error ?? 'GitHub sign-in failed.' };
	}

	sessionStorage.setItem(TOKEN_KEY, data.access_token);
	return { ok: true, returnTo };
}

export function getStoredToken(): string | null {
	return sessionStorage.getItem(TOKEN_KEY);
}

export function signOut(): void {
	sessionStorage.removeItem(TOKEN_KEY);
}

export async function fetchGitHubUser(token: string): Promise<{ login: string; avatar_url: string }> {
	const res = await fetch('https://api.github.com/user', {
		headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' },
	});
	if (!res.ok) throw new Error('Could not verify your GitHub account.');
	return res.json();
}
