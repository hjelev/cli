---
name: bpftop
category: System Monitoring
short_description: bpftop provides a dynamic real-time view of running eBPF programs.
description: >-
  bpftop is a terminal-based command-line utility that provides a dynamic,
  real-time view of running eBPF programs on Linux. It tracks performance
  metrics such as average runtime, events per second, and estimated total CPU
  utilization for each program. Designed to minimize system overhead, it
  dynamically enables statistics collection only while active and provides
  interactive graphs, sorting, and process filtering.
repository_url: https://github.com/jfernandez/bpftop
website: https://bpftop.sh
author: jfernandez
license: Apache-2.0
language: C
installation:
  - method: apt
    command: apt-get install bpftop
  - method: pacman
    command: pacman -S bpftop
  - method: dnf
    command: dnf install bpftop
  - method: other
    command: zypper install bpftop
  - method: apk
    command: apk add bpftop
  - method: nix
    command: nix-env -iA bpftop
  - method: other
    command: emerge dev-util/bpftop
  - method: brew
    command: brew install bpftop
  - method: script
    command: >-
      curl -fLJ
      https://github.com/Netflix/bpftop/releases/latest/download/bpftop-x86_64-unknown-linux-gnu
      -o bpftop && chmod +x bpftop
platforms:
  - Linux
  - macOS
tags:
  - bpf
  - cli
  - ebpf
  - linux
media: https://bpftop.sh/assets/bpftop.gif
logo: https://raw.githubusercontent.com/jfernandez/bpftop/main/bpftop-logo.png
updated: '2026-11-07'
repo_stars: 2710
repo_updated: "2026-11-04"
repo_created: "2024-02-10"
repo_release: "v0.9.1"
repo_release_date: "2026-11-04"
---
