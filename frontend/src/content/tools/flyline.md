---
name: flyline
category: Productivity
short_description: >-
  Flyline: a Bash plugin to replace readline for a modern line editing
  experience: syntax highlighting, agent integration, rich prompts, toolt
description: >-
  When Bash prompts you for a command, a library called readline handles your
  keystrokes. Readline lacks many features users have come to expect. Flyline is
  a readline replacement that provides an enhanced line editing experience
  with:  


  * Intellisense style autosuggestions

  * Change directory using your prompt

  * Rich prompt customizations, (asynchronous widgets), and animations

  * Fuzzy history searching

  * Mouse support (click to move cursor, select text)

  * Improvements to Bash's tab completion

  * Synthesize tab completion suggestions with flycomp

  * Agent assisted command writing

  * Tooltips

  * Text selection

  * Auto close brackets and quotes

  * Syntax highlighting

  * Runs in the same process as Bash

  * Cursor animations and styles
repository_url: https://github.com/HalFrgrd/flyline
author: HalFrgrd
license: GPL-3.0
language: Rust
installation:
  - method: script
    command: >-
      curl -sSfL
      https://github.com/HalFrgrd/flyline/releases/latest/download/install.sh |
      sh
  - method: other
    command: paru -S flyline
platforms:
  - Linux
  - macOS
tags:
  - bash
  - bash-plugin
  - line-editor
  - rust
  - terminal
media: https://github.com/HalFrgrd/flyline/releases/download/assets/demo_overview.gif
logo: https://avatars.githubusercontent.com/u/4559349?v=4
updated: '2026-07-09'
github_stars: 818
github_updated: "2026-07-07"
github_release: "v1.3.0"
---
