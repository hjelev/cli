---
name: repo-agent-scan
category: Security
short_description: Scan coding-agent instruction files for prompt injection and risky commands.
description: >-
  Reviews AGENTS.md, CLAUDE.md, GEMINI.md, Cursor rules, Copilot instructions,
  Claude rules, and Windsurf rules before they reach a coding agent or default
  branch. It reports line-level evidence for hidden Unicode, secret exposure,
  approval bypasses, mutable remote instructions, destructive commands, and
  dynamically constructed execution.


  The zero-dependency scanner does not execute repository code, read secrets,
  or send file contents to a service. It supports text, JSON, and SARIF 2.1.0
  output, configurable severity thresholds, a GitHub Action, and a pre-commit
  hook so the same deterministic checks can run locally and in CI.
repository_url: https://github.com/sunxiayi/repo-agent-instruction-security-scan
website: https://repoagentkit.com/agent-instruction-security-scanner?utm_source=terminal-index&utm_medium=directory&utm_campaign=security-cli&utm_content=tool-page
author: sunxiayi
license: MIT
language: JavaScript
installation:
  - method: npm
    command: npx https://github.com/sunxiayi/repo-agent-instruction-security-scan/archive/4e0a03940411c3a6a79f28b5e0c200838884486d.tar.gz .
platforms:
  - Linux
  - macOS
  - Windows
tags:
  - agents-md
  - claude-code
  - cli
  - github-actions
  - prompt-injection
  - security
  - static-analysis
---
