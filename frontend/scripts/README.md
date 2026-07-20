# Scripts

## sync-github-stats.ts

Fetches each listing's repo stats (stars, last-push date, creation date, latest release) from GitHub or Codeberg and writes them into that listing's `repo_*` frontmatter fields. Runs daily via `.github/workflows/sync-github-stats.yml`, which commits any changes automatically.

```bash
GITHUB_TOKEN=... npx tsx scripts/sync-github-stats.ts
```

## sync-github-tags.ts

Fetches each listing's GitHub repo topics and merges them into that listing's `tags` field (existing tags are kept; only new topics are appended). Manual/local-only — no workflow runs this.

Run locally from `frontend/`:

```bash
npx tsx scripts/sync-github-tags.ts --dry-run   # preview changes, writes nothing
npx tsx scripts/sync-github-tags.ts             # apply changes
```

**Auth:** uses `GITHUB_TOKEN` if set in the environment, otherwise falls back to `gh auth token` (requires `gh auth login` to have been run once).

After running, review the diff in `src/content/tools/` and commit if it looks right.

## generate-readme.ts

Regenerates the tool table between the `<!-- TOOLS:START -->`/`<!-- TOOLS:END -->` markers in the repo root `README.md`, and syncs the tools-count badge. Runs via `.github/workflows/update-readme.yml` on every push to `master` that touches `src/content/tools/**`.

## validate-submission.ts

CI check for PRs: validates changed tool/category `.md` files against the zod schema (`src/lib/schema.ts`) and checks that `repository_url`/`website`/`media`/`logo` links are reachable. Runs via `.github/workflows/validate-pr.yml`, invoked with `BASE_SHA`/`HEAD_SHA` env vars.

## lib/

Shared helpers used by the scripts above:

- `lib/github.ts` — `parseRepoUrl()` (GitHub/Codeberg URL parsing) and `fetchWithRetry()` (retries on 403/429/5xx, honoring `Retry-After`/rate-limit headers).
- `lib/frontmatter.ts` — in-place frontmatter field rewriting that avoids a full YAML round-trip, keeping diffs limited to the fields actually changed.
- `lib/util.ts` — generic `chunk()` for batching.
- `lib/load-tool.ts` — reads and schema-validates a single tool/category `.md` file.
- `lib/thin-listings.ts` — not CI/cron; imported directly by `astro.config.mjs` at build time.
