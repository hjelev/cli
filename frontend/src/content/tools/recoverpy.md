---
name: RecoverPy
category: Security
short_description: >-
  Interactively find and recover deleted or :point_right: overwritten
  :point_left: files from your terminal
description: >-
  RecoverPy is a terminal-based tool that allows you to interactively search for
  and recover deleted or overwritten files by scanning raw disk blocks for
  specific byte patterns.  


  It operates by performing a byte-level, memory-bounded scan of your partition,
  helping you locate fragments of data that have not yet been overwritten
  without needing to reconstruct complex file system structures.  


  Designed for Linux, it features an intuitive Textual-based UI that lets you
  inspect search results, navigate adjacent disk blocks, and extract meaningful
  content directly from your terminal.
repository_url: https://github.com/PabloLec/RecoverPy
author: PabloLec
license: GPL-3.0
language: Python
installation:
  - method: pip
    command: python -m pip install recoverpy
  - method: uv
    command: uv tool install recoverpy
  - method: other
    command: sudo uvx recoverpy
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - console
  - cybersecurity
  - data
  - data-recovery
  - files
  - forensics
  - hacking
  - linux
  - macos
  - pentesting
  - python
  - python3
  - recovery
  - search
  - search-interface
  - terminal
  - textual
  - tool
  - tui
media: https://github.com/PabloLec/RecoverPy/raw/main/docs/assets/demo.gif
logo: https://raw.githubusercontent.com/PabloLec/RecoverPy/main/docs/assets/logo.png
updated: '2026-07-18'
repo_stars: 1777
repo_updated: "2026-07-14"
repo_created: "2021-02-24"
repo_release: "2.3.0"
repo_release_date: "2026-02-14"
---
