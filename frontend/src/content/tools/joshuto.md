---
name: joshuto
category: File Management
short_description: ranger-like terminal file manager written in Rust
description: >-
  Joshuto is a blazing-fast, Ranger-inspired terminal file manager written in
  Rust that provides vim-like keybindings and asynchronous I/O operations.


  It features a clean multi-column layout, image and file previews, tabbed
  navigation, and customizable keymaps for effortless file management in the
  shell.


  Designed for performance and extensibility, it integrates smoothly into
  terminal-centric workflows as a powerful alternative to traditional GUI file
  browsers.
repository_url: https://github.com/kamiyaa/joshuto
website: https://crates.io/crates/joshuto
author: kamiyaa
license: LGPL-3.0
language: Rust
installation:
  - method: brew
    command: brew install joshuto
  - method: port
    command: sudo port install joshuto
  - method: cargo
    command: cargo install joshuto
  - method: pacman
    command: pacman -S joshuto-bin
  - method: zypper
    command: zypper install joshuto
  - method: nix
    command: nix-env -iA joshuto
platforms:
  - Linux
  - macOS
tags:
  - clipboard
  - concurrency
  - file-manager
  - hacktoberfest
  - joshuto
  - linux
  - ncurses
  - ranger
  - rust
  - termion
  - toml
  - tui
  - tui-rs
media: https://raw.githubusercontent.com/kamiyaa/joshuto/main/screenshot.png
logo: https://avatars.githubusercontent.com/u/8345320?v=4
updated: '2026-11-15'
---
