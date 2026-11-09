---
name: astroterm
category: Media & Entertainment
short_description: >-
  A planetarium for your terminal! Explore stars, planets, constellations, and
  more, all rendered right in the command line ✨🪐
description: >-
  astroterm is a lightweight, single-binary command-line tool written in Go that
  generates terminal-based visualizations of celestial bodies.


  It uses character-based rendering to display real-time moon phases,
  illumination percentages, sun positions, and ephemeris data right in your
  terminal.


  It offers both interactive TUI views and scriptable command options, making it
  easy to fetch astronomical details without leaving the shell.
repository_url: https://github.com/da-luce/astroterm
author: da-luce
license: MIT
language: C
installation:
  - method: brew
    command: brew install astroterm
  - method: nix
    command: >-
      nix-shell -I nixpkgs=channel:nixpkgs-unstable -p astroterm --command
      astroterm
  - method: eget
    command: eget da-luce/astroterm
  - method: pacman
    command: pacman -S astroterm
  - method: dnf
    command: sudo dnf install astroterm
  - method: binary
    command: >-
      Invoke-WebRequest -Uri
      "https://github.com/da-luce/astroterm/releases/latest/download/astroterm-win-x86_64.exe"
      -OutFile "astroterm.exe"
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - ascii
  - ascii-art
  - c
  - command-line
  - console
  - linux
  - linux-terminal
  - screencast
  - screensaver
  - space
  - terminal
  - tui
  - unix
  - unix-shell
media: https://github.com/da-luce/astroterm/raw/main/assets/SG_2025-01-02.gif
logo: https://cli.masoko.net/uploads/astroterm/logo.png
updated: '2026-11-01'
repo_stars: 2537
repo_updated: "2026-09-11"
repo_created: "2023-06-16"
repo_release: "v1.2.0"
repo_release_date: "2026-04-01"
---
