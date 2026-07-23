---
name: hexyl
category: Development Tools
short_description: A command-line hex viewer
description: >-
  hexyl is a hex viewer for the terminal. It uses a colored output to
  distinguish different categories of bytes (NULL bytes, printable ASCII
  characters, ASCII whitespace characters, other ASCII characters and
  non-ASCII).
repository_url: https://github.com/sharkdp/hexyl
author: sharkdp
license: Apache-2.0
language: Rust
installation:
  - method: apt
    command: sudo apt install hexyl
  - method: dnf
    command: sudo dnf install hexyl
  - method: pacman
    command: pacman -S hexyl
  - method: brew
    command: brew install hexyl
  - method: cargo
    command: cargo install hexyl
  - method: snap
    command: sudo snap install hexyl
platforms:
  - Linux
  - macOS
tags:
  - binary-data
  - command-line
  - hexadecimal
  - rust
  - tool
media: https://cli.masoko.net/uploads/hexyl/media.png
logo: https://github.com/sharkdp/hexyl/raw/master/doc/logo.svg
updated: '2026-07-15'
repo_stars: 10232
repo_updated: "2026-04-30"
repo_created: "2018-11-05"
repo_release: "v0.17.0"
repo_release_date: "2026-02-14"
---
