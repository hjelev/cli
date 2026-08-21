---
name: YTunnel
category: Networking
short_description: A TUI-first CLI for managing Cloudflare Tunnels with custom domains.
description: >-
  Gives a local port a real URL on a domain you already own, using your own
  Cloudflare account. Set a tunnel up once and the URL stays put across
  restarts, with HTTPS handled by Cloudflare and the CNAME record created for
  you. The dashboard lists every tunnel you have with live request counts,
  error rates and connection status.


  Tunnels run as background daemons under launchd on macOS or systemd on Linux,
  so they keep serving after a reboot whether or not the dashboard is open. It
  handles several Cloudflare accounts and several domains at once, and there is
  an ephemeral mode for a quick one-off that cleans up after itself on exit. You
  need cloudflared installed and an API token with tunnel and DNS edit
  permissions; ytunnel does the rest.
repository_url: https://github.com/yetidevworks/ytunnel
website: https://yetidevworks.com/ytunnel
author: yetidevworks
license: MIT
language: Rust
installation:
  - method: brew
    command: brew install yetidevworks/ytunnel/ytunnel
  - method: cargo
    command: cargo install ytunnel
platforms:
  - Linux
  - macOS
tags:
  - cli
  - cloudflare
  - cloudflare-tunnel
  - networking
  - ngrok-alternative
  - ratatui
  - rust
  - terminal
  - tui
  - tunnel
media: https://raw.githubusercontent.com/yetidevworks/ytunnel/master/ytunnel-screenshot.png
logo: https://avatars.githubusercontent.com/u/220336074?v=4
updated: '2026-08-21'
repo_stars: 46
repo_updated: "2026-08-05"
repo_created: "2026-01-20"
repo_release: "v1.0.0"
repo_release_date: "2026-08-05"
---
