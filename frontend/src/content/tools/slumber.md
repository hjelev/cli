---
name: slumber
category: Networking
short_description: Terminal-based HTTP/REST client
description: >-
  Slumber is a TUI (terminal user interface) HTTP client. Define, execute, and
  share configurable HTTP requests. Slumber is built on some basic principles:  


  * It will remain free to use forever  

  * You own your data: all configuration and data is stored locally and can be
  checked into version control  

  * It will never be enshittified
repository_url: https://github.com/LucasPickering/slumber
website: https://slumber.lucaspickering.me/
author: LucasPickering
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install slumber --locked
  - method: brew
    command: brew install LucasPickering/tap/slumber
  - method: other
    command: >-
      powershell -c "irm
      https://github.com/LucasPickering/slumber/releases/download/v3.3.0/slumber-installer.ps1
      | iex"
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - http
  - http-client
  - ratatui
  - rest-client
  - rust
  - tui
media: https://slumber.lucaspickering.me/images/demo.gif
logo: https://cli.masoko.net/uploads/slumber/logo.png
updated: '2026-07-15'
github_stars: 1200
github_updated: "2026-07-04"
github_created: "2023-08-28"
github_release: "v5.3.0"
repo_stars: 1200
repo_updated: "2026-07-04"
repo_created: "2023-08-28"
repo_release: "v5.3.0"
---
