---
name: tmux
category: Productivity
short_description: >-
  tmux is a terminal multiplexer: it enables a number of terminals to be
  created, accessed, and controlled from a single screen.
description: >-
  tmux (terminal multiplexer) allows you to create a session that contains
  multiple windows and panes. You can split your terminal into side-by-side
  panes, keep long-running commands alive, and even disconnect (detach) and
  reconnect (attach) later — especially useful when working on remote servers
  over SSH.
repository_url: https://github.com/tmux/tmux
website: https://tmux.us
author: tmux
license: ISC
language: C
installation:
  - method: apt
    command: sudo apt install tmux
  - method: dnf
    command: sudo dnf install tmux
  - method: pacman
    command: sudo pacman -S tmux
  - method: other
    command: apk add tmux
  - method: brew
    command: brew install tmux
platforms:
  - Linux
  - macOS
tags:
  - multiplexers
  - terminal multiplexers
  - session management
media: https://www.perl.com/images/an-introduction-to-tmux/tmux-panes.png
logo: https://avatars.githubusercontent.com/u/12054114?s=200&v=4
updated: '2026-07-10'
repo_stars: 47739
repo_updated: "2026-07-15"
repo_created: "2015-06-03"
repo_release: "3.7b"
---
