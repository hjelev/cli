---
name: kudu
category: Utilities & Other
short_description: 📦  TUI VM Manager on Linux
description: >-
  Manage your Virtual Machines from the terminal. Provides cloud images for a
  variety of distros like Debian, Ubuntu, Arch (BTW) and FreeBSD. It is an
  alternative to GUIs like virt-manager or GNOME boxes and as opposed to these,
  it does not rely on libvirt.
repository_url: https://github.com/pythops/kudu
website: https://github.com/pythops/kudu
author: pythops
license: GPL-3.0
language: Rust
installation:
  - method: cargo
    command: cargo install --git https://github.com/pythops/kudu
  - method: pacman
    command: pacman -S kudu
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
