---
name: himalaya
category: Email & Messaging
short_description: CLI to manage emails
description: >-
  Himalaya is a fast, lightweight command-line tool written in Rust for managing
  emails.


  It supports multiple protocols including IMAP, SMTP, and JMAP to read, send,
  and organize messages.


  It offers modular integration with external TUI frontends, text editors, and
  custom shell scripts.
repository_url: https://github.com/pimalaya/himalaya
website: https://pimalaya.org
author: pimalaya
license: Apache-2.0
language: Rust
installation:
  - method: script
    command: >-
      curl -sSL
      https://raw.githubusercontent.com/pimalaya/himalaya/master/install.sh |
      sudo sh
  - method: cargo
    command: cargo install --locked --git https://github.com/pimalaya/himalaya.git
  - method: pacman
    command: pacman -S himalaya
  - method: aur
    command: yay -S himalaya-git
  - method: brew
    command: brew install himalaya
  - method: scoop
    command: scoop install himalaya
  - method: nix
    command: nix profile install github:pimalaya/himalaya
platforms:
  - Linux
  - macOS
tags:
  - cli
  - client
  - email
  - gpg
  - himalaya
  - imap
  - notmuch
  - pgp
  - pimalaya
  - rust
  - sendmail
  - smtp
  - terminal
media: https://github.com/pimalaya/himalaya/raw/master/screenshot.jpeg
logo: https://github.com/pimalaya/himalaya/raw/master/logo.svg
updated: '2026-10-21'
repo_stars: 7563
repo_updated: "2026-10-29"
repo_created: "2020-12-23"
repo_release: "v2.2.1"
repo_release_date: "2026-10-02"
---
