---
name: pop
category: Email & Messaging
short_description: Send emails from your terminal 📬
description: >-
  pop is a terminal utility by Charm for composing and sending emails via an
  interactive TUI or non-interactive CLI pipelines.  

  It automatically converts Markdown to HTML (or plain text) and supports file
  attachments, custom signatures, and custom SMTP servers or Resend OAuth/API
  keys.  

  It integrates seamlessly with terminal workflows and AI agent tools, featuring
  built-in commands to install AI skill definitions for tools like Codex or
  Cursor.
repository_url: https://github.com/charmbracelet/pop
author: charmbracelet
license: MIT
language: Go
installation:
  - method: brew
    command: brew install pop
  - method: nix
    command: nix-env -iA nixpkgs.pop
  - method: aur
    command: yay -S charm-pop-bin
  - method: go
    command: go install github.com/charmbracelet/pop@latest
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - email-client
  - cli
media: https://cli.masoko.net/uploads/pop/media.gif
logo: https://cli.masoko.net/uploads/pop/logo.png
updated: '2026-10-29'
repo_stars: 2927
repo_updated: "2026-10-01"
repo_created: "2023-06-21"
repo_release: "v0.5.0"
repo_release_date: "2026-08-20"
comments: []
---
