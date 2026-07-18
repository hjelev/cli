---
name: difftastic
category: Data Processing
short_description: a structural diff that understands syntax 🟥🟩
description: >-
  Difftastic is a structural diff tool that compares files based on their syntax
  rather than just line-by-line text changes.  

  It supports over 30 programming languages and is compatible with Git, making
  it a powerful choice for understanding deep code changes.  

  When it encounters complex parse errors, it intelligently falls back to
  traditional line-oriented diffing to ensure accuracy.
repository_url: https://github.com/Wilfred/difftastic
website: https://difftastic.wilfred.me.uk/
author: Wilfred
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install difftastic
  - method: pacman
    command: sudo pacman -S difftastic
  - method: dnf
    command: sudo dnf install difftastic
  - method: pkg
    command: sudo pkg install difftastic
  - method: winget
    command: winget install difftastic
  - method: scoop
    command: scoop install difftastic
  - method: choco
    command: choco install difftastic
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - diff
  - tree-sitter
media: https://github.com/Wilfred/difftastic/raw/master/img/reformat.png
logo: https://cli.masoko.net/uploads/difftastic/logo.png
updated: '2026-07-18'
repo_stars: 25662
repo_updated: "2026-07-18"
repo_created: "2018-12-18"
repo_release: "0.69.0"
repo_release_date: "2026-04-30"
---
