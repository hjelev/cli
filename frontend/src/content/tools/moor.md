---
name: moor
category: Shell & Terminal
short_description: >-
  Moor is a pager. It's designed to just do the right thing without any
  configuration.
description: >-
  A modern terminal pager designed to "just do the right thing" out of the box
  with zero configuration required.   

  Features multi-threaded background loading, fast regex searching, mouse
  support, ANSI color handling, and transparent file decompression.   

  Provides an intuitive, feature-rich drop-in replacement for traditional pagers
  like less with live-following capabilities.
repository_url: https://github.com/walles/moor
author: walles
license: Other
language: Go
installation:
  - method: brew
    command: brew install moor
  - method: apt
    command: sudo apt install moor
  - method: port
    command: sudo port install moor
  - method: emerge
    command: emerge --ask --verbose sys-apps/moor
  - method: pacman
    command: pacman -S moor
  - method: go
    command: go install github.com/walles/moor/v2/cmd/moor@latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - console
  - console-application
  - moar
  - pager
media: https://raw.githubusercontent.com/walles/moor/master/screenshot.png
logo: https://avatars.githubusercontent.com/u/158201?v=4
updated: '2026-11-05'
repo_stars: 1186
repo_updated: "2026-10-29"
repo_created: "2013-10-30"
repo_release: "v2.19.6"
repo_release_date: "2026-10-29"
---
