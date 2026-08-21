---
name: forgit
category: Git
short_description: ':zzz: A utility tool powered by fzf for using git interactively.'
description: >-
  This tool is designed to help you use git more efficiently. It's lightweight
  and easy to use.
repository_url: https://github.com/wfxr/forgit
author: wfxr
license: MIT
language: Shell
installation:
  - method: brew
    command: brew install forgit
  - method: other
    command: zplug \''wfxr/forgit\''
  - method: other
    command: zgen load \''wfxr/forgit\''
  - method: other
    command: fisher install wfxr/forgit
  - method: other
    command: omf install https://github.com/wfxr/forgit
  - method: other
    command: >-
      git clone https://github.com/wfxr/forgit.git
      ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/forgit
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - bash
  - cli
  - fish
  - fzf
  - git
  - zsh
  - zsh-plugin
media: https://raw.githubusercontent.com/wfxr/i/master/forgit-glo.png
logo: https://avatars.githubusercontent.com/u/6105425?v=4
updated: '2026-08-21'
repo_stars: 5063
repo_updated: "2026-08-21"
repo_created: "2017-11-15"
repo_release: "26.08.0"
repo_release_date: "2026-08-01"
---
