---
name: chezmoi
category: Productivity
short_description: Manage your dotfiles across multiple diverse machines, securely.
description: >-
  Chezmoi is a popular command-line tool for managing your dotfiles across
  multiple machines securely and efficiently. It works by treating your home
  directory as a target and a dedicated source directory as the blueprint for
  your configuration files. It also integrates seamlessly with password managers
  to help you keep sensitive data private.
repository_url: https://github.com/twpayne/chezmoi
website: https://www.chezmoi.io
author: twpayne
license: MIT
language: Go
installation:
  - method: apk
    command: apk add chezmoi
  - method: pacman
    command: pacman -S chezmoi
  - method: apt
    command: apt-get install chezmoi
  - method: dnf
    command: dnf install chezmoi
  - method: pkg
    command: pkg install chezmoi
  - method: brew
    command: brew install chezmoi
  - method: port
    command: port install chezmoi
  - method: choco
    command: choco install chezmoi
  - method: scoop
    command: scoop install chezmoi
  - method: winget
    command: winget install twpayne.chezmoi
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - configuration
  - dotfile
  - dotfile-management
  - dotfile-manager
  - dotfile-managers
  - dotfiles
  - linux
  - macos
  - security
  - windows
logo: https://www.chezmoi.io/logo.svg
updated: '2026-07-21'
---
