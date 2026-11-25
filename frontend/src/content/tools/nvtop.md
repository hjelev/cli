---
name: nvtop
category: System Monitoring
short_description: >-
  GPU & Accelerator process monitoring for AMD, Apple, Huawei, Intel, NVIDIA and
  Qualcomm
description: >-
  htop-style terminal task and resource monitor for GPUs, NPUs, and accelerators
  across NVIDIA, AMD, Intel, Apple, Huawei Ascend, Qualcomm Adreno, and more.  

  Plots real-time graphs and per-process stats for utilization, memory, clocks,
  power, temperature, and PCIe throughput with an interactive setup menu (F2).  

  Available across Linux distros, AppImage, Snap, Conda, and Docker, including
  support for integrated and unified-memory hardware.
repository_url: https://github.com/Syllo/nvtop
author: Syllo
license: Other
language: C
installation:
  - method: apt
    command: apt install nvtop
  - method: pacman
    command: pacman -S nvtop
  - method: dnf
    command: dnf install nvtop
  - method: zypper
    command: zypper in nvtop
  - method: apk
    command: apk add nvtop
platforms:
  - Linux
tags:
  - adreno
  - amd
  - apple
  - ascend
  - command-line-tool
  - gpu
  - huawei
  - intel
  - linux
  - monitoring
  - ncurses
  - nvidia
media: https://raw.githubusercontent.com/Syllo/nvtop/master/screenshot/NVTOP_ex1.png
logo: https://avatars.githubusercontent.com/u/2741868?v=4
updated: '2026-11-25'
---
