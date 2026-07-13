---
name: far2l
category: File Management
short_description: Linux port of FAR v2
description: >-
  far2l is an open-source, feature-rich Linux and Unix port of the classic
  dual-pane FAR Manager v2 (originally for Windows).

  It brings the powerful classic orthodox file manager interface to terminal and
  GUI environments on Linux, macOS, and BSD systems.  

  It features a modular plugin architecture (including NetRocks for network
  filesystems like SFTP/SMB/FTP, a built-in hex editor, and calculator) and
  multiple UI backends ranging from lightweight plain TTY up to graphical
  wxWidgets/SDL modes.  

  While it preserves the classic keyboard-driven navigation and workflows of FAR
  Manager, it adapts them smoothly to modern POSIX operating systems.
repository_url: https://github.com/elfmz/far2l
author: elfmz
license: GPL-2.0
language: C++
installation:
  - method: apt
    command: apt install far2l-wx
  - method: brew
    command: brew install far2l-tty
platforms:
  - Linux
  - macOS
tags:
  - filemanager
  - linux
  - macos
  - osx
  - terminal
media: >-
  https://raw.githubusercontent.com/elfmz/far2l/master/far2l/DE/screenshots/far2l.png
logo: https://avatars.githubusercontent.com/u/20957349?v=4
updated: '2026-07-13'
---
