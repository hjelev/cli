---
name: rura
category: Data Processing
short_description: Interactive TUI scratchpad for building shell pipelines
description: >-
  Rura is a terminal UI for building shell pipelines. Edit a pipe like grep |
  sort | uniq, see output update live, inspect any stage, and diff between runs
  — replacing the usual edit, up-arrow, rerun loop.
repository_url: https://github.com/tlipinski/rura
author: tlipinski
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install rura
  - method: other
    command: yay -S rura-bin
  - method: other
    command: sudo rpm -ivh rura_<version>_<arch>.rpm
  - method: cargo
    command: cargo install rura
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - pipeline
  - rust
  - shell
  - terminal
  - tui
media: https://cli.masoko.net/uploads/rura/media.gif
logo: https://github.com/tlipinski/rura/raw/master/rura.svg
updated: '2026-07-11'
github_stars: 319
github_updated: "2026-07-10"
github_created: "2026-05-05"
github_release: "v1.9.0"
---
