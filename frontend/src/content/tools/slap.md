---
updated: '2026-07-02'
name: slap
category: Text Editors & Note-taking
short_description: Sublime-like terminal-based text editor
description: |
  slap is a Sublime-like terminal-based text editor that strives to make editing
  from the terminal easier. It has:

  - first-class mouse support (even over an SSH connection)
  - a Sublime-like file sidebar
  - double-click to select word, highlight other occurrences
  - configurable Sublime-like keybindings* (Ctrl+S save, Ctrl+Z undo, etc.)
  - copying/pasting with OS clipboard support
  - infinite undo/redo
  - syntax highlighting for 100+ languages
  - bracket matching
  - autoindentation
  - heavily customizeable via plugins
  - ... many other features that will make you leave nano, vim, and emacs behind
repository_url: https://github.com/slap-editor/slap
author: Dan Kaplun
license: MIT
language: JavaScript
installation:
  - method: script
    command: >-
      $ curl -sL
      https://raw.githubusercontent.com/slap-editor/slap/master/install.sh | sh
  - method: npm
    command: $ sudo npm install -g slap@latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - tui
  - text-editor
  - editor
  - code-editor
  - ide
media: https://raw.githubusercontent.com/slap-editor/slap/master/screenshot.png
logo: https://avatars.githubusercontent.com/u/7591891?s=200&v=4
---
