---
name: ComChan
category: Development Tools
short_description: A Blazingly Fast Minimal Serial Monitor with serial plottter TUI and more
description: |-
  ComChan is a terminal-based serial monitor with the following features:
  1. Serial Plotter TUI
  2. 3D telemetry viewer (Braille wireframe and 3D objects)
  3. BLE logs viewer
  4. Defmt logs viewer
  5. File logging (`.log` and `.csv`)
  6. Export plot to SVG

  and more....
repository_url: https://github.com/Vaishnav-Sabari-Girish/ComChan
website: https://blog.vaishnavs.is-a.dev/comchan/
author: Vaishnav-Sabari-Girish
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install comchan --features ratty,ble
  - method: cargo
    command: cargo binstall comchan
  - method: aur
    command: paru -S comchan-bin
  - method: aur
    command: yay -S comchan-bin
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - 3d
  - cross-platform
  - defmt
  - embedded-systems
  - grindhouse
  - ratatui
  - ratty
  - rtt
  - rust
  - serial-communication
  - telemetry
  - tui
media: https://github.com/Vaishnav-Sabari-Girish/ComChan/wiki/videos/normal.gif
logo: https://cli.masoko.net/uploads/comchan/logo.png
updated: '2026-07-21'
repo_stars: 164
repo_updated: "2026-07-18"
repo_created: "2025-06-28"
repo_release: "v0.14.0"
repo_release_date: "2026-07-06"
---
