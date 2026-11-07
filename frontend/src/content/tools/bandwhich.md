---
name: bandwhich
category: Networking
short_description: Terminal bandwidth utilization tool
description: >-
  Bandwhich is a CLI utility written in Rust that sniffs network activity to
  display real-time bandwidth utilization broken down by process, connection,
  and remote IP/hostname. By cross-referencing packet data with system
  interfaces like /proc on Linux or system APIs on macOS and Windows, it
  provides a clean, responsive terminal dashboard for identifying what apps are
  using your network.
repository_url: https://github.com/imsnif/bandwhich
author: imsnif
license: MIT
language: Rust
installation:
  - method: pacman
    command: pacman -S bandwhich
  - method: dnf
    command: sudo dnf copr enable atim/bandwhich -y && sudo dnf install bandwhich
  - method: apk
    command: apk add bandwhich
  - method: nix
    command: nix-env -iA nixpkgs.bandwhich
  - method: snap
    command: sudo snap install bandwhich
  - method: brew
    command: brew install bandwhich
  - method: port
    command: port install bandwhich
  - method: pkg
    command: pkg install bandwhich
  - method: cargo
    command: cargo install bandwhich
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - bandwidth
  - cli
  - dashboard
  - networking
media: https://raw.githubusercontent.com/imsnif/bandwhich/main/res/demo.gif
logo: https://avatars.githubusercontent.com/u/795598?v=4
updated: '2026-11-07'
---
