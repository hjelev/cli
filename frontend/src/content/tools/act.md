---
name: act
category: Development Tools
short_description: Run your GitHub Actions locally 🚀
description: >-
  act is a popular command-line tool written in Go that allows developers to run
  GitHub Actions workflows locally.   

  It uses Docker containers to simulate the exact runner environment, cutting
  down debugging loops from minutes to seconds.   

  It supports environment variables, secret injection, and matrix builds
  directly from your terminal without needing to push commits.
repository_url: https://github.com/nektos/act
website: https://nektosact.com
author: nektos
license: MIT
language: Go
installation:
  - method: brew
    command: brew install act
  - method: port
    command: sudo port install act
  - method: pacman
    command: pacman -Syu act
  - method: dnf
    command: dnf copr enable goncalossilva/act; dnf install act-cli
  - method: other
    command: zypper install act
  - method: apk
    command: apk add act
  - method: scoop
    command: scoop install act
  - method: choco
    command: choco install act-cli
  - method: winget
    command: winget install nektos.act
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - ci
  - devops
  - github-actions
  - golang
media: https://raw.githubusercontent.com/nektos/act/main/docs/img/act-quickstart.gif
logo: https://github.com/nektos/act/raw/main/docs/img/act-logo.svg
updated: '2026-11-02'
repo_stars: 72574
repo_updated: "2026-11-04"
repo_created: "2019-01-02"
repo_release: "v0.2.97"
repo_release_date: "2026-11-04"
---
