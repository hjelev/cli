---
name: herdr
category: AI
short_description: agent multiplexer that lives in your terminal.
description: >-
  Run all your coding agents from one terminal, on any box, even over ssh. Each
  runs in its own real terminal, on a server that keeps it alive when you close
  the laptop. See blocked, working, and done at a glance, and reattach from your
  phone.
repository_url: https://github.com/ogulcancelik/herdr
website: https://herdr.dev
author: ogulcancelik
license: Other
language: Rust
installation:
  - method: brew
    command: brew install herdr
  - method: nix
    command: nix run github:ogulcancelik/herdr
  - method: script
    command: curl -fsSL https://herdr.dev/install.sh | sh
  - method: powershell
    command: irm https://herdr.dev/install.ps1 | iex
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - agent
  - agent-orchestration
  - ai
  - ai-agents
  - claude-code
  - cli
  - codex
  - coding-agents
  - developer-tools
  - devtools
  - multiplexer
  - rust
  - terminal
  - terminal-multiplexer
  - terminal-ui
  - tmux
  - tui
  - workspace-manager
media: https://cli.masoko.net/uploads/herdr/media.mp4
logo: https://herdr.dev/assets/logo.svg
updated: '2026-07-12'
repo_stars: 17941
repo_updated: "2026-07-18"
repo_created: "2026-03-27"
repo_release: "v0.7.4"
repo_release_date: "2026-07-15"
---
