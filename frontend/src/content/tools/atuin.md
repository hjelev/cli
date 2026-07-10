---
updated: '2026-07-02'
name: atuin
category: Shell History
short_description: ✨ Making your shell magical
description: |
  Atuin replaces your existing shell history with a SQLite database, and records additional context for your commands. Additionally, it provides optional and fully encrypted synchronisation of your history between machines, via an Atuin server.
repository_url: https://github.com/atuinsh/atuin
website: https://atuin.sh/
author: "atuinsh"
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install atuin
  - method: brew
    command: brew install atuin
  - method: script
    command: curl --proto '=https' --tlsv1.2 -LsSf https://setup.atuin.sh | sh
platforms: [Linux, macOS]
tags: [tui, history, ai-agent-monitoring, shell-history, shell, rust, zsh, fish, bash]
logo: "https://avatars.githubusercontent.com/u/122059230?s=48&v=4"
media: "https://raw.githubusercontent.com/atuinsh/atuin/main/demo.gif"
github_stars: 30507
github_updated: "2026-07-10"
github_created: "2020-10-04"
github_release: "v18.17.0"
---
