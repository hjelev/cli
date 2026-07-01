// Single production environment — no dev OAuth app, see claude.md Phase 2.
// None of these values are secret; the client ID is embedded in a public
// browser redirect regardless, and the rest just identify the target repo.
export const GITHUB_CLIENT_ID = 'Ov23liltbUqUJHmV7NIN';
export const WORKER_URL = 'https://cli-directory-worker.masoko.workers.dev';
export const OAUTH_SCOPE = 'public_repo';

export const TARGET_OWNER = 'hjelev';
export const TARGET_REPO = 'cli';
export const TARGET_BRANCH = 'master';
