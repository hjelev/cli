---
name: GLab
category: Git
short_description: The official GitLab CLI
description: >-
  The official GitLab CLI (glab) brings GitLab issues, merge requests,
  pipelines, and releases directly to your terminal.  

  It allows you to manage your complete GitLab workflow, interact with project
  files, and trigger CI/CD pipelines without leaving the command line.  

  Written in Go, it features a customizable interface and integrates seamlessly
  with your local Git configurations.
repository_url: https://gitlab.com/gitlab-org/cli
author: gitlabhq
license: MIT
language: Go
installation:
  - method: brew
    command: brew install glab
  - method: snap
    command: sudo snap install glab
  - method: apk
    command: apk add --no-cache glab
  - method: dnf
    command: dnf install glab
  - method: apt
    command: sudo apt install glab
  - method: winget
    command: winget install glab.glab
  - method: choco
    command: choco install glab
  - method: scoop
    command: scoop install glab
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - gitlab
  - glab
media: >-
  https://raw.githubusercontent.com/gitlabhq/cli/main/docs/source/img/getting-started.gif
logo: >-
  https://gitlab.com/uploads/-/system/project/avatar/34675721/cli-logo.png?width=48
updated: '2026-07-21'
repo_stars: 1054
repo_updated: "2026-07-23"
repo_created: "2022-03-21"
repo_release: "v1.109.0"
repo_release_date: "2026-07-21"
---
