---
name: glances
category: System Monitoring
short_description: >-
  Glances an Eye on your system. A top/htop alternative for GNU/Linux, BSD,
  macOS and Windows operating systems.
description: >-
  Glances is a cross-platform, open-source system monitoring tool written in
  Python that serves as an advanced alternative to traditional utilities like
  top or htop.  

  It provides real-time metrics for CPU, memory, disks, network, processes,
  containers, and hardware sensors through an intuitive terminal, web UI, or
  REST API dashboard.  

  Additionally, it supports remote client/server architectures and features an
  integrated Model Context Protocol (MCP) server so AI assistants can directly
  query system states.
repository_url: https://github.com/nicolargo/glances
website: http://nicolargo.github.io/glances/
author: nicolargo
license: Other
language: Python
installation:
  - method: pip
    command: pip install glances
  - method: apt
    command: apt-get install glances
  - method: pacman
    command: pacman -S glances
  - method: dnf
    command: dnf install glances
  - method: yum
    command: yum install glances
  - method: apk
    command: apk add glances
  - method: nix
    command: nix-env -iA glances
  - method: brew
    command: brew install glances
  - method: port
    command: sudo port install glances
  - method: pkg
    command: pkg install sysutils/py-glances
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - monitoring
  - multi-platform
  - python
  - restful
  - restful-api
  - system
  - terminal
  - web
media: >-
  https://raw.githubusercontent.com/nicolargo/glances/develop/docs/_static/glances-summary.png
logo: https://avatars.githubusercontent.com/u/776747?v=4
updated: '2026-11-07'
repo_stars: 33921
repo_updated: "2026-11-08"
repo_created: "2011-12-04"
repo_release: "v4.5.9"
repo_release_date: "2026-11-07"
---
