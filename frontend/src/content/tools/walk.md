---
name: walk
category: File Management
short_description: Walk — a terminal navigator; a cd and ls replacement.
description: >-
  A minimal terminal navigator and file manager designed to replace traditional
  cd and ls commands.  

  Features instant fuzzy searching and smooth keyboard navigation using arrow
  keys or Vim bindings.  

  Written in Go, offering a fast, lightweight, and fluid TUI workflow for
  developers.
repository_url: https://github.com/antonmedv/walk
author: antonmedv
license: MIT
language: Go
installation:
  - method: brew
    command: brew install walk
  - method: go
    command: go install github.com/antonmedv/walk@latest
  - method: script
    command: >-
      curl https://raw.githubusercontent.com/antonmedv/walk/master/install.sh |
      sh
platforms:
  - Linux
  - macOS
tags:
  - cli
  - file-manager
  - terminal
media: https://github.com/antonmedv/walk/raw/master/.github/images/demo.gif
logo: https://cli.masoko.net/uploads/walk/logo.png
updated: '2026-07-15'
repo_stars: 3626
repo_updated: "2026-01-06"
repo_created: "2021-12-08"
repo_release: "v1.13.0"
comments: []
---
