---
name: netop
category: System Monitoring
short_description: Network Top -- Help you monitor network traffic with bpf
description: >-
  A lightweight terminal-based network traffic monitor written in Rust with low
  resource overhead.  

  Allows you to filter network traffic in real-time using custom BPF (Berkeley
  Packet Filter) rules.  

  Features multi-rule switching, tracking for live transfer rates, total traffic
  metrics, and container deployment support.
repository_url: https://github.com/ZingerLittleBee/netop
website: https://crates.io/crates/netop
author: ZingerLittleBee
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install netop
  - method: pkgin
    command: pkgin install netop
  - method: docker
    command: docker run -it --rm --net=host zingerbee/netop
  - method: aur
    command: yay -S netop
platforms:
  - Linux
tags:
  - cli
  - network
  - rust
  - terminal
  - traffic
media: >-
  https://raw.githubusercontent.com/ZingerLittleBee/netop/main/snapshot/dashboard.gif
logo: https://avatars.githubusercontent.com/u/33377263?v=4
updated: '2026-09-05'
---
