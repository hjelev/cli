---
name: tailspin
category: Logs
short_description: 🌀 A log file highlighter
description: >-
  Tailspin (tspin) is a zero-config command-line log highlighter written in Rust
  that automatically colorizes numbers, dates, IP addresses, UUIDs, URLs, and
  severity keywords.  

  It operates without assuming fixed log formats, seamlessly working with files
  via less, streaming pipelines (stdin/stdout), or executed background
  commands.  

  It offers customizable TOML theme configurations, on-the-fly CLI regex
  matching, and built-in flags to toggle specific highlight groups or follow
  file changes.
repository_url: https://github.com/bensadeh/tailspin
author: bensadeh
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install tailspin
  - method: cargo
    command: cargo install tailspin
  - method: pacman
    command: pacman -S tailspin
  - method: nix
    command: nix-shell -p tailspin
  - method: pkgin
    command: pkgin install tailspin
  - method: pkg
    command: pkg install tailspin
  - method: scoop
    command: scoop install tailspin
platforms:
  - Linux
  - macOS
tags:
  - ccze
  - colorizer
  - colors
  - file
  - follow
  - grc
  - highlighter
  - less
  - log
  - log-file
  - logfile
  - syntax-highlighting
  - tail
media: https://raw.githubusercontent.com/bensadeh/tailspin/main/assets/main.png
logo: https://cli.masoko.net/uploads/tailspin/logo.png
updated: '2026-10-28'
repo_stars: 8034
repo_updated: "2026-11-09"
repo_created: "2022-07-03"
repo_release: "7.0.0"
repo_release_date: "2026-07-14"
comments: []
---
