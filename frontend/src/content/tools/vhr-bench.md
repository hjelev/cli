---
name: vhr-bench
category: DevOps & Cloud
short_description: Benchmark a Linux server's CPU, memory and disk IOPS in about a minute
description: >-
  vhr-bench is a single-file Bash script that benchmarks a Linux server in about
  a minute: sysbench CPU and memory, plus fio 4k random read and write IOPS.


  It is meant for checking a new VPS before you deploy on it, or for comparing
  two hosts, plans or locations on equal terms.


  It asks before installing sysbench or fio, sends nothing anywhere unless you
  pass an upload token, and --cleanup removes the packages that run installed.
repository_url: https://github.com/vpshostreview/vhr-vps-benchmark
website: https://vpshostreview.com/vps-benchmark-tool
author: vpshostreview
license: MIT
language: Shell
installation:
  - method: script
    command: >-
      curl -fsSL
      https://github.com/vpshostreview/vhr-vps-benchmark/releases/latest/download/vhr-bench
      | bash -s -- --cleanup
  - method: script
    command: >-
      curl -fsSL
      https://github.com/vpshostreview/vhr-vps-benchmark/releases/latest/download/install.sh
      | sudo bash
platforms:
  - Linux
tags:
  - benchmark
  - vps
  - server
  - sysbench
  - fio
  - linux
logo: https://avatars.githubusercontent.com/u/319262743?v=4
updated: '2026-10-17'
---
