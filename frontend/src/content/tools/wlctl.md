---
name: wlctl
category: Networking
short_description: 🛜 TUI for managing wifi/ethernet/vpn on Linux with Network Manager
description: >-
  impala is a great wifi TUI but it talks to iwd. If your distro already runs
  NetworkManager (most do — GNOME, KDE, Ubuntu, Fedora, Pop, …), you can't drop
  impala in without ripping the stack out. wlctl keeps the impala UX and points
  it at NetworkManager, so it just works alongside what your DE is already
  doing.
repository_url: https://github.com/aashish-thapa/wlctl
author: aashish-thapa
license: GPL-3.0
language: Rust
installation:
  - method: cargo
    command: cargo install wlctl
  - method: other
    command: yay -S wlctl-bin
  - method: other
    command: nix run github:aashish-thapa/wlctl
platforms:
  - Linux
  - macOS
tags:
  - impala
  - impalawithnm
  - networkmanager
  - tui
  - vpn-manager
  - wifi
  - wifi-tui-linux
  - wifitui
  - wlctl
media: https://cli.masoko.net/uploads/wlctl/media.gif
logo: https://avatars.githubusercontent.com/u/158542252?v=4
updated: '2026-07-15'
github_stars: 136
github_updated: "2026-07-14"
github_created: "2025-12-25"
github_release: "v0.1.9"
---
