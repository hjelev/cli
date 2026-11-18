---
name: hashcat
category: Security
short_description: World's fastest and most advanced password recovery utility
description: >-
  Advanced password recovery utility: The world's fastest and most advanced
  password cracking tool, designed to recover lost credentials using highly
  optimized routines for GPUs, CPUs, and custom hardware.   

  Multi-backend hardware acceleration: Leverages CUDA, HIP, Metal, and OpenCL to
  scale across multiple devices, distributed networks, and hundreds of built-in
  hash modes or custom hash recipes.   

  Flexible attack modes: Supports numerous candidate generation
  methods—including dictionary, brute-force, combinatorial, rules-based, and
  probabilistic context-free grammar (PCFG) attacks.
repository_url: https://github.com/hashcat/hashcat
website: https://hashcat.net/hashcat/
author: hashcat
license: MIT
language: C
installation:
  - method: apt
    command: apt-get install hashcat
  - method: pacman
    command: pacman -S hashcat
  - method: dnf
    command: dnf install hashcat
  - method: yum
    command: yum install hashcat
  - method: apk
    command: apk add hashcat
  - method: snap
    command: snap install hashcat
  - method: brew
    command: brew install hashcat
  - method: port
    command: sudo port install hashcat
  - method: pkg
    command: pkg install hashcat
  - method: scoop
    command: scoop install hashcat
  - method: choco
    command: choco install hashcat
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - c
  - cracking
  - cuda
  - gpgpu
  - hashcat
  - hashes
  - opencl
  - password
logo: https://hashcat.net/s/i/hashcat-icon.png
updated: '2026-11-18'
repo_stars: 27379
repo_updated: "2026-11-18"
repo_created: "2015-12-04"
repo_release: "v8.0.0"
repo_release_date: "2026-10-25"
---
