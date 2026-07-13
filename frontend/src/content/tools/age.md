---
name: age
category: Security
short_description: >-
  A simple, modern and secure encryption tool (and Go library) with small
  explicit keys, no config options, and UNIX-style composability.
description: >-
  age (Actually Good Encryption) is a simple, modern, and highly secure file
  encryption tool, format, and Go library. It was designed by Filippo Valsorda
  and Ben Cox specifically to replace the sprawling complexity and common
  "footguns" of GPG for basic file encryption tasks.  

  Key characteristics include:  

  * No Configuration Options: It intentionally lacks complex configuration flags
  or obscure cryptographic toggles, enforcing strong, secure defaults out of the
  box.

  * Small, Explicit Keys: It uses clean, short public keys (generated via
  age-keygen) and natively supports reusing existing SSH public keys
  (ssh-ed25519, ssh-rsa) as encryption recipients.  

  * UNIX-Style Composability: It behaves perfectly in terminal pipelines,
  allowing you to easily pipe data in and out of standard input/output.  

  * Post-Quantum Ready: Recent versions feature native support for hybrid
  post-quantum cryptography to secure files against future quantum computing
  capabilities.  


  Essentially, if you need to encrypt a backup, a text file, or a secret stream
  cleanly in a script or terminal without wrestling with a full GPG keyring, age
  is the modern standard for the job.
repository_url: https://github.com/FiloSottile/age
website: https://age-encryption.org
author: FiloSottile
license: BSD-3-Clause
language: Go
installation:
  - method: brew
    command: brew install age
  - method: winget
    command: winget install --id FiloSottile.age
  - method: pacman
    command: pacman -S age
  - method: apt
    command: apt install age
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - age-encryption
  - built-at-rc
media: https://cli.masoko.net/uploads/age/media.gif
logo: https://cli.masoko.net/uploads/age/logo.png
updated: '2026-07-08'
github_stars: 22857
github_updated: "2026-03-20"
github_created: "2019-05-18"
github_release: "v1.3.1"
comments: []
---
