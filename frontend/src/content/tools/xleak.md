---
name: xleak
category: Data Processing
short_description: A fast terminal Excel viewer with an interactive TUI.
description: >-
  Features full-text search, formula display, lazy loading for large files,
  clipboard support, and export to CSV/JSON. Built with Rust and ratatui.
repository_url: https://github.com/bgreenwell/xleak
author: bgreenwell
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install bgreenwell/tap/xleak
  - method: winget
    command: winget install bgreenwell.xleak
  - method: apt
    command: sudo apt install xleak
  - method: pkgin
    command: pkgin install xleak
  - method: cargo
    command: cargo install xleak
  - method: nix
    command: nix profile install github:bgreenwell/xleak
  - method: script
    command: >-
      curl --proto '=https' --tlsv1.2 -LsSf
      https://github.com/bgreenwell/xleak/releases/latest/download/xleak-installer.sh
      | sh
  - method: powershell
    command: >-
      irm
      https://github.com/bgreenwell/xleak/releases/latest/download/xleak-installer.ps1
      | iex
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - excel
  - ratatui
  - rust
  - rust-lang
  - spreadsheet
  - spreadsheets
  - tui
media: https://github.com/bgreenwell/xleak/raw/devel/assets/demo.gif
logo: https://github.com/bgreenwell/xleak/raw/devel/assets/logo.jpg
updated: '2026-07-18'
repo_stars: 1435
repo_updated: "2026-07-15"
repo_created: "2025-11-06"
repo_release: "v0.2.6"
repo_release_date: "2026-05-24"
---
