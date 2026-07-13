---
name: k9s
category: DevOps & Cloud
short_description: 🐶 Kubernetes CLI To Manage Your Clusters In Style!
description: >-
  K9s provides a terminal UI to interact with your Kubernetes clusters. The aim
  of this project is to make it easier to navigate, observe and manage your
  applications in the wild. K9s continually watches Kubernetes for changes and
  offers subsequent commands to interact with your observed resources.
repository_url: https://github.com/derailed/k9s
website: https://k9scli.io
author: derailed
license: Apache-2.0
language: Go
installation:
  - method: brew
    command: brew install derailed/k9s/k9s
  - method: snap
    command: snap install k9s --devmode
  - method: pacman
    command: pacman -S k9s
  - method: binary
    command: >-
      wget
      https://github.com/derailed/k9s/releases/latest/download/k9s_linux_amd64.deb
      && sudo apt install ./k9s_linux_amd64.deb && rm k9s_linux_amd64.deb
  - method: winget
    command: winget install k9s
  - method: go
    command: >-
      # NOTE: The dev version will be in effect! go install
      github.com/derailed/k9s@latest
  - method: script
    command: curl -sS https://webinstall.dev/k9s | bash
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - go
  - golang
  - k8s
  - k8s-cluster
  - k9s
  - kubernetes
  - kubernetes-cli
  - kubernetes-clusters
media: https://raw.githubusercontent.com/derailed/k9s/master/assets/screen_po.png
logo: https://github.com/derailed/k9s/raw/master/assets/k9s.png
updated: '2026-07-11'
github_stars: 34118
github_updated: "2026-07-10"
github_created: "2019-01-25"
github_release: "v0.51.0"
---
