---
name: cost-per-decade
category: Development Tools
short_description: >-
  Buy-it-for-life math as one number: cost per decade, cost per use, warranty
  share, and the break-even year where the durable option wins.
description: >-
  When lifespans differ, the sticker price settles nothing. A $280 item that
  lasts 20 years runs $140 per decade; a $40 item replaced every 2 years runs
  $200. The cheap one wins the checkout line and loses by $60 per decade.
  Cost-per-decade is a terminal calculator for that arithmetic.


  The tool prints cost per decade, cost per use, horizon totals, and the
  break-even year where the durable option beats the replacement ladder. A $900
  purchase lasting 6 years against a $45 one lasting 4 ends a 5-year horizon
  with the cheap option ahead by $810. It exits 1 when the cheap option wins at
  your horizon, so a script can gate the purchase.


  Lifespans are your estimate, not a measurement, and inflation is left out,
  which holds for a 30-year window at 2026 prices. --json emits machine output.
  Python 3.8+, one file, standard library only, no network calls, MIT licensed.
  The durability rankings behind the math live at durablepicks.com.
repository_url: https://github.com/scrapertweeter3-prog/cost-per-decade
website: https://durablepicks.com
author: James Verlander
license: MIT
language: Python
installation:
  - method: pip
    command: >-
      pip install
      git+https://github.com/scrapertweeter3-prog/cost-per-decade.git
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - python
  - finance
  - shopping
  - consumer
updated: '2026-10-11'
---
