---
name: kdash
category: DevOps & Cloud
short_description: A simple and fast dashboard for Kubernetes
description: >-
  A fast and minimalist terminal-based dashboard for exploring Kubernetes
  clusters.  

  Provides real-time resource viewing, log streaming, and utilization metrics in
  a clean TUI.  

  Built with Rust for high performance and low resource consumption during
  cluster inspections.
repository_url: https://github.com/kdash-rs/kdash
website: https://kdash-rs.github.io
author: kdash-rs
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install kdash-rs/kdash/kdash
  - method: other
    command: choco install kdash
  - method: other
    command: yay -S kdash-bin
  - method: cargo
    command: cargo install kdash
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/kdash-rs/kdash/main/scripts/install.sh |
      sh
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - dashboard
  - hacktoberfest
  - k8s
  - kubernetes
  - monitoring
  - rust
  - tui
media: https://raw.githubusercontent.com/kdash-rs/kdash/main/screenshots/ui.gif
logo: https://avatars.githubusercontent.com/u/82433141?s=200&v=4
updated: '2026-07-13'
repo_stars: 2500
repo_updated: "2026-07-13"
repo_created: "2021-04-13"
repo_release: "v2.1.0"
---
