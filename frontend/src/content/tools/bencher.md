---
name: bencher
category: DevOps & Cloud
short_description: 🐰 Bencher - Continuous Benchmarking
description: >-
  Bencher is a continuous benchmarking platform designed to catch performance
  regressions locally and in CI using consistent bare-metal hardware.  

  It tracks benchmark metrics over time, integrates with popular testing
  frameworks across multiple languages, and automatically fails pull requests if
  performance degrades.  

  The suite includes a CLI tool, an API server, a web console, and native
  support for platforms like GitHub Actions.
repository_url: https://github.com/bencherdev/bencher
website: https://bencher.dev
author: bencherdev
license: Other
language: Rust
installation:
  - method: script
    command: >-
      curl --proto '=https' --tlsv1.2 -sSfL
      https://bencher.dev/download/install-cli.sh | sh
  - method: powershell
    command: powershell -c "irm https://bencher.dev/download/install-cli.ps1 | iex"
  - method: docker
    command: docker run ghcr.io/bencherdev/bencher --help
  - method: cargo
    command: >-
      cargo install --git https://github.com/bencherdev/bencher --branch main
      --locked --force bencher_cli
  - method: nix
    command: nix run github:bencherdev/bencher
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - benchmark
  - benchmarking
  - cd
  - ci
  - ci-cd
  - code-quality
  - continuous-benchmarking
  - performance
media: https://cli.masoko.net/uploads/bencher/media.svg
logo: https://avatars.githubusercontent.com/u/68773954?s=200&v=4
updated: '2026-07-21'
repo_stars: 870
repo_updated: "2026-07-20"
repo_created: "2020-07-25"
repo_release: "v0.6.10"
repo_release_date: "2026-07-18"
---
