---
name: RustScan
category: Networking
short_description: 🤖 The Modern Port Scanner 🤖
description: >-
  Ultra-fast port scanner: A modern port scanner written in Rust that discovers
  all 65,535 ports on any target in just a few seconds by optimizing network
  throughput.


  Automated Nmap integration: Automatically pipes discovered open ports directly
  into Nmap with custom scripts and arguments to execute targeted vulnerability
  scans seamlessly.


  Adaptive script tuning: Dynamically adjusts thread counts, batch sizes, and
  timeout thresholds based on local system limits and network conditions to
  prevent packet dropping.
repository_url: https://github.com/bee-san/RustScan
author: bee-san
license: GPL-3.0
language: Rust
installation:
  - method: pacman
    command: pacman -S rustscan
  - method: zypper
    command: zypper install rustscan
  - method: apk
    command: apk add rustscan
  - method: nix
    command: nix-env -iA rustscan
  - method: brew
    command: brew install rustscan
  - method: port
    command: sudo port install rustscan
  - method: cargo
    command: cargo install rustscan
  - method: pkg
    command: pkg install security/rustscan
platforms:
  - Linux
  - macOS
tags:
  - docker
  - hacking
  - hacktoberfest
  - networking
  - nmap
  - pentesting
  - port
  - rust
  - scanning
  - security
  - security-tools
media: https://raw.githubusercontent.com/bee-san/RustScan/master/pictures/fast.gif
logo: >-
  https://raw.githubusercontent.com/bee-san/RustScan/master/pictures/rustscan.png
updated: '2026-11-18'
repo_stars: 20757
repo_stars_recent: 8
repo_updated: "2026-11-04"
repo_created: "2020-07-11"
repo_release: "2.4.1"
repo_release_date: "2025-02-23"
---
