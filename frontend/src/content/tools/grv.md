---
name: grv
category: Git
short_description: GRV is a terminal interface for viewing git repositories
description: >-
  A terminal-based interface (TUI) for viewing and interacting with Git
  repositories.

  Organizes refs, commits, branches, and diffs using customizable tabs and
  splits with Vim-like keybindings.

  Monitors the filesystem in real-time to automatically update views as the
  repository changes.
repository_url: https://github.com/rgburke/grv
author: rgburke
license: GPL-3.0
language: Go
installation:
  - method: brew
    command: brew install grv
  - method: other
    command: pkg install grv
  - method: snap
    command: sudo snap install grv
  - method: pacman
    command: sudo pacman -S grv
platforms:
  - Linux
  - macOS
tags:
  - git
  - go
  - golang
  - ncurses-tui
  - terminal-based
media: https://raw.githubusercontent.com/rgburke/grv/master/doc/grv-history-view.png
logo: https://avatars.githubusercontent.com/u/7596018?v=4
updated: '2026-07-13'
---
