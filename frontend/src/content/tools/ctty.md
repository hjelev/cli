---
name: ctty
category: Networking
short_description: >-
  A lightweight, all-in-one connection manager — SSH, Serial, SFTP, Telnet, FTP,
  WebDAV and S3 in a single TUI 🔥
description: >-
  A lightweight, lightning-fast, and bloat-free terminal UI (TUI) connection
  manager built in Go.   

  Combines SSH, Serial, SFTP, Telnet, FTP, WebDAV, and S3 management into a
  single ~5MB binary.   

  Designed for keyboard-driven navigation, local password vaults, and headless
  script automation without the need for heavy Electron-based tools.
repository_url: https://github.com/zsuroy/ctty
author: zsuroy
license: MIT
language: Go
installation:
  - method: brew
    command: brew install zsuroy/ctty/ctty
  - method: script
    command: >-
      curl -sSL
      https://raw.githubusercontent.com/zsuroy/ctty/master/install/unix.sh |
      bash
  - method: powershell
    command: >-
      irm
      https://raw.githubusercontent.com/zsuroy/ctty/master/install/windows.ps1 |
      iex
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - devops
  - connection-manager
  - ftp
  - s3
  - serialport
  - sftp
  - skill
  - ssh
  - telnet
  - terminal
  - tui
  - webdav
media: https://raw.githubusercontent.com/zsuroy/ctty/master/images/ctty.gif
logo: https://raw.githubusercontent.com/zsuroy/ctty/master/images/logo.svg
updated: '2026-10-20'
repo_stars: 257
repo_updated: "2026-10-13"
repo_created: "2026-08-13"
repo_release: "v1.3.2"
repo_release_date: "2026-10-13"
comments: []
---
