---
name: hurl
category: Development Tools
short_description: Hurl, run and test HTTP requests with plain text.
description: >-
  Hurl is a command-line tool powered by libcurl that runs and tests HTTP
  requests defined in a simple, human-readable plain text format.  

  It supports chaining requests, capturing variables, and asserting on headers
  or body content using XPath, JSONPath, regular expressions, and status
  codes.  

  Designed for both local development and CI/CD pipelines, it handles REST,
  GraphQL, SOAP, and HTML testing while generating JUnit, TAP, and HTML reports.
repository_url: https://github.com/Orange-OpenSource/hurl
website: https://hurl.dev
author: Orange-OpenSource
license: Apache-2.0
language: Rust
installation:
  - method: apk
    command: >-
      $ apk add --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing
      hurl
  - method: pacman
    command: $ pacman -Sy hurl
  - method: brew
    command: $ brew install hurl
  - method: port
    command: $ sudo port install hurl
  - method: winget
    command: $ winget install hurl
  - method: scoop
    command: $ scoop install hurl
  - method: cargo
    command: $ cargo install --locked hurl
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - api-testing
  - cli
  - curl
  - http
  - http-client
  - integration-testing
  - testing
  - testing-tools
media: https://asciinema.org/a/600691
logo: https://hurl.dev/assets/img/logo-dark.svg
updated: '2026-10-29'
repo_stars: 19291
repo_updated: "2026-10-31"
repo_created: "2020-08-25"
repo_release: "8.1.0"
repo_release_date: "2026-10-28"
---
