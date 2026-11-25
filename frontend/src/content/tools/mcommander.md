---
name: mcommander
category: File Management
short_description: A two-panel file manager continuing GNU Midnight Commander, with panel plugins.
description: >-
  M-Commander is a text-mode, full-screen file manager based on GNU Midnight
  Commander 4.8.33: two panels, a built-in editor and viewer, and an embedded
  terminal. Panel contents can come from plugins loaded at run time: git,
  docker, Kubernetes, MongoDB, S3, FTP, SFTP, Samba and systemd. It installs
  beside the distribution mc package instead of replacing it.
repository_url: https://github.com/blue-panels/mcommander
website: https://blue-panels.github.io/mcommander/
author: blue-panels
license: GPL-3.0
language: C
installation:
  - method: binary
    command: https://github.com/blue-panels/mcommander/releases
  - method: apt
    command: sudo apt install ./mcommander_*.deb ./mcommander-plugins_*.deb
  - method: dnf
    command: sudo dnf install ./mcommander-6*.rpm ./mcommander-plugins-6*.rpm
  - method: pacman
    command: sudo pacman -U ./mcommander-6*.pkg.tar.zst ./mcommander-plugins-6*.pkg.tar.zst
platforms:
  - Linux
  - macOS
tags:
  - tui
  - file-manager
  - orthodox
  - midnight-commander
  - plugins
  - git
  - kubernetes
  - docker
media: https://raw.githubusercontent.com/wiki/blue-panels/mcommander/assets/git-panel.gif
logo: https://avatars.githubusercontent.com/u/312675749?v=4
updated: '2026-11-23'
---
