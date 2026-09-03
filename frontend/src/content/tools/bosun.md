---
name: Bosun
category: AI
short_description: Tmux-native orchestrator for AI agent sessions.
description: >-
  Lists, previews, creates and manages the tmux sessions your AI coding agents
  run in, from one terminal UI. Claude Code, Codex, Kimi Code, OpenCode, Qwen
  Code or a plain shell all work. The preview pane is a real embedded terminal
  rather than a snapshot, so you can watch a session work and type into it
  without leaving the picker.


  Tmux is the source of truth. Bosun takes push notifications from tmux control
  mode instead of keeping its own database, so two copies running at once read
  the same server and cannot disagree. It runs its sessions on a dedicated
  `tmux -L bosun` socket, which keeps your other tmux state untouched and keeps
  Claude Code's macOS Keychain auth lineage intact through the process tree, and
  it writes its status line per session rather than globally. Fifteen themes
  ship with it, ten dark and five light, switched live with `t`.
repository_url: https://github.com/yetidevworks/bosun
website: https://yetidevworks.com/bosun
author: yetidevworks
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install yetidevworks/bosun/bosun
  - method: cargo
    command: cargo install bosun-tmux
platforms:
  - Linux
  - macOS
tags:
  - ai-agents
  - claude-code
  - cli
  - developer-tools
  - ratatui
  - rust
  - session-manager
  - terminal
  - tmux
  - tui
media: https://raw.githubusercontent.com/yetidevworks/bosun/main/screenshot.png
logo: https://avatars.githubusercontent.com/u/220336074?v=4
updated: '2026-08-21'
repo_stars: 44
repo_updated: "2026-09-02"
repo_created: "2026-04-11"
repo_release: "v2.1.12"
repo_release_date: "2026-09-02"
---
