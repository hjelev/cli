---
name: jless
category: Data Processing
short_description: >-
  jless is a command-line JSON viewer designed for reading, exploring, and
  searching through JSON data.
description: >-
  jless is an interactive, terminal-based JSON viewer written in Rust designed
  for exploring and navigating structured data.   

  It features expand/collapse data tree controls, Vim-inspired movement
  keybindings, and full regex-based search.  

  It cleans up JSON display by omitting redundant quotes and trailing commas,
  making large documents easy to inspect.
repository_url: https://github.com/PaulJuliusMartinez/jless
website: https://jless.io
author: PaulJuliusMartinez
license: MIT
language: Rust
installation:
  - method: pacman
    command: pacman -S jless
  - method: other
    command: zypper install jless
  - method: apk
    command: apk add jless
  - method: nix
    command: nix-shell -p jless
  - method: brew
    command: brew install jless
  - method: cargo
    command: cargo install jless
  - method: pkg
    command: pkg install jless
platforms:
  - Linux
  - macOS
tags:
  - cli
  - json
  - rust
media: https://cli.masoko.net/uploads/jless/media.gif
logo: >-
  https://raw.githubusercontent.com/PaulJuliusMartinez/jless/master/logo/mascot.svg
updated: '2026-11-01'
repo_stars: 5519
repo_updated: "2026-09-07"
repo_created: "2021-04-24"
repo_release: "v0.9.0"
repo_release_date: "2023-07-17"
---
