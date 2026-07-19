---
name: dutree
category: Directory Listing
short_description: a tool to analyze file system usage written in Rust
description: >-
  dutree is a fast, Rust-written command-line tool for analyzing disk usage that
  displays file system trees with colored output.  

  It allows you to aggregate small files, exclude specific items, compare
  directories, and report real disk usage versus apparent file sizes.  

  The utility is highly customizable, supporting depth control and multiple
  filtering options to provide a clear, local overview of storage.
repository_url: https://github.com/nachoparker/dutree
author: nachoparker
license: GPL-3.0
language: Rust
installation:
  - method: cargo
    command: cargo install dutree
  - method: aur
    command: yay -S dutree
  - method: dnf
    command: sudo dnf -y install dutree
  - method: brew
    command: brew install dutree
platforms:
  - Linux
  - macOS
tags:
  - filesystem
  - rust
media: https://github.com/nachoparker/dutree/raw/master/resources/dutree_featured.png
logo: https://avatars.githubusercontent.com/u/21343324?v=4
updated: '2026-07-19'
---
