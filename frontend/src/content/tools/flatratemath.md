---
name: flatratemath
category: Development Tools
short_description: >-
  Prices a fixed bid, a hire, and a flat subscription on one scale: cost per
  delivered request.
description: >-
  One-file Python calculator that prices a fixed-bid project, a staff hire, and
  a flat monthly subscription on the same scale: total cost per delivered
  request. Stdlib only, no dependencies.


  The three ways to buy software never quote the same units. A contractor hands
  over one number for the whole build. A hire shows a monthly salary that keeps
  running. A subscription shows a smaller monthly fee for unlimited requests.
  flatratemath takes your expected scope, how long the work needs to stay alive,
  and how many discrete requests you plan to submit, then prints the true total
  and cost per request for each lane, salary lane at its fully loaded cost with
  taxes and benefits included. A --compare mode reads a CSV of all your lanes at
  once and ranks them, doctests cover the math, and the script refuses nonsense
  inputs like zero requests. I kept redrawing this spreadsheet while scoping
  client work, so the file exists now. The flat-fee side of the math lives at
  Poket Dev.
repository_url: https://github.com/scrapertweeter3-prog/flatratemath
website: https://poketdev.com
author: James Verlander
license: MIT
language: Python
installation:
  - method: pip
    command: pip install flatratemath
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - pricing
  - calculator
  - python
  - cli
  - budgeting
updated: '2026-10-12'
---
