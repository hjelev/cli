---
name: chroncal
category: Productivity
short_description: >-
  Terminal-first calendar, todo, and journal manager with iCalendar (RFC 5545)
  support and CalDAV sync — CLI + TUI, local SQLite storage
description: >-
  chroncal is a terminal calendar. SQLite stores the data. The program supports
  full iCal import and export, and CalDAV sync. Launch the TUI for an
  interactive calendar. Use the CLI to script access to events, todos, journals,
  alarms, free/busy queries, and calendars.


  chroncal keeps your calendar data local and portable. The data follows the
  calendar standards.
repository_url: https://github.com/DouglasdeMoura/chroncal
website: https://pkg.go.dev/github.com/douglasdemoura/chroncal
author: DouglasdeMoura
license: MIT
language: Go
installation:
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/DouglasdeMoura/chroncal/master/scripts/install.sh
      | sh
  - method: brew
    command: brew tap douglasdemoura/tap && brew install chroncal
  - method: go
    command: go install github.com/douglasdemoura/chroncal/cmd/chroncal@latest
  - method: nix
    command: nix run github:DouglasdeMoura/chroncal
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - caldav
  - calendar
  - cli
  - golang
  - icalendar
  - journal
  - rfc5545
  - sqlite
  - todo
media: >-
  https://raw.githubusercontent.com/DouglasdeMoura/chroncal/master/assets/chroncal-tui.gif
logo: >-
  https://raw.githubusercontent.com/DouglasdeMoura/chroncal/master/assets/chroncal-256.png
updated: '2026-08-21'
repo_stars: 103
repo_updated: "2026-08-26"
repo_created: "2026-03-31"
repo_release: "v0.9.0"
repo_release_date: "2026-08-26"
---
