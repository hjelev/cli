---
name: spotify-player
category: Media & Entertainment
short_description: A Spotify player in the terminal with full feature parity
description: >-
  spotify-player is a fast, highly configurable, and feature-rich terminal music
  player for Spotify.  

  It supports direct streaming, synced lyrics, audio visualization, and Spotify
  Connect for remote control.  

  Built in Rust, it provides a minimalist UI with feature parity to the official
  Spotify application.
repository_url: https://github.com/aome510/spotify-player
author: aome510
license: MIT
language: Rust
installation:
  - method: apt
    command: sudo apt install libssl-dev libasound2-dev libdbus-1-dev
  - method: dnf
    command: sudo dnf install openssl-devel alsa-lib-devel dbus-devel
  - method: other
    command: sudo yum install openssl-devel alsa-lib-devel dbus-devel
  - method: brew
    command: brew install spotify_player
  - method: scoop
    command: scoop install spotify-player
  - method: cargo
    command: cargo install spotify_player --locked
  - method: pacman
    command: pacman -S spotify-player
  - method: pkg
    command: pkg install spotify-player
  - method: pkgin
    command: pkgin install spotify-player
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - music
  - music-player
  - player
  - rust
  - spotify
  - spotify-api
  - spotify-tui
  - terminal
  - terminal-based
  - tui
  - vim
media: https://cli.masoko.net/uploads/spotify-player/media.gif
logo: https://avatars.githubusercontent.com/u/40011582?v=4
updated: '2026-07-18'
repo_stars: 6964
repo_updated: "2026-07-02"
repo_created: "2021-07-08"
repo_release: "v0.24.0"
repo_release_date: "2026-06-30"
---
