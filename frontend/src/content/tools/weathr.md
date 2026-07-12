---
name: weathr
category: Media & Entertainment
short_description: a terminal weather app with ascii animation
description: >-
  A terminal weather app with ASCII animations driven by real-time weather data.


  Features real-time weather from Open-Meteo with animated rain, snow,
  thunderstorms, flying airplanes, day/night cycles, and auto-location
  detection.
repository_url: https://github.com/veirt/weathr
author: Veirt
license: GPL-3.0
language: Rust
installation:
  - method: cargo
    command: cargo install weathr
  - method: script
    command: >-
      curl -fsSL https://raw.githubusercontent.com/Veirt/weathr/main/install.sh
      | sh
  - method: docker
    command: docker run --rm -it ghcr.io/veirt/weathr:latest
  - method: brew
    command: brew install Veirt/veirt/weathr
  - method: other
    command: sudo port install weathr
  - method: winget
    command: winget install -i Veirt.weathr
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - rust-lang
  - terminal
  - tui
  - weather
media: https://github.com/Veirt/weathr/raw/main/docs/thunderstorm-night.gif
logo: https://avatars.githubusercontent.com/u/55097092?v=4
updated: '2026-07-11'
github_stars: 2935
github_updated: "2026-05-06"
github_created: "2026-02-08"
github_release: "v1.4.0"
---
