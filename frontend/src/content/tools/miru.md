---
name: miru
category: Utilities & Other
short_description: Zooming daemon for wayland
description: >-
  miru is a lightweight Wayland zooming daemon designed to fill the ecosystem
  gap for a reliable screen magnifier. It runs quietly in the background to
  handle smooth zooming interactions via keybinds, and includes miructl—a
  platform-agnostic companion CLI for seamlessly toggling modes on the fly.

  Beyond standard scaling, miru features a dedicated spotlight mode that
  highlights your cursor while dimming the surrounding area for a
  distraction-free, focused viewpoint. Fully customizable via a TOML
  configuration file, you can fine-tune parameters such as your preferred zoom
  factor, zoom step, spotlight radius, and dimming intensity to suit your
  workflow.
repository_url: https://github.com/Vaishnav-Sabari-Girish/miru
website: https://blog.vaishnavs.is-a.dev/miru/
author: Vaishnav-Sabari-Girish
license: MIT
language: C
installation:
  - method: aur
    command: paru -S miru-zoom
  - method: aur
    command: paru -S miru-zoom-git
  - method: brew
    command: brew install Vaishnav-Sabari-Girish/taps/miru
  - method: nix
    command: nix profile add github:Vaishnav-Sabari-Girish/miru
platforms:
  - Linux
tags:
  - cli
  - daemon
  - zoom
  - wayland
media: https://github.com/Vaishnav-Sabari-Girish/miru/raw/refs/heads/main/out_web.mp4
logo: https://cli.masoko.net/uploads/miru/logo.svg
updated: '2026-08-01'
repo_stars: 22
repo_updated: "2026-08-28"
repo_created: "2026-07-09"
repo_release: "v0.4.1"
repo_release_date: "2026-08-07"
---
