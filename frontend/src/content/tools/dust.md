---
name: dust
category: Directory Listing
short_description: A more intuitive version of du in rust
description: >-
  Dust is an intuitive, Rust-based alternative to the traditional du command for
  analyzing disk space usage.  

  It intelligently recurses down directory trees and presents file sizes using a
  visual, color-coded ASCII tree structure.  

  By automatically highlighting the largest space hogs, it eliminates the need
  for complex formatting or depth flags.
repository_url: https://github.com/bootandy/dust
author: bootandy
license: Apache-2.0
language: Rust
installation:
  - method: cargo
    command: cargo install du-dust
  - method: brew
    command: brew install dust
  - method: snap
    command: snap install dust
  - method: scoop
    command: scoop install dust
  - method: other
    command: pacstall -I dust-bin
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - du-alternative
  - disk-usage
media: https://raw.githubusercontent.com/bootandy/dust/master/media/demo.gif
logo: https://avatars.githubusercontent.com/u/311785?v=4
updated: '2026-09-26'
repo_stars: 12388
repo_updated: "2026-09-16"
repo_created: "2018-03-16"
repo_release: "v1.2.6"
repo_release_date: "2026-09-16"
comments: []
---
