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
  - color
  - command-line
  - files
  - icons
  - ls
  - nerd-fonts
  - terminal
  - tools
  - hacktoberfest
logo: https://avatars.githubusercontent.com/u/141388427?v=4
media: https://eza.rocks/demo.gif
github_stars: 22578
github_updated: "2026-07-09"
github_created: "2023-07-28"
github_release: "v0.23.5"
---
