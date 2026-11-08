---
name: claude-code
category: AI
short_description: >-
  Claude Code is an agentic coding tool that lives in your terminal, understands
  your codebase, and helps you code faster by executing routine
description: >-
  Claude Code is an official agentic coding tool by Anthropic that runs directly
  inside your terminal to understand codebases and assist with development.   

  It executes routine tasks, analyzes project dependencies, explains complex
  code segments, and handles local Git workflows using natural language.   

  It integrates deeply with development environments, allowing developers to run
  tests, manage multi-hour refactors, and turn issues into pull requests
  straight from the shell.
repository_url: https://github.com/anthropics/claude-code
website: https://code.claude.com/docs/en/overview
author: anthropics
license: © Anthropic PBC
language: TypeScript
installation:
  - method: script
    command: curl -fsSL https://claude.ai/install.sh | bash
  - method: brew
    command: brew install --cask claude-code
  - method: powershell
    command: irm https://claude.ai/install.ps1 | iex
  - method: winget
    command: winget install Anthropic.ClaudeCode
  - method: npm
    command: npm install -g @anthropic-ai/claude-code
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - agentic-ai
  - ai-agent
  - anthropic
media: https://github.com/anthropics/claude-code/raw/main/demo.gif
logo: https://cli.masoko.net/uploads/claude-code/logo.png
updated: '2026-11-02'
repo_stars: 154950
repo_updated: "2026-11-06"
repo_created: "2025-02-22"
repo_release: "v2.1.319"
repo_release_date: "2026-11-06"
---
