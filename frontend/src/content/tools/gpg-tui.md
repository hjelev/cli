---
name: gpg-tui
category: Security
short_description: Manage your GnuPG keys with ease! 🔐
description: >-
  gpg-tui is a terminal user interface (TUI) written in Rust designed to make
  managing GnuPG (GPG) keys easier and more interactive.  

  It simplifies complex or multi-step command-line operations—such as listing,
  exporting, signing, and editing keys—into a clean keyboard-driven interface.  

  While it handles core key management fluidly within the terminal, it also
  includes a fallback option to run standard CLI commands for advanced tasks.  

  It is open-source (MIT licensed) and serves as a user-friendly modern
  alternative to traditional, text-heavy GnuPG workflows.
repository_url: https://github.com/orhun/gpg-tui
website: https://blog.orhun.dev/introducing-gpg-tui/
author: orhun
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install gpg-tui
  - method: pacman
    command: pacman -S gpg-tui
  - method: other
    command: apk add gpg-tui
  - method: brew
    command: brew install gpg-tui
  - method: docker
    command: >-
      docker run --rm -it -v "$HOME/.gnupg":/app/.gnupg --user 1000:1000
      orhunp/gpg-tui --homedir /app/.gnupg
platforms:
  - Linux
  - macOS
tags:
  - cli
  - gnupg
  - gpg
  - gpg-configuration
  - gpg-key
  - gpg-keys
  - gpg-signatures
  - gpg-tui
  - hacktoberfest
  - key-management
  - linux
  - openpgp
  - rust
  - terminal
  - tui
  - tui-app
  - tui-rs
media: >-
  https://raw.githubusercontent.com/orhun/gpg-tui/master/demo/gpg-tui-showcase.gif
logo: https://cli.masoko.net/uploads/gpg-tui/logo.png
updated: '2026-07-13'
---
