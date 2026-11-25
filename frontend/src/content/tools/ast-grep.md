---
name: ast-grep
category: Development Tools
short_description: ⚡A CLI tool for code structural search, lint and rewriting. Written in Rust
description: >-
  ast-grep is a blazing-fast AST-based tool for code structural search, linting,
  and rewriting that goes beyond traditional regex by understanding programming
  language syntax.


  It uses a intuitive pattern-matching syntax that looks like real code,
  allowing developers to query and refactor complex codebases across multiple
  languages effortlessly.


  Featuring high performance and seamless CI integration, it is ideal for
  enforcing custom architectural rules, automating large-scale migrations, and
  maintaining code quality.
repository_url: https://github.com/ast-grep/ast-grep
website: https://ast-grep.github.io/
author: ast-grep
license: MIT
language: Rust
installation:
  - method: apk
    command: apk add ast-grep
  - method: snap
    command: snap install ast-grep
  - method: nix
    command: nix-shell -p ast-grep
  - method: brew
    command: brew install ast-grep
  - method: port
    command: sudo port install ast-grep
  - method: pkgin
    command: pkgin install devel/ast-grep
  - method: scoop
    command: scoop install main/ast-grep
  - method: pip
    command: pip install ast-grep-cli
  - method: cargo
    command: cargo binstall ast-grep
  - method: cargo
    command: cargo install ast-grep
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - ast
  - babel
  - codemod
  - codereview
  - command-line
  - command-line-tool
  - grep
  - linter
  - refactoring
  - rust
  - search
  - static-analysis
  - structural-search
  - tree-sitter
  - typescript
media: https://cli.masoko.net/uploads/ast-grep/media.png
logo: https://ast-grep.github.io/logo.svg
updated: '2026-11-15'
repo_stars: 16695
repo_stars_recent: 109
repo_updated: "2026-11-25"
repo_created: "2022-07-01"
repo_release: "0.51.3"
repo_release_date: "2026-11-16"
---
