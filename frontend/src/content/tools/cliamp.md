---
name: cliamp
category: Media & Entertainment
short_description: cliamp - Terminal music player inspired by winamp
description: >-
  cliamp is a retro, Winamp-inspired terminal music player written primarily in
  Go.  

  It plays local audio files, radio streams, podcasts, and media from providers
  like Spotify, YouTube, Plex, and Navidrome.  

  The player features a built-in spectrum visualizer, parametric EQ, and local
  playlist management.
repository_url: https://github.com/bjarneo/cliamp
website: http://www.cliamp.stream
author: bjarneo
license: MIT
language: Go
installation:
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/bjarneo/cliamp/HEAD/install.sh | sh
  - method: brew
    command: brew install bjarneo/cliamp/cliamp
  - method: aur
    command: yay -S cliamp
  - method: go
    command: go install github.com/bjarneo/cliamp@latest
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cliamp
  - icecast
  - icecast-player
  - jellyfin-client
  - m3u
  - music
  - music-player
  - navidrome
  - navidrome-client
  - plex-client
  - plugin-system
  - podcast
  - radio
  - soundcloud
  - spotify
  - stream
  - winamp
  - youtube
  - yt-dlp
media: https://cli.masoko.net/uploads/cliamp/media.mp4
logo: https://cli.masoko.net/uploads/cliamp/logo.png
updated: '2026-07-20'
repo_stars: 2715
repo_updated: "2026-07-21"
repo_created: "2026-02-24"
repo_release: "v1.61.0"
repo_release_date: "2026-07-21"
comments: []
---
