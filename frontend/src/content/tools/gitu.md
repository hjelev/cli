---
name: gitu
category: Git
short_description: A TUI Git client inspired by Magit
description: >-
  Gitu is a terminal user interface (TUI) for Git, heavily inspired by Emacs'
  Magit interface.  

  It provides a keyboard-driven, Vim-like way to inspect repository states,
  stage/unstage files and hunks, manage branches, and carry out common Git
  workflows natively inside the terminal.
repository_url: https://github.com/altsem/gitu
author: altsem
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install gitu --locked
  - method: pacman
    command: pacman -S gitu
  - method: other
    command: mise use -g gitu@latest
  - method: brew
    command: brew install altsem/gitu/gitu
platforms:
  - Linux
  - macOS
tags:
  - cli
  - git
  - magit
  - standalone
  - tui
media: https://github.com/altsem/gitu/raw/master/vhs/rec.gif
logo: https://avatars.githubusercontent.com/u/3618477?v=4
updated: '2026-07-20'
---
