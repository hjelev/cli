---
name: jbang
category: Development Tools
short_description: Unleash the power of java
description: >-
  JBang brings fast, frictionless Java to the terminal. Run Java source files,
  scripts, JARs, and cataloged apps with automatic dependency resolution and JDK
  management, without setting up a full project first. It is ideal for
  scripting, prototyping, CLI tools, automation, and quickly trying Java
  libraries while still using the full Java ecosystem.
repository_url: https://github.com/jbangdev/jbang
website: https://jbang.dev
author: Max Rydahl Andersen
license: MIT
language: Java
installation:
  - method: brew
    command: brew install jbangdev/tap/jbang
  - method: other
    command: curl -Ls https://sh.jbang.dev | bash -s - app setup
  - method: scoop
    command: choco install jbang
platforms:
  - linux
  - macosx
  - windows
tags:
  - java
  - productivity
  - build
logo: >-
  https://raw.githubusercontent.com/jbangdev/jbang/refs/heads/main/images/jbang_icon.png
updated: '2026-07-19'
---
