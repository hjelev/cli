---
name: leaf
category: Notes & Documents
short_description: Terminal Markdown previewer — GUI-like experience.
description: >-
  A feature-rich terminal Markdown viewer built with Rust that delivers a
  GUI-like previewing experience inside your command line.   

  Supports rich formatting, 40+ language syntax-highlighted code blocks, LaTeX
  math, ASCII Mermaid diagrams, and YAML frontmatter.   

  Features interactive navigation with mouse and Vim keybindings, a sidebar
  Table of Contents, live file watching, fuzzy searching, and seamless editor
  integration.
repository_url: https://github.com/rivolink/leaf
website: https://leaf.rivolink.mg
author: RivoLink
license: MIT
language: Rust
installation:
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/RivoLink/leaf/main/scripts/install.sh |
      sh
  - method: powershell
    command: >-
      irm
      https://raw.githubusercontent.com/RivoLink/leaf/main/scripts/install.ps1 |
      iex
  - method: npm
    command: npm install -g @rivolink/leaf
  - method: brew
    command: brew install leaf-markdown-viewer
  - method: cargo
    command: cargo install leaf-markdown-viewer
  - method: scoop
    command: scoop install leaf-markdown-viewer
  - method: aur
    command: yay -S leaf-markdown-viewer
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - markdown
  - markdown-viewer
  - preview
  - terminal
  - termux
  - tui
media: https://raw.githubusercontent.com/RivoLink/leaf/main/images/preview.png
logo: https://leaf.rivolink.mg/images/logo/logo.svg
updated: '2026-11-05'
repo_stars: 2368
repo_updated: "2026-11-05"
repo_created: "2026-04-06"
repo_release: "1.29.2"
repo_release_date: "2026-10-25"
---
