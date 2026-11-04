---
name: nerdlog
category: Logs
short_description: >-
  Nerdlog: fast, remote-first, multi-host TUI log viewer with timeline histogram
  and no central server
description: >-
  Nerdlog is a fast, remote-first, multi-host terminal user interface (TUI) log
  viewer designed as a lightweight alternative to traditional log management
  systems.


  It requires no central server, connecting directly to remote nodes via SSH to
  perform efficient log analysis and filtering on the fly.


  It features an interactive timeline histogram, remote pattern searching, and
  gzipped data transfer for optimized performance across multiple machines.
repository_url: https://github.com/dimonomid/nerdlog
website: https://dmitryfrank.com/projects/nerdlog/article
author: dimonomid
license: BSD-2-Clause
language: Go
installation:
  - method: apt
    command: sudo apt install libx11-dev
  - method: go
    command: go install github.com/dimonomid/nerdlog/cmd/nerdlog@latest
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - devops-tools
  - distributed
  - go
  - histogram
  - log-analysis
  - log-management
  - log-monitor
  - log-search
  - log-viewer
  - log-visualization
  - logging
  - logs
  - monitoring
  - remote
  - self-hosted
  - syslog
  - timeline
  - tui
media: https://dmitryfrank.com/_media/projects/nerdlog/nerdlog_demo.gif
logo: https://avatars.githubusercontent.com/u/1329932?v=4
updated: '2026-10-28'
repo_stars: 1590
repo_updated: "2026-10-03"
repo_created: "2025-04-20"
repo_release: "v1.13.0"
repo_release_date: "2026-10-03"
comments: []
---
