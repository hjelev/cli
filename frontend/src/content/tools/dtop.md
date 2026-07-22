---
name: dtop
category: DevOps & Cloud
short_description: >-
  Terminal dashboard for Docker monitoring across multiple hosts with Dozzle
  integration.
description: >-
  A real-time terminal dashboard and container manager for monitoring Docker
  across multiple hosts.  

  Tracks live CPU, memory, and network metrics with smooth exponential moving
  averages.  

  Streams container logs and integrates directly with Dozzle for deep log
  inspections.  

  Built with Rust as a lightweight, lightning-fast command-line companion.
repository_url: https://github.com/amir20/dtop
website: https://dtop.dev/
author: amir20
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install dtop
  - method: docker
    command: >-
      docker run -v /var/run/docker.sock:/var/run/docker.sock -it
      ghcr.io/amir20/dtop
  - method: cargo
    command: cargo install dtop
  - method: script
    command: >-
      curl --proto '=https' --tlsv1.2 -LsSf
      https://github.com/amir20/dtop/releases/latest/download/dtop-installer.sh
      | sh
platforms:
  - Linux
  - macOS
tags:
  - tui
  - docker
  - monitoring
  - terminal
  - rust
  - containers
media: https://raw.githubusercontent.com/amir20/dtop/master/demo.gif
logo: https://github.com/amir20/dtop/raw/master/docs/static/dtop-icon.svg
updated: '2026-07-13'
repo_stars: 1201
repo_updated: "2026-07-21"
repo_created: "2025-06-20"
repo_release: "v0.7.9"
repo_release_date: "2026-07-10"
---
