---
name: croc
category: Utilities & Other
short_description: Easily and securely send things from one computer to another 🐊 📦
description: >-
  Command-line file transfer: Securely and easily send files and folders
  directly from one computer to another over a fully encrypted end-to-end
  connection without third-party storage.


  Relay-backed rendezvous: Automatically uses a public relay server to establish
  direct peer-to-peer connections across different networks and NATs using a
  simple, human-readable passphrase.


  Zero-configuration design: Written in Go with cross-platform support, enabling
  seamless file sharing between Windows, macOS, and Linux terminals with zero
  setup overhead.
repository_url: https://github.com/schollz/croc
website: https://getcroc.com
author: schollz
license: MIT
language: Go
installation:
  - method: apk
    command: apk add croc
  - method: pacman
    command: pacman -S croc
  - method: dnf
    command: dnf install golang-github-schollz-croc
  - method: nix
    command: nix-env -iA croc
  - method: brew
    command: brew install croc
  - method: port
    command: sudo port install croc
  - method: scoop
    command: scoop install croc
  - method: choco
    command: choco install croc
  - method: winget
    command: winget install schollz.croc
  - method: go
    command: go install github.com/schollz/croc@latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - data-transfer
  - file-sharing
  - golang
  - pake
  - peer-to-peer
  - tcp
  - transfer
media: https://github.com/schollz/croc/raw/main/src/install/customization.gif
logo: https://cli.masoko.net/uploads/croc/logo.png
updated: '2026-11-24'
repo_stars: 41052
repo_stars_recent: 74
repo_updated: "2026-11-23"
repo_created: "2017-10-17"
repo_release: "v11.6.6"
repo_release_date: "2026-11-21"
comments: []
---
