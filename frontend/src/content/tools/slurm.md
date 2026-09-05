---
name: slurm
category: Networking
short_description: yet another realtime network interface monitor
description: >-
  A lightweight, terminal-based network load monitor designed to track real-time
  traffic statistics.  

  Features curses ASCII graphics with customizable graph modes, including
  combined RX/TX and split views.  

  Supports monitoring any network interface across Linux, BSD and macOS with
  minimal resource overhead.
repository_url: https://github.com/mattthias/slurm
website: http://github.com/mattthias/slurm/wiki/
author: mattthias
license: GPL-2.0
language: C
installation:
  - method: apt
    command: apt install rust-slurm
  - method: pacman
    command: pacman -S slurm
  - method: apk
    command: apk add slurm
  - method: brew
    command: brew install slurm
  - method: pkg
    command: pkg install slurm
platforms:
  - Linux
  - macOS
tags:
  - network-monitor
  - bandwidth
  - sysadmin
media: https://screenshots.debian.net/screenshot/slurm/1693
logo: https://avatars.githubusercontent.com/u/966147?v=4
updated: '2026-09-05'
repo_stars: 423
repo_updated: "2024-02-04"
repo_created: "2011-09-08"
repo_release: "upstream/0.4.4"
repo_release_date: "2022-04-29"
---
