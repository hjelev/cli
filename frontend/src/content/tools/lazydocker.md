---
name: lazydocker
category: DevOps & Cloud
short_description: The lazier way to manage everything docker
description: >-
  A simple terminal UI for both docker and docker-compose, written in Go with
  the gocui library.
repository_url: https://github.com/jesseduffield/lazydocker
website: https://lazydocker.com
author: jesseduffield
license: MIT
language: Go
installation:
  - method: brew
    command: brew install lazydocker
  - method: other
    command: scoop install lazydocker
  - method: other
    command: choco install lazydocker
  - method: go
    command: go install github.com/jesseduffield/lazydocker@latest
  - method: other
    command: yay -S lazydocker
  - method: docker
    command: >-
      docker run --rm -it -v \ /var/run/docker.sock:/var/run/docker.sock \ -v
      /yourpath:/.config/jesseduffield/lazydocker \ lazyteam/lazydocker
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - tui
  - docker
media: >-
  https://github.com/jesseduffield/lazydocker/raw/master/docs/resources/demo3.gif
logo: >-
  https://user-images.githubusercontent.com/8456633/59972109-8e9c8480-95cc-11e9-8350-38f7f86ba76d.png
updated: '2026-07-11'
github_stars: 52004
github_updated: "2026-04-19"
github_created: "2019-05-18"
github_release: "v0.25.2"
---
