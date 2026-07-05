---
name: lf
category: File Management
short_description: >-
  lf (as in "list files") is a terminal file manager written in Go with a heavy
  inspiration from ranger file manager.
description: >-
  lf (short for "list files") is a lightweight, high-performance terminal file
  manager written in Go. Inspired heavily by the popular ranger file manager, lf
  is designed with a focus on efficiency and minimalism, favoring a modular
  philosophy where it delegates tasks like text editing or complex file
  operations to specialized external tools rather than building them into the
  application itself.


  Key features of lf include:


  * Speed and Efficiency: Built as a single static binary with no external
  runtime dependencies, it offers extremely fast startup times and a low memory
  footprint.


  * Server/Client Architecture: It uses a unique remote control system, allowing
  you to manage multiple lf instances or communicate with them via shell
  commands.


  * Highly Customizable: It supports custom keybindings (with defaults similar
  to vi or readline), shell-based configuration, and asynchronous I/O to ensure
  the UI remains responsive even during heavy operations.


  * Cross-Platform: It is fully compatible with Linux, macOS, BSD, and Windows.
repository_url: https://github.com/gokcehan/lf
author: Gökçehan Kara
license: MIT
language: Go
installation:
  - method: apt
    command: sudo apt install lf
  - method: brew
    command: brew install lf
  - method: go
    command: >-
      env CGO_ENABLED=0 go install -trimpath -ldflags="-s -w"
      github.com/gokcehan/lf@latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - tui
  - file-manager
media: https://www.tecmint.com/wp-content/uploads/2024/09/Lf-Terminal-File-Manager.webp
logo: https://avatars.githubusercontent.com/u/1835672?v=4
updated: '2026-07-04'
github_stars: 9372
github_updated: "2026-06-25"
github_release: "r41"
---
