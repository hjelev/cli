---
name: codex
category: AI
short_description: Lightweight coding agent that runs in your terminal
description: >-
  Codex is a specialized, lightweight coding agent designed to run directly in
  your terminal, providing AI-powered assistance for software engineering
  tasks.  

  It streamlines development by handling code editing, debugging, and test
  execution while allowing for integration into various IDEs and desktop
  environments.  

  Recent updates have unified the Codex and ChatGPT ecosystems, offering a
  professional-grade agent capable of managing multi-step tasks across complex
  repositories.
repository_url: https://github.com/openai/codex
author: openai
license: Apache-2.0
language: Rust
installation:
  - method: script
    command: curl -fsSL https://chatgpt.com/codex/install.sh | sh
  - method: powershell
    command: >-
      powershell -ExecutionPolicy ByPass -c "irm
      https://chatgpt.com/codex/install.ps1 | iex"
  - method: npm
    command: npm install -g @openai/codex
  - method: brew
    command: brew install --cask codex
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - Coding-Agent
  - Developer-Tools
  - CLI
  - Automation
media: https://github.com/openai/codex/raw/main/.github/codex-cli-splash.png
logo: https://avatars.githubusercontent.com/u/14957082?s=200&v=4
updated: '2026-07-18'
repo_stars: 100024
repo_updated: "2026-07-20"
repo_created: "2025-04-13"
repo_release: "rust-v0.144.6"
repo_release_date: "2026-07-18"
---
