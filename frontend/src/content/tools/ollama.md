---
name: ollama
category: AI
short_description: >-
  Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and
  other models.
description: >-
  Ollama is a lightweight, extensible command-line platform designed to run
  large language models locally on your own hardware with zero configuration.


  It handles everything from model downloading and GPU acceleration to memory
  management, allowing you to interact with powerful open-weight AI models like
  Llama and Mistral right inside your terminal.


  Featuring a robust REST API and seamless integration with developer tools and
  applications, it provides an efficient way to experiment with local AI
  workflows.
repository_url: https://github.com/ollama/ollama
website: https://ollama.com
author: ollama
license: MIT
language: Go
installation:
  - method: script
    command: curl -fsSL https://ollama.com/install.sh | sh
  - method: pacman
    command: pacman -S ollama
  - method: yum
    command: yum install ollama
  - method: zypper
    command: zypper install ollama
  - method: snap
    command: sudo snap install ollama
  - method: brew
    command: brew install ollama
  - method: scoop
    command: scoop install ollama
  - method: winget
    command: winget install Ollama
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - deepseek
  - gemma
  - glm
  - go
  - golang
  - gpt-oss
  - llama
  - llm
  - llms
  - minimax
  - mistral
  - muse
  - ollama
  - qwen
logo: https://ollama.com/public/ollama-nav.png
updated: '2026-11-15'
---
