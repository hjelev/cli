---
name: iamb
category: Utilities & Other
short_description: A Matrix client for Vim addicts
description: >-
  iamb is a terminal-based Matrix chat client designed specifically for Vim
  users.

  It features full Vim keybindings, modal editing, and supports end-to-end
  encryption (E2EE), threads, and spaces.  

  It also includes advanced terminal features like image previews, custom key
  mappings, and multiple profiles.
repository_url: https://github.com/ulyssa/iamb
website: https://iamb.chat
author: ulyssa
license: Apache-2.0
language: Rust
installation:
  - method: cargo
    command: cargo install --locked iamb
  - method: aur
    command: paru iamb-git
  - method: pkg
    command: pkg install iamb
  - method: brew
    command: brew install iamb
  - method: pkgin
    command: pkgin install iamb
  - method: other
    command: zypper install iamb
  - method: snap
    command: snap install iamb
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - matrix
  - matrix-client
  - matrix-org
  - rust
media: https://cli.masoko.net/uploads/iamb/media.gif
logo: https://cli.masoko.net/uploads/iamb/logo.svg
updated: '2026-07-21'
---
