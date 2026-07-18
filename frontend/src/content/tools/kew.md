---
name: kew
category: Media & Entertainment
short_description: >-
  Music for the Shell. kew is an immersive and fast music player that allows you
  to listen to music with privacy.
description: >-
  Kew is a fast, immersive terminal-based music player designed for privacy and
  offline playback without algorithmic interference.  

  It supports a wide range of audio formats, featuring gapless playback,
  spectrum visualization, and sixel-capable terminal cover art.  

  Highly cross-platform, it offers a distraction-free listening experience with
  playlist management, lyrics support, and library exploration directly from the
  command line.
repository_url: https://github.com/ravachol/kew
website: https://kewplayer.com
author: ravachol
license: GPL-2.0
language: C
installation:
  - method: apt
    command: sudo apt install kew
  - method: aur
    command: yay -S kew
  - method: other
    command: sudo zypper install kew
  - method: pkg
    command: pkg install kew
  - method: nix
    command: nix run github:ravachol/kew
  - method: brew
    command: brew install kew
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - audio-player
  - command-line
  - kew
  - linux
  - macos
  - music
  - music-player
  - player
  - terminal
  - windows
media: >-
  https://raw.githubusercontent.com/ravachol/kew/main/images/kew-terminal-music-player.gif
logo: https://kewplayer.com/images/kew.gif
updated: '2026-07-18'
repo_stars: 2888
repo_updated: "2026-07-18"
repo_created: "2023-05-17"
repo_release: "v4.2.7"
---
