---
name: sampler
category: System Monitoring
short_description: >-
  Tool for shell commands execution, visualization and alerting. Configured with
  a simple YAML file.
description: >-
  Sampler is a lightweight, cross-platform terminal tool that executes shell
  commands at defined intervals to visualize metrics and trigger alerts.  

  Fully customizable via a simple YAML file, it renders real-time data using
  charts, gauges, and text boxes without needing external databases or servers.
repository_url: https://github.com/sqshq/sampler
website: https://sampler.dev
author: sqshq
license: GPL-3.0
language: Go
installation:
  - method: brew
    command: brew install sampler
  - method: port
    command: sudo port install sampler
  - method: scoop
    command: scoop install sampler
  - method: choco
    command: choco install sampler
  - method: aur
    command: yay -S sampler
  - method: emerge
    command: emerge sys-apps/sampler
  - method: nix
    command: nix-env -iA sampler
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - alerting
  - charts
  - cmd
  - command-line
  - command-line-tool
  - dashbord
  - golang
  - monitoring
  - sampler
  - shell
  - terminal
  - visualization
media: https://s3.amazonaws.com/sampler-backend/demo.mp4
logo: https://sampler.dev/img/favicon.png
updated: '2026-11-07'
repo_stars: 14812
repo_updated: "2024-02-22"
repo_created: "2019-01-25"
repo_release: "v1.1.0"
repo_release_date: "2019-12-24"
---
