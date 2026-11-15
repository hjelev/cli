---
name: GitGo
category: Git
short_description: >-
  Git workflow CLI that wraps add/commit/push into one command, with stash-aware
  branch switching and safe undo
description: |-
  GitGo is a Git CLI wrapper that cuts the usual add/commit/push cycle down
  to one command. The jump command stashes your current changes, switches
  branches, pulls the latest, then restores your work, handling merge
  conflicts and offering to undo the whole thing if the restore fails.
  Also has an undo command for walking back commits, staged files, or a
  bad push without digging through git reflog.

  Installable via pip, pipx, or winget. Tested with pytest, CI runs on
  every push. On PyPI as pygitgo it reaches about 3k+ real installs (excluding
  mirror syncs) over the last 6 months per pypistats.
repository_url: https://github.com/Huerte/GitGo
website: https://pypi.org/project/pygitgo/
author: Huerte
license: GPLv3
language: Python
installation:
  - method: pip
    command: pip install pygitgo
  - method: pipx
    command: pipx install pygitgo
  - method: winget
    command: winget install Huerte.GitGo
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - git
  - cli
  - workflow
  - automation
  - productivity
media: https://cli.masoko.net/uploads/gitgo/media.gif
logo: https://cli.masoko.net/uploads/gitgo/logo.png
updated: '2026-10-23'
repo_stars: 19
repo_stars_recent: 0
repo_updated: "2026-10-26"
repo_created: "2025-09-30"
repo_release: "v1.11.0"
repo_release_date: "2026-10-20"
repo_badge: true
comments: []
---
