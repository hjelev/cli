---
name: side-hustle-hourly
category: Development Tools
short_description: >-
  Restates a gig offer as one number: true hourly pay after the platform cut,
  job costs, and the unpaid hours around the paid ones.
description: >-
  A delivery block that pays $200 is a quote, and the app's headline rate is the
  flattering version of it. Side-hustle-hourly restates the offer as what
  reaches your pocket per clock hour: gross minus the platform cut minus job
  costs, divided by paid hours plus the unpaid ones the app never clocks.


  The worked example prices a $200 block with $40 in gas and a 15% cut across 5
  paid and 3 unpaid hours at $16.25 per hour. A second example scores a $90 gig
  at $20.00 against $16.25 for the $200 block, a $3.75 per hour gap.


  Exit code 1 when the first gig loses the comparison, so a shell script can act
  on the verdict; --json emits machine output. Python 3.8+, one file, standard
  library only, no network calls, MIT licensed. The gig-pricing write-ups behind
  the math live at extrahustles.com.
repository_url: https://github.com/scrapertweeter3-prog/side-hustle-hourly
website: https://extrahustles.com
author: James Verlander
license: MIT
language: Python
installation:
  - method: pip
    command: >-
      pip install
      git+https://github.com/scrapertweeter3-prog/side-hustle-hourly.git
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - python
  - gig-economy
  - finance
  - income
updated: '2026-10-11'
---
