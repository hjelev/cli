---
name: wiremix
category: Media & Entertainment
short_description: Simple TUI audio mixer for PipeWire
description: >-
  wiremix is a simple TUI audio mixer for PipeWire. You can use it to adjust
  volumes, route audio between devices and applications, and configure audio
  device settings like input/output ports and profiles.  

  wiremix's interface is more or less a clone of the wonderful ncpamixer which
  was itself inspired by pavucontrol, so users of either should find it
  familiar.
repository_url: https://github.com/tsowell/wiremix
author: tsowell
license: Apache-2.0
language: Rust
installation:
  - method: apt
    command: sudo apt install cargo libpipewire-0.3-dev pkg-config clang
  - method: pacman
    command: sudo pacman -S pipewire pkg-config clang
  - method: cargo
    command: cargo install wiremix
platforms:
  - Linux
  - macOS
tags:
  - volume-control
  - pipewire
  - audio-mixer
media: https://cli.masoko.net/uploads/wiremix/media.gif
logo: https://avatars.githubusercontent.com/u/4044033?v=4
updated: '2026-07-18'
repo_stars: 978
repo_updated: "2026-07-12"
repo_created: "2025-04-29"
repo_release: "v0.11.0"
repo_release_date: "2026-06-05"
---
