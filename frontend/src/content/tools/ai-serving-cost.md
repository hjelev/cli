---
name: ai-serving-cost
category: Development Tools
short_description: >-
  Restates an AI API quote as cost per request: cache-discounted input tokens,
  output tokens, per-request fee, monthly bill at your volume.
description: >-
  An AI API bill is a quote you reverse-engineer after the fact. Ai-serving-cost
  restates a provider's rates as one number, cost per request, then multiplies
  it out to the monthly bill at your traffic.


  The math follows the bill. Input tokens price at their per-million rate with
  the cache discount applied to the cached share, output tokens price at theirs,
  and the per-request fee sits on top. At 10,000 input and 500 output tokens per
  request, $3 and $15 per million rates, a 30% cached share, and 20,000 requests
  a day, it prints $0.029 per request and a $17,400 monthly bill.


  --compare scores two cache shares head to head; --json emits machine output.
  One Python file, standard library only, no network calls, MIT licensed. The
  serving-cost write-ups behind the math live at pastagi.com.
repository_url: https://github.com/scrapertweeter3-prog/ai-serving-cost
website: https://pastagi.com
author: James Verlander
license: MIT
language: Python
installation:
  - method: pip
    command: >-
      pip install
      git+https://github.com/scrapertweeter3-prog/ai-serving-cost.git
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cli
  - python
  - api
  - costs
  - ai
updated: '2026-10-11'
---
