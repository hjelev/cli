---
name: ephact
category: Development Tools
short_description: Rust crate that runs supported workflows locally in Linux containers.
description: >-
  ephact is a Rust crate that runs supported Forgejo, GitHub, and Woodpecker
  workflows locally in Linux containers using Docker or Podman.
repository_url: https://codeberg.org/gbrennon/ephact
website: https://codeberg.org/gbrennon/ephact
author: gbrennon
license: MIT,Apache-2.0
language: Rust
installation:
  - method: cargo
    command: cargo install ephact
  - method: cargo
    command: cargo install --git https://codeberg.org/gbrennon/ephact
platforms:
  - Linux
tags:
  - continuous-delivery
  - continuous-deployment
  - continuous-integration
  - ephemeral
  - rust
media: https://cli.masoko.net/uploads/ephact/media.gif
updated: '2026-11-16'
---
