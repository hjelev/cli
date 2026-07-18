---
name: tetris
category: Games & Fun
short_description: A terminal interface for Tetris
description: >-
  samtay/tetris is a slick, terminal-based implementation of Tetris built
  entirely in Haskell.  

  It utilizes the brick and vty TUI libraries to deliver a smooth command-line
  gaming experience.  

  The repository also doubles as an accessible example/tutorial for functional
  programming enthusiasts looking to build their own terminal user interfaces.
repository_url: https://github.com/samtay/tetris
author: samtay
license: MIT
language: Haskell
installation:
  - method: brew
    command: brew install samtay/tui/tetris
  - method: other
    command: 'yay -S tetris-terminal-git # or yaourt, etc.'
  - method: snap
    command: >-
      sudo snap install tetris-thefenriswolf alias
      tetris=/snap/bin/tetris-thefenriswolf.tetris # add to .bashrc or .zshrc
      etc.
platforms:
  - Linux
  - macOS
tags:
  - brick
  - game
  - haskell
  - terminal-game
  - tetris
  - tui
  - vty
media: https://github.com/samtay/tetris/raw/main/docs/img/play.gif
logo: https://avatars.githubusercontent.com/u/7246591?v=4
updated: '2026-07-11'
repo_stars: 1018
repo_updated: "2025-02-27"
repo_created: "2017-06-13"
repo_release: "v0.1.6"
---
