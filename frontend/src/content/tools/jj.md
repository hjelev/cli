---
name: jj
category: Git
short_description: A Git-compatible VCS that is both simple and powerful
description: >-
  Jujutsu (jj) is a powerful, Git-compatible version control system designed to
  be simple, fast, and highly productive.  

  It features a unique "working-copy-as-a-commit" model that eliminates the need
  for staging areas and automates common operations like rebasing and conflict
  resolution.  

  By recording every operation in an undoable log and abstracting storage, it
  offers a robust, modern alternative for managing complex software development
  workflows.
repository_url: https://github.com/jj-vcs/jj
website: https://jj-vcs.dev
author: jj-vcs
license: Apache-2.0
language: Rust
installation:
  - method: cargo
    command: cargo install --locked --bin jj jj-cli
  - method: pacman
    command: pacman -S jujutsu
  - method: aur
    command: yay -S jujutsu-git
  - method: nix
    command: nix run 'github:jj-vcs/jj'
  - method: other
    command: emerge -av dev-vcs/jj
  - method: other
    command: zypper install jujutsu
  - method: brew
    command: brew install jj
  - method: port
    command: sudo port install jujutsu
  - method: winget
    command: winget install jj-vcs.jj
  - method: scoop
    command: scoop install main/jj
  - method: pkg
    command: pkg install jujutsu
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - vcs
  - version-control
media: https://github.com/jj-vcs/jj/raw/main/demos/git_compat.png
logo: https://github.com/jj-vcs/jj/raw/main/docs/images/jj-logo.svg
updated: '2026-08-21'
repo_stars: 31328
repo_updated: "2026-09-01"
repo_created: "2020-12-18"
repo_release: "v0.44.0"
repo_release_date: "2026-08-06"
---
