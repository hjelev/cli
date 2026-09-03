---
name: undo
category: Utilities & Other
short_description: Undo what the last shell command did to the filesystem
description: >-
  Undo is a command-line tool that lets you seamlessly revert whatever changes
  your last shell command made to the filesystem.  

  It hooks into interactive shells (like Bash, Zsh, and Fish) to track file
  modifications and instantly undo or inspect recent filesystem actions.
repository_url: https://github.com/edaywalid/undo
website: https://undo.edaywalid.com
author: edaywalid
license: MIT
language: Go
installation:
  - method: script
    command: curl -fsSL https://undo.edaywalid.com/install.sh | sh
  - method: brew
    command: brew install edaywalid/tap/undo
  - method: aur
    command: yay -S undo-cli-bin
  - method: nix
    command: nix run github:edaywalid/undo
platforms:
  - Linux MacOS
tags:
  - cli
  - developer-tools
  - filesystem
  - ld-preload
  - linux
  - safety
  - shell
  - undo
media: https://raw.githubusercontent.com/edaywalid/undo/main/assets/demo.gif
logo: https://cli.masoko.net/uploads/undo/logo.png
updated: '2026-08-21'
repo_stars: 394
repo_updated: "2026-08-12"
repo_created: "2026-07-23"
repo_release: "v0.3.0"
repo_release_date: "2026-08-10"
comments: []
---
