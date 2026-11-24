---
name: ratclone
category: File Management
short_description: A keyboard-driven terminal UI for rclone, with Vim keys.
description: >-
  ratclone browses your rclone accounts and the local disk with Vim keys, in one
  pane or two side by side. Copy and move between any two places, rename and
  delete, and keep transfers running in the background, even after you quit or
  your SSH session drops.


  Every copy and move is an rclone job. The Transfers tab shows per-file
  progress, speed and the rclone command behind each transfer, and the Space tab
  shows where an account's space goes: folders ranked by size, file types and
  the largest files. When a name is already taken you choose replace, skip or
  keep both, once or for all of them.


  You can add, edit and sign in to accounts from the app, with browser logins
  that also work over SSH. It has eleven built-in themes plus your own, Nerd
  Font or ASCII icons, and a --demo mode with made-up accounts.
repository_url: https://github.com/SyscallBrain/ratclone
website: https://syscallbrain.github.io/ratclone/
author: SyscallBrain
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install --locked ratclone
  - method: aur
    command: paru -S ratclone-bin
platforms:
  - Linux
tags:
  - tui
  - rclone
  - cloud
  - file-manager
  - vim
  - ratatui
media: >-
  https://raw.githubusercontent.com/SyscallBrain/ratclone/main/book/src/images/demo.gif
logo: >-
  https://raw.githubusercontent.com/SyscallBrain/ratclone/main/book/src/images/logo.svg
updated: '2026-11-19'
---
