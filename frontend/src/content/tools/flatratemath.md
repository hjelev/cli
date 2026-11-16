---
name: flatratemath
category: Development Tools
short_description: >-
  Prices a fixed bid, a staff hire, and a flat subscription as one number: cost
  per delivered request.
description: >-
  A one-file Python tool that prices three sourcing lanes on a single scale. It
  divides a contractor's fixed bid, a fully loaded monthly hire, and a flat
  subscription by the number of discrete requests you expect over the term, then
  ranks the lanes by cost per delivered request. Real inputs from any vendor's
  published rates drop in as arguments or CSV rows.
repository_url: https://github.com/scrapertweeter3-prog/flatratemath
website: https://poketdev.com
author: James Verlander
license: MIT
language: Python
installation:
  - method: script
    command: python3 flatratemath.py 84000 12 30
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - python
  - pricing
  - cost-estimation
  - freelance
updated: '2026-11-11'
---
