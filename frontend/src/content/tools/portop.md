---
name: portop
category: Networking
short_description: >-
  htop for your ports. Inspect processes, Docker & systemd, detect port drift,
  audit Compose, and manage it all from TUI, Web or Cockpit.
description: >-
  An htop-style interactive network port monitor for Linux that details TCP/UDP
  sockets and their associated processes.   

  Integrates deeply with systemd and Docker to inspect service owners, detect
  port drift, and audit Compose setups.   

  Accessible flexibly as a terminal TUI, a local web dashboard, or a Cockpit web
  interface add-on.
repository_url: https://github.com/padovanl/portop
website: https://padovanl.github.io/portop/
author: padovanl
license: MIT
language: Go
installation:
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/padovanl/portop/main/install.sh | sh
  - method: brew
    command: brew install portop
  - method: snap
    command: sudo snap install portop
  - method: winget
    command: winget install padovanl.portop
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - devops
  - docker
  - golang
  - linux
  - network-monitoring
  - network-tools
  - ports
  - sysadmin
  - sysstemd
  - tui
media: https://github.com/padovanl/portop/raw/main/docs/assets/demo.gif
logo: https://github.com/padovanl/portop/raw/main/docs/assets/logo.png
updated: '2026-10-17'
repo_stars: 306
repo_updated: "2026-11-07"
repo_created: "2026-08-15"
repo_release: "v0.4.0"
repo_release_date: "2026-11-07"
repo_badge: true
---
