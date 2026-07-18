---
name: csvlens
category: Data Processing
short_description: Command line csv viewer
description: >-
  csvlens is a powerful, command-line CSV file viewer designed to provide an
  interactive experience similar to less, but tailored for structured data.  

  It allows users to easily navigate, search, filter, and sort large CSV files
  directly in the terminal without loading them entirely into memory.  

  With support for features like column selection, custom delimiters, and
  copying data to the clipboard, it is an essential tool for quick data
  exploration and manipulation.
repository_url: https://github.com/YS-L/csvlens
author: YS-L
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install csvlens
  - method: pacman
    command: sudo pacman -S csvlens
  - method: cargo
    command: cargo install csvlens
  - method: winget
    command: winget install --id YS-L.csvlens
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - tui
  - data-viewer
  - csv
media: https://github.com/YS-L/csvlens/raw/main/.github/demo.gif
logo: https://avatars.githubusercontent.com/u/2175543?v=4
updated: '2026-07-18'
---
