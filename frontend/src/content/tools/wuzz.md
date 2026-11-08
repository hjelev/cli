---
name: wuzz
category: HTTP & API Clients
short_description: Interactive cli tool for HTTP inspection
description: >-
  wuzz is an interactive, terminal-based HTTP inspection tool written in Go that
  allows you to inspect and modify HTTP requests on the fly.  

  It accepts cURL-like command-line arguments, making it easy to paste and tweak
  requests copied directly from browser dev tools.  

  It features a multi-pane TUI for viewing or updating headers, parameters, and
  bodies, with support for filtering responses using regex, JSONPath, or HTML
  CSS selectors.
repository_url: https://github.com/asciimoo/wuzz
author: asciimoo
license: AGPL-3.0
language: Go
installation:
  - method: go
    command: go get github.com/asciimoo/wuzz
  - method: apt
    command: apt install wuzz
  - method: apk
    command: apk add wuzz
  - method: nix
    command: nix-shell -p wuzz
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - cli
  - curl
  - go
  - golang
  - http
  - http-inspection
  - inspector
media: >-
  https://raw.githubusercontent.com/asciimoo/wuzz/master/docs/images/screencast.gif
logo: https://avatars.githubusercontent.com/u/20240?v=4
updated: '2026-10-30'
repo_stars: 10742
repo_updated: "2026-08-04"
repo_created: "2017-01-30"
repo_release: "v0.5.0"
repo_release_date: "2021-01-19"
---
