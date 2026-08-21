---
name: jjui
category: Git
short_description: >-
  jjui is a TUI designed for interacting with the Jujutsu version control
  system.
description: >-
  jjui is a terminal user interface (TUI) designed to provide an interactive,
  visual experience for the Jujutsu version control system.  

  It simplifies common VCS tasks like rebasing, squashing, and managing
  bookmarks through an intuitive keyboard-driven interface.  

  Built in Go and leveraging powerful terminal controls, it allows users to
  quickly navigate revision trees, view diffs, and manage operations directly
  from the command line.
repository_url: https://github.com/idursun/jjui
website: https://idursun.github.io/jjui/
author: idursun
license: MIT
language: Go
installation:
  - method: winget
    command: winget install IbrahimDursun.jjui
  - method: brew
    command: brew install jjui
  - method: aur
    command: paru -S jjui-bin
  - method: aur
    command: yay -S jjui
  - method: nix
    command: nix run nixpkgs#jjui
  - method: go
    command: go install github.com/idursun/jjui/cmd/jjui@latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - bubbletea
  - golang
  - jj
  - tui
media: https://idursun.github.io/jjui/gifs/jjui_details_split.gif
logo: https://avatars.githubusercontent.com/u/103216?v=4
updated: '2026-08-21'
---
