---
name: kibi
category: Text Editors
short_description: A text editor in ≤1024 lines of code, written in Rust
description: >-
  Kibi is a compact, open-source text editor written in Rust, designed to stay
  under 1024 lines of code while remaining fully functional.  

  Inspired by the 'kilo' editor, it supports essential features like syntax
  highlighting, incremental search, and UTF-8 character handling.  

  This lightweight, dependency-minimal tool is cross-platform, making it an
  excellent choice for a clean, terminal-based editing experience.
repository_url: https://github.com/ilai-deutel/kibi
author: ilai-deutel
license: Apache-2.0
language: Rust
installation:
  - method: cargo
    command: cargo install kibi
  - method: aur
    command: paru -Syu kibi
  - method: aur
    command: paru -Syu --pgpfetch kibi-bin
  - method: pkgin
    command: pkgin install kibi
  - method: other
    command: flatpak install flathub com.github.ilai_deutel.kibi
  - method: apk
    command: apk add kibi
  - method: nix
    command: nix-env -iA kibi
  - method: pkg
    command: pkg install editors/kibi
  - method: eget
    command: eget ilai-deutel/kibi
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - '1024'
  - console
  - editor
  - editors
  - rust
  - syntax-highlighting
  - terminal
  - text-editor
  - tui
  - utf-8
media: https://raw.githubusercontent.com/ilai-deutel/kibi/master/assets/recording.svg
logo: https://raw.githubusercontent.com/ilai-deutel/kibi/master/assets/kibi.svg
updated: '2026-08-10'
repo_stars: 1939
repo_updated: "2026-09-01"
repo_created: "2020-02-10"
repo_release: "v0.3.3"
repo_release_date: "2026-02-01"
---
