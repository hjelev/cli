---
name: whosthere
category: Networking
short_description: >-
  Local Area Network discovery tool with an interactive Terminal User Interface
  (TUI) written in Go.
description: >-
  Whosthere is a local area network discovery tool with an interactive Terminal
  User Interface (TUI) written in Go.


  It performs concurrent, unprivileged scans using mDNS, SSDP, and ARP/subnet
  sweeps to identify and explore devices on your LAN.


  It features device manufacturer enrichment via OUI lookups, an integrated port
  scanner, and a daemon mode with an HTTP API.
repository_url: https://github.com/ramonvermeulen/whosthere
author: ramonvermeulen
license: Apache-2.0
language: Go
installation:
  - method: brew
    command: brew install whosthere
  - method: nix
    command: nix profile install nixpkgs#whosthere
  - method: aur
    command: yay -S whosthere-bin
  - method: go
    command: go install github.com/ramonvermeulen/whosthere@latest
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - go
  - golang
  - lan
  - network
  - network-analysis
  - networking
  - scanner
  - tui
  - tview
media: >-
  https://raw.githubusercontent.com/ramonvermeulen/whosthere/main/.github/assets/demo.gif
logo: https://avatars.githubusercontent.com/u/18006244?v=4
updated: '2026-10-25'
repo_stars: 2464
repo_updated: "2026-10-30"
repo_created: "2025-08-20"
repo_release: "v0.9.0"
repo_release_date: "2026-09-29"
---
