---
name: tidemail
category: Email & Messaging
short_description: TUI Key first email client
description: >-
  TideMail is a fast, terminal-based (TUI) email client that features a unified
  three-pane interface for managing multiple IMAP and SMTP accounts.   

  It is designed for keyboard-first navigation with modern conveniences like Vim
  motions, inline image rendering, and an undo queue for actions.   

  Additionally, it includes a companion CLI and support for optional local
  plugins and AI tools to summarize messages, draft responses, and automate
  workflows.
repository_url: https://github.com/allisonhere/tidemail
author: allisonhere
license: MIT
language: Go
installation:
  - method: aur
    command: yay -S tidemail-bin
  - method: aur
    command: paru -S tidemail-bin
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/allisonhere/tidemail/main/install.sh |
      sh
  - method: go
    command: go install github.com/allisonhere/tidemail@latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - email
  - client
  - tui
media: https://github.com/allisonhere/tidemail/raw/main/images/tidemail.png
logo: https://github.com/allisonhere/tidemail/raw/main/images/tidemail-icon.png
updated: '2026-10-21'
repo_stars: 84
repo_updated: "2026-10-30"
repo_created: "2026-05-20"
repo_release: "v1.7.1"
repo_release_date: "2026-10-28"
repo_badge: true
comments: []
---
