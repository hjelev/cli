---
name: ycrawl
category: Data Processing
short_description: Fetch a web page, get clean markdown, with honest verdicts when a page is blocked.
description: >-
  Takes a URL and returns the page as markdown with YAML frontmatter. Navigation,
  cookie banners, scripts and inline SVG are stripped, code blocks keep their
  language hint, and links come back absolute with tracking parameters removed.
  A PDF with selectable text comes back page by page. Several URLs passed in one
  call are fetched concurrently, and `--summary` returns just the metadata and a
  word count, which is usually enough to decide whether the body is worth
  pulling at all.


  What separates it from piping curl into a converter is that it tells you what
  actually happened. Every fetch reports a verdict: real content, a thin shell,
  a page that needs scripting, or a commercial bot wall. It starts with a plain
  HTTP fetch and escalates to a real browser only where that is measured to
  help, so the slow path costs you seconds only when it buys something. A page
  behind DataDome is reported as blocked rather than quietly handed back as
  nothing, which means you can say so instead of guessing why the result was
  empty.
repository_url: https://github.com/yetidevworks/ycrawl
website: https://yetidevworks.com/ycrawl
author: yetidevworks
license: MIT
language: Rust
installation:
  - method: brew
    command: brew tap yetidevworks/ycrawl && brew trust yetidevworks/ycrawl && brew install ycrawl
platforms:
  - Linux
  - macOS
tags:
  - claude-code
  - cli
  - headless-browser
  - llm
  - markdown
  - rust
  - web-crawler
  - web-scraping
logo: https://avatars.githubusercontent.com/u/220336074?v=4
updated: '2026-08-22'
---
