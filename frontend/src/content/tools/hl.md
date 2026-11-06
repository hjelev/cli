---
name: hl
category: Logs
short_description: >-
  A fast and powerful log viewer and processor that converts JSON logs or logfmt
  logs into a clear human-readable format.
description: >-
  A fast, high-performance command-line log viewer and processor that transforms
  structured JSON or logfmt logs into clean, human-readable output.   

  Features lightning-fast scanning (~2 GiB/s) and indexing capabilities,
  handling massive multi-gigabyte and compressed log files with ease.   

  Includes advanced expression queries, precise time-range filtering, and live
  chronological synchronization across multiple log sources.
repository_url: https://github.com/pamburus/hl
author: pamburus
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install hl
  - method: script
    command: >-
      curl -sSfL
      https://github.com/pamburus/hl/releases/latest/download/hl-linux-x86_64-musl.tar.gz
      | tar xz
  - method: pacman
    command: pacman -S hl
  - method: cargo
    command: cargo install --locked --git https://github.com/pamburus/hl.git
  - method: nix
    command: nix run github:pamburus/hl
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - command-line-tool
  - hl
  - human
  - json
  - json-log
  - json-logging
  - json-logs
  - log
  - log-viewer
  - logfmt
  - logging
  - logs
  - rust
  - structured-logging
  - translates-json-logs
  - viewer
media: https://cli.masoko.net/uploads/hl/media.svg
logo: https://cli.masoko.net/uploads/hl/logo.svg
updated: '2026-11-05'
repo_stars: 3325
repo_updated: "2026-11-02"
repo_created: "2020-08-04"
repo_release: "v0.36.5"
repo_release_date: "2026-10-21"
---
