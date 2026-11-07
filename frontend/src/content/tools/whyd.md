---
name: whyd
category: Logs
short_description: >-
  Find out why your Linux PC froze, crashed or shut down: whyd reads the journal
  of the previous boot and tells you in one screen.
description: >-
  A command-line tool designed to analyze system journals and explain why your
  PC froze, crashed, or unexpectedly shut down.  

  Parses system logs to diagnose complex events like kernel panics, GPU hangs,
  thermal throttling, or power loss.  

  Sanitizes sensitive data such as hostnames, IP addresses, and user names to
  allow safe report sharing.
repository_url: https://github.com/vmaltarello/whyd
author: vmaltarello
license: GPL-3.0
language: Go
installation:
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/vmaltarello/whyd/main/install.sh | sh
  - method: dnf
    command: >-
      sudo dnf install
      https://github.com/vmaltarello/whyd/releases/latest/download/whyd_linux_amd64.rpm
  - method: go
    command: go install github.com/vmaltarello/whyd/cmd/whyd@latest
platforms:
  - Linux
tags:
  - archlinux
  - bubbletea
  - cli
  - crash
  - diagnostics
  - go
  - hacktoberfest
  - journalctl
  - journald
  - linux
  - log-analysis
  - oom
  - systemd
  - terminal
  - troubleshooting
  - tui
media: https://github.com/vmaltarello/whyd/raw/main/docs/screenshots/whyd.gif
logo: https://github.com/vmaltarello/whyd/raw/main/docs/logo/logo-dark.svg
updated: '2026-10-17'
repo_stars: 86
repo_updated: "2026-10-31"
repo_created: "2026-10-09"
repo_release: "v0.3.0"
repo_release_date: "2026-10-31"
repo_badge: true
---
