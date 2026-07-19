---
name: orbiton
category: Text Editors
short_description: Snappy and configuration-free text editor/IDE for the terminal.
description: >-
  Suitable for writing git commit messages, editing Markdown, config files,
  source code, man pages and for quick edit-format-compile cycles when
  programming. Has syntax highlighting, jump-to-error, rainbow parentheses,
  macros, cut/paste portals, LSP support and a simple gdb+dlv frontend.
repository_url: https://github.com/xyproto/orbiton
website: https://roboticoverlords.org/orbiton
author: xyproto
license: BSD-3-Clause
language: Go
installation:
  - method: go
    command: >-
      go install github.com/xyproto/orbiton/v2@latest && mv -i ~/go/bin/orbiton
      ~/go/bin/o
  - method: brew
    command: brew install orbiton
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - command-line
  - editor
  - freebsd
  - gdb
  - gleam
  - go
  - golang
  - ide
  - image-viewer
  - linux
  - odin
  - openbsd
  - rainbow-parentheses
  - rust
  - terminal
  - text-editor
  - tui
  - unix
  - vt100
  - zig
media: https://github.com/xyproto/orbiton/raw/main/rec/gif/debug_c.gif
logo: https://github.com/xyproto/orbiton/raw/main/img/icon_128x128.png
updated: '2026-07-12'
repo_stars: 686
repo_updated: "2026-07-18"
repo_created: "2019-09-30"
repo_release: "v2.74.4"
repo_release_date: "2026-06-18"
---
