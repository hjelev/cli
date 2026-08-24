---
name: Myx
category: Media & Entertainment
short_description: Spotify player for the terminal. With reactive themes.
description: >-
  Myx is a lightweight terminal-based Spotify client built in Rust, featuring a
  fast, responsive interface powered by the Ratatui framework.  

  It enables native music playback directly within your terminal using the
  librespot library, which requires an active Spotify Premium account.  

  With its clean, minimal aesthetic and support for custom themes, Myx provides
  an efficient, keyboard-driven way to manage your music without leaving the
  CLI.
repository_url: https://github.com/HaseebKhalid1507/Myx
author: HaseebKhalid1507
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install myx
  - method: brew
    command: brew install HaseebKhalid1507/homebrew-tap/myx
  - method: aur
    command: yay -S myx
  - method: script
    command: >-
      curl --proto '=https' --tlsv1.2 -LsSf
      https://github.com/HaseebKhalid1507/Myx/releases/latest/download/myx-installer.sh
      | sh
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - cli-tool
  - multimedia
  - music
  - music-player
  - player
  - rust
  - spotify
  - spotify-api
  - spotify-tui
  - terminal
  - tui
media: https://cli.masoko.net/uploads/myx/media.gif
logo: https://avatars.githubusercontent.com/u/57045294?v=4
updated: '2026-08-10'
repo_stars: 202
repo_updated: "2026-08-13"
repo_created: "2026-07-23"
repo_release: "v0.4.0"
repo_release_date: "2026-08-04"
---
