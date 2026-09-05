---
name: sofka
category: DevOps & Cloud
short_description: >-
  A reimagining of k9s with one generic object pipeline instead of a renderer
  per resource kind
description: >-
  A high-performance, async-first Kubernetes TUI built in Rust using kube-rs and
  ratatui.

  Features a unified generic object pipeline that natively supports CRDs, Flux,
  ArgoCD, and Helm inspectors.

  Includes built-in diagnostic tools like an evidence-based incident view (X),
  background port-forwards, and bulk actions.
repository_url: https://github.com/nklmilojevic/sofka/
website: https://sofka.rs
author: nklmilojevic
license: Apache-2.0
language: Rust
installation:
  - method: brew
    command: brew install nklmilojevic/sofka/sofka
  - method: nix
    command: nix run github:nklmilojevic/sofka
  - method: cargo
    command: cargo install sofka
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - kubernetes
  - k9s
media: https://raw.githubusercontent.com/nklmilojevic/sofka/main/docs/demo.gif
logo: https://sofka.rs/assets/favicon.svg
updated: '2026-09-05'
repo_stars: 386
repo_updated: "2026-09-05"
repo_created: "2026-07-01"
repo_release: "v0.23.0"
repo_release_date: "2026-09-05"
---
