---
name: gdu
category: Directory Listing
short_description: Fast disk usage analyzer with console interface written in Go
description: >-
  gdu is a fast, interactive, disk usage analyzer for the terminal written in
  Go, specifically optimized for scanning SSDs in parallel.  

  It provides a user-friendly interface that allows you to navigate file
  systems, sort by size, and delete files or directories directly while
  visualizing usage.  

  The tool is designed for high performance, offering deep insights into disk
  consumption with keyboard-driven controls and minimal resource overhead.
repository_url: https://github.com/dundee/gdu
author: dundee
license: MIT
language: Go
installation:
  - method: brew
    command: brew install gdu
  - method: pacman
    command: sudo pacman -S gdu
  - method: go
    command: go install github.com/dundee/gdu/v5/cmd/gdu@latest
platforms:
  - Linux
  - macOS
tags:
  - cli
  - disk-usage
  - filesystem
  - hacktoberfest
media: https://asciinema.org/a/382738
logo: https://github.com/dundee/gdu/raw/master/gdu.png
updated: '2026-07-19'
repo_stars: 5839
repo_updated: "2026-07-22"
repo_created: "2018-02-24"
repo_release: "v5.36.1"
repo_release_date: "2026-04-29"
---
