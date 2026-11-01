---
name: lsix
category: Directory Listing
short_description: Like "ls", but for images. Shows thumbnails in terminal using sixel graphics.
description: >-
  lsix is a terminal command-line tool that displays six-pixel thumbnails of
  images directly in the terminal, acting like ls for graphics.


  It uses Sixel graphics graphics protocols supported by modern terminal
  emulators to render pictures without opening a separate window.


  Written as a simple shell script, it automatically scales images to fit your
  terminal window layout and supports transparency.
repository_url: https://github.com/hackerb9/lsix
author: hackerb9
license: GPL-3.0
language: Shell
installation:
  - method: pacman
    command: pacman -S lsix
  - method: apk
    command: apk add lsix
  - method: brew
    command: brew install lsix
  - method: pkg
    command: pkg install lsix
  - method: pkgin
    command: pkgin install graphics/lsix
platforms:
  - Linux
  - macOS
tags:
  - files
  - graphics
  - imagemagick
  - ls
  - montage
  - sixel-graphics
  - terminal
  - terminal-graphics
  - thumbnails
  - vt340
  - xterm
media: >-
  https://raw.githubusercontent.com/hackerb9/lsix/master/README.md.d/example1.png
logo: https://avatars.githubusercontent.com/u/10174223?v=4
updated: '2026-11-01'
---
