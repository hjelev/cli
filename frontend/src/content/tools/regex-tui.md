---
name: regex-tui
category: Development Tools
short_description: >-
  A terminal user interface (TUI) application for testing and visualizing
  regular expressions in real-time.
description: >-
  Features

  * Interactive regex editor with live validation

  * RE2 engine by default; regexp2 option with partial PCRE compatibility

  * Multi-line text input for testing

  * Visual highlighting of regex matches with alternating colors

  * Whitespace visualization: spaces (·) and line breaks (↵) are displayed as
  visible glyphs

  * Real-time feedback as you type the expression

  * Clean and intuitive terminal interface

  * Tab navigation between regex and text inputs

  * Options dialog for toggling global and case-insensitive flags
repository_url: https://github.com/vitor-mariano/regex-tui
author: Vítor Mariano
license: MIT
language: Go
installation:
  - method: go
    command: go install github.com/vitor-mariano/regex-tui@latest
  - method: aur
    command: yay -S regex-tui
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - regex
  - tui
media: >-
  https://raw.githubusercontent.com/vitor-mariano/regex-tui/master/assets/demo.gif
logo: https://avatars.githubusercontent.com/u/2306588?v=4
updated: '2026-07-04'
repo_stars: 349
repo_updated: "2026-04-12"
repo_created: "2025-10-11"
repo_release: "v0.7.0"
repo_release_date: "2026-02-21"
---
