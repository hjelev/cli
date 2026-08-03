---
name: metropolis
category: Media & Entertainment
short_description: >-
  A cyberpunk system monitor that transforms kernel metrics into a living
  terminal skyline.
description: >-
  Metropolis is a high-performance system monitor written in Rust that
  transforms your kernel metrics into a living, breathing cyberpunk skyline.  

  Traffic, weather, and neon signage dynamically react to real-time CPU, RAM,
  and Disk I/O data, replacing traditional terminal tables with immersive
  procedural animation.  

  Built with Ratatui, it is fully customizable through user-defined themes,
  config files, and runtime CLI flags to fit any terminal aesthetic.
repository_url: https://github.com/5c0/metropolis
author: 5c0
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install metropolis-tui
  - method: brew
    command: brew install 5c0/tap/metropolis
  - method: winget
    command: winget install 5c0.Metropolis
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/5c0/metropolis/main/install.sh | bash
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - cyberpunk
  - ratatui
  - retro
  - rust
  - system-monitor
  - terminal-graphics
  - tui
  - visualization
media: https://raw.githubusercontent.com/5c0/metropolis/main/docs/clean.gif
logo: https://cli.masoko.net/uploads/metropolis/logo.png
updated: '2026-07-17'
repo_stars: 270
repo_updated: "2026-06-27"
repo_created: "2026-03-16"
repo_release: "v0.1.3"
repo_release_date: "2026-05-17"
comments: []
---
