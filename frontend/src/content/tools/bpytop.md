---
name: bpytop
category: System Monitoring
short_description: Linux/OSX/FreeBSD resource monitor
description: >-
  Bpytop is a command-line resource monitor written in Python that tracks and
  displays real-time statistics for your CPU, memory, disks, network, and active
  processes. It features a responsive, game-inspired user interface with full
  mouse support, customizable themes, and process filtering or management
  capabilities. As a continuation of bashtop, it supports Linux, macOS, and
  FreeBSD platforms (though the author later developed a C++ successor called
  btop).
repository_url: https://github.com/aristocratos/bpytop
author: aristocratos
license: Apache-2.0
language: Python
installation:
  - method: pip
    command: pip3 install bpytop --upgrade
  - method: brew
    command: brew install bpytop
  - method: port
    command: port install bpytop
  - method: pacman
    command: sudo pacman -S bpytop
  - method: apt
    command: sudo apt install bpytop
  - method: pkg
    command: sudo pkg install bpytop
  - method: dnf
    command: sudo dnf install bpytop
  - method: other
    command: sudo emerge -av sys-process/bpytop
  - method: snap
    command: sudo snap install bpytop
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - top
media: https://github.com/aristocratos/bpytop/raw/master/Imgs/main.png
logo: https://github.com/aristocratos/bpytop/raw/master/Imgs/logo.png
updated: '2026-10-28'
repo_stars: 10925
repo_updated: "2025-06-01"
repo_created: "2020-07-01"
repo_release: "v1.0.68"
repo_release_date: "2021-12-22"
---
