---
updated: '2026-07-02'
name: yazi
category: File Management
short_description: Blazing fast terminal file manager written in Rust, based on async I/O.
description: |
  Yazi (means "duck") is a terminal file manager written in Rust, based on
  non-blocking async I/O. It provides full asynchronous task scheduling,
  built-in support for multiple image preview protocols, a concurrent Lua
  plugin system, and integrations with ripgrep, fd, fzf, and zoxide.
repository_url: https://github.com/sxyazi/yazi
website: https://yazi-rs.github.io
author: sxyazi
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install --force yazi-build
  - method: brew
    command: brew install yazi
  - method: apt
    command: |
      curl -sS https://debian.griffo.io/EA0F721D231FDD3A0A17B9AC7808B4DD62C41256.asc | gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/debian.griffo.io.gpg
      echo "deb https://debian.griffo.io/apt $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/debian.griffo.io.list
      sudo apt update && sudo apt install yazi
  - method: dnf
    command: |
      dnf copr enable lihaohong/yazi
      dnf install yazi
  - method: pacman
    command: sudo pacman -S yazi
  - method: binary
    command: Prebuilt binaries for Linux, macOS, and Windows are available on the GitHub Releases page.
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - tui
  - file-manager
  - async
  - rust
logo: https://yazi-rs.github.io/webp/logo.webp
media: "https://awesometui.com/captures/yazi/yazi-hero.webp"
github_stars: 40024
github_updated: "2026-07-03"
github_release: "v26.5.6"
ratings:
  - user: hjelev
    value: 5
    date: '2026-07-01T21:53:11.252Z'
---
