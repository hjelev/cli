---
name: kudu
category: Utilities & Other
short_description: 📦  TUI VM Manager on Linux
description: |-
  Manage your Virtual Machines from the terminal. Kudu provides cloud images for
  multiple distros like Arch Linux (btw), Debian, Ubuntu and even FreeBSD. It is
  an alternative to GUIs like virt-manager or GNOME boxes and as opposed to
  these, it does not rely on libvirt
repository_url: https://github.com/pythops/kudu
author: pythops
license: GPL-3.0
language: Rust
installation:
  - method: pacman
    command: pacman -S kudu
  - method: cargo
    command: cargo install --git https://github.com/pythops/kudu
platforms:
  - Linux
tags:
  - kvm
  - linux
  - qemu
  - rust
  - virtualization
media: https://vhs.charm.sh/vhs-ZWwzVXQeM183nMda585zA.gif
updated: '2026-10-30'
---
