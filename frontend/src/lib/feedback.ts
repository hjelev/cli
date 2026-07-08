import { WORKER_URL } from './config';

// Client for the Worker's /feedback endpoint. The Worker verifies the token,
// then commits the comment into the tool's .md file with a bot token
// (see worker/src/index.ts). Because the site is static, the committed
// feedback only appears on the page after the next rebuild.

export interface FeedbackInput {
	toolId: string;
	comment?: string;
}

export interface FeedbackResult {
	ok: true;
	user: { login: string; avatar_url: string };
	comment?: string;
	date: string;
}

export async function submitFeedback(token: string, input: FeedbackInput): Promise<FeedbackResult> {
	const res = await fetch(`${WORKER_URL}/feedback`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ token, ...input }),
	});
	const data = (await res.json().catch(() => ({}))) as Partial<FeedbackResult> & { error?: string };
	if (!res.ok || !data.ok) {
		throw new Error(data.error ?? 'Could not save your feedback. Please try again.');
	}
	return data as FeedbackResult;
}
