---
name: zizmor
category: DevOps & Cloud
short_description: Static analysis for GitHub Actions (and more)
description: >-
  zizmor is a static analysis and security auditing tool designed specifically
  for GitHub Actions and CI/CD configurations.  

  It detects critical vulnerabilities like template injections, excessive token
  permissions, unpinned actions, and credential leaks before they reach
  production.   

  Seamlessly integrates into local terminals, pre-commit hooks, editors via LSP,
  and CI pipelines to enforce robust supply-chain security.
repository_url: https://github.com/zizmorcore/zizmor
website: http://docs.zizmor.sh/
author: zizmorcore
license: MIT
language: Rust
installation:
  - method: pacman
    command: pacman -S zizmor
  - method: zypper
    command: zypper install zizmor
  - method: nix
    command: nix-env -iA nixos.zizmor
  - method: cargo
    command: cargo install --locked zizmor
  - method: brew
    command: brew install zizmor
  - method: port
    command: sudo port install zizmor
  - method: pip
    command: pip install zizmor
  - method: pipx
    command: pipx install zizmor
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - github-actions
  - security
  - security-tools
  - static-analysis
media: https://zizmor.sh/assets/zizmor-demo.gif
logo: https://docs.zizmor.sh/assets/rainbow.svg
updated: '2026-11-15'
repo_stars: 7172
repo_stars_recent: 113
repo_updated: "2026-11-25"
repo_created: "2024-08-19"
repo_release: "v1.33.1"
repo_release_date: "2026-11-22"
---
