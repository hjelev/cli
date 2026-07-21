---
name: asciinema
category: Media & Entertainment
short_description: Terminal session recorder, streamer and player 📹
description: >-
  Asciinema is a lightweight terminal session recorder that captures and plays
  back text-based command-line workflows.  

  Instead of recording heavy video files, it saves output as text-based
  asciicast files that can easily be shared, searched, and embedded.  

  The modern Rust-based CLI also supports streaming live terminal sessions
  directly over the web.
repository_url: https://github.com/asciinema/asciinema
website: https://asciinema.org
author: asciinema
license: GPL-3.0
language: Rust
installation:
  - method: pacman
    command: sudo pacman -S asciinema
  - method: apt
    command: sudo apt install asciinema
  - method: dnf
    command: sudo dnf install asciinema
  - method: other
    command: sudo emerge -av asciinema
  - method: pkg
    command: pkg install py39-asciinema
  - method: cargo
    command: cargo install --locked --git https://github.com/asciinema/asciinema
  - method: brew
    command: brew install asciinema
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - asciicast
  - asciinema
  - cli
  - recording
  - rustlang
  - streaming
  - terminal
media: https://asciinema.org/a/756853
logo: >-
  https://asciinema.org/images/logo-red-949d10005bb389d1ae900a13b5ac53d7.svg?vsn=d
updated: '2026-07-21'
repo_stars: 17592
repo_updated: "2026-06-22"
repo_created: "2011-11-21"
repo_release: "v3.2.1"
repo_release_date: "2026-06-16"
---
