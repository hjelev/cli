---
name: zoxide
category: Directory Listing
short_description: A smarter cd command. Supports all major shells.
description: >-
  zoxide is a smarter cd command, inspired by z and autojump.  

  It remembers which directories you use most frequently, so you can "jump" to
  them in just a few keystrokes.  

  zoxide works on all major shells.
repository_url: https://github.com/ajeetdsouza/zoxide
website: https://crates.io/crates/zoxide
author: ajeetdsouza
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install zoxide --locked
  - method: brew
    command: brew install zoxide
  - method: nix
    command: nix-env -iA nixpkgs.zoxide
  - method: apk
    command: apk add zoxide
  - method: pacman
    command: pacman -S zoxide
  - method: apt
    command: apt install zoxide
  - method: dnf
    command: dnf install zoxide
  - method: port
    command: port install zoxide
  - method: choco
    command: choco install zoxide
  - method: other
    command: conda install -c conda-forge zoxide
  - method: scoop
    command: scoop install zoxide
  - method: script
    command: >-
      curl -sSfL
      https://raw.githubusercontent.com/ajeetdsouza/zoxide/main/install.sh | sh
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - autojump
  - bash
  - cli
  - command-line
  - command-line-tool
  - elvish
  - fasd
  - fish
  - fish-shell
  - fzf
  - hacktoberfest
  - jump
  - nushell
  - powershell
  - rust
  - shell
  - xonsh
  - xontrib
  - z
  - zsh
media: https://github.com/ajeetdsouza/zoxide/raw/main/contrib/tutorial.webp
logo: https://avatars.githubusercontent.com/u/1777663?v=4
updated: '2026-07-19'
repo_stars: 38161
repo_updated: "2026-07-20"
repo_created: "2020-03-05"
repo_release: "v0.10.0"
repo_release_date: "2026-07-04"
---
