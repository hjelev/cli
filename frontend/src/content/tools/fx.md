---
name: fx
category: Data Processing
short_description: Terminal JSON viewer & processor
description: >-
  A powerful interactive terminal JSON viewer and processor designed for
  inspecting complex data structures.  

  Supports querying, filtering, and transforming JSON using native JavaScript
  functions and expressions.  

  Built in Go, featuring a fast, lightweight TUI with Vim-inspired navigation,
  search, and mouse support.
repository_url: https://github.com/antonmedv/fx
website: https://fx.wtf
author: antonmedv
license: MIT
language: Go
installation:
  - method: brew
    command: brew install fx
  - method: script
    command: curl https://fx.wtf/install.sh | sh
  - method: go
    command: go install github.com/antonmedv/fx@latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - command-line
  - json
  - tui
media: https://fx.wtf/img/preview.gif
logo: https://fx.wtf/img/favicons/apple-touch-icon.png
updated: '2026-07-15'
---
