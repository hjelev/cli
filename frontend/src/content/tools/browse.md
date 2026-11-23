---
name: browse
category: Shell & Terminal
short_description: A multi-file pager with recursive navigation
description: >-
  browse is an interactive pager for navigating collections of files rather than
  only a single file at a time.


  Unlike conventional pagers, browse lets you temporarily suspend the current
  file set while you examine a different set, then return to the prior location.
  This recursive model supports investigating logs, search results, source
  trees, and related materials without losing context.


  Conceptually, the program may be understood as combining the behavior of less
  with a stack-based file navigation model similar to pushd/popd.
repository_url: https://github.com/jjbailey/browse
author: jjbailey
license: MIT
language: Go
installation:
  - method: go
    command: >-
      go build -ldflags="-linkmode external -extldflags -static -s -w"
      -buildvcs=false -trimpath .
platforms:
  - Linux
tags:
  - tui
updated: '2026-11-06'
---
