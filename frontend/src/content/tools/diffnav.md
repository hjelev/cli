---
name: diffnav
category: Git
short_description: A git diff pager based on delta but with a file tree, à la GitHub.
description: >-
  A terminal UI git diff pager that builds on top of delta for syntax
  highlighting.

  Adds a collapsible, GitHub-style file tree navigator on the left side for easy
  exploration.  

  Brings a seamless pull request review experience directly into your
  command-line workflow.
repository_url: https://github.com/dlvhdr/diffnav
author: dlvhdr
license: MIT
language: Go
installation:
  - method: brew
    command: brew install dlvhdr/formulae/diffnav
  - method: go
    command: go install github.com/dlvhdr/diffnav@latest
platforms:
  - Linux
  - macOS
tags:
  - cli
  - delta
  - diff
  - git
  - github
  - golang
  - tui
media: https://cli.masoko.net/uploads/diffnav/media.gif
logo: https://cli.masoko.net/uploads/diffnav/logo.png
updated: '2026-07-18'
comments: []
repo_stars: 1473
repo_updated: '2026-07-15'
repo_created: '2024-09-18'
repo_release: v0.11.0
---
