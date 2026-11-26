---
name: termide
category: Text Editors
short_description: >-
  All-in-one terminal workspace for desktops and servers: editor with LSP, file
  manager with SFTP/FTP, terminal, git, database viewer and more
description: >-
  An all-in-one terminal workspace and TUI environment written in Rust as a
  zero-config static binary.   

  Combines a code editor with LSP, dual-pane file manager, terminal, git
  integration, database viewer, and coding agent.   

  Designed for both local workstations and remote servers with support for
  detached background sessions.
repository_url: https://github.com/termide/termide
website: https://termide.github.io
author: termide
license: MIT
language: Rust
installation:
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/termide/termide/main/install.sh | sh
  - method: brew
    command: brew install termide/termide/termide
  - method: aur
    command: yay -S termide-bin
  - method: nix
    command: nix run github:termide/termide
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - coding-agent
  - devops
  - file-manager
  - git
  - hex-editor
  - homelab
  - ide
  - llm
  - markdown
  - mcp
  - ratatui
  - rust
  - sftp
  - sql-client
  - ssh
  - sysadmin
  - terminal
  - text-editor
  - tui
media: https://termide.github.io/assets/screenshots/agent.gif
logo: https://termide.github.io/assets/logo.svg
updated: '2026-11-25'
repo_stars: 190
repo_stars_recent: 3
repo_updated: "2026-11-25"
repo_created: "2025-11-20"
repo_release: "0.50.0"
repo_release_date: "2026-11-16"
comments: []
---
