---
name: rclone
category: Utilities & Other
short_description: >-
  "rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One
  Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azur
description: >-
  A feature-rich command-line program acting as an "rsync for cloud storage,"
  supporting dozens of providers like S3, Google Drive, and Dropbox.  

  Enables robust file syncing, transfers, encryption, and verification with
  support for partial uploads and chunking.  

  Provides advanced capabilities including FUSE mounting (rclone mount), two-way
  syncing, and serving files over HTTP/WebDAV.
repository_url: https://github.com/rclone/rclone
website: https://rclone.org
author: rclone
license: MIT
language: Go
installation:
  - method: apt
    command: apt-get install rclone
  - method: pacman
    command: pacman -Sy rclone
  - method: dnf
    command: dnf install rclone
  - method: other
    command: zypper install rclone
  - method: apk
    command: apk add rclone
  - method: nix
    command: nix-shell -p rclone
  - method: other
    command: emerge install rclone
  - method: brew
    command: brew install rclone
  - method: winget
    command: winget install -e --id Rclone.Rclone
  - method: scoop
    command: scoop install rclone
  - method: choco
    command: choco install rclone
platforms:
  - Windows
tags:
  - azure-blob
  - azure-blob-storage
  - azure-files
  - backblaze-b2
  - cloud-storage
  - dropbox
  - encryption
  - ftp
  - fuse-filesystem
  - go
  - golang
  - google-cloud-storage
  - google-drive
  - onedrive
  - openstack-swift
  - rclone
  - s3
  - sftp
  - sync
  - webdav
logo: https://rclone.org/img/rclone-32x32.png
updated: '2026-09-05'
repo_stars: 59581
repo_updated: "2026-09-05"
repo_created: "2014-03-16"
repo_release: "v1.75.1"
repo_release_date: "2026-09-04"
---
