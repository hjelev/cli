---
name: tork
category: Networking
short_description: cli for searching and downloading torrents
description: >-
  A command-line interface (CLI) tool for searching and downloading torrents
  from multiple built-in providers directly in your terminal.   

  Features an interactive user interface with real-time streaming results,
  resolution and size filters, and health monitoring for your downloads.   

  Prioritizes safety and user control by requiring manual confirmation before
  downloads start and handling tracker management transparently.
repository_url: https://github.com/melqtx/tork
author: melqtx
license: MIT
language: Go
installation:
  - method: brew
    command: brew install melqtx/tap/tork
  - method: aur
    command: yay -S tork
  - method: nix
    command: nix run github:melqtx/tork
  - method: go
    command: go install github.com/melqtx/tork/cmd/tork@latest
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - torrents
  - download
  - search
media: https://github.com/melqtx/tork/raw/main/docs/results.png
logo: https://cli.masoko.net/uploads/tork/logo.png
updated: '2026-11-05'
repo_stars: 593
repo_updated: "2026-10-26"
repo_created: "2026-07-07"
repo_release: "v0.5.0"
repo_release_date: "2026-10-26"
---
