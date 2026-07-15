---
name: termshark
category: Networking
short_description: A terminal UI for tshark, inspired by Wireshark
description: >-
  termshark is a terminal user interface (TUI) for Wireshark written in Go,
  acting as a terminal-based packet analyzer.  

  It provides a familiar, Wireshark-inspired keyboard-driven interface to
  inspect, filter, and dissect packet captures in real-time.  

  It leverages tshark under the hood to parse PCAP files while offering a rich
  interactive view without needing a graphical desktop environment.
repository_url: https://github.com/gcla/termshark
author: gcla
license: MIT
language: Go
installation:
  - method: go
    command: go install github.com/gcla/termshark/v2/cmd/termshark@v2.4.0
  - method: brew
    command: brew install termshark
  - method: apt
    command: apt install termshark
  - method: snap
    command: snap install termshark
  - method: other
    command: pkg install termshark
platforms:
  - Linux
  - macOS
tags:
  - go
  - golang
  - gowid
  - pcap
  - tcell
  - tshark
  - tui
  - wireshark
media: https://github.com/gcla/termshark/raw/gh-pages/images/demo4.gif?raw=true
logo: https://cli.masoko.net/uploads/termshark/logo.png
updated: '2026-07-15'
github_stars: 9934
github_updated: "2024-04-30"
github_created: "2019-04-20"
github_release: "v2.4.0"
---
