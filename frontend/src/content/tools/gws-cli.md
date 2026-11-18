---
name: gws-cli
category: DevOps & Cloud
short_description: >-
  Google Workspace CLI — one command-line tool for Drive, Gmail, Calendar,
  Sheets, Docs, Chat, Admin, and more. Dynamically built from Google
description: >-
  Unified Google Workspace CLI (gws): A single command-line interface written in
  Rust that provides structured access to Drive, Gmail, Calendar, Sheets, Docs,
  and Chat.


  Dynamic Discovery Architecture: Automatically builds its entire command and
  API surface at runtime using Google’s Discovery Service so it instantly
  supports new endpoints.


  AI Agent & Automation Ready: Outputs clean, structured JSON with
  auto-pagination, dry-run support, and built-in agent skills for seamless
  integration with AI CLI tools.
repository_url: https://github.com/googleworkspace/cli/
website: https://developers.google.com/workspace
author: googleworkspace
license: Apache-2.0
language: Rust
installation:
  - method: npm
    command: npm install -g @googleworkspace/cli
  - method: brew
    command: brew install googleworkspace-cli
  - method: nix
    command: nix run github:googleworkspace/cli
  - method: cargo
    command: cargo install --git https://github.com/googleworkspace/cli --locked
platforms:
  - Linux
  - macOS
tags:
  - agent-skills
  - ai-agent
  - automation
  - cli
  - discovery-api
  - gemini-cli-extension
  - google-admin
  - google-api
  - google-calendar
  - google-chat
  - google-docs
  - google-drive
  - google-sheets
  - google-workspace
  - oauth2
  - rust
media: https://www.youtube.com/watch?v=CVJmqBgxOlU
logo: https://avatars.githubusercontent.com/u/3708359?s=200&v=4
updated: '2026-11-18'
---
