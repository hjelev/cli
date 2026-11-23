---
name: bluerig
category: Text Editors
short_description: A terminal IDE grown out of mcedit, the editor of Midnight Commander.
description: >-
  bluerig is a full-screen terminal IDE based on mcedit, the editor of Midnight
  Commander. It keeps the mcedit keys (F2 save, F3 mark, F7 search, F10 quit)
  and adds language servers, project builds, a debugger, Git, PostgreSQL and
  MongoDB queries and Lua scripting. It runs in the Linux console, in tmux and
  over SSH.
repository_url: https://github.com/blue-panels/bluerig
website: https://blue-panels.github.io/bluerig/
author: blue-panels
license: GPL-3.0
language: C
installation:
  - method: brew
    command: brew install blue-panels/tap/bluerig
  - method: apt
    command: sudo add-apt-repository ppa:bluepanels/bluerig && sudo apt install bluerig
  - method: dnf
    command: sudo dnf copr enable smind/bluerig && sudo dnf install bluerig
  - method: zypper
    command: sudo zypper install bluerig
  - method: nix
    command: nix run github:blue-panels/bluerig
platforms:
  - Linux
  - macOS
  - FreeBSD
tags:
  - tui
  - ide
  - text-editor
  - mcedit
  - midnight-commander
  - lsp
  - debugger
  - git
media: https://blue-panels.github.io/bluerig/assets/overview.gif
logo: https://avatars.githubusercontent.com/u/312675749?v=4
updated: '2026-11-23'
---
