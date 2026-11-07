---
name: gowall
category: Media & Entertainment
short_description: >-
  A tool to convert a Wallpaper's color scheme / palette, OCR with VLM's
  Traditional & Hybrid, Image Compression ,color palette extraction ...
description: >-
  gowall is a fast command-line utility written in Go designed to manage,
  convert, and apply desktop wallpapers.


  It supports changing image formats, resizing, and generating custom color
  palettes or dark/light variants from input images.


  It integrates with popular terminal color schemes and wallpaper managers to
  keep your desktop environment consistent.
repository_url: https://github.com/Achno/gowall
website: https://achno.github.io/gowall-docs/
author: Achno
license: MIT
language: Go
installation:
  - method: aur
    command: yay -S gowall
  - method: nix
    command: nix-env -iA gowall
  - method: go
    command: go install github.com/Achno/gowall@latest
  - method: brew
    command: brew install gowall
  - method: xbps
    command: sudo xbps-install -S gowall
  - method: scoop
    command: scoop install main/zig
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - background-removal
  - cli
  - color-extractor
  - color-palette
  - color-scheme
  - compression
  - go
  - image
  - image-converter
  - image-processing
  - ocr
  - pixel-art
  - theme-switcher
  - upscale
media: https://raw.githubusercontent.com/Achno/gowall/main/assets/custom.png
logo: >-
  https://raw.githubusercontent.com/Achno/gowall/main/assets/go-sticker-overlay-small.png
updated: '2026-11-01'
repo_stars: 2330
repo_updated: "2026-10-20"
repo_created: "2024-07-22"
repo_release: "v0.2.4"
repo_release_date: "2026-04-09"
---
