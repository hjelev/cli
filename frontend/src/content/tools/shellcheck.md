---
name: shellcheck
category: Development Tools
short_description: ShellCheck, a static analysis tool for shell scripts
description: >-
  ShellCheck is a static analysis and linting tool designed specifically for
  Bash and sh shell scripts that flags syntax errors, subtle bugs, and common
  anti-patterns.


  It acts as an automated code reviewer for the terminal, providing precise
  line-by-line warnings, stylistic suggestions, and explanatory wiki links to
  help write robust, portable shell code.


  Seamlessly integrates into editors, build pipelines, and CI/CD workflows,
  making it an essential utility for modern DevOps engineers and developers.
repository_url: https://github.com/koalaman/shellcheck
website: https://www.shellcheck.net
author: koalaman
license: GPL-3.0
language: Haskell
installation:
  - method: apt
    command: apt-get install shellcheck
  - method: dnf
    command: dnf install ShellCheck
  - method: snap
    command: snap install --channel=edge shellcheck
  - method: apk
    command: apk add shellcheck
  - method: brew
    command: brew install shellcheck
  - method: port
    command: sudo port install shellcheck
  - method: pkg
    command: pkg install hs-ShellCheck
  - method: scoop
    command: scoop install shellcheck
  - method: choco
    command: choco install shellcheck
  - method: winget
    command: winget install --id koalaman.shellcheck
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - bash
  - developer-tools
  - haskell
  - linter
  - shell
  - static-analysis
media: https://raw.githubusercontent.com/koalaman/shellcheck/master/doc/terminal.png
logo: https://cli.masoko.net/uploads/shellcheck/logo.png
updated: '2026-11-15'
repo_stars: 40348
repo_stars_recent: 1
repo_updated: "2026-11-09"
repo_created: "2012-11-17"
repo_release: "v0.11.0"
repo_release_date: "2025-08-04"
---
