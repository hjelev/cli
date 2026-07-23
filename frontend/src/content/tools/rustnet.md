---
name: rustnet
category: Networking
short_description: >-
  Per-process network monitoring for your terminal with deep packet inspection.
  Cross-platform, sandboxed.
description: >-
  RustNet is a terminal-based, cross-platform network monitor that maps active
  TCP, UDP, and QUIC connections directly to their owning processes using eBPF,
  ETW, or native APIs.  


  It features built-in deep packet inspection (DPI) to identify protocols like
  HTTP, TLS/SNI, and DNS without external tools, and includes sandboxing for
  security.
repository_url: https://github.com/domcyrus/rustnet
website: https://github.com/domcyrus/rustnet#quick-start
author: domcyrus
license: Apache-2.0
language: Rust
installation:
  - method: brew
    command: brew install rustnet
  - method: pacman
    command: sudo pacman -S rustnet
  - method: cargo
    command: cargo install rustnet-monitor
  - method: choco
    command: choco install rustnet
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - dpi
  - ebpf
  - freebsd
  - geoip
  - landlock
  - linux
  - macos
  - netstat-alternative
  - network-monitoring
  - packet-capture
  - process-monitoring
  - ratatui
  - rust
  - seatbelt
  - tui
  - windows
media: https://github.com/domcyrus/rustnet/raw/main/assets/rustnet.gif
logo: https://avatars.githubusercontent.com/u/884083?v=4
updated: '2026-07-22'
repo_stars: 4775
repo_updated: "2026-07-22"
repo_created: "2025-04-27"
repo_release: "v1.5.0"
repo_release_date: "2026-07-21"
---
