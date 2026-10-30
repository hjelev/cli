---
name: fnm
category: Development Tools
short_description: 🚀 Fast and simple Node.js version manager, built in Rust
description: >-
  fnm (Fast Node Manager) is an extremely fast, simple, and cross-platform
  Node.js version manager built in Rust.  

  It offers zero-latency startup and seamless automatic version switching when
  navigating directories containing .node-version or .nvmrc files.  

  It supports macOS, Linux, and Windows, integrating effortlessly with popular
  shells like Bash, Zsh, Fish, and PowerShell.
repository_url: https://github.com/Schniz/fnm
website: https://fnm.vercel.app
author: Schniz
license: GPL-3.0
language: Rust
installation:
  - method: script
    command: curl -fsSL https://fnm.vercel.app/install | bash
  - method: brew
    command: brew install fnm
  - method: winget
    command: winget install Schniz.fnm
  - method: scoop
    command: scoop install fnm
  - method: choco
    command: choco install fnm
  - method: cargo
    command: cargo install fnm
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - hacktoberfest
  - javascript
  - nodejs
  - nvm
  - reasonml
  - version
media: https://raw.githubusercontent.com/Schniz/fnm/master/docs/fnm.svg
logo: https://avatars.githubusercontent.com/u/2054772?v=4
updated: '2026-10-29'
repo_stars: 27249
repo_updated: "2026-10-26"
repo_created: "2019-01-16"
repo_release: "v1.39.0"
repo_release_date: "2026-03-06"
---
