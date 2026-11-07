---
name: sysdig
category: System Monitoring
short_description: >-
  Linux system exploration and troubleshooting tool with first class support for
  containers
description: >-
  Linux system exploration and troubleshooting tool with first class support for
  containersSysdig is a powerful system-level visibility tool for Linux that
  captures detailed system calls, process activity, and container events
  directly from the kernel.  

  It provides advanced filtering, live traffic inspection, and pre-built Lua
  scripts ("chisels") for real-time performance troubleshooting and security
  auditing.  

  It supports exporting activity to .scap trace files for offline analysis and
  includes an interactive terminal UI (csysdig).
repository_url: https://github.com/draios/sysdig
website: http://www.sysdig.com/
author: draios
license: Other
language: C++
installation:
  - method: apt
    command: sudo apt install -y sysdig
  - method: dnf
    command: sudo dnf install sysdig
  - method: pacman
    command: sudo pacman -S sysdig
platforms:
  - Linux
  - macOS
tags:
  - ps
media: https://cli.masoko.net/uploads/sysdig/media.png
logo: https://cli.masoko.net/uploads/sysdig/logo.png
updated: '2026-10-28'
repo_stars: 8315
repo_updated: "2026-04-13"
repo_created: "2014-01-15"
repo_release: "0.41.4"
repo_release_date: "2026-01-29"
---
