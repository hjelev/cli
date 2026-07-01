---
name: elio
category: File Management
short_description: Snappy, batteries-included terminal file manager with rich previews.
description: |
  elio is a terminal file manager with a three-pane layout, rich previews
  for text, code, documents, archives, and media, plus inline image
  rendering on supported terminals. It includes customizable places,
  trash management, fuzzy search, zoxide jumps, and full theming support.
repository_url: https://github.com/elio-fm/elio
website: https://elio-fm.github.io/
author: "elio-fm"
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install elio
  - method: brew
    command: brew install elio
  - method: apt
    command: |
      curl -fsSL https://elio-fm.github.io/elio-apt/install.sh | sudo sh
      sudo apt install elio
  - method: dnf
    command: |
      sudo dnf copr enable miguelregueiro/elio
      sudo dnf install elio
  - method: pacman
    command: paru -S elio
platforms: [Linux, macOS]
tags: [tui, file-manager, previews, rust]
logo: "https://avatars.githubusercontent.com/u/275331632?v=4"
---
