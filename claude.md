# Claude Code Project Initialization: CLI Tools Directory

**Context:**
You are acting as an autonomous Senior Software Engineer via Claude Code. We are building a community-driven directory for CLI and TUI tools. The architecture consists of a static site (hosted on GitHub Pages) and a minimal Cloudflare Worker that exists solely to exchange a GitHub OAuth code for an access token. Submitters sign in with their own GitHub account and the browser talks to the GitHub API directly (fork, branch, commit, PR) using that account's token — there is no bot/service credential and no server-side PR-creation logic. Spam prevention comes from requiring a real, identifiable GitHub account rather than any custom rate-limiting.

**Execution Instructions:**
Please execute the following development plan step-by-step. Keep me updated on your progress, run terminal commands to scaffold the projects, and ask for my approval before moving from one phase to the next.

---

## Phase 1: Static Site Initialization & Schema Setup
1. **Initialize the static site:** Scaffold a new Astro project (or similar fast SSG) in a `frontend/` directory configured for GitHub Pages deployment. Run the necessary package manager commands.
2. **Define the Schema:** Create a Zod schema (single source of truth, importable by the frontend and the CI validation Action — do not reimplement it separately in each place) defining the required fields for our tools:
   - `name` — string, required
   - `category` — enum, required. Single main category from the predefined list below (drives primary browse/filter grouping, distinct from the free-form `tags`).
   - `short_description` — string, required (one-line, used on listing cards)
   - `description` — string (long-form), required (full description, used on the detail page)
   - `repository_url` — url, required
   - `website` — url, optional (project homepage/docs site, separate from `repository_url` — not every tool has one)
   - `author` — string, required
   - `license` — string, required
   - `language` — string, required
   - `installation` — string, required
   - `platforms` — string array, required
   - `tags` — string array, required
   - `media` — url, optional
   - `logo` — url, optional. When absent, the UI must render without a logo slot (fallback/no image) rather than a broken image link — the listing card and detail page components need an explicit conditional for this, not a naive `<img src={logo}>`.

   **Predefined `category` list (starter set, editable later):**
   `File Management`, `System Monitoring`, `Productivity`, `Development Tools`, `Networking`, `Text Editors & Note-taking`, `Media & Entertainment`, `Security`, `DevOps & Cloud`, `Data Processing`, `Games & Fun`, `Utilities/Other`.

3. **Generate Sample Data:** Create a sample Markdown/MDX entry in `frontend/src/content/tools/sb.md` to validate the routing and schema. Use this data:
   ```yaml
   ---
   name: sb
   category: File Management
   short_description: A terminal-based file manager built for speed and efficiency.
   description: |
     sb is a terminal-based file manager built for speed and efficiency, with
     vim-style keybindings, fuzzy search, and a plugin system for custom actions.
   repository_url: https://github.com/hristo/sb
   website: https://sb-tool.dev
   author: "Hristo"
   license: MIT
   language: Rust
   installation: cargo install sb
   platforms: [Linux, macOS, Windows]
   tags: [tui, file-manager, productivity]
   media: "https://example.com/demo.gif"
   # logo omitted here on purpose — optional, UI must not render a broken image when absent
   ---
   ```

## Phase 2: Minimal OAuth Token-Exchange Worker
1. **Register a GitHub OAuth App** with `public_repo` scope (needed so the user's token can fork, push, and open a PR on their own behalf).
2. **Initialize Wrangler:** Scaffold a new Cloudflare Worker project in a `worker/` directory.
3. **Single token-exchange route:** Implement `POST /auth/github/token`. It receives the `code` the client obtained from GitHub's OAuth redirect, exchanges it for an access token server-side using the OAuth App's `client_id`/`client_secret` (provisioned via `wrangler secret put`), and returns the token to the client. The Worker is stateless — it must not persist tokens, sessions, or submission data, and must not itself call any GitHub API beyond the token exchange. All branch/commit/PR creation logic lives in the frontend (Phase 3), not here.
4. **CORS:** Restrict this route to the production domain and localhost.

## Phase 3: Directory UI & Web Form
1. **Sign in with GitHub:** Add a "Sign in with GitHub" flow — redirect to GitHub's OAuth authorize URL, handle the callback redirect back to the static site, POST the returned `code` to the Worker's `/auth/github/token` route, and hold the resulting access token in memory/`sessionStorage` for the page session only (never persisted server-side).
2. **Build the Web Form:** Build a client-side HTML/JS submission form covering all schema fields (including `category` as a `<select>` populated from the shared predefined list, `website`, `description`, and `logo`). Add client-side validation (using the shared Zod schema) before proceeding.
3. **Client-side submission logic:** Using the signed-in user's own access token, call the GitHub REST API directly from the browser (which supports CORS for authenticated requests) to: check for / create a fork of the target repo, get the default branch SHA, create a new branch, commit the new Markdown file (formatted from the form data into the schema's frontmatter structure) via the Contents API under `src/content/tools/`, and open a PR from the fork targeting upstream `master` (this repo's default branch).
4. **Build the Landing Page:** Create a grid/list layout displaying the tools with their `name`, `logo` (if present), `short_description`, `language` badge, `category`, and `tags`.
5. **Implement Detail Pages:** Set up dynamic routing to generate individual pages for each tool, rendering `logo` (if present), `description`, `website` (if present), and installation commands.
6. **Implement Filtering:** Add client-side filtering so users can filter the directory by `category`, `tags`, `language`, or a text search query.

## Phase 4: CI/CD Workflows
1. **PR Validation Action:** Create `.github/workflows/validate-pr.yml` to run on pull requests. It should parse the submitted file and validate that all frontmatter fields adhere to the shared schema (including the `category` enum), and that URLs (`repository_url`, `website` if present, `media` if present, `logo` if present) return 200 OK statuses.
2. **Deployment Action:** Create `.github/workflows/deploy.yml` to build the static site and deploy it to GitHub Pages when a PR is merged into `master` (this repo's default branch).

---

## Open items (not yet decided — revisit as they come up)
- Duplicate/name-collision detection for submitted tool names.
- Stale fork/branch cleanup after a PR is closed or merged.
- `license` field format (free text vs. constrained SPDX identifiers).
- Automated test plan for the Worker's token-exchange route and the CI validation Action.
- PR preview deploys (render the submitted tool page before merging).
