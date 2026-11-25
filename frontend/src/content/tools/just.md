---
name: just
category: Development Tools
short_description: 🤖 Just a command runner
description: >-
  Command runner utility: A modern, flexible alternative to make written in Rust
  that executes project-specific commands defined in a clean, human-readable
  justfile.


  Variable & parameter support: Allows commands to accept arguments, evaluate
  expressions, load .env files automatically, and run recipes across different
  operating systems.


  Zero-dependency execution: Installs easily as a standalone binary and
  integrates smoothly into terminal workflows for managing local development,
  testing, and deployment tasks.
repository_url: https://github.com/casey/just
website: https://just.systems
author: casey
license: CC0-1.0
language: Rust
installation:
  - method: apt
    command: apt-get install just
  - method: pacman
    command: pacman -S just
  - method: dnf
    command: dnf install just
  - method: zypper
    command: zypper install just
  - method: apk
    command: apk add just
  - method: snap
    command: snap install --edge --classic just
  - method: brew
    command: brew install just
  - method: port
    command: sudo port install just
  - method: pkg
    command: pkg install just
  - method: scoop
    command: scoop install just
  - method: winget
    command: winget install --id Casey.Just --exact
  - method: cargo
    command: cargo install just
  - method: pipx
    command: pipx install rust-just
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - make
media: https://raw.githubusercontent.com/casey/just/master/etc/screenshot.png
logo: https://cli.masoko.net/uploads/just/logo.png
updated: '2026-11-18'
repo_stars: 36840
repo_stars_recent: 97
repo_updated: "2026-11-15"
repo_created: "2016-06-17"
repo_release: "1.59.0"
repo_release_date: "2026-10-15"
---
