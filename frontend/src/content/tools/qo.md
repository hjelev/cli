---
name: qo
category: Data Processing
short_description: qo is an interactive minimalist TUI to query JSON and CSV using SQL.
description: >-
  qo is a minimalist terminal user interface (TUI) that allows you to query
  JSON, CSV, TSV, and PSV files using standard SQL syntax.

  It integrates seamlessly into command-line pipelines by reading from stdin and
  outputting results to stdout, making it a versatile tool for data exploration
  and transformation.

  Built in Go and powered by SQLite, it provides an interactive experience for
  filtering, aggregating, and converting structured data without needing a
  database setup.
repository_url: https://github.com/kiki-ki/go-qo
author: kiki-ki
license: MIT
language: Go
installation:
  - method: brew
    command: brew install kiki-ki/tap/qo
  - method: script
    command: >-
      curl -sfL https://raw.githubusercontent.com/kiki-ki/go-qo/main/install.sh
      | sh
  - method: other
    command: >-
      git clone --depth 1 https://github.com/kiki-ki/go-qo.git && cd go-qo &&
      make build
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - bubbletea
  - cli
  - csv
  - filter
  - go
  - golang
  - interactive
  - jq
  - json
  - qo
  - query
  - sql
  - sqlite3
  - tsv
  - tui
media: https://raw.githubusercontent.com/kiki-ki/go-qo/main/doc/demo/demo.gif
logo: https://cli.masoko.net/uploads/qo/logo.png
updated: '2026-08-21'
repo_stars: 398
repo_updated: "2026-08-29"
repo_created: "2025-11-25"
repo_release: "v0.4.1"
repo_release_date: "2026-06-27"
---
