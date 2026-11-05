---
name: tmail
category: Email & Messaging
short_description: A terminal email client with a spatial workspace for conversations.
description: A terminal email client with a spatial workspace for conversations.
repository_url: https://github.com/tuna4ll/tmail
website: https://crates.io/crates/tmail
author: tuna4ll
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install tmail
  - method: cargo
    command: cargo binstall tmail
  - method: script
    command: >-
      curl -fsSL https://raw.githubusercontent.com/tuna4ll/tmail/main/install.sh
      | sh
  - method: powershell
    command: irm https://raw.githubusercontent.com/tuna4ll/tmail/main/install.ps1 | iex
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - tui
  - email
  - workspaces
media: https://raw.githubusercontent.com/tuna4ll/tmail/refs/heads/main/docs/demo.gif
updated: '2026-11-05'
---
