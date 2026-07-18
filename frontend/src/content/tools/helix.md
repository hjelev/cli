---
name: helix
category: Text Editors
short_description: A post-modern modal text editor.
description: >-
  Helix is a post-modern, terminal-based modal text editor written in Rust.

  It features built-in Language Server Protocol (LSP) support, robust
  Tree-sitter syntax highlighting, and native multiple selections.  

  Designed for efficiency without the need for heavy configuration or external
  plugins out of the box.
repository_url: https://github.com/helix-editor/helix
website: https://helix-editor.com
author: helix-editor
license: MPL-2.0
language: Rust
installation:
  - method: dnf
    command: sudo dnf install helix
  - method: snap
    command: snap install --classic helix
  - method: brew
    command: brew install helix
  - method: winget
    command: winget install Helix.Helix
  - method: pacman
    command: pacman -S mingw-w64-ucrt-x86_64-helix
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - kakoune
  - rust
  - text-editor
  - vim
media: https://github.com/helix-editor/helix/raw/master/screenshot.png
logo: https://helix-editor.com/logo.svg
updated: '2026-07-11'
repo_stars: 45512
repo_updated: "2026-07-16"
repo_created: "2020-06-01"
repo_release: "25.07.1"
repo_release_date: "2025-07-18"
---
