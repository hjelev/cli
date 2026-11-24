---
name: virsh-tui
category: DevOps & Cloud
short_description: A keyboard-driven terminal UI for libvirt, with vim keys and live graphs.
description: >-
  virsh-tui shows every virtual machine on a libvirt connection with live CPU,
  memory, disk and network graphs, and lets you start, stop, snapshot,
  reconfigure and create them from the keyboard. Every action is a virsh (or
  virt-install) command, and virsh-tui shows you that command before and after
  it runs, so nothing happens behind your back and you can reuse it in a script.
  It works with qemu:///system, qemu:///session and remote hosts over
  qemu+ssh://, with the same permissions virsh has.


  It has a live monitor per domain, a hardware editor that shows the XML diff
  and the exact commands before you apply with :w, and a snapshot tree with
  create, revert, delete and a diff against the current configuration. There are
  also host, network (with DHCP leases) and storage views, a live libvirt event
  stream with notifications, migrations with job progress, and a six-step new VM
  wizard that runs virt-install.


  A : command line completes commands, domains and every virsh flag with Tab.
  There is a fuzzy command palette, remappable keys, --doctor to check your
  setup, nine themes, --dry-run to see what each key would run, and --demo to
  try it without libvirt.
repository_url: https://github.com/SyscallBrain/virsh-tui
website: https://syscallbrain.github.io/virsh-tui/
author: SyscallBrain
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install --locked virsh-tui
  - method: aur
    command: paru -S virsh-tui-bin
platforms:
  - Linux
tags:
  - tui
  - libvirt
  - virsh
  - kvm
  - qemu
  - virtualization
  - vim
  - ratatui
media: >-
  https://raw.githubusercontent.com/SyscallBrain/virsh-tui/main/book/src/images/demo.gif
logo: >-
  https://raw.githubusercontent.com/SyscallBrain/virsh-tui/main/book/src/images/logo.svg
updated: '2026-11-19'
---
