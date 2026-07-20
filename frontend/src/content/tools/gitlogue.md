---
name: gitlogue
category: Git
short_description: >-
  A cinematic Git commit replay tool for the terminal, turning your Git history
  into a living, animated story.
description: >-
  Gitlogue is a cinematic terminal tool that replays Git commit history with
  realistic typing animations, syntax highlighting, and file tree transitions.  

  It serves as a creative way to visualize code evolution, present commit
  histories, or simply create an engaging "look busy" screensaver.  

  The tool is highly customizable with built-in themes and supports a wide range
  of programming languages via Tree-sitter.
repository_url: https://github.com/unhappychoice/gitlogue
author: unhappychoice
license: ISC
language: Rust
installation:
  - method: brew
    command: brew install gitlogue
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/unhappychoice/gitlogue/main/install.sh |
      bash
  - method: cargo
    command: cargo install gitlogue
  - method: pacman
    command: pacman -S gitlogue
  - method: nix
    command: nix run github:unhappychoice/gitlogue
  - method: nix
    command: nix profile install github:unhappychoice/gitlogue
platforms:
  - Linux
  - macOS
tags:
  - cli
  - cli-tool
  - code-animation
  - commit-history
  - developer-tools
  - git
  - git-history
  - git-visualization
  - productivity
  - ratatui
  - rust
  - screensaver
  - syntax-highlighting
  - terminal
  - terminal-app
  - terminal-based
  - terminal-screensaver
  - tree-sitter
  - tui
  - visualization
media: https://cli.masoko.net/uploads/gitlogue/media.gif
logo: https://avatars.githubusercontent.com/u/5608948?v=4
updated: '2026-07-18'
repo_stars: 4862
repo_updated: "2026-07-20"
repo_created: "2025-11-08"
repo_release: "v0.9.0"
repo_release_date: "2026-04-20"
---
