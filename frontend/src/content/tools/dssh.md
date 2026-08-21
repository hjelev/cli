---
name: dssh
category: Networking
short_description: The dead-simple SSH connection manager. CLI & TUI.
description: >-
  The only SSH connection management tool you'll ever need. CLI & TUI. No
  dependencies, no manual file editing.


  Four core features: Create, Connect, Edit, Delete. Dead-simple and
  cross-platform.


  Store connections in SQLite, your ssh_config file, or both — your choice.
repository_url: https://github.com/madLinux7/dssh
website: https://dssh.grolmes.com
author: madLinux7
license: MIT
language: Go
installation:
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/madLinux7/dssh/main/install.sh | sh
  - method: powershell
    command: >-
      irm https://raw.githubusercontent.com/madLinux7/dssh/main/install.ps1 |
      iex
  - method: aur
    command: yay -S dssh
  - method: brew
    command: brew install dssh
  - method: winget
    command: winget install dssh
  - method: aur
    command: paru -S dssh
  - method: go
    command: go install github.com/madLinux7/dssh/cmd/dssh@latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - cross-platform
  - dead-simple
  - golang
  - ssh
  - ssh-management-cli
  - ssh-manager
  - terminal
  - tui
media: >-
  https://raw.githubusercontent.com/madLinux7/dssh-artifacts/refs/heads/main/demo_tabs.gif
logo: https://dssh.grolmes.com/_astro/dssh_stripped.D28FK-iO_SMe1d.svg
updated: '2026-08-21'
repo_stars: 87
repo_updated: "2026-07-24"
repo_created: "2026-04-01"
repo_release: "v2.2.1"
repo_release_date: "2026-07-24"
---
