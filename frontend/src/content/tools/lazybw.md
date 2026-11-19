---
name: lazybw
category: Security
short_description: A keyboard-first terminal UI for the Bitwarden vault, with Vim-style keys.
description: >-
  lazybw lets you browse, search, copy and edit your Bitwarden items without
  leaving the terminal, with Vim-style keys. It runs the official Bitwarden CLI
  in the background and leaves all vault cryptography to it. By default it talks
  to bw serve through a private socket pair, so no network port is opened.


  Log in with email and password (including two-step login), single sign-on or
  an API key; unlock, lock, sync, and lock automatically when idle. Logins,
  secure notes, cards, identities and SSH keys are browsed by type or by nested
  folder, with fuzzy search, search qualifiers and a Ctrl-p finder. Copy any
  field with y keys, with configurable clipboard clearing. Verification codes
  are computed locally, so they work without Bitwarden Premium.


  There is a form editor with Vim modes, a password generator, and $EDITOR for
  notes or the whole item as JSON. Vault health shows exposed, reused, weak, old
  and insecure passwords, and you get export, import with a duplicate review,
  undo and redo, and visual mode and marks for bulk actions. Every key can be
  rebound, there are ten built-in themes plus your own, and it works locally or
  over SSH, on X11 and Wayland.
repository_url: https://github.com/SyscallBrain/lazybw
website: https://syscallbrain.github.io/lazybw/
author: SyscallBrain
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install --locked lazybw
  - method: aur
    command: paru -S lazybw-bin
  - method: docker
    command: docker run -it --rm -v lazybw:/home/lazybw ghcr.io/syscallbrain/lazybw
platforms:
  - Linux
tags:
  - tui
  - bitwarden
  - password-manager
  - security
  - vim
  - ratatui
media: >-
  https://raw.githubusercontent.com/SyscallBrain/lazybw/main/book/src/images/demo.gif
logo: >-
  https://raw.githubusercontent.com/SyscallBrain/lazybw/main/book/src/images/logo.svg
updated: '2026-11-19'
---
