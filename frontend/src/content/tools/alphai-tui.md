---
name: alphai-tui
category: Productivity
short_description: >-
  Stock-market TUI with quotes, charts, portfolio tracking, news and SEC insider
  filings
description: >-
  A stock-market dashboard for the terminal, written in Rust with ratatui. It
  combines quotes, candlestick charts, watchlists and portfolio tracking with
  AI-scored financial news, SEC Form 4 insider filings, earnings reads and a
  market calendar.

  Quotes and charts work without an account through Yahoo. Finnhub, Alpaca and
  Tiingo are optional providers with their own keys. The News, Insider, Earnings
  and Calendar views require a free AlphAI API key; the hosted analysis service
  is separate from the MIT-licensed terminal client.

  Includes keyboard navigation, configurable themes, moving averages, RSI,
  volume charts, and one-shot quote output in text or JSON for scripts.
repository_url: https://github.com/makeev/alphai-tui
website: https://alphai.io/tui
author: Mikhail Makeev
license: MIT
language: Rust
installation:
  - method: cargo
    command: cargo install alphai-tui
  - method: brew
    command: brew install makeev/tap/alphai-tui
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - finance
  - stocks
  - tui
  - ratatui
  - portfolio
media: https://raw.githubusercontent.com/makeev/alphai-tui/main/assets/demo.gif
logo: https://alphai.io/assets/logo-icon.svg
updated: '2026-10-15'
repo_stars: 94
repo_updated: "2026-11-07"
repo_created: "2026-07-10"
repo_release: "v0.40.0"
repo_release_date: "2026-11-07"
repo_badge: true
comments: []
---
