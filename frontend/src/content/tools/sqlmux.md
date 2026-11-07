---
name: sqlmux
category: Data Processing
short_description: >-
  A tmux-style terminal database client with Vim keybindings for PostgreSQL,
  MySQL, SqlServer, Redis, and more.
description: >-
  sqlmux is a tmux-style terminal database client featuring Vim keybindings for
  managing PostgreSQL, MySQL, SQLite, SQL Server, and Redis databases.   

  It organizes multi-database workflows into sessions, windows, and split panes,
  allowing you to browse tables and edit cells in place.   

  It includes robust safety guards like double-enforced read-only modes,
  row-conflict rollbacks, and a Vim-style SQL editor.
repository_url: https://github.com/kackerx/sqlmux
author: kackerx
license: MIT
language: Go
installation:
  - method: brew
    command: brew install kackerx/tap/sqlmux
  - method: npm
    command: npm install -g sqlmux
  - method: go
    command: go install github.com/kackerx/sqlmux/cmd/sqlmux@latest
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - cli
  - sql
  - tmux
  - tui
media: https://raw.githubusercontent.com/kackerx/sqlmux/main/assets/demo.gif
logo: https://cli.masoko.net/uploads/sqlmux/logo.png
updated: '2026-11-01'
repo_stars: 259
repo_updated: "2026-11-02"
repo_created: "2026-09-29"
repo_release: "v0.9.0"
repo_release_date: "2026-11-02"
---
