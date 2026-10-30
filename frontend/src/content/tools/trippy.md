---
name: trippy
category: Networking
short_description: >-
  Trippy combines the functionality of traceroute and ping and is designed to
  assist with the analysis of networking issues.
description: >-
  Trippy is a network diagnostic tool written in Rust that combines the
  functionality of both traceroute and ping.


  It features an interactive, real-time terminal user interface (TUI) to analyze
  network paths and connectivity issues.


  Cross-platform and heavily inspired by mtr, it provides comprehensive
  diagnostics with flexible configuration options.
repository_url: https://github.com/fujiapple852/trippy
website: https://trippy.rs
author: fujiapple852
license: Apache-2.0
language: Rust
installation:
  - method: cargo
    command: cargo install trippy --locked
  - method: apt
    command: apt install trippy
  - method: snap
    command: snap install trippy
  - method: brew
    command: brew install trippy
  - method: winget
    command: winget install trippy
  - method: choco
    command: choco install trippy
  - method: pkgin
    command: pkgin install trippy
  - method: other
    command: pkg_add trippy
  - method: pacman
    command: pacman -S trippy
  - method: other
    command: emerge -av net-analyzer/trippy
  - method: apk
    command: apk add trippy
  - method: nix
    command: nix-env -iA trippy
  - method: docker
    command: docker run -it fujiapple/trippy
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - cli
  - command-line-interface
  - command-line-tool
  - dns
  - icmp
  - linux
  - macos
  - mtr
  - netbsd
  - network
  - networking
  - ping
  - ratatui
  - rust
  - rustlang
  - tool
  - traceroute
  - tui
  - tui-rs
  - windows
media: >-
  https://raw.githubusercontent.com/fujiapple852/trippy/master/assets/0.12.0/demo.gif
logo: >-
  https://raw.githubusercontent.com/fujiapple852/trippy/master/docs/src/assets/Trippy-Vertical-DarkMode.svg#gh-dark-mode-only
updated: '2026-10-25'
repo_stars: 8120
repo_updated: "2026-10-30"
repo_created: "2022-03-28"
repo_release: "0.13.0"
repo_release_date: "2025-05-05"
---
