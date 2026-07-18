---
name: micro
category: Text Editors
short_description: A modern and intuitive terminal-based text editor
description: >-
  micro is a terminal-based text editor that aims to be easy to use and
  intuitive, while also taking advantage of the capabilities of modern
  terminals. It comes as a single, batteries-included, static binary with no
  dependencies; you can download and use it right now!


  As its name indicates, micro aims to be somewhat of a successor to the nano
  editor by being easy to install and use. It strives to be enjoyable as a
  full-time editor for people who prefer to work in a terminal, or those who
  regularly edit files over SSH.
repository_url: https://github.com/micro-editor/micro
website: https://micro-editor.github.io/
author: micro-editor
license: MIT
language: Go
installation:
  - method: brew
    command: brew install micro
  - method: script
    command: curl https://getmic.ro | bash
  - method: apt
    command: sudo apt install micro
  - method: pacman
    command: sudo pacman -S micro
  - method: dnf
    command: sudo dnf install micro
  - method: snap
    command: sudo snap install micro --classic
  - method: winget
    command: winget install zyedidia.micro
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - tui
  - text-editor
  - micro
  - editor
  - command-line
  - go
  - golang
  - cross-platform
  - terminal
media: https://github.com/micro-editor/micro/raw/master/assets/micro-solarized.png
logo: https://micro-editor.github.io/micro_files/micro-logo-mark.svg
updated: '2026-07-04'
repo_stars: 29054
repo_updated: "2026-07-18"
repo_created: "2016-03-11"
repo_release: "v2.0.15"
---
