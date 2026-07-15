---
name: g
category: Directory Listing
short_description: powerful and cross-platform ls 🌈
description: >-
  A feature-rich, customizable, and cross-platform ls alternative.  

  Experience enhanced visuals with type-specific icons, various layout options,
  and git status integration.
repository_url: https://github.com/Equationzhao/g
website: https://equationzhao.github.io/g/
author: equationzhao
license: MIT
language: Go
installation:
  - method: brew
    command: brew install g-ls
  - method: go
    command: go install -ldflags="-s -w" github.com/Equationzhao/g@latest
  - method: script
    command: >-
      bash -c "$(curl -fsSLk
      https://raw.githubusercontent.com/Equationzhao/g/master/script/install.sh)"
  - method: other
    command: >-
      scoop install
      https://raw.githubusercontent.com/Equationzhao/g/master/scoop/g.json
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - ls-alternative
  - cli
  - command-line-tool
  - ls
  - golang
  - utility
  - darwin
  - linux-shell
  - macos
  - windows
media: https://raw.githubusercontent.com/equationzhao/g/master/asset/screenshot_3.png
logo: https://avatars.githubusercontent.com/u/75521101?v=4
updated: '2026-07-04'
repo_stars: 355
repo_updated: "2026-07-04"
repo_created: "2023-04-23"
repo_release: "v0.31.2"
comments: []
---
