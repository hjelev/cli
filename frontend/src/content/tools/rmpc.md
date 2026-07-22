---
name: rmpc
category: Media & Entertainment
short_description: >-
  A modern, configurable, terminal based MPD Client with album art support via
  various terminal image protocols
description: >-
  Rmpc is a modern, highly configurable terminal-based Music Player Daemon (MPD)
  client written in Rust.  

  It features a multi-column browser inspired by tools like ranger and ncmpcpp,
  complete with Vim-like keybindings.  

  It also supports album art rendering via terminal image protocols,
  synchronized lyrics, and media playback integration.
repository_url: https://github.com/mierak/rmpc
website: https://rmpc.mierak.dev
author: mierak
license: BSD-3-Clause
language: Rust
installation:
  - method: pacman
    command: pacman -S rmpc
  - method: aur
    command: yay -S rmpc-git
  - method: other
    command: zypper install rmpc
  - method: cargo
    command: cargo binstall rmpc
platforms:
  - Linux
  - macOS
tags:
  - mpd
  - mpd-client
  - mpdclient
  - music
  - music-player
  - sixel
  - terminal
  - terminal-graphics
  - tui
media: https://github.com/mierak/rmpc/raw/master/assets/preview.png
logo: https://rmpc.mierak.dev/favicon.svg
updated: '2026-07-21'
repo_stars: 3113
repo_updated: "2026-07-21"
repo_created: "2024-03-12"
repo_release: "v0.11.0"
repo_release_date: "2026-02-01"
---
