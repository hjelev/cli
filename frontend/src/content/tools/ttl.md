---
name: ttl
category: Networking
short_description: >-
  Fast, modern traceroute with real-time TUI, per-hop stats, ASN/geo lookup,
  ECMP detection, and MPLS label parsing.
description: >-
  ttl is a fast, modern network diagnostic and traceroute tool written in Rust
  featuring a real-time terminal user interface (TUI).  

  It functions as an advanced alternative to traceroute and mtr, offering
  per-hop statistics, ASN/GeoIP lookups, and ECMP path detection.  

  It also supports multi-target tracing, path MTU discovery, NAT detection, and
  route flap alerts with sparkline visual themes.  

  In addition to the interactive TUI, it can output scriptable data (JSON, CSV)
  or run in a headless daemon mode with a Prometheus exporter.
repository_url: https://github.com/lance0/ttl
author: lance0
license: Apache-2.0
language: Rust
installation:
  - method: brew
    command: brew install ttl
  - method: cargo
    command: cargo install ttl
  - method: docker
    command: >-
      docker run -d -p 9090:9090 ghcr.io/lance0/ttl --daemon --prometheus :9090
      8.8.8.8
  - method: script
    command: >-
      curl -fsSL https://raw.githubusercontent.com/lance0/ttl/master/install.sh
      | sh
  - method: aur
    command: yay -S ttl-bin
platforms:
  - Linux
  - macOS
tags:
  - asn-lookup
  - cli
  - geolocation
  - icmp
  - latency
  - latency-test
  - mtr
  - network-visualization
  - networking
  - ratatui
  - rust
  - terminal
  - traceroute
  - tui
media: https://raw.githubusercontent.com/lance0/ttl/master/docs/demo.gif
logo: https://raw.githubusercontent.com/lance0/ttl/master/ttl.png
updated: '2026-07-13'
repo_stars: 1345
repo_updated: "2026-07-16"
repo_created: "2026-01-12"
repo_release: "v0.21.0"
repo_release_date: "2026-07-07"
---
