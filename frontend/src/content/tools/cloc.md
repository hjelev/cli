---
name: cloc
category: Data Processing
short_description: >-
  cloc counts blank lines, comment lines, and physical lines of source code in
  many programming languages.
description: >-
  cloc ("Count Lines of Code") is a command-line utility written in Perl that
  counts blank lines, comment lines, and physical lines of source code across
  hundreds of programming languages.


  Key features include:


  * Broad Support: It recognizes and parses code stats for a vast array of
  languages, handling differences in single-line and multi-line comment styles
  automatically.


  * Flexible Inputs: It can analyze individual source files, entire directories,
  specific git commits/repositories, and compressed archive formats (like .zip,
  .tar.gz, .deb, .rpm, or .whl files).


  * Code Differences: It can compare two versions of a codebase to compute the
  delta in blank lines, comments, and actual code.


  * Portability: Written in pure Perl with minimal external dependencies, it
  runs across Linux, macOS, BSD variants, and Windows (where standalone compiled
  .exe binaries are also available).
repository_url: https://github.com/AlDanial/cloc
author: AlDanial
license: GPL-2.0
language: Perl
installation:
  - method: brew
    command: brew install cloc
  - method: apt
    command: sudo apt install cloc
  - method: dnf
    command: sudo dnf install cloc
  - method: pacman
    command: sudo pacman -S cloc
  - method: winget
    command: winget install AlDanial.Cloc
  - method: scoop
    command: scoop install cloc
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - cloc
  - count-lines
  - programming-language
media: https://cli.masoko.net/uploads/cloc/media.png
logo: https://avatars.githubusercontent.com/u/1459933?v=4
updated: '2026-07-15'
repo_stars: 23328
repo_updated: "2026-07-17"
repo_created: "2015-09-07"
repo_release: "v2.10"
repo_release_date: "2026-07-04"
comments: []
---
