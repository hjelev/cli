---
name: ygrep
category: Data Processing
short_description: A fast, local, indexed code search tool optimized for AI coding assistants.
description: >-
  Indexes a codebase with Tantivy and answers searches from that index, so
  results come back in milliseconds rather than walking the tree every time. It
  matches literal text by default, special characters included, so `$variable`,
  `{% block` and `->get(` work the way you would type them. Pass `-r` for regex.
  Searching a workspace that has not been indexed yet builds the index and runs
  the query, so there is nothing to set up first.


  Indexing is incremental against file mtimes and a no-op run finishes in around
  10ms, which is what makes it reasonable for an AI tool to re-index on every
  session start. A background service watches whichever indexes you flag, from
  login, with no terminal open. The tokenizer keeps `$`, `@` and `#` as part of
  a token, which matters in PHP, shell and Python, and it splits camelCase and
  snake_case identifiers into subtokens so `send` also finds `sendCampaign` and
  `send_email`. Running bare `ygrep` opens a dashboard covering every index, the
  service, and live query rate and latency.
repository_url: https://github.com/yetidevworks/ygrep
website: https://yetidevworks.com/ygrep
author: yetidevworks
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install yetidevworks/ygrep/ygrep
  - method: cargo
    command: cargo install ygrep-cli
platforms:
  - Linux
  - macOS
tags:
  - ai-agents
  - code-search
  - developer-tools
  - full-text-search
  - grep
  - ratatui
  - rust
  - search
  - tantivy
  - terminal
  - tui
media: https://raw.githubusercontent.com/yetidevworks/ygrep/main/ygrep-screenshot.png
logo: https://avatars.githubusercontent.com/u/220336074?v=4
updated: '2026-08-21'
repo_stars: 58
repo_updated: "2026-08-27"
repo_created: "2025-12-09"
repo_release: "v4.0.0"
repo_release_date: "2026-07-28"
---
