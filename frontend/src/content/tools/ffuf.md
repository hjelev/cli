---
name: ffuf
category: Security
short_description: Fast web fuzzer written in Go
description: >-
  A fast web fuzzer written in Go designed for discovering directories, files,
  vhosts, and parameters.


  Features multi-threaded performance with flexible matching and filtering
  options to handle large responses efficiently.


  Integrates customizable wordlists, custom headers, and proxy support for
  comprehensive security auditing and web reconnaissance.
repository_url: https://github.com/ffuf/ffuf
author: ffuf
license: MIT
language: Go
installation:
  - method: scoop
    command: scoop install ffuf
  - method: winget
    command: winget install ffuf.ffuf
  - method: brew
    command: brew install ffuf
  - method: go
    command: go install github.com/ffuf/ffuf/v2@latest
  - method: other
    command: https://github.com/ffuf/ffuf/releases/latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - fuzzer
  - infosec
  - pentesting
  - web
media: https://asciinema.org/a/211350
logo: https://github.com/ffuf/ffuf/raw/master/_img/ffuf_run_logo_600.png
updated: '2026-10-20'
repo_stars: 16963
repo_updated: "2026-09-26"
repo_created: "2018-11-08"
repo_release: "v2.3.0"
repo_release_date: "2026-09-09"
---
