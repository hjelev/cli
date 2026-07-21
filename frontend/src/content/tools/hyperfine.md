---
name: hyperfine
category: Development Tools
short_description: A command-line benchmarking tool
description: >-
  Hyperfine is a command-line benchmarking tool that allows you to accurately
  measure the execution time of arbitrary shell commands.  

  It features automatic statistical analysis (mean, standard deviation,
  min/max), warm-up runs, and the ability to detect outlier noise.  

  Written in Rust, it can export benchmarking results directly to various
  formats like JSON, Markdown, CSV, and ASCII charts.
repository_url: https://github.com/sharkdp/hyperfine
author: sharkdp
license: Apache-2.0
language: Rust
installation:
  - method: apt
    command: apt install hyperfine
  - method: winget
    command: winget install sharkdp.hyperfine
  - method: scoop
    command: scoop install hyperfine
  - method: dnf
    command: dnf install hyperfine
  - method: apk
    command: apk add hyperfine
  - method: pacman
    command: pacman -S hyperfine
  - method: apt
    command: apt install hyperfine
  - method: other
    command: emerge app-benchmarks/hyperfine
  - method: cargo
    command: cargo install --locked hyperfine
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - benchmark
  - cli
  - command-line
  - rust
  - terminal
  - tool
media: https://cli.masoko.net/uploads/hyperfine/media.gif
logo: https://avatars.githubusercontent.com/u/4209276?v=4
updated: '2026-07-21'
repo_stars: 28514
repo_updated: "2026-04-30"
repo_created: "2018-01-13"
repo_release: "v1.20.0"
repo_release_date: "2025-11-18"
---
