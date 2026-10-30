---
name: waxon
category: Media & Entertainment
short_description: A vim-modal Spotify client for the terminal
description: >-
  Terminal Spotify Client: A feature-rich, terminal-based Spotify player built
  for speed and efficiency.


  Vim-Modal Navigation: Navigate playlists, searches, and controls entirely from
  the keyboard using familiar Vim keybindings (j/k, gg/G, etc.).


  Rich Features: Includes full-screen album art, time-synced lyrics, built-in
  device management, and media key integration.
repository_url: https://github.com/danfry1/waxon
website: https://waxon.danfry.dev
author: danfry1
license: GPL-3.0
language: Go
installation:
  - method: brew
    command: brew install danfry1/tap/waxon
  - method: nix
    command: nix profile install github:danfry1/waxon
  - method: go
    command: go install github.com/danfry1/waxon@latest
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - spotify
  - music
media: https://github.com/danfry1/waxon/raw/main/demo/recordings/full-tour.gif
logo: https://github.com/danfry1/waxon/raw/main/assets/logo.png
updated: '2026-10-30'
---
