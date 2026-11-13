---
name: mdcat
category: Notes & Documents
short_description: cat for markdown
description: >-
  A sophisticated Markdown viewer for text terminals that nicely renders
  CommonMark, definition lists, tables, and inline markup.   

  Features syntax highlighting for code blocks, inline image rendering via
  Sixel, kitty, or iTerm2 protocols, and math/Mermaid diagram support.   

  Includes multiple built-in color themes, auto dark/light detection, smart
  punctuation, and a live-preview --watch mode.
repository_url: https://github.com/BIRSAx2/mdcat
website: https://crates.io/crates/mdcat
author: BIRSAx2
license: MPL-2.0
language: Rust
installation:
  - method: brew
    command: brew install mdcat
  - method: aur
    command: paru -S mdcat-bin
  - method: nix
    command: nix-env -iA nixpkgs.mdcat
  - method: port
    command: sudo port install mdcat
  - method: pkg
    command: pkg install mdcat
  - method: xbps
    command: sudo xbps-install mdcat
  - method: pacman
    command: pacman -S mingw-w64-x86_64-mdcat
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cat
  - iterm2
  - kitty
  - markdown
  - terminal
media: >-
  https://raw.githubusercontent.com/BIRSAx2/mdcat/main/screenshots/side-by-side.png
logo: https://avatars.githubusercontent.com/u/39867122?v=4
updated: '2026-11-05'
repo_stars: 174
repo_updated: "2026-11-13"
repo_created: "2026-06-18"
repo_release: "mdcat-2.20.1"
repo_release_date: "2026-11-13"
---
