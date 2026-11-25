---
name: git-who
category: Git
short_description: Git blame for file trees
description: >-
  git-who is a command-line tool that acts as a "git blame for file trees",
  extending authorship tracking from individual lines to entire directories and
  projects.   

  It calculates code ownership metrics, line additions, and modifications across
  specific paths or whole repositories to reveal who contributed most to a
  codebase structure.  


  Featuring built-in caching, .mailmap support, and ignore-revs integration, it
  provides a lightning-fast terminal overview of complex project contributions.
repository_url: https://github.com/sinclairtarget/git-who
author: sinclairtarget
license: MIT
language: Go
installation:
  - method: go
    command: go install github.com/sinclairtarget/git-who@latest
  - method: brew
    command: brew install git-who
  - method: port
    command: sudo port install git-who
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - git-blame
  - code-ownership
  - analytics
  - contributors
media: https://cli.masoko.net/uploads/git-who/media.png
logo: https://cli.masoko.net/uploads/git-who/logo.svg
updated: '2026-11-15'
repo_stars: 2673
repo_stars_recent: 0
repo_updated: "2026-05-28"
repo_created: "2024-12-07"
repo_release: "v1.3"
repo_release_date: "2026-01-24"
---
