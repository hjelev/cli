---
name: sake
category: DevOps & Cloud
short_description: 🤖 task runner for local and remote hosts
description: >-
  sake is a command runner for local and remote hosts. You define servers and
  tasks in sake.yaml file and then run the tasks on the servers.
repository_url: https://github.com/alajmo/sake
website: https://sakecli.com
author: alajmo
license: MIT
language: Go
installation:
  - method: pacman
    command: pacman -S sake
  - method: go
    command: go install github.com/alajmo/sake@latest
  - method: eget
    command: eget alajmo/sake
  - method: pkg
    command: pkg install sake
  - method: brew
    command: brew install alajmo/mani/sake
platforms:
  - Linux
  - macOS
tags:
  - cli
  - config
  - golang
  - server
  - ssh
media: https://raw.githubusercontent.com/alajmo/sake/main/res/output.gif
logo: https://sakecli.com/img/logo.svg
updated: '2026-09-05'
repo_stars: 753
repo_updated: "2026-05-31"
repo_created: "2021-10-09"
repo_release: "v0.15.1"
repo_release_date: "2023-09-25"
comments: []
---
