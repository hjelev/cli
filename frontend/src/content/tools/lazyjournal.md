---
name: lazyjournal
category: DevOps & Cloud
short_description: >-
  TUI for viewing logs from journald, auditd, file system, Docker and Podman
  containers, Compose stacks and Kubernetes pods with support for l
description: >-
  TUI for viewing logs from journald, auditd, file system, Docker and Podman
  containers, Compose stacks and Kubernetes pods with support for log
  highlighting and several filtering modes.
repository_url: https://github.com/Lifailon/lazyjournal
website: https://pkg.go.dev/github.com/Lifailon/lazyjournal
author: Lifailon
license: MIT
language: Go
installation:
  - method: brew
    command: brew install lazyjournal
  - method: other
    command: conda install -c conda-forge lazyjournal
  - method: other
    command: paru -S lazyjournal
  - method: other
    command: >-
      irm
      https://raw.githubusercontent.com/Lifailon/lazyjournal/main/scripts/install.ps1
      | iex
  - method: go
    command: go install github.com/Lifailon/lazyjournal@latest
platforms:
  - Linux
  - macOS
tags:
  - auditd
  - docker-logs
  - go
  - gocui
  - highlighting
  - journal
  - journalctl
  - journald
  - k8s-logging
  - kubernetes-logging
  - log-analysis
  - log-monitor
  - log-parser
  - log-viewer
  - logfile
  - logging
  - logs
  - podman
  - syslog
  - tui
media: https://github.com/Lifailon/lazyjournal/raw/main/img/fuzzy.png
logo: https://cli.masoko.net/uploads/lazyjournal/logo.png
updated: '2026-07-13'
github_stars: 1320
github_updated: "2026-07-01"
github_created: "2024-11-12"
github_release: "0.8.6"
---
