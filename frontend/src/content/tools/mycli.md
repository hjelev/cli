---
name: mycli
category: Development Tools
short_description: >-
  Rich MySQL Terminal Client with AutoCompletion, Syntax Highlighting, and
  Dataframes
description: >-
  Python-based interactive terminal client for MySQL, MariaDB, TiDB, Percona,
  and Apache Doris offering smart auto-completion and Pygments syntax
  highlighting.   


  Includes fzf fuzzy history search, parameterized favorite queries, Polars
  dataframe transforms and plotting, Parquet exports, and schema-aware /llm
  queries.   

  Supports shell redirects, SSH/Kubernetes/Vault integrations, and system
  keyring credentials via pip, uv, brew, apt, or ghcr.io Docker images.
repository_url: https://github.com/dbcli/mycli
website: http://mycli.net
author: dbcli
license: BSD-3-Clause
language: Python
installation:
  - method: apt
    command: sudo apt-get install mycli
  - method: dnf
    command: sudo dnf install mycli
  - method: aur
    command: yay -S mycli
  - method: brew
    command: brew install mycli
  - method: pip
    command: pip install --user --upgrade \''mycli[all]\''
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - auto-completion
  - data-science
  - database
  - mycli
  - mysql
  - polars
  - python
  - repl
  - sql
  - syntax-highlighting
media: https://raw.githubusercontent.com/dbcli/mycli/main/doc/screenshots/main.gif
logo: https://avatars.githubusercontent.com/u/11810727?s=200&v=4
updated: '2026-11-25'
repo_stars: 12005
repo_updated: "2026-11-25"
repo_created: "2015-04-05"
repo_release: "v2.32.1"
repo_release_date: "2026-11-25"
---
