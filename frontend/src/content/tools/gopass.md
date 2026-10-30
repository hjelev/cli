---
name: gopass
category: Security
short_description: The slightly more awesome standard unix password manager for teams
description: >-
  A slightly more awesome standard Unix password manager designed for teams and
  developers.    

  Encrypts credentials securely using GPG (or alternative backends like age) and
  versions them via Git.   

  Provides a command-line interface with support for browser extensions,
  multi-device syncing, and team secret sharing.
repository_url: https://github.com/gopasspw/gopass
website: https://www.gopass.pw/
author: gopasspw
license: MIT
language: Go
installation:
  - method: brew
    command: brew install gopass
  - method: port
    command: sudo port install gopass
  - method: dnf
    command: dnf install gopass
  - method: pacman
    command: pacman -S gopass
  - method: scoop
    command: scoop install gopass
  - method: apk
    command: apk add gopass
  - method: go
    command: go install github.com/gopasspw/gopass@latest
  - method: other
    command: https://github.com/gopasspw/gopass/releases/latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - git
  - go
  - gpg
  - hacktoberfest
  - password-manager
  - security
media: https://github.com/gopasspw/gopass/raw/master/docs/showcase.png
logo: https://github.com/gopasspw/gopass/raw/master/docs/logo.png
updated: '2026-10-20'
repo_stars: 7299
repo_updated: "2026-10-29"
repo_created: "2017-02-02"
repo_release: "v1.17.4"
repo_release_date: "2026-10-10"
---
