---
name: archivemount
category: Networking
short_description: A fuse filesystem for mounting archives in formats supported by libarchive.
description: >-
  A FUSE-based filesystem implementation that allows you to mount compressed
  archives (like .tar.gz, .zip, etc.) as standard directories.  

  Enables transparent reading and interaction with files inside archives without
  needing to manually unpack them to disk first.  

  Integrates libarchive and FUSE, providing a convenient way to browse or
  inspect archive contents using regular system commands.
repository_url: https://github.com/cybernoid/archivemount
author: cybernoid
license: Other
language: C
installation:
  - method: apt
    command: sudo apt install archivemount
  - method: dnf
    command: sudo dnf install archivemount
  - method: brew
    command: brew install archivemount
platforms:
  - Linux
  - macOS
tags:
  - cli
  - archivemount
  - fuse
  - mount
  - archives
  - libarchive
  - filesystem
  - system-utilities
  - compression
  - tar
  - zip
logo: https://avatars.githubusercontent.com/u/452612?v=4
updated: '2026-07-12'
github_stars: 242
github_updated: "2021-10-05"
github_created: "2018-04-10"
---
