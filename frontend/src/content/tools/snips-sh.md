---
name: snips.sh
category: Utilities & Other
short_description: >-
  ✂️ passwordless, anonymous SSH-powered pastebin with a human-friendly TUI and
  web UI
description: >-
  snips.sh is a terminal-based code-sharing service that allows you to instantly
  host and share code snippets via a simple SSH connection.  

  It supports syntax highlighting and creates unique, shareable URLs for every
  snippet you push, offering a seamless, privacy-focused alternative to
  web-based pastebins.  

  Because it functions entirely through the command line, you can pipe output
  directly into your terminal using tools like ssh or curl to manage or
  distribute your code without a browser.
repository_url: https://github.com/robherley/snips.sh
website: https://snips.sh
author: robherley
license: MIT
language: Go
installation:
  - method: other
    command: 'echo ''{ "hello" : "world" }'' | ssh snips.sh # upload'
  - method: other
    command: 'ssh snips.sh # access TUI'
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - pastebin
  - sqlite
  - ssh
  - share
  - code-snippet
media: https://cli.masoko.net/uploads/snips-sh/media.gif
logo: https://snips.sh/assets/img/logo.png
updated: '2026-07-18'
repo_stars: 1287
repo_updated: "2026-07-20"
repo_created: "2023-01-21"
repo_release: "v0.12.0"
repo_release_date: "2026-07-19"
---
