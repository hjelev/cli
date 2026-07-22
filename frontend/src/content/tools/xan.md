---
name: xan
category: Data Processing
short_description: The CSV magician
description: >-
  xan is a command line tool that can be used to process CSV files directly from
  the shell.  


  It has been written in Rust to be as fast as possible, use as little memory as
  possible, and can very easily handle large CSV files (Gigabytes). It leverages
  a novel SIMD CSV parser and is also able to parallelize some computations
  (through multithreading) to make some tasks complete as fast as your computer
  can allow.  


  It can easily preview, filter, slice, aggregate, sort, join CSV files, and
  exposes a large collection of composable commands that can be chained together
  to perform a wide variety of typical tasks.
repository_url: https://github.com/medialab/xan
author: medialab
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install xan --locked
  - method: brew
    command: brew install xan
  - method: pacman
    command: sudo pacman -S xan
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - csv
  - rust
  - tsv
media: https://github.com/medialab/xan/raw/master/docs/img/grid/view.png
logo: https://avatars.githubusercontent.com/u/534856?s=200&v=4
updated: '2026-07-12'
repo_stars: 4379
repo_updated: "2026-07-21"
repo_created: "2018-07-10"
repo_release: "0.60.0"
repo_release_date: "2026-07-10"
---
