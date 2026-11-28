---
name: gping
category: Networking
short_description: Ping, but with a graph
description: >-
  Cross-platform terminal utility written in Rust that plots real-time latency
  graphs for multiple hosts, IPs, or AWS region shorthands.   

  Supports graphing command execution durations via --cmd, custom colors,
  adjustable time buffers, and simple dot or Braille rendering.   

  Runs on Linux, macOS, and Windows with packages available across Homebrew,
  Cargo, apt, pacman, winget, and Docker.
repository_url: https://github.com/orf/gping
author: orf
license: MIT
language: Rust
installation:
  - method: apt
    command: apt-get install rust-gping
  - method: pacman
    command: pacman -S gping
  - method: dnf
    command: sudo dnf copr enable atim/gping -y && sudo dnf install gping
  - method: snap
    command: sudo snap install gping
  - method: emerge
    command: emerge net-analyzer/gping
  - method: brew
    command: brew install gping
  - method: port
    command: sudo port install gping
  - method: pkg
    command: pkg install gping
  - method: scoop
    command: scoop install gping
  - method: choco
    command: choco install Gping
  - method: cargo
    command: cargo install gping
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - command-line
  - graph
  - linux
  - network-monitoring
  - ping
  - rust
  - shell
media: https://raw.githubusercontent.com/orf/gping/main/images/readme-example.gif
logo: https://avatars.githubusercontent.com/u/1027207?v=4
updated: '2026-11-25'
repo_stars: 12761
repo_stars_recent: 4
repo_updated: "2026-11-26"
repo_created: "2015-10-17"
repo_release: "gping-v1.21.0"
repo_release_date: "2026-08-31"
---
