---
name: lazyskills
category: AI
short_description: mission control for agent skills
description: >-
  LazySkills is a blazing-fast terminal UI for managing agent skills. It gives
  you one place to see what is installed, which agents can use each skill, why
  visibility may be broken, and what actions are safe to run next.
repository_url: https://github.com/alvinunreal/lazyskills
website: https://lazyskills.sh
author: Alvin
license: MIT
language: Go
installation:
  - method: go
    command: go install github.com/alvinunreal/lazyskills/cmd/lazyskills@latest
  - method: brew
    command: brew install --cask alvinunreal/tap/lazyskills
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/alvinunreal/lazyskills/main/scripts/install.sh
      | sh
  - method: other
    command: >-
      irm
      https://raw.githubusercontent.com/alvinunreal/lazyskills/main/scripts/install.ps1
      | iex
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - AI
  - skill-management
media: https://github.com/alvinunreal/lazyskills/raw/main/assets/demo.gif
logo: https://lazyskills.sh/logo.svg
updated: '2026-07-04'
github_stars: 117
github_updated: "2026-07-02"
github_release: "v0.3.2"
---
