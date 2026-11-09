---
name: linecast
category: Media & Entertainment
short_description: >-
  Weather, tides, the sun, the moon, maps, and a planetarium, in your terminal.
  The Old Farmer's Almanac meets Minitel.
description: >-
  Seven live terminal apps built on free public data. Pure Python, no accounts
  or API keys required. Colors come from your terminal theme, and the mouse
  works. Runs on macOS, Linux, and Windows, over SSH, and in tmux.
repository_url: https://github.com/ashuttl/linecast
author: ashuttl
license: MIT
language: Python
installation:
  - method: script
    command: >-
      curl -sL https://raw.githubusercontent.com/ashuttl/linecast/main/get.sh |
      sh
  - method: uv
    command: uv tool install linecast
  - method: brew
    command: brew install ashuttl/linecast/linecast
  - method: aur
    command: yay -S linecast
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - maps
  - moon
  - python
  - radar
  - sunlight
  - terminal
  - planetarium
  - terminal-ui
  - tides
  - tui
  - weather
media: https://raw.githubusercontent.com/ashuttl/linecast/main/screenshots/hero.png
logo: https://avatars.githubusercontent.com/u/2095936?v=4
updated: '2026-11-09'
comments: []
repo_stars: 676
repo_updated: '2026-11-06'
repo_created: '2026-03-05'
repo_release: v2.12.0
repo_release_date: '2026-11-06'
---
