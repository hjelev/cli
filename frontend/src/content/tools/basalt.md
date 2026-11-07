---
name: basalt
category: Notes & Documents
short_description: TUI Application to manage Obsidian notes directly from the terminal
description: >-
  Basalt is a lightning-fast terminal user interface (TUI) application written
  in Rust designed to manage Obsidian vaults and Markdown notes directly from
  the shell.   

  It features a split-pane layout with a file explorer, document outline view,
  and a responsive markdown renderer providing a clean WYSIWYG editing
  experience.   

  It includes Vim-inspired movement keybindings and seamless integration with
  existing local vaults without needing the heavy electron-based desktop client.
repository_url: https://github.com/erikjuhani/basalt
website: https://basalt.page
author: erikjuhani
license: Apache-2.0
language: Rust
installation:
  - method: brew
    command: brew install erikjuhani/tap/basalt
  - method: cargo
    command: cargo install basalt-tui
  - method: other
    command: aqua g -i erikjuhani/basalt
platforms:
  - Linux
  - macOS
tags:
  - markdown
  - obsidian
  - ratatui
  - tui
media: https://basalt.page/assets/dark/demo.avif
logo: >-
  https://raw.githubusercontent.com/erikjuhani/basalt/refs/heads/main/assets/basalt.png?raw=true
updated: '2026-11-02'
repo_stars: 1387
repo_updated: "2026-11-07"
repo_created: "2023-09-19"
repo_release: "basalt/v0.13.0"
repo_release_date: "2026-10-04"
---
