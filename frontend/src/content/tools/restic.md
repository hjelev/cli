---
name: restic
category: DevOps & Cloud
short_description: Fast, secure, efficient backup program
description: >-
  Secure backup program: Fast, efficient, and cryptographically secure backup
  solution written in Go that ensures your data is protected using AES-256 and
  Poly1305 encryption.


  Deduplicated storage: Uses content-defined chunking to split files into
  pieces, ensuring that identical data is only stored once to drastically reduce
  storage space across backups.


  Flexible backend support: Backs up seamlessly to local directories, SFTP, REST
  servers, and major cloud providers (like Amazon S3, B2, Google Cloud, and
  Azure) with easy snapshot management.
repository_url: https://github.com/restic/restic
website: https://restic.net
author: restic
license: BSD-2-Clause
language: Go
installation:
  - method: apt
    command: apt-get install restic
  - method: pacman
    command: pacman -S restic
  - method: dnf
    command: dnf install restic
  - method: zypper
    command: zypper install restic
  - method: apk
    command: apk add restic
  - method: nix
    command: nix-env --install restic
  - method: emerge
    command: emerge app-backup/restic
  - method: brew
    command: brew install restic
  - method: port
    command: sudo port install restic
  - method: pkg
    command: pkg install restic
  - method: winget
    command: winget install -e --id restic.restic
  - method: choco
    command: choco install restic
  - method: scoop
    command: scoop install restic
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - backup
  - dedupe
  - deduplication
  - go
  - restic
  - secure-by-default
media: https://asciinema.org/a/23554
logo: https://restic.net/apple-touch-icon-144-precomposed.png
updated: '2026-11-18'
repo_stars: 37301
repo_stars_recent: 7
repo_updated: "2026-11-19"
repo_created: "2014-04-27"
repo_release: "v0.19.1"
repo_release_date: "2026-07-05"
---
