---
name: impala
category: Networking
short_description: 🛜 TUI for managing wifi on Linux
description: >-
  Impala is a modern terminal user interface (TUI) written in Rust for managing
  Wi-Fi networks on Linux.


  It is designed to work with iwd (iNet wireless daemon), offering features like
  WPA Enterprise support, station and access point modes, and hidden network
  handling.


  It provides a sleek, customizable dashboard with options for QR code network
  sharing, custom themes, and intuitive keybindings.
repository_url: https://github.com/pythops/impala
author: pythops
license: GPL-3.0
language: Rust
installation:
  - method: cargo
    command: cargo install impala
  - method: pacman
    command: pacman -S impala
  - method: nix
    command: nix-env -iA nixpkgs.impala
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - iwd
  - linux
  - ratatui
  - rust
  - tui
  - wifi
  - wireless
media: https://cli.masoko.net/uploads/impala/media.gif
logo: https://avatars.githubusercontent.com/u/57548585?v=4
updated: '2026-10-25'
repo_stars: 2888
repo_updated: "2026-10-07"
repo_created: "2024-06-09"
repo_release: "v0.9.0"
repo_release_date: "2026-08-27"
---
