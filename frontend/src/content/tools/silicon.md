---
name: silicon
category: Media & Entertainment
short_description: Create beautiful image of your source code.
description: >-
  silicon is a fast, feature-rich command-line tool written in Rust to create
  beautiful image previews of source code.


  It supports customizable themes, fonts, window headers, drop shadows, padding,
  and line numbers.


  It reads code directly from files or stdin, renders output using syntect and
  Rust's font rendering, and saves as PNG.
repository_url: https://github.com/Aloxaf/silicon
author: Aloxaf
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install silicon
  - method: port
    command: sudo port install silicon
  - method: pacman
    command: pacman -S silicon
  - method: nix
    command: nix-env -iA silicon
  - method: pkg
    command: pkg install silicon-code-visualizer
  - method: scoop
    command: scoop install silicon
  - method: cargo
    command: cargo install silicon
  - method: eget
    command: eget Aloxaf/silicon
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - carbon
  - presentation
  - rust
  - snippets
media: https://github.com/Aloxaf/silicon/raw/master/example/example.png
logo: https://avatars.githubusercontent.com/u/17017672?v=4
updated: '2026-11-01'
---
