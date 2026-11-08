---
name: ncspot
category: Music & Audio
short_description: >-
  Cross-platform ncurses Spotify client written in Rust, inspired by ncmpc and
  the likes.
description: >-
  ncspot is a cross-platform, lightweight terminal Spotify client written in
  Rust and powered by librespot.   

  It draws heavy design inspiration from ncurses MPD clients like ncmpc and text
  editors like Vim.   

  It features full playback and library control, search, queue management, and
  Vim-style keybindings.
repository_url: https://github.com/hrkfdn/ncspot
author: hrkfdn
license: BSD-2-Clause
language: Rust
installation:
  - method: brew
    command: brew install ncspot
  - method: scoop
    command: scoop install ncspot
  - method: winget
    command: winget install hrkfdn.ncspot
  - method: cargo
    command: cargo install --locked ncspot
  - method: pacman
    command: pacman -S ncspot-bin
  - method: apk
    command: apk add ncspot
  - method: snap
    command: sudo snap install ncspot
  - method: pkg
    command: pkg install ncspot
  - method: eget
    command: eget hrkfdn/ncspot
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - spotify
  - music
media: https://raw.githubusercontent.com/hrkfdn/ncspot/main/images/screenshot.png
logo: https://cli.masoko.net/uploads/ncspot/logo.svg
updated: '2026-11-01'
repo_stars: 6811
repo_updated: "2026-11-02"
repo_created: "2018-11-10"
repo_release: "v1.5.0"
repo_release_date: "2026-10-01"
---
