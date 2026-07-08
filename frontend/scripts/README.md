# Scripts

## sync-github-tags.ts

Fetches each listing's GitHub repo topics and merges them into that listing's `tags` field (existing tags are kept; only new topics are appended).

Run locally from `frontend/`:

```bash
npx tsx scripts/sync-github-tags.ts --dry-run   # preview changes, writes nothing
npx tsx scripts/sync-github-tags.ts             # apply changes
```

**Auth:** uses `GITHUB_TOKEN` if set in the environment, otherwise falls back to `gh auth token` (requires `gh auth login` to have been run once).

After running, review the diff in `src/content/tools/` and commit if it looks right.
