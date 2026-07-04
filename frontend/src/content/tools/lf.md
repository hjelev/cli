---
name: lf
category: File Management
short_description: >-
  lf (as in "list files") is a terminal file manager written in Go with a heavy
  inspiration from ranger file manager.
description: >-
  lf (short for "list files") is a lightweight, high-performance terminal file
  manager written in Go. Inspired heavily by the popular ranger file manager, lf
  is designed with a focus on efficiency and minimalism, favoring a modular
  philosophy where it delegates tasks like text editing or complex file
  operations to specialized external tools rather than building them into the
  application itself.


  Key features of lf include:


  * Speed and Efficiency: Built as a single static binary with no external
  runtime dependencies, it offers extremely fast startup times and a low memory
  footprint.


  * Server/Client Architecture: It uses a unique remote control system, allowing
  you to manage multiple lf instances or communicate with them via shell
  commands.


  * Highly Customizable: It supports custom keybindings (with defaults similar
  to vi or readline), shell-based configuration, and asynchronous I/O to ensure
  the UI remains responsive even during heavy operations.


  * Cross-Platform: It is fully compatible with Linux, macOS, BSD, and Windows.
repository_url: https://github.com/gokcehan/lf
author: Gökçehan Kara
license: MIT
language: Go
installation:
  - method: go
    command: >-
      env CGO_ENABLED=0 go install -trimpath -ldflags="-s -w"
      github.com/gokcehan/lf@latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - tui
  - file-manager
media: >-
  https://private-user-images.githubusercontent.com/50560759/418395142-d5623462-05ab-4921-aeb3-d377d4732f9e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODMxNzA3NDIsIm5iZiI6MTc4MzE3MDQ0MiwicGF0aCI6Ii81MDU2MDc1OS80MTgzOTUxNDItZDU2MjM0NjItMDVhYi00OTIxLWFlYjMtZDM3N2Q0NzMyZjllLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA3MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNzA0VDEzMDcyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThiYmI1NzhlMDFkOGY2YWFmZWJiYmVlZWEzYWU3N2E0MjRhYzc3YmM1Yjk1NjE5ZGFhNDhiZDg3M2RlNmU1NzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.ydK9jhElYICdBj76N3laE9uoBpQvdoytd3DJ_fGnqsY
logo: https://avatars.githubusercontent.com/u/1835672?v=4
updated: '2026-07-04'
---
