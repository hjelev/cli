---
name: lsd
category: File Listing Utilities
short_description: The next gen ls command, with colors and icons.
description: |
  lsd (LSDeluxe) is a rewrite of GNU ls with colorful output, file type
  icons, git status indicators, and tree view support.
repository_url: https://github.com/lsd-rs/lsd
author: lsd-rs
license: Apache-2.0
language: Rust
installation:
  - method: cargo
    command: cargo install lsd
  - method: brew
    command: brew install lsd
  - method: apt
    command: sudo apt install lsd
  - method: dnf
    command: sudo dnf install lsd
  - method: pacman
    command: sudo pacman -S lsd
  - method: binary
    command: Prebuilt binaries for Linux, macOS, and Windows are available on the GitHub Releases page.
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - ls-replacement
  - file-listing
  - cli
  - rust
logo: https://github.com/TabbyML/pochi/raw/main/packages/vscode/assets/icons/logo128.png?raw=true
media: https://raw.githubusercontent.com/lsd-rs/lsd/assets/screen_lsd.png
ratings:
  - user: hjelev
    value: 5
    date: '2026-07-01T21:51:21.070Z'
---
