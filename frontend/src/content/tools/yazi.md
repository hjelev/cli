---
name: yazi
category: File Management
short_description: Blazing fast terminal file manager written in Rust, based on async I/O.
description: |
  Yazi (means "duck") is a terminal file manager written in Rust, based on
  non-blocking async I/O. It provides full asynchronous task scheduling,
  built-in support for multiple image preview protocols, a concurrent Lua
  plugin system, and integrations with ripgrep, fd, fzf, and zoxide.
repository_url: https://github.com/sxyazi/yazi
website: https://yazi-rs.github.io
author: sxyazi
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install --force yazi-build
  - method: brew
    command: brew install yazi
  - method: apt
    command: |
      curl -sS https://debian.griffo.io/EA0F721D231FDD3A0A17B9AC7808B4DD62C41256.asc | gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/debian.griffo.io.gpg
      echo "deb https://debian.griffo.io/apt $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/debian.griffo.io.list
      sudo apt update && sudo apt install yazi
  - method: dnf
    command: |
      dnf copr enable lihaohong/yazi
      dnf install yazi
  - method: pacman
    command: sudo pacman -S yazi
  - method: binary
    command: Prebuilt binaries for Linux, macOS, and Windows are available on the GitHub Releases page.
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - tui
  - file-manager
  - async
  - rust
logo: https://yazi-rs.github.io/webp/logo.webp
media: "https://private-user-images.githubusercontent.com/17523360/269460588-92ff23fa-0cd5-4f04-b387-894c12265cc7.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODMwMjA4OTgsIm5iZiI6MTc4MzAyMDU5OCwicGF0aCI6Ii8xNzUyMzM2MC8yNjk0NjA1ODgtOTJmZjIzZmEtMGNkNS00ZjA0LWIzODctODk0YzEyMjY1Y2M3Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA3MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNzAyVDE5Mjk1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTljYzk4N2VlN2IzZmYyNzk1ZjYzZWIyM2IwNWQ5Njk2NGE5MTI4YzAwNjVkNThmNDk4OGY5MjllODNhMTJjYzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT12aWRlbyUyRm1wNCJ9.2Qzdg1M0v_SNG7jdnLLgv1e59d2wdfdPmaVckML-0a4"
ratings:
  - user: hjelev
    value: 5
    date: '2026-07-01T21:53:11.252Z'
---
