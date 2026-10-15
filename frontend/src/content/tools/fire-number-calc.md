---
name: fire-number-calc
category: Development Tools
short_description: >-
  Terminal calculator for the fire number: spending over withdrawal rate, the
  gap to close, and the years a flat or growing budget needs.
description: >-
  Every early retirement plan hangs on one number: annual spending divided by
  the withdrawal rate. Fire-number-calc is a terminal calculator for that number
  and for the gap between it and your current balance. At $40,000 of spending
  and a 4% rate the target is $1,000,000; from a $620,000 balance the gap is
  $380,000.


  The tool prints two timelines in whole years. A flat budget that never moves
  closes the example gap in 6 years. A budget that creeps 2% a year raises the
  target while the portfolio compounds and takes 8, and the 2 extra working
  years print side by side.


  The withdrawal rate is a fixed input: no sequence-of-returns, tax, or Social
  Security modeling, and the spending number is the one to check first. --json
  emits machine output. Python 3.8+, one file, standard library only, no network
  calls, MIT licensed. The FIRE math write-ups behind it live at firenomics.com.
repository_url: https://github.com/scrapertweeter3-prog/fire-number-calc
website: https://firenomics.com
author: James Verlander
license: MIT
language: Python
installation:
  - method: pip
    command: >-
      pip install
      git+https://github.com/scrapertweeter3-prog/fire-number-calc.git
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - python
  - finance
  - retirement
  - fire
updated: '2026-10-11'
---
