---
name: mise
category: DevOps & Cloud
short_description: dev tools, env vars, task runner
description: >-
  mise is a fast, cross-platform task runner and environment manager that
  replaces tools like asdf, nvm, and direnv. It allows you to define
  project-specific environments, manage tool versions, and automate tasks
  through a simple configuration file. Written in Rust, it integrates seamlessly
  into your shell to automatically set up your developer tools and path
  variables as you navigate your workspace.
repository_url: https://github.com/jdx/mise
website: https://mise.en.dev
author: jdx
license: MIT
language: Rust
installation:
  - method: script
    command: curl https://mise.run | sh
  - method: apk
    command: apk add mise
  - method: pacman
    command: sudo pacman -S mise
  - method: cargo
    command: cargo install --locked mise
  - method: dnf
    command: sudo dnf copr enable jdxcode/mise -y && sudo dnf install mise -y
  - method: snap
    command: sudo snap install mise --classic
  - method: brew
    command: brew install mise
  - method: npm
    command: npm install -g mise
  - method: port
    command: sudo port install mise
  - method: nix
    command: nix-env -iA mise
  - method: scoop
    command: scoop install mise
  - method: winget
    command: winget install jdx.mise
  - method: choco
    command: choco install mise
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - environment-manager
  - developer-experience
  - version-manager
  - task-runner
media: https://github.com/jdx/mise/raw/main/docs/tapes/demo.gif
logo: https://github.com/jdx/mise/raw/main/docs/public/logo-dark.svg
updated: '2026-07-19'
repo_stars: 30929
repo_updated: "2026-07-20"
repo_created: "2023-01-09"
repo_release: "v2026.7.7"
repo_release_date: "2026-07-15"
---
