---
name: goose
category: Utilities & Other
short_description: A database migration tool. Supports SQL migrations and Go functions.
description: >-
  Database schema migration tool available as both a CLI and a Go library,
  supporting incremental SQL files and Go functions.  

  Works across Postgres, MySQL, MariaDB, SQLite, ClickHouse, MSSQL, Spanner,
  YDB, and more, with embedded migrations and out-of-order support.  

  Handles up, down, redo, status, and validate workflows via go install,
  Homebrew, or container images.
repository_url: https://github.com/pressly/goose
website: http://pressly.github.io/goose/
author: pressly
license: Other
language: Go
installation:
  - method: aur
    command: yay -S goose
  - method: nix
    command: nix-shell -p goose
  - method: brew
    command: brew install goose
  - method: port
    command: sudo port install goose
  - method: go
    command: go install github.com/pressly/goose/v3/cmd/goose@latest
platforms:
  - Linux
  - macOS
tags:
  - database
  - database-migrations
  - go
  - golang
  - migration
  - migrations
  - mysql
  - postgres
  - postgresql
  - schema
  - sql
  - sqlite
logo: https://raw.githubusercontent.com/pressly/goose/main/assets/goose_logo.png
updated: '2026-11-25'
repo_stars: 11766
repo_updated: "2026-11-25"
repo_created: "2016-02-25"
repo_release: "v3.30.2"
repo_release_date: "2026-11-25"
---
