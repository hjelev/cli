---
name: ctop
category: System Monitoring
short_description: Top-like interface for container metrics
description: >-
  ctop is a command-line tool that provides a concise, top-like real-time
  interface for monitoring container metrics.  

  It supports both a comprehensive overview of multiple containers and a
  detailed view for inspecting specific individual instances.  

  The tool is designed for Docker and runC environments, offering an interactive
  experience to manage, filter, and analyze container performance directly from
  your terminal.
repository_url: https://github.com/bcicen/ctop
website: https://ctop.sh
author: bcicen
license: MIT
language: Go
installation:
  - method: pacman
    command: sudo pacman -S ctop
  - method: brew
    command: brew install ctop
  - method: other
    command: scoop install ctop
  - method: docker
    command: >-
      docker run --rm -ti \   --name=ctop \   --volume
      /var/run/docker.sock:/var/run/docker.sock:ro \  
      quay.io/vektorlab/ctop:latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - command-line
  - commandline
  - containers
  - docker
  - monitoring
  - runc
  - top
media: https://github.com/bcicen/ctop/raw/master/_docs/img/grid.gif
logo: https://cli.masoko.net/uploads/ctop/logo.png
updated: '2026-07-18'
repo_stars: 17788
repo_updated: "2024-07-08"
repo_created: "2016-12-27"
repo_release: "v0.7.7"
comments: []
---
