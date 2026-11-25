---
name: navi
category: Productivity
short_description: An interactive cheatsheet tool for the command-line
description: >-
  Interactive command-line cheatsheet tool written in Rust that uses fzf or skim
  to search snippets and dynamically populate argument suggestions.   


  Works as a standalone command, shell keybinding widget, or tmux integration
  using custom .cheat files, Git repos, or tldr sources.   


  Currently in maintenance mode (bug fixes only, with ezlo noted as a modern
  alternative).
repository_url: https://github.com/denisidoro/navi
author: denisidoro
license: Apache-2.0
language: Rust
installation:
  - method: pacman
    command: pacman -S navi
  - method: dnf
    command: dnf install navi
  - method: zypper
    command: zypper install navi
  - method: apk
    command: apk add navi
  - method: brew
    command: brew install navi
  - method: pkg
    command: pkg install navi
  - method: scoop
    command: scoop install navi
  - method: choco
    command: choco install navi
  - method: cargo
    command: cargo install navi
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - bash
  - cheatsheets
  - cli
  - command-line
  - rust
  - shell
  - snippet
  - snippets
  - terminal
media: https://asciinema.org/a/406461
logo: https://raw.githubusercontent.com/denisidoro/navi/master/assets/icon.png
updated: '2026-11-25'
---
