---
name: doggo
category: Networking
short_description: 🐶 Command-line DNS Client for Humans. Written in Golang
description: >-
  doggo is a modern, feature-rich command-line DNS client written in Go designed
  as a human-friendly alternative to dig.


  It features clean, color-coded, tabular outputs alongside JSON formatting
  options for effortless scripting and automation.


  It supports advanced modern protocols like DNS-over-HTTPS (DoH), DNS-over-TLS
  (DoT), DNS-over-QUIC (DoQ), and DNSCrypt, as well as iterative delegation
  tracing.
repository_url: https://github.com/mr-karan/doggo
website: https://doggo.mrkaran.dev/
author: mr-karan
license: GPL-3.0
language: Go
installation:
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/mr-karan/doggo/main/install.sh | sh
  - method: go
    command: go install github.com/mr-karan/doggo/cmd/doggo@latest
  - method: brew
    command: brew install doggo
  - method: port
    command: sudo port install doggo
  - method: aur
    command: yay -S doggo-bin
  - method: scoop
    command: scoop install doggo
  - method: winget
    command: winget install doggo
  - method: eget
    command: eget mr-karan/doggo
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - dns
  - dns-client
  - doh
media: https://raw.githubusercontent.com/mr-karan/doggo/main/www/static/doggo.png
logo: https://cli.masoko.net/uploads/doggo/logo.png
updated: '2026-10-25'
repo_stars: 4530
repo_updated: "2026-10-30"
repo_created: "2020-12-09"
repo_release: "v1.4.2"
repo_release_date: "2026-10-22"
comments: []
---
