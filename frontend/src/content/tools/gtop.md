---
name: gtop
category: System Monitoring
short_description: System monitoring dashboard for terminal
description: >-
  gtop is a system monitoring dashboard for the terminal, written in JavaScript
  and running on Node.js.  

  It provides a clean, colorful, multi-pane TUI dashboard that gives you an
  immediate, real-time overview of your machine's vital statistics.  

  Key features include:  

  * Multi-Pane Dashboard: Simultaneously displays graphs and metrics for CPU
  usage, memory utilization, disk usage, and network traffic history.  

  * Process Table: An interactive process list that you can sort by PID, CPU
  usage (c), or memory usage (m).  

  * Lightweight & Cross-Platform: Runs anywhere Node.js is installed across
  Linux, macOS, and Windows.  

  Unlike traditional vertical monitors like top or htop, gtop organizes
  everything into a dashboard layout similar to what you might see in a
  web-based monitoring tool, but directly inside your terminal emulator.
repository_url: https://github.com/aksakalli/gtop
author: Can Güney Aksakalli
license: MIT
language: JavaScript
installation:
  - method: brew
    command: brew install gtop
  - method: npm
    command: npm install -g gtop
  - method: snap
    command: sudo snap install gtop --edge
  - method: other
    command: npx gtop
platforms:
  - Linux
  - macOS
tags:
  - tui
  - top-alternative
  - resource-monitor
  - monitoring
  - nodejs
  - top
  - command-line
  - system-monitoring
media: https://raw.githubusercontent.com/aksakalli/gtop/master/img/demo.gif
logo: https://avatars.githubusercontent.com/u/1939193?v=4
updated: '2026-07-08'
repo_stars: 9921
repo_updated: "2025-11-06"
repo_created: "2017-08-09"
repo_release: "v1.1.5"
---
