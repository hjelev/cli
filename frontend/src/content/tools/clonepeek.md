---
name: ClonePeek
category: Security
short_description: Read-only audit of execution hooks in unfamiliar code repositories
description: >-
  ClonePeek is an offline Python CLI and reusable GitHub Action that helps
  developers review commands a repository can configure to run through npm
  lifecycle scripts, trusted VS Code folder-open tasks, devcontainers, MCP
  process launch settings, and Cursor or Claude Code agent hooks.


  It reports supported triggers, commands, source paths, line numbers, and
  heuristic review priorities without executing project scripts or hooks.
  The scanner supports bounded inspection of explicitly referenced local shell
  scripts, JSON and SARIF output, change-focused scans, and reviewed CI
  baselines. A clean report is not proof of safety; dynamic or nested
  execution and other unsupported surfaces can be missed.
repository_url: https://github.com/harshitethic/clonepeek
website: https://harshitethic.github.io/clonepeek/
author: harshitethic
license: MIT
language: Python
installation:
  - method: uv
    command: uvx --from git+https://github.com/harshitethic/clonepeek@v0.5.0 clonepeek /path/to/repo
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - security
  - cli
  - static-analysis
  - supply-chain
  - github-actions
  - devtools
  - coding-agents
media: https://harshitethic.github.io/clonepeek/terminal-preview.png
logo: https://harshitethic.github.io/clonepeek/icon.svg
updated: '2026-10-16'
---
