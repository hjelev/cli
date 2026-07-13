---
name: bat
category: Productivity
short_description: A cat(1) clone with syntax highlighting and Git integration.
description: >-
  bat is a modern, feature-rich clone of the classic cat command written in
  Rust.

  It provides syntax highlighting for a vast array of file types, Git
  integration, and automatic paging out of the box.  

  Additionally, it enhances readability with line numbers, file headers, and
  non-printable character visualizations.
repository_url: https://github.com/sharkdp/bat
author: sharkdp
license: Apache-2.0
language: Rust
installation:
  - method: apt
    command: sudo apt install bat
  - method: pacman
    command: pacman -S bat
  - method: dnf
    command: dnf install bat
  - method: other
    command: emerge sys-apps/bat
  - method: brew
    command: brew install bat
  - method: winget
    command: winget install sharkdp.bat
  - method: cargo
    command: cargo install --locked bat
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - command-line
  - git
  - hacktoberfest
  - rust
  - syntax-highlighting
  - terminal
  - tool
media: https://cli.masoko.net/uploads/bat/media.png
logo: https://cli.masoko.net/uploads/bat/logo.png
updated: '2026-07-11'
github_stars: 59687
github_updated: "2026-07-01"
github_created: "2018-04-21"
github_release: "v0.26.1"
comments: []
---
