---
name: DryDock
category: Git
short_description: What's uncommitted, unpushed, and unreleased across every repo you own.
description: >-
  A live dashboard for a fleet of git checkouts. Colour carries the state, so
  the rows worth acting on stand out without reading a word: yellow for
  uncommitted changes, cyan for commits you haven't pushed, magenta for commits
  past the last tag, red for conflicts and half-finished merges.


  Unpushed work is counted across every local branch, not just the one that
  happens to be checked out, and release state is tracked as its own axis. A
  filesystem watcher re-probes only the repos that actually changed, so a full
  sweep of ~550 repos costs about two seconds and leaving the dashboard open all
  day is not a background CPU tax.
repository_url: https://github.com/yetidevworks/drydock
website: https://yetidevworks.com/drydock
author: yetidevworks
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install yetidevworks/drydock/drydock
  - method: cargo
    command: cargo install drydock
platforms:
  - Linux
  - macOS
tags:
  - cli
  - dashboard
  - developer-tools
  - git
  - monorepo
  - ratatui
  - release-management
  - rust
  - terminal
  - tui
media: https://raw.githubusercontent.com/yetidevworks/drydock/main/screenshot.png
logo: https://avatars.githubusercontent.com/u/220336074?v=4
updated: '2026-08-21'
repo_stars: 277
repo_updated: "2026-09-03"
repo_created: "2026-07-30"
repo_release: "v1.1.2"
repo_release_date: "2026-09-03"
---
