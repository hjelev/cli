---
name: broot
category: File Management
short_description: A new way to see and navigate directory trees
description: >-
  Broot is a modern, terminal-based directory navigation tool and file manager
  written in Rust. It provides a concise way to view and traverse directory
  trees, automatically hiding unlisted files so that deeply nested or massive
  structures fit perfectly within a single screen without endless scrolling.
repository_url: https://github.com/Canop/broot
website: https://dystroy.org/broot/
author: Denys Séguret
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install broot
  - method: cargo
    command: cargo install --locked broot
  - method: pacman
    command: sudo pacman -S broot
  - method: apt
    command: sudo apt install broot
  - method: dnf
    command: sudo dnf install broot
  - method: other
    command: sudo apk add broot
platforms:
  - Linux
  - macOS
tags:
  - file-manager
  - tree-view
  - rust
  - linux
  - command-line
  - tree
  - command-line-tool
  - balanced-bfs-descent
  - fuzzy-search
  - hacktoberfest
media: https://dystroy.org/broot/img/20241027-cows.png
logo: https://dystroy.org/broot/img/vache-blanche.svg
updated: '2026-07-03'
github_stars: 12802
github_updated: "2026-07-06"
github_release: "v1.57.0"
---
