---
name: dyff
category: Data Processing
short_description: /ˈdʏf/ - diff tool for YAML files, and sometimes JSON
description: >-
  dyff is a specialized diff tool for YAML (and JSON) files that generates
  compact, human-readable reports highlighting specific changes.  

  It provides clear path references for differences and is highly useful for
  comparing configuration files, Kubernetes manifests, or deployment versions.  

  Installation is widely supported across platforms via package managers like
  Homebrew, MacPorts, and FreeBSD ports, or directly through Go.
repository_url: https://github.com/homeport/dyff
author: homeport
license: MIT
language: Go
installation:
  - method: script
    command: curl --silent --location https://git.io/JYfAY | bash
  - method: brew
    command: brew install homeport/tap/dyff
  - method: port
    command: sudo port install dyff
  - method: pkg
    command: pkg install dyff
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - bosh
  - diff
  - dyff
  - go-patch
  - golang
  - json
  - json2yaml
  - spruce
  - tool
  - yaml
  - yaml-files
  - yaml2json
media: >-
  https://raw.githubusercontent.com/homeport/dyff/main/.docs/dyff-between-kubectl-diff.png
logo: https://raw.githubusercontent.com/homeport/dyff/main/.docs/logo.png
updated: '2026-07-18'
repo_stars: 1862
repo_updated: "2026-07-16"
repo_created: "2018-03-09"
repo_release: "v1.12.0"
repo_release_date: "2026-04-26"
---
