---
name: fd
category: Search
short_description: A simple, fast and user-friendly alternative to 'find'
description: >-
  fd is a simple, fast, and user-friendly alternative to the traditional find
  command written in Rust, designed for searching files and directories in your
  terminal.


  It features smart defaults like ignoring hidden files and respecting
  .gitignore, regex-based pattern matching, and parallelized multi-threading for
  blazing-fast execution speeds.


  Seamlessly integrating into daily shell workflows and text-editor
  integrations, it provides a streamlined and intuitive way to locate project
  files at a glance.
repository_url: https://github.com/sharkdp/fd
author: sharkdp
license: Apache-2.0
language: Rust
installation:
  - method: cargo
    command: cargo install fd-find
  - method: apt
    command: apt install fd-find
  - method: pacman
    command: pacman -S fd
  - method: dnf
    command: dnf install fd-find
  - method: zypper
    command: zypper install fd
  - method: apk
    command: apk add fd
  - method: brew
    command: brew install fd
  - method: port
    command: sudo port install fd
  - method: scoop
    command: scoop install fd
  - method: choco
    command: choco install fd
  - method: winget
    command: winget install sharkdp.fd
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - command-line
  - filesystem
  - hacktoberfest
  - regex
  - rust
  - search
  - terminal
  - tool
media: https://raw.githubusercontent.com/sharkdp/fd/master/doc/screencast.svg
logo: https://avatars.githubusercontent.com/u/4209276?v=4
updated: '2026-11-15'
repo_stars: 45069
repo_updated: "2026-11-14"
repo_created: "2017-05-09"
repo_release: "v10.5.2"
repo_release_date: "2026-11-07"
---
