---
name: btop
category: System Monitoring
short_description: A monitor of resources
description: >-
  btop is a highly polished, terminal-based system resource monitor (TUI) for
  Linux, macOS, and FreeBSD.


  Written in C++ as the performance-focused successor to bashtop and bpytop, it
  provides a visually striking, interactive dashboard for tracking system
  metrics with very low overhead.


  Key features include:


  * Comprehensive Metrics: Detailed, customizable graphs for CPU (per-core),
  memory, disks, and network usage.


  * Process Management: An interactive process list with tree views and
  filtering, allowing you to easily sort processes and send signals (like
  SIGKILL) directly from the UI.


  * Advanced TUI UX: Full mouse support, custom themes, and an interface that
  maximizes the visual capabilities of modern terminal emulators.


  Essentially, it is a modernized, heavy-duty alternative to htop or top wrapped
  in a highly customizable terminal interface.
repository_url: https://github.com/aristocratos/btop
author: Jakob P. Liljenberg
license: Apache-2.0
language: C++
installation:
  - method: apt
    command: sudo apt install btop
  - method: brew
    command: brew install btop
platforms:
  - Linux
  - macOS
tags:
  - tui
  - top-alternative
  - resource-monitor
media: https://github.com/aristocratos/btop/raw/main/Img/normal.png
logo: https://github.com/aristocratos/btop/raw/main/Img/logo.png
updated: '2026-07-08'
repo_stars: 33564
repo_updated: "2026-07-18"
repo_created: "2021-05-06"
repo_release: "v1.4.7"
repo_release_date: "2026-05-01"
---
