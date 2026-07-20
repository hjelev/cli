---
name: dive
category: DevOps & Cloud
short_description: A tool for exploring each layer in a docker image
description: >-
  A tool for exploring a Docker image, layer contents, and discovering ways to
  shrink the size of your Docker/OCI image.
repository_url: https://github.com/wagoodman/dive
author: wagoodman
license: MIT
language: Go
installation:
  - method: snap
    command: sudo snap install dive
  - method: pacman
    command: pacman -S dive
  - method: brew
    command: brew install dive
  - method: winget
    command: winget install --id wagoodman.dive
  - method: go
    command: go install github.com/wagoodman/dive@latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - docker
  - docker-image
  - explorer
  - inspector
  - tui
media: https://github.com/wagoodman/dive/raw/main/.data/demo.gif
logo: https://avatars.githubusercontent.com/u/590471?v=4
updated: '2026-07-18'
repo_stars: 54333
repo_updated: "2025-12-15"
repo_created: "2018-05-13"
repo_release: "v0.13.1"
repo_release_date: "2025-03-29"
---
