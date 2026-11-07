---
name: nethogs
category: System Monitoring
short_description: >-
  NetHogs is a lightweight Linux console utility that monitors network bandwidth
  usage grouped by process rather than by protocol or subnet.
description: >-
  NetHogs is a small, open-source console tool for Linux that groups network
  bandwidth usage by process rather than by protocol or subnet. By inspecting
  the /proc filesystem and capturing traffic via libpcap, it provides a
  real-time "net top" dashboard. This makes it straightforward to instantly
  identify which specific application or program is consuming your network
  bandwidth.
repository_url: https://github.com/raboof/nethogs
author: raboof
license: GPL-2.0
language: C++
installation:
  - method: apt
    command: apt-get install nethogs
  - method: pacman
    command: pacman -S nethogs
  - method: dnf
    command: dnf install nethogs
  - method: other
    command: yum install nethogs
  - method: other
    command: zypper install nethogs
  - method: apk
    command: apk add nethogs
  - method: nix
    command: nix-env -iA nethogs
  - method: brew
    command: brew install nethogs
  - method: other
    command: emerge net-analyzer/nethogs
platforms:
  - Linux
  - macOS
tags:
  - net top
media: https://raw.githubusercontent.com/raboof/nethogs/main/doc/screenshot.png
logo: https://avatars.githubusercontent.com/u/131856?v=4
updated: '2026-11-07'
---
