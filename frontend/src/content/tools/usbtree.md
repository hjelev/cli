---
name: usbtree
category: System Monitoring
short_description: >-
  Live USB device tree in your terminal. Rust TUI, no root, no libusb. Full
  activity metrics on Linux; device tree on macOS/Windows.
description: >-
  Cross-platform TUI for inspecting the USB device tree (Linux, macOS, Windows).
  Enumerates devices via nusb — pure Rust, no root, no libusb.
repository_url: https://github.com/gnomeria/usbtree
website: https://gnomeria.github.io/usbtree/
author: gnomeria
license: MIT
language: Rust
installation:
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/gnomeria/usbtree/main/scripts/install.sh
      | sh
  - method: other
    command: >-
      irm
      https://raw.githubusercontent.com/gnomeria/usbtree/main/scripts/install.ps1
      | iex
  - method: other
    command: eget gnomeria/usbtree --to ~/.local/bin/usbtree
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - linux
  - macos
  - nusb
  - ratatui
  - rust
  - terminal
  - tui
  - usb
  - windows
media: >-
  https://raw.githubusercontent.com/gnomeria/usbtree/main/docs/screenshots/demo.gif
logo: https://cli.masoko.net/uploads/usbtree/logo.svg
updated: '2026-07-09'
github_stars: 139
github_updated: "2026-07-14"
github_created: "2026-07-07"
github_release: "v0.0.8"
---
