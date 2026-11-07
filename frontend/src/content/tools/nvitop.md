---
name: nvitop
category: System Monitoring
short_description: >-
  An interactive NVIDIA-GPU process viewer and beyond, the one-stop solution for
  GPU process management.
description: >-
  Nvitop is an interactive, feature-rich NVIDIA GPU process viewer and
  management tool written in pure Python. Serving as an advanced alternative to
  nvidia-smi and htop, it provides colorized real-time charts, process
  filtering, tree-view layouts, and direct signal-sending capabilities. Designed
  for cross-platform use, it directly queries NVML and psutil to deliver a
  robust command-line dashboard for tracking GPU telemetry and managing
  workloads.
repository_url: https://github.com/XuehaiPan/nvitop
website: https://nvitop.readthedocs.io
author: XuehaiPan
license: Apache-2.0
language: Python
installation:
  - method: pipx
    command: pipx run nvitop
  - method: pip
    command: pip3 install --upgrade nvitop
  - method: apt
    command: apt-get install nvitop
  - method: pacman
    command: pacman -S nvitop
  - method: nix
    command: nix-env -iA nvitop
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - command-line-tool
  - console
  - cuda
  - curses
  - gpu
  - gpu-monitoring
  - grafana
  - grafana-dashboard
  - htop
  - monitoring
  - monitoring-tool
  - nvidia
  - nvidia-smi
  - nvml
  - process-monitoring
  - prometheus
  - prometheus-exporter
  - resource-monitor
  - top
media: https://cli.masoko.net/uploads/nvitop/media.png
logo: https://avatars.githubusercontent.com/u/16078332?v=4
updated: '2026-11-07'
repo_stars: 7242
repo_updated: "2026-11-02"
repo_created: "2021-01-25"
repo_release: "v1.7.2"
repo_release_date: "2026-10-26"
---
