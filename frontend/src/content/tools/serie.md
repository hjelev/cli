---
name: serie
category: Git
short_description: A rich git commit graph in your terminal, like magic 📚
description: >-
  Serie is a TUI application written in Rust that leverages terminal image
  protocols (like Kitty and iTerm2) to render rich, highly readable Git commit
  graphs directly in the terminal.   

  It serves as a clean, visual-first alternative to traditional git log --graph
  commands, allowing you to inspect complex branch lanes and history trees
  without switching to a heavy GUI.   

  Designed specifically as a lightweight viewer rather than a full Git client,
  it provides a fast, streamlined way to explore repository timelines right from
  your command-line workflow.
repository_url: https://github.com/lusingander/serie
website: https://lusingander.github.io/serie/
author: lusingander
license: MIT
language: Rust
installation:
  - method: pacman
    command: pacman -S serie
  - method: brew
    command: brew install lusingander/tap/serie
  - method: pkgin
    command: pkgin install serie
  - method: cargo
    command: cargo install --locked serie
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - git
  - git-client
  - git-graph
  - git-log
  - git-tools
  - ratatui
  - terminal
  - tui
media: https://raw.githubusercontent.com/lusingander/serie/master/img/demo.gif
logo: https://avatars.githubusercontent.com/u/31386431?v=4
updated: '2026-11-15'
---
