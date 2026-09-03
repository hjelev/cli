---
name: ad
category: Text Editors
short_description: an adaptable text editor
description: >-
  ad (pronounced A.D.) is an attempt at combining a modal editing interface of
  likes of vi and kakoune with the approach to extensibility of Plan9's Acme.
  Inside of ad text is something you can execute as well as edit.
repository_url: https://github.com/sminez/ad
website: https://crates.io/crates/ad-editor
author: sminez
license: MIT
language: Rust
installation:
  - method: pacman
    command: pacman -S ad
  - method: nix
    command: nix-env -iA ad
  - method: brew
    command: brew install ad
  - method: pkg
    command: pkg install ad
  - method: cargo
    command: cargo install ad-editor
platforms:
  - Linux
  - macOS
tags:
  - 9p
  - acme
  - plan9
  - regex
  - rust
  - text-editor
  - tui
media: https://raw.githubusercontent.com/sminez/ad/develop/screenshot.png
logo: https://avatars.githubusercontent.com/u/8116092?v=4
updated: '2026-08-10'
repo_stars: 739
repo_updated: "2026-08-24"
repo_created: "2023-09-27"
repo_release: "0.4.0"
repo_release_date: "2025-12-15"
---
