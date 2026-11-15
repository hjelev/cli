---
name: tig
category: Git
short_description: Text-mode interface for git
description: >-
  Tig is a fast, text-mode ncurses-based interface for Git that acts as both a
  repository browser and a staging assistant.


  It lets you navigate commit logs, inspect diffs, stage individual hunks, and
  search history smoothly using Vim-like keyboard shortcuts directly in the
  terminal.


  Seamlessly integrating into any Git workflow, it provides a lightweight and
  lightning-fast visual overview of complex repository changes without leaving
  the command line.
repository_url: https://github.com/jonas/tig
website: https://jonas.github.io/tig/
author: jonas
license: GPL-2.0
language: C
installation:
  - method: apt
    command: apt-get install tig
  - method: pacman
    command: pacman -S tig
  - method: dnf
    command: dnf install tig
  - method: yum
    command: yum install tig
  - method: apk
    command: apk add tig
  - method: brew
    command: brew install tig
  - method: port
    command: sudo port install tig
  - method: pkg
    command: pkg install tig
  - method: pkgin
    command: pkgin install tig
platforms:
  - Linux
  - macOS
tags:
  - c
  - git
  - ncurses
  - tui
media: https://cli.masoko.net/uploads/tig/media.png
logo: https://avatars.githubusercontent.com/u/8417?v=4
updated: '2026-11-15'
repo_stars: 13382
repo_stars_recent: 1
repo_updated: "2026-11-11"
repo_created: "2009-03-01"
repo_release: "tig-2.6.1"
repo_release_date: "2026-06-13"
---
