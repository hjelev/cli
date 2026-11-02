---
name: shoal
category: Networking
short_description: Terminal LAN discovery that shows its work
description: >-
  Shoal finds the devices on the network segment you are plugged into and fills
  in what they are, live: a typical /24 is swept in about seven seconds.  

  Its defining feature is that every value on screen says how it was learned —
  which probe found it, what was sent, what came back, how sure it is and when
  it expires — so it is as much a way to learn how a network is discovered as a
  way to list what is on one. ARP, DNS, mDNS/Bonjour, NetBIOS and ICMP each know
  a different part of the picture, and you can watch each one answer as it runs.
repository_url: https://github.com/BT10011/shoal
author: BT10011
license: MIT
language: Go
installation:
  - method: script
    command: >-
      curl -fsSL
      https://github.com/BT10011/shoal/releases/latest/download/install.sh | sh
platforms:
  - Linux
  - macOS
tags:
  - LAN discovery
media: https://cli.masoko.net/uploads/shoal/media.png
logo: https://avatars.githubusercontent.com/u/149542775?v=4
updated: '2026-10-15'
repo_stars: 98
repo_updated: "2026-10-18"
repo_created: "2026-09-16"
repo_release: "v2.0.1"
repo_release_date: "2026-10-18"
---
