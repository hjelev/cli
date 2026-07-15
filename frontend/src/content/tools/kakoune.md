---
name: kakoune
category: Text Editors
short_description: mawww's experiment for a better code editor
description: >-
  Kakoune is a code editor that implements Vi’s "keystrokes as a text editing
  language" model. As it is also a modal editor, it is somewhat similar to the
  Vim editor (after which Kakoune was originally inspired).  


  Kakoune can operate in two modes: normal and insertion. In insertion mode,
  keys are directly inserted into the current buffer. In normal mode, keys are
  used to manipulate the current selection and to enter insertion mode.  


  Kakoune has a strong focus on interactivity. Most commands provide immediate
  and incremental results, while being competitive with Vim in terms of
  keystroke count.
repository_url: https://github.com/mawww/kakoune
website: http://kakoune.org
author: mawww
license: Unlicense
language: C++
installation:
  - method: brew
    command: brew install kakoune
  - method: dnf
    command: dnf install kakoune
  - method: pacman
    command: pacman -S kakoune
  - method: apt
    command: sudo apt install kakoune
platforms:
  - linux
  - macOS
tags:
  - c-plus-plus
  - console-application
  - kakoune
  - modal-editing
  - text-editor
  - vim
media: https://kakoune.org/video/rename.webm
logo: https://kakoune.org/img/kakoune_logo_full.png
updated: '2026-07-11'
github_stars: 10989
github_updated: "2026-07-11"
github_created: "2011-11-03"
github_release: "v2026.05.21"
---
