---
name: dnsglobe
category: Networking
short_description: >-
  Global DNS propagation checker TUI — watch a DNS record propagate across 34
  public resolvers worldwide, on a world map in your terminal
description: >-
  a Rust TUI that queries 34 public DNS resolvers around the world in parallel,
  compares their answers, and shows the propagation of your record on a world
  map.
repository_url: https://github.com/514-labs/dnsglobe
author: Tim Delisle
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install 514-labs/tap/dnsglobe
  - method: cargo
    command: cargo install dnsglobe
  - method: other
    command: yay -S dnsglobe
  - method: other
    command: nix run github:514-labs/dnsglobe
platforms:
  - Linux
  - macOS
tags:
  - dns
  - tui
  - dns-checker
  - cli
  - dns-propagation
  - ratatui
  - rust
media: https://raw.githubusercontent.com/514-labs/dnsglobe/main/demo/demo.gif
logo: https://avatars.githubusercontent.com/u/140028474?s=200&v=4
updated: '2026-07-07'
github_stars: 845
github_updated: "2026-07-11"
github_created: "2026-07-05"
github_release: "v0.4.0"
---
