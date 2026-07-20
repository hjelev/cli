---
name: scooter
category: Text Editors
short_description: Interactive find-and-replace in the terminal
description: >-
  scooter is an interactive find-and-replace terminal UI app. By default it
  recursively searches through files in the current directory, but can also be
  used to process text from stdin.  

  Search with either a fixed string or a regular expression, enter a
  replacement, and interactively toggle which instances you want to replace. If
  the instance you're attempting to replace has changed since the search was
  performed, e.g. if you've switched branches and that line no longer exists,
  that particular replacement won't occur: you'll see all such cases at the end.
repository_url: https://github.com/thomasschafer/scooter
author: thomasschafer
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install scooter
  - method: aur
    command: yay -S scooter
  - method: aur
    command: yay -S scooter-git
  - method: winget
    command: winget install thomasschafer.scooter
  - method: scoop
    command: scoop install scooter
  - method: pkgin
    command: pkgin install scooter
  - method: cargo
    command: cargo install scooter
  - method: binary
    command: https://github.com/thomasschafer/scooter/releases/latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - find-and-replace
  - regex
media: https://github.com/thomasschafer/scooter/raw/main/media/preview.gif
logo: https://avatars.githubusercontent.com/u/54135831?v=4
updated: '2026-07-20'
repo_stars: 1277
repo_updated: "2026-07-18"
repo_created: "2024-07-22"
repo_release: "v0.9.1"
repo_release_date: "2026-04-23"
---
