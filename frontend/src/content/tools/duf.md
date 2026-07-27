---
name: duf
category: System Monitoring
short_description: Disk Usage/Free Utility - a better 'df' alternative
description: >-
  Duf is a modern, user-friendly, and colorful disk usage/free utility written
  in Go.

  It serves as a better, more visually appealing alternative to the traditional
  Unix df command.  

  It supports multiple operating systems (Linux, BSD, macOS, and Windows) and
  offers flexible sorting, filtering, and JSON output options.
repository_url: https://github.com/muesli/duf
author: muesli
license: Other
language: Go
installation:
  - method: pacman
    command: pacman -S duf
  - method: apt
    command: apt install duf
  - method: dnf
    command: dnf install duf
  - method: nix
    command: nix-env -iA nixpkgs.duf
  - method: pkg
    command: pkg install duf
  - method: brew
    command: brew install duf
  - method: port
    command: sudo port selfupdate && sudo port install duf
  - method: choco
    command: choco install duf
  - method: scoop
    command: scoop install duf
  - method: pkg
    command: pkg install duf
  - method: binary
    command: https://github.com/muesli/duf/releases
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - df
  - disk-space
  - disk-usage
  - filesystem
  - freebsd
  - hacktoberfest
media: https://raw.githubusercontent.com/muesli/duf/refs/heads/master/duf.png
logo: https://avatars.githubusercontent.com/u/146378?v=4
updated: '2026-07-23'
repo_stars: 15218
repo_updated: "2026-01-13"
repo_created: "2020-09-20"
repo_release: "v0.9.1"
repo_release_date: "2025-09-08"
---
