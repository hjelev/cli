---
name: igrep
category: Data Processing
short_description: Interactive Grep
description: >-
  Runs grep (ripgrep's library) in the background, allows interactively pick its
  results and open selected match in text editor of choice (vim by default).


  igrep supports macOS and Linux. Reportedly it works on Windows as well.
repository_url: https://github.com/konradsz/igrep
author: konradsz
license: MIT
language: Rust
installation:
  - method: pacman
    command: pacman -S igrep
  - method: apk
    command: apk add igrep
  - method: nix
    command: nix-env -iA igrep
  - method: brew
    command: brew install igrep
  - method: scoop
    command: scoop install igrep
  - method: cargo
    command: cargo install igrep
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - grep
media: https://raw.githubusercontent.com/konradsz/igrep/main/assets/v1_0_0.gif
logo: https://avatars.githubusercontent.com/u/25437234?v=4
updated: '2026-08-19'
repo_stars: 843
repo_updated: "2026-02-01"
repo_created: "2020-02-15"
repo_release: "v1.3.0"
repo_release_date: "2024-09-08"
---
