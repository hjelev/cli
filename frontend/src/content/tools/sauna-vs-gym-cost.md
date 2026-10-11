---
name: sauna-vs-gym-cost
category: Development Tools
short_description: >-
  Turns a home sauna into dollars per session: gear amortized over real usage,
  the electricity line, and the break-even visit count.
description: >-
  A home sauna is priced by sticker and judged by vibe; this terminal calculator
  turns the purchase into a dollars-per-session number instead. The gear cost
  amortizes over the sessions a habit actually produces, an electricity line
  most buyers skip rides on top, and the tool prints the visit count where
  owning finally beats paying per visit elsewhere.


  The method keeps the units honest: kilowatt-hours per session times a
  bill-grade electric rate, weekly habit times 52 as the denominator. A $2,500
  unit used 4 times a week at 17 cents a kilowatt-hour lands at $4.34 a session
  by month 36 and breaks even against a $22 per-visit alternative after 115
  visits. When the alternative costs less than the electricity alone, the gap is
  negative and the tool says so.


  --compare runs two usage habits head to head; --json emits machine output.
  Python 3.8+, one file, standard library only, no network calls, MIT licensed.
  The home-sauna cost write-ups behind the math live at hackedself.com.
repository_url: https://github.com/scrapertweeter3-prog/sauna-vs-gym-cost
website: https://hackedself.com
author: James Verlander
license: MIT
language: Python
installation:
  - method: pip
    command: >-
      pip install
      git+https://github.com/scrapertweeter3-prog/sauna-vs-gym-cost.git
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - python
  - fitness
  - sauna
  - cost
updated: '2026-10-11'
---
