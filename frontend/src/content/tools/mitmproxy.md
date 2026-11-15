---
name: mitmproxy
category: Security
short_description: >-
  An interactive TLS-capable intercepting HTTP proxy for penetration testers and
  software developers.
description: >-
  mitmproxy is an interactive, TLS-capable man-in-the-middle HTTP proxy designed
  for developers, testers, and security professionals.


  It allows you to intercept, inspect, modify, and replay web traffic (HTTP/1,
  HTTP/2, and HTTP/3) on the fly via a terminal UI, web interface, or custom
  Python scripts.


  Seamlessly integrates into debugging and security auditing workflows, making
  it an indispensable tool for analyzing network requests and API calls.
repository_url: https://github.com/mitmproxy/mitmproxy
website: https://mitmproxy.org
author: mitmproxy
license: MIT
language: Python
installation:
  - method: apt
    command: apt-get install mitmproxy
  - method: pacman
    command: pacman -Sy mitmproxy
  - method: zypper
    command: zypper install python-mitmproxy
  - method: apk
    command: apk add mitmproxy
  - method: nix
    command: nix-shell -p mitmproxy
  - method: emerge
    command: emerge net-proxy/mitmproxy
  - method: brew
    command: brew install mitmproxy
  - method: pkg
    command: pkg install mitmproxy
  - method: scoop
    command: scoop install mitmproxy
  - method: winget
    command: winget install -e --id mitmproxy.mitmproxy
  - method: pip
    command: pip install mitmproxy
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - debugging
  - http
  - http2
  - man-in-the-middle
  - mitmproxy
  - proxy
  - python
  - security
  - ssl
  - tls
  - websocket
media: https://www.mitmproxy.org/screenshot.png
logo: https://avatars.githubusercontent.com/u/4652787?s=200&v=4
updated: '2026-11-15'
repo_stars: 46996
repo_updated: "2026-11-14"
repo_created: "2010-02-16"
repo_release: "v12.3.1"
repo_release_date: "2026-10-25"
---
