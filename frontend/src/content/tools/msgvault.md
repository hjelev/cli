---
name: msgvault
category: Email & Messaging
short_description: >-
  Archive a lifetime of email and chat. Offline search, analytics, and AI query
  over your full message history. Powered by SQLite and DuckDB
description: >-
  msgvault is a local-first, open-source archive tool designed to consolidate a
  lifetime of email, chat, meetings, calendars, and contacts onto your own
  hardware.   

  Powered by SQLite and DuckDB, it provides offline keyword and semantic search,
  identity tracking, document extraction, and analytics across your full
  communication history.   

  It offers multiple ways to interact with your data, including a web UI, a
  terminal interface (TUI), a CLI, an HTTP API, and AI agent integration via
  MCP.
repository_url: https://github.com/kenn-io/msgvault
website: https://msgvault.io
author: kenn-io
license: MIT
language: Go
installation:
  - method: script
    command: curl -fsSL https://msgvault.io/install.sh | bash
  - method: brew
    command: brew install msgvault
  - method: powershell
    command: >-
      powershell -ExecutionPolicy ByPass -c "irm https://msgvault.io/install.ps1
      | iex"
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - email
media: https://www.msgvault.io/docs/assets/generated/tui-senders.svg
logo: >-
  https://raw.githubusercontent.com/kenn-io/msgvault/main/.github/assets/msgvault-mark.svg
updated: '2026-11-01'
repo_stars: 2181
repo_updated: "2026-11-07"
repo_created: "2026-01-28"
repo_release: "v0.23.0"
repo_release_date: "2026-11-05"
---
