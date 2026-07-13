---
name: process-compose
category: DevOps & Cloud
short_description: >-
  Process Compose is a simple and flexible scheduler and orchestrator to manage
  non-containerized applications.
description: >-
  A simple and flexible scheduler and orchestrator designed to manage
  non-containerized applications.  

  Eliminates the overhead of Dockerfiles, volumes, and networks for local
  multi-service workflows.  

  Offers a feature-rich Terminal User Interface (TUI), REST API, and dependency
  graph visualization.  

  Written in Go as a single standalone binary with zero external dependencies.
repository_url: https://github.com/F1bonacc1/process-compose
website: https://f1bonacc1.github.io/process-compose/
author: F1bonacc1
license: Apache-2.0
language: Go
installation:
  - method: script
    command: >-
      sh -c "$(curl --location
      https://raw.githubusercontent.com/F1bonacc1/process-compose/main/scripts/get-pc.sh)"
      -- -d
  - method: brew
    command: brew install f1bonacc1/tap/process-compose
  - method: go
    command: go install github.com/f1bonacc1/process-compose@latest
platforms:
  - Linux
  - macOS
tags:
  - docker
  - go
  - golang
  - open-source
  - orchestration
  - orchestrator
  - processes
  - tui
  - workflows
media: https://raw.githubusercontent.com/F1bonacc1/process-compose/main/imgs/demo.gif
logo: https://cli.masoko.net/uploads/process-compose/logo.png
updated: '2026-07-13'
comments: []
github_stars: 2565
github_updated: '2026-07-11'
github_created: '2022-04-05'
github_release: v1.120.0
---
