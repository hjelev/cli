---
name: gitwig
category: Git
short_description: a rust based tui an alternative to sourcetree
description: >-
  Gitwig (derived from Git + Twig, representing repository branches) is a
  lightweight, keyboard-driven Terminal Git UI (TUI) designed as a fast, minimal
  alternative to desktop Git GUI clients like SourceTree and terminal clients
  like lazygit. Built with Rust and ratatui, Gitwig presents all your Git
  repositories, worktrees, stashes, and branches in a clean, interactive
  bordered layout directly inside your terminal window.
repository_url: https://github.com/tareqmy/gitwig
website: https://gitwig.dev
author: tareqmy
license: Other
language: Rust
installation:
  - method: brew
    command: brew tap tareqmy/tap && brew install gitwig
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/tareqmy/gitwig/master/scripts/install.sh
      | sh
  - method: powershell
    command: >-
      irm
      https://raw.githubusercontent.com/tareqmy/gitwig/master/scripts/install.ps1
      | iex
  - method: choco
    command: choco install gitwig
  - method: cargo
    command: cargo install gitwig
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - git-client
  - developer-tools
media: https://gitwig.dev/assets/preview-QQoAezg8.gif
logo: https://github.com/tareqmy/gitwig/raw/master/resources/logo-dark.svg
updated: '2026-08-21'
repo_stars: 81
repo_updated: "2026-08-30"
repo_created: "2025-05-26"
repo_release: "v2.5.13"
repo_release_date: "2026-08-30"
---
