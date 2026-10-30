---
name: zerobrew
category: Utilities & Other
short_description: An up to 10x faster Homebrew client
description: >-
  Zerobrew is an extremely fast, Rust-built alternative client for Homebrew that
  leverages a content-addressable store and APFS clonefiles to dramatically
  accelerate package installations.  

  It consumes Homebrew's pre-built bottles and falls back to its Ruby DSL for
  source builds, offering full compatibility with standard Brewfiles and
  commands.  

  Designed for macOS and Linux, it significantly reduces setup times for local
  development workflows and CI/CD pipelines.
repository_url: https://github.com/zerobrewhq/zerobrew
author: zerobrewhq
license: Apache-2.0
language: Rust
installation:
  - method: script
    command: curl -fsSL https://zerobrew.rs/install | bash
  - method: brew
    command: brew install zerobrewhq/tap/zerobrew
platforms:
  - Linux
  - macOS
tags:
  - brew
  - homebrew
media: >-
  https://raw.githubusercontent.com/zerobrewhq/zerobrew/main/assets/zb-demo-0.4.0.gif
logo: https://avatars.githubusercontent.com/u/336332407?s=200&v=4
updated: '2026-10-30'
---
