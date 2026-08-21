---
name: YScan
category: Networking
short_description: A TUI-first network scanner with ARP, mDNS, and SSDP discovery.
description: >-
  Finds every device on your local network using an ARP sweep, mDNS service
  browsing, SSDP/UPnP and reverse DNS, then puts them in a live table you can
  sort and search by IP, name, MAC or manufacturer. Devices that come back
  unnamed get probed further through reverse DNS and HTTP banners, which is
  usually enough to identify a Proxmox box, a TrueNAS, a Pi-hole or a UniFi
  controller by name instead of by address.


  Manufacturer names are resolved from the MAC's OUI, so even hardware it cannot
  name still tells you something. Any device can be port scanned on demand
  across 29 common ports. There is a oneshot mode that runs a single scan and
  prints a table or JSON for scripting, and rescans can run continuously in the
  background at whatever interval you set. Eight themes ship with it and `t`
  cycles them live.
repository_url: https://github.com/yetidevworks/yscan
website: https://yetidevworks.com/yscan
author: yetidevworks
license: Apache-2.0
language: Rust
installation:
  - method: brew
    command: brew install yetidevworks/yscan/yscan
  - method: cargo
    command: cargo install yscan
platforms:
  - Linux
  - macOS
tags:
  - arp
  - mdns
  - network-scanner
  - networking
  - port-scanner
  - ratatui
  - rust
  - ssdp
  - terminal
  - tui
media: https://raw.githubusercontent.com/yetidevworks/yscan/main/yscan-screenshot.png
logo: https://avatars.githubusercontent.com/u/220336074?v=4
updated: '2026-08-21'
repo_stars: 6
repo_updated: "2026-08-04"
repo_created: "2026-02-26"
repo_release: "0.1.1"
repo_release_date: "2026-08-04"
---
