---
name: procs
category: System Monitoring
short_description: A modern replacement for ps written in Rust
description: >-
  procs is a modern, colorful replacement for the classic Unix ps command
  written in Rust.

  It provides human-readable output, multi-column keyword searching, and process
  hierarchy tree views out of the box.  

  Additionally, it surfaces extra data like TCP/UDP ports, I/O throughput, and
  Docker container names that standard ps omits.
repository_url: https://github.com/dalance/procs
author: dalance
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install procs
  - method: winget
    command: winget install procs
  - method: dnf
    command: sudo dnf install procs
  - method: pacman
    command: sudo pacman -S procs
  - method: rpm
    command: >-
      sudo rpm -i
      https://github.com/dalance/procs/releases/download/v0.14.12/procs-0.14.12-1.x86_64.rpm
  - method: cargo
    command: cargo install procs
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - process
  - rust
media: https://cli.masoko.net/uploads/procs/media.png
logo: https://avatars.githubusercontent.com/u/4331004?v=4
updated: '2026-07-11'
repo_stars: 6108
repo_updated: "2026-07-22"
repo_created: "2019-01-28"
repo_release: "v0.14.12"
repo_release_date: "2026-06-25"
---
