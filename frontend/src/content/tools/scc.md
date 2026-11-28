---
name: scc
category: Development Tools
short_description: >-
  Sloc, Cloc and Code: scc is a very fast accurate code counter with complexity
  calculations and COCOMO estimates written in pure Go
description: >-
  scc is a blazing-fast, accurate command-line code counter written in Go that
  measures physical lines, blank lines, comments, and estimated code complexity
  across hundreds of programming languages.


  It provides comprehensive project statistics, COCOMO cost estimations, and
  multi-format reporting (including JSON, CSV, and HTML) with parallelized
  multi-threaded performance.


  Seamlessly integrated into terminal workflows and CI/CD pipelines, it serves
  as an indispensable utility for auditing codebase scale and development
  metrics at a glance.
repository_url: https://github.com/boyter/scc
author: boyter
license: MIT
language: Go
installation:
  - method: pacman
    command: pacman -S scc
  - method: go
    command: go install github.com/boyter/scc@master
  - method: brew
    command: brew install scc
  - method: port
    command: sudo port install scc
  - method: pkg
    command: pkg install scc
  - method: scoop
    command: scoop install scc
  - method: choco
    command: choco install scc
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - cloc
  - code
  - complexity
  - golang
  - linux
  - macos
  - scc
  - sloc
  - sloccount
  - statistics
  - tokei
  - windows
media: https://cli.masoko.net/uploads/scc/media.png
logo: https://raw.githubusercontent.com/boyter/scc/master/scc.jpg
updated: '2026-11-15'
repo_stars: 8904
repo_stars_recent: 29
repo_updated: "2026-11-26"
repo_created: "2018-03-01"
repo_release: "v4.1.0"
repo_release_date: "2026-09-07"
---
