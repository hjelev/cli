---
name: reeve
category: DevOps & Cloud
short_description: A TUI based local web development stack for macOS and Linux.
description: >-
  Provisions and manages a local web stack from one CLI and TUI: Caddy, Apache
  or nginx, per-vhost PHP versions, SSL, and .test DNS. It does not bundle
  servers or PHP. It orchestrates the ones Homebrew already installed and runs
  them as per-user services, launchd on macOS and systemd user units on Linux,
  so day-to-day work needs no sudo.


  The reason it exists is PHP versions. A classic Homebrew and mod_php setup
  links exactly one PHP version at a time, so switching means a script and a
  restart. reeve drops mod_php for PHP-FPM with one master per version, and two
  vhosts can then run two different PHP versions at once. Memory limits, upload
  sizes, OPcache and FPM pool settings are per version in the TUI, along with an
  Xdebug toggle that attaches only to requests carrying XDEBUG_SESSION, so
  background traffic from your other sites cannot steal the IDE's connection
  slot.
repository_url: https://github.com/yetidevworks/reeve
website: https://yetidevworks.com/reeve
author: yetidevworks
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install yetidevworks/reeve/reeve
  - method: cargo
    command: cargo install reeve-cli
platforms:
  - Linux
  - macOS
tags:
  - apache
  - caddy
  - local-development
  - localhost
  - macos
  - nginx
  - php
  - php-fpm
  - ratatui
  - rust
  - terminal
  - tui
  - valet-alternative
media: https://raw.githubusercontent.com/yetidevworks/reeve/main/screenshot.png
logo: https://avatars.githubusercontent.com/u/220336074?v=4
updated: '2026-08-21'
---
