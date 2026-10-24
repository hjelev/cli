---
name: caption-checker
category: Media & Entertainment
short_description: >-
  Checks SRT and WebVTT captions against Netflix, BBC and DCMP Captioning Key
  limits.
description: >-
  Reads SRT and WebVTT files and flags the captions that break a published
  standard (Netflix English, the BBC subtitle guidelines or the DCMP
  Captioning Key): reading speed, line length, number of lines, time on
  screen, gaps between captions, overlaps and broken timestamps, with the
  caption number and timecode for each one.


  Zero dependencies (Node 18+). Prints a readable report or JSON, exits with 1
  when any caption breaks a limit so it works as a CI check, and can run as an
  MCP server on stdio. Every limit is cited to the standard's own page in the
  README.
repository_url: https://github.com/markksantos/caption-checker
website: https://www.markstudios.com/tools/caption-checker
author: markksantos
license: MIT
language: JavaScript
installation:
  - method: npm
    command: npx github:markksantos/caption-checker captions.srt
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - captions
  - subtitles
  - srt
  - webvtt
  - accessibility
  - linter
  - mcp
media: https://raw.githubusercontent.com/markksantos/caption-checker/main/docs/preview.png
---
