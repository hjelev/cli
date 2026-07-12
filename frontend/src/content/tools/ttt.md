---
updated: '2026-07-02'
name: ttt
category: Text Editors
short_description: >-
  A terminal text editor IDE. A real alternative to VS Code, Zed, and Sublime
  that runs in your terminal. Single binary, zero config.
description: |
  The IDE that lives in your terminal. Not a simplified terminal editor — a real
  alternative to VS Code, Zed, and Sublime that happens to run in your terminal.
  Single Go binary, zero config.
repository_url: https://github.com/eugenioenko/ttt
website: https://tttedit.dev/
author: eugenioenko
license: MIT
language: Go
installation:
  - method: brew
    command: brew install eugenioenko/ttt/ttt
  - method: script
    command: >-
      curl -sSfL
      https://raw.githubusercontent.com/eugenioenko/ttt/main/install.sh | sh
  - method: go
    command: go install github.com/eugenioenko/ttt/cmd/ttt@latest
  - method: other
    command: yay -S ttt
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - tui
  - text-editor
  - editor
  - code-editor
  - ide
  - cli
  - go
  - golang
  - lsp
  - terminal
  - terminal-emulator
  - vscode-alternative
  - developer-tools
  - git-integration
  - syntax-highlighting
  - tcell
  - diff
  - text
media: https://github.com/eugenioenko/ttt/raw/main/docs-web/public/demo/demo.gif
logo: https://tttedit.dev/_astro/logo.9JdCUVB0.svg
github_stars: 90
github_updated: "2026-07-12"
github_created: "2026-01-16"
github_release: "v1.0.0"
---
