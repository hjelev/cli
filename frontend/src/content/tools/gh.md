---
name: gh
category: Git
short_description: GitHub’s official command line tool
description: >-
  The official GitHub CLI (gh) brings pull requests, issues, and other GitHub
  features directly to your command line.  

  It allows you to streamline your Git workflows by managing repositories,
  workflows, and releases without leaving the terminal.  

  Written in Go, it features a highly extensible architecture with support for
  custom extensions and scripting.
repository_url: https://github.com/cli/cli
website: https://cli.github.com
author: cli
license: MIT
language: Go
installation:
  - method: brew
    command: brew install gh
  - method: winget
    command: winget install --id GitHub.cli --source winget
  - method: choco
    command: choco install gh
  - method: apt
    command: sudo apt install gh
  - method: apk
    command: apk add github-cli
  - method: pkg
    command: pkg install gh
  - method: pacman
    command: sudo pacman -S github-cli
  - method: other
    command: conda install gh --channel conda-forge
  - method: dnf
    command: sudo dnf install gh
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - git
  - github-api-v4
  - golang
media: https://cli.masoko.net/uploads/gh/media.png
logo: https://avatars.githubusercontent.com/u/59704711?s=200&v=4
updated: '2026-07-21'
repo_stars: 45351
repo_updated: "2026-07-21"
repo_created: "2019-10-03"
repo_release: "v2.96.0"
repo_release_date: "2026-07-02"
---
