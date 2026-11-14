---
name: aoc-tui
category: Utilities & Other
short_description: Advent of Code TUI
description: >-
  A terminal UI for Advent of Code.

  Browse years/days, view the puzzle text with basic HTML styling, download your
  personal input, edit a solution in your $EDITOR, run it, and submit answers —
  all from one TUI.


  Features: 

  - Year / day picker with star progress

  - Puzzle description rendered with colours (headings, code, emphasis, links)

  - Personal input download (requires session cookie)

  - Edit solution in $VISUAL / $EDITOR (creates a template if missing)

  - Run the solution (stdin = input, stdout = answers)

  - Submit part 1 / part 2 answers

  - Clipboard support for puzzle / input / output (y)

  - Multiple language presets (D, C, C++, Rust, Python) + custom

  - Config and session stored under ~/aoc (or $AOC_DIR)
repository_url: https://github.com/craftty-org/aoc-tui
website: https://github.com/craftty-org/aoc-tui
author: Vaishnav-Sabari-Girish
license: GPL-3.0
language: Rust
installation:
  - method: cargo
    command: cargo install --git https://github.com/craftty-org/aoc-tui
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - adventofcode
  - ratatui
  - ratatui-rs
  - rust
  - tui
media: https://cli.masoko.net/uploads/aoc-tui/media.png
updated: '2026-11-14'
---
