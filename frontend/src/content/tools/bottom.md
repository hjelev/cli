---
name: bottom
category: System Monitoring
short_description: Yet another cross-platform graphical process/system monitor.
description: >-
  Bottom (btm) is a customizable, cross-platform graphical process and system
  monitor written in Rust for the terminal. Inspired by tools like htop, gtop,
  and gotop, it features real-time charts and widgets tracking CPU, memory,
  disks, network, temperature, and batteries. It offers robust process
  management—including searching, filtering, tree views, and process
  killing—alongside extensive layout and color theme customization.
repository_url: https://github.com/ClementTsang/bottom
website: https://bottom.pages.dev
author: ClementTsang
license: MIT
language: Rust
installation:
  - method: script
    command: >-
      curl -LO
      https://github.com/ClementTsang/bottom/releases/download/0.3.0/bottom_0.3.0_amd64.deb
      && sudo dpkg -i bottom_0.3.0_amd64.deb
  - method: aur
    command: yay bottom-bin
  - method: zypper
    command: zypper in bottom
  - method: apk
    command: apk add bottom
  - method: brew
    command: brew install bottom
  - method: pkg
    command: pkg install bottom
  - method: choco
    command: choco install bottom --version=0.3.0
  - method: scoop
    command: scoop install bottom
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - bottom
  - btm
  - cli
  - cross-platform
  - monitoring
  - rust
  - terminal
  - top
  - tui
media: https://raw.githubusercontent.com/ClementTsang/bottom/main/demos/demo.gif
logo: https://avatars.githubusercontent.com/u/34804052?v=4
updated: '2026-11-07'
repo_stars: 14185
repo_updated: "2026-11-11"
repo_created: "2019-08-28"
repo_release: "0.15.0"
repo_release_date: "2026-11-01"
---
