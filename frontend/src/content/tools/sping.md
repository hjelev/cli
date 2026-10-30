---
name: sping
category: Networking
short_description: >-
  A modern ping for humans. Real-time network diagnostics with latency, jitter,
  gateway/WAN context, TCP probes, and multi-target monitoring.
description: >-
  sping is a modern, cross-platform alternative to traditional ping, built in
  Rust to make network troubleshooting faster, clearer, and more intuitive.


  Instead of simply reporting packet replies, sping interprets network context
  to help identify whether connectivity problems originate from your local
  network, gateway, internet connection, or destination.


  Its interactive terminal interface provides live latency graphs, jitter and
  packet loss measurements, adaptive spike detection, quality scores, connection
  trends, and outage tracking.


  Key features include:

  - Real-time ICMP and TCP connectivity monitoring

  - Automatic gateway and WAN reachability checks

  - Multi-target monitoring in a single terminal dashboard

  - Latency, jitter, packet loss, and quality scoring

  - Automatic diagnostic findings based on network context

  - Batch monitoring and structured JSON output for automation

  - IPv4 and IPv6 support

  - Native support for Linux, macOS, and Windows


  Lightweight, fast, open source, and designed for developers, sysadmins,
  network engineers, and homelab enthusiasts.


  No cloud services, accounts, or background daemons required.


  One command. More answers.
repository_url: https://github.com/LambdaBytes/sping
website: https://crates.io/crates/sping
author: Antonio Cotos
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install sping
  - method: brew
    command: brew install LambdaBytes/tap/sping
  - method: scoop
    command: >-
      scoop bucket add lambdabytes https://github.com/LambdaBytes/scoop-bucket;
      scoop install lambdabytes/sping
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - cross-platform
  - icmp
  - latency
  - network-monitoring
  - networking
  - ping
  - rust
  - tcp
  - terminal
  - traceroute
  - tui
media: >-
  https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fvf79bg9y56ug4jl83ooi.gif
logo: >-
  https://raw.githubusercontent.com/LambdaBytes/sping/HEAD/docs/brand/sping-logo-on-dark.png
updated: '2026-10-20'
repo_stars: 136
repo_updated: "2026-10-23"
repo_created: "2026-09-30"
repo_release: "v1.8.0"
repo_release_date: "2026-10-23"
comments: []
---
