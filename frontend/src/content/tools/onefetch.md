---
name: onefetch
category: Git
short_description: Command-line Git information tool
description: >-
  Onefetch is a command-line Git information tool that displays project
  information and code statistics for a local Git repository directly in your
  terminal. The tool works completely offline with a focus on performance and
  customizability.
repository_url: https://github.com/o2sh/onefetch
website: https://onefetch.dev
author: o2sh
license: MIT
language: Rust
installation:
  - method: other
    command: >-
      wget
      https://github.com/o2sh/onefetch/releases/latest/download/onefetch_amd64.deb
      && sudo dpkg -i ./onefetch_amd64.deb && rm onefetch_amd64.deb
  - method: pacman
    command: pacman -S onefetch
  - method: brew
    command: brew install onefetch
  - method: winget
    command: winget install onefetch
  - method: apk
    command: apk add onefetch
  - method: cargo
    command: cargo install onefetch
  - method: eget
    command: eget o2sh/onefetch
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - command-line
  - command-line-interface
  - git
  - rust
  - tool
media: https://github.com/o2sh/onefetch/raw/main/assets/screenshot-2.png
logo: https://github.com/o2sh/onefetch/raw/main/assets/onefetch.svg
updated: '2026-08-18'
repo_stars: 12034
repo_updated: "2026-09-02"
repo_created: "2018-09-14"
repo_release: "2.28.1"
repo_release_date: "2026-08-30"
---
