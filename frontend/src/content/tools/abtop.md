---
name: abtop
category: System Monitoring
short_description: >-
  Like htop, but for AI coding agents. Monitor Claude    Code & Codex CLI
  sessions, tokens, context window,    rate limits, and ports in real-
description: >-
  abtop is a terminal-based monitoring tool written in Rust designed like htop
  specifically for AI coding agents.   

  It tracks active Claude Code, Codex CLI, and OpenCode sessions in real time,
  displaying token consumption, context window usage, and quota rate limits.   

  It also surfaces child processes, open network ports, and orphan processes to
  help manage background tasks spawned by your agents.
repository_url: https://github.com/graykode/abtop
author: graykode
license: MIT
language: Rust
installation:
  - method: script
    command: >-
      curl --proto '=https' --tlsv1.2 -LsSf
      https://github.com/graykode/abtop/releases/latest/download/abtop-installer.sh
      | sh
  - method: cargo
    command: cargo install abtop
  - method: powershell
    command: >-
      powershell -c "irm
      https://github.com/graykode/abtop/releases/latest/download/abtop-installer.ps1
      | iex"
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - ai-agents
  - ai-coding-agent
  - btop
  - claude-code
  - cli
  - codex
  - developer-tools
  - htop
  - monitor
  - ratatui
  - rust
  - terminal
  - tui
media: https://raw.githubusercontent.com/graykode/abtop/main/assets/demo.gif
logo: https://avatars.githubusercontent.com/u/10525011?v=4
updated: '2026-11-02'
repo_stars: 3798
repo_updated: "2026-09-14"
repo_created: "2026-03-29"
repo_release: "v0.5.5"
repo_release_date: "2026-09-14"
---
