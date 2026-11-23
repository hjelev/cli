---
name: Qorx
category: Development Tools
short_description: Local code search with file and line citations.
description: Qorx is a Rust CLI that indexes a local workspace. Use its map command to locate relevant files and strict-answer to request source-cited output, or run its stdio MCP server to let a coding client query the same index.
repository_url: https://github.com/bbrainfuckk/qorx
author: Marvin Sarreal Villanueva
license: AGPL-3.0
language: Rust
installation:
  - method: cargo
    command: cargo install --git https://github.com/bbrainfuckk/qorx --tag v1.0.7 --locked qorx
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - code-search
  - mcp
  - local-first
---
