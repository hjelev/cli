---
name: mpv-music
category: Media & Entertainment
short_description: A TUI-based music player wrapper for MPV
description: >-
  mpv-music is a lightweight terminal music player and library browser built
  around MPV. It indexes your music library for fast fuzzy searching and lets
  you find tracks using metadata such as artist, album, genre, and title. It
  also supports playing files, directories, URLs, YouTube searches, playlists,
  and internet radio through MPV. The goal is to provide a fast, focused
  interface for finding something to listen to without trying to replace MPV or
  become a full-featured music management application.
repository_url: https://github.com/FurqanHun/mpv-music
website: https://furqanhun.github.io/mpv-music/
author: FurqanHun
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install mpv-music
  - method: script
    command: >-
      curl -sL
      https://raw.githubusercontent.com/FurqanHun/mpv-music/master/install.sh |
      bash
  - method: powershell
    command: >-
      iwr
      https://raw.githubusercontent.com/FurqanHun/mpv-music/master/install.ps1
      -UseBasicParsing | iex
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - music-player
  - mpv
  - terminal
  - tui
  - cli
media: >-
  https://raw.githubusercontent.com/FurqanHun/mpv-music/refs/heads/master/docs/assets/tui_demo.gif
updated: '2026-09-20'
---
