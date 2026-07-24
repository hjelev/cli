---
name: sshfs
category: Networking
short_description: A network filesystem client to connect to SSH servers
description: >-
  SSHFS (libfuse/sshfs) is a client application that lets you mount and interact
  with remote directories over an SSH/SFTP connection as if they were local
  folders.
repository_url: https://github.com/libfuse/sshfs
author: libfuse
license: GPL-2.0
language: C
installation:
  - method: apt
    command: sudo apt install sshfs fuse3
  - method: dnf
    command: sudo dnf install sshfs fuse-sshfs
  - method: pacman
    command: sudo pacman -S sshfs
  - method: brew
    command: brew install --cask macfuse; brew install gromgull/fuse/sshfs-mac
platforms:
  - Linux
  - macOS
tags:
  - cli
  - sshfs
  - fuse
  - sftp
  - ssh
  - filesystem
  - mount
  - remote-access
  - networking
  - system-utilities
logo: https://avatars.githubusercontent.com/u/16281578?s=200&v=4
updated: '2026-07-12'
repo_stars: 7575
repo_updated: "2026-07-11"
repo_created: "2015-12-21"
repo_release: "sshfs-3.7.6"
repo_release_date: "2026-05-29"
---
