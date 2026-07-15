---
name: edit
category: Text Editors
short_description: We all edit.
description: >-
  A simple editor for simple needs.  


  This editor pays homage to the classic MS-DOS Editor, but with a modern
  interface and input controls similar to VS Code. The goal is to provide an
  accessible editor that even users largely unfamiliar with terminals can easily
  use.
repository_url: https://github.com/microsoft/edit
author: microsoft
license: MIT
language: Rust
installation:
  - method: winget
    command: winget install Microsoft.Edit
  - method: script
    command: >-
      curl --proto '=https' --tlsv1.2 -sSf
      https://raw.githubusercontent.com/microsoft/edit/main/assets/install.sh |
      sh
  - method: brew
    command: brew install msedit
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - editor
  - rust
  - terminal
  - text-editor
media: https://github.com/microsoft/edit/raw/main/assets/edit_hero_image.png
logo: https://avatars.githubusercontent.com/u/6154722?s=200&v=4
updated: '2026-07-12'
github_stars: 14386
github_updated: "2026-06-30"
github_created: "2025-03-21"
github_release: "v2.0.0"
---
