---
name: htop
category: System Monitoring
short_description: htop - an interactive process viewer
description: >-
  htop is a cross-platform interactive process viewer.


  htop allows scrolling the list of processes vertically and horizontally to see
  their full command lines and related information like memory and CPU
  consumption. Also system wide information, like load average or swap usage, is
  shown.


  The information displayed is configurable through a graphical setup and can be
  sorted and filtered interactively.


  Tasks related to processes (e.g. killing and renicing) can be done without
  entering their PIDs.
repository_url: https://github.com/htop-dev/htop
website: https://htop.dev/
author: htop-dev
license: GPL-2.0
language: C
installation:
  - method: apt
    command: sudo apt install htop
  - method: brew
    command: brew install htop
  - method: dnf
    command: sudo dnf install htop
  - method: pacman
    command: sudo pacman -S htop
  - method: apk
    command: sudo apk add htop
platforms:
  - Linux
  - macOS
tags:
  - tui
  - top-alternative
  - resource-monitor
  - process
  - viewer
  - console
  - terminal
  - linux
  - macos
  - bsd
  - c
  - hacktoberfest
media: >-
  https://raw.githubusercontent.com/htop-dev/htop/main/docs/images/screenshot.png
logo: >-
  https://raw.githubusercontent.com/htop-dev/htop-dev.github.io/refs/heads/main/images/htop-small.png
updated: '2026-07-08'
repo_stars: 8189
repo_updated: "2026-07-19"
repo_created: "2020-08-17"
repo_release: "3.5.2"
repo_release_date: "2026-07-18"
---
