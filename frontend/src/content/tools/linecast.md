---
name: linecast
category: Utilities & Other
short_description: >-
  Weather, tides, the sun, the moon, and maps, in your terminal. The Old
  Farmer's Almanac meets Minitel.
description: >-
  linecast turns free public data into six live, mouse-friendly terminal apps.
  It is pure Python, has no dependencies, adapts to your terminal theme, and
  needs no account or API key for its core experience.
repository_url: https://github.com/ashuttl/linecast
website: https://terminaltrove.com/linecast/
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
  - terminal-ui
  - tides
  - tui
  - weather
media: https://raw.githubusercontent.com/ashuttl/linecast/main/screenshots/hero.gif
logo: https://avatars.githubusercontent.com/u/2095936?v=4
updated: '2026-08-21'
repo_stars: 105
repo_updated: "2026-08-23"
repo_created: "2026-03-05"
repo_release: "v1.15.1"
repo_release_date: "2026-08-23"
---
