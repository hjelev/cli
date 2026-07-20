---
name: ripgrep
category: Data Processing
short_description: >-
  ripgrep recursively searches directories for a regex pattern while respecting
  your gitignore
description: >-
  ripgrep (rg) is a high-performance, line-oriented search tool designed to
  recursively search directories for regex patterns.  

  It excels by respecting .gitignore rules, automatically skipping hidden or
  binary files, and providing fast results across Windows, macOS, and Linux.  

  Installation is simple, with pre-built binary downloads available for all
  major platforms in its official releases.
repository_url: https://github.com/BurntSushi/ripgrep
website: https://ripgrep.dev
author: BurntSushi
license: Unlicense
language: Rust
installation:
  - method: brew
    command: brew install ripgrep
  - method: port
    command: sudo port install ripgrep
  - method: choco
    command: choco install ripgrep
  - method: scoop
    command: scoop install ripgrep
  - method: winget
    command: winget install BurntSushi.ripgrep.MSVC
  - method: pacman
    command: sudo pacman -S ripgrep
  - method: dnf
    command: sudo dnf install ripgrep
  - method: apt
    command: sudo apt install ripgrep
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - command-line
  - command-line-tool
  - gitignore
  - grep
  - recursively-search
  - regex
  - ripgrep
  - rust
  - search
media: https://burntsushi.net/stuff/ripgrep1.png
logo: https://cli.masoko.net/uploads/ripgrep/logo.png
updated: '2026-07-18'
repo_stars: 66363
repo_updated: "2026-07-20"
repo_created: "2016-03-11"
repo_release: "15.2.0"
repo_release_date: "2026-07-15"
---
