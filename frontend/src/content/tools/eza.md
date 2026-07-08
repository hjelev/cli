---
updated: '2026-07-02'
name: eza
category: Directory Listing
short_description: A modern, maintained replacement for ls.
description: |
  eza is a modern replacement for ls, written in Rust. It adds colors for
  different file types, git integration, icons, tree views, and other
  improvements over the standard ls command.
repository_url: https://github.com/eza-community/eza
website: https://eza.rocks
author: eza-community
license: EUPL-1.2
language: Rust
installation:
  - method: cargo
    command: cargo install eza
  - method: brew
    command: brew install eza
  - method: apt
    command: sudo apt update && sudo apt install -y eza
  - method: dnf
    command: sudo dnf install eza
  - method: pacman
    command: pacman -S eza
  - method: binary
    command: wget -c https://github.com/eza-community/eza/releases/latest/download/eza_x86_64-unknown-linux-gnu.tar.gz -O - | tar xz
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - ls-alternative
  - file-listing
  - cli
  - rust
logo: https://avatars.githubusercontent.com/u/141388427?v=4
media: https://eza.rocks/demo.gif
github_stars: 22542
github_updated: "2026-05-31"
github_release: "v0.23.4"
---
