---
name: wtf
category: Notes & Documents
short_description: The personal information dashboard for your terminal
description: >-
  WTF (or wtfutil) is a highly customizable terminal-based user interface (TUI)
  designed to act as a personal information dashboard. Written in Go, it
  aggregates real-time data from various services—such as system stats, git
  repositories, weather, and calendars—into a single modular layout. It helps
  developers and sysadmins monitor their projects, workflow metrics, and
  infrastructure directly from the command line.
repository_url: https://github.com/wtfutil/wtf
website: http://wtfutil.com
author: wtfutil
license: MPL-2.0
language: Go
installation:
  - method: pacman
    command: pacman -S wtfutil
  - method: apk
    command: apk add wtfutil
  - method: nix
    command: nix-env -iA wtf
  - method: emerge
    command: emerge sys-process/wtf
  - method: brew
    command: brew install wtfutil
  - method: port
    command: sudo port install wtfutil
  - method: pkg
    command: pkg install sysutils/go-wtf
platforms:
  - Linux
  - macOS
tags:
  - cui
  - dashboard
  - devops
  - go
  - golang
  - hacktoberfest
  - terminal
  - tui
  - wtf
  - wtfutil
media: https://raw.githubusercontent.com/wtfutil/wtf/trunk/images/screenshot.jpg
logo: https://github.com/wtfutil/wtf/raw/trunk/images/logo_transparent.png?raw=true
updated: '2026-11-07'
repo_stars: 17145
repo_updated: "2026-10-21"
repo_created: "2018-03-29"
repo_release: "v0.51.0"
repo_release_date: "2026-09-29"
---
