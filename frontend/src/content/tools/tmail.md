---
name: tmail
category: Email & Messaging
short_description: A terminal email client with a spatial workspace for conversations.
description: >-
  A fast, keyboard- and mouse-friendly terminal email client that stores mail in
  a local Maildir and syncs seamlessly with any IMAP/SMTP server.   

  Features a unique spatial workspace view that visually maps conversation
  threads to show who answered whom at a glance.   

  Includes system keyring integration, OAuth2 authentication, GnuPG support, and
  extensible configuration via Lua scripting.
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
logo: https://avatars.githubusercontent.com/u/66411462?v=4
updated: '2026-11-05'
repo_stars: 16
repo_updated: "2026-11-05"
repo_created: "2026-09-24"
repo_release: "v1.0.1"
repo_release_date: "2026-11-05"
comments: []
---
