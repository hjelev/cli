---
name: borg-commander
category: File Management
short_description: >-
  A two-panel file manager with your shell built in. It also shows your
  containers, processes, ports and startup items, and links your machines.
description: |-
  Borg Commander is a two-panel file manager for macOS and Linux, in the line of Norton Commander and Midnight Commander.

  - **Shell built in.** Your own Bash, zsh or fish session runs under the panels.
  - **Files.** Copy, move and delete in background jobs, with previews, a viewer and an editor.
  - **Git.** Branch and file status in the panels, with diffs, commits and staging.
  - **Docker.** Containers listed by Compose project, with their files open in a panel.
  - **Processes.** A live list with CPU and memory, memory maps, and signals.
  - **Network.** Every open port, traffic for each process, and packet capture.
  - **Startup items.** Everything that starts on its own, from launch agents to systemd units.
  - **Linked machines.** Link your computers and reach the borg on any of them: open its files in a local panel, copy both ways, or mirror its live screen.
  - **Behind firewalls and NAT.** Links go through borg cloud, an encrypted relay, so the remote machine needs no open port.
  - **Agents over MCP.** AI agents can work in your local borg or any remote borg you have linked, and every command and edit waits for your approval.
repository_url: https://github.com/0xcd21h/borg-commander
website: https://0xcd21h.github.io/borg-commander/
author: 0xcd21h
license: MIT OR Apache-2.0
language: Rust
installation:
  - method: script
    command: >-
      curl -fsSL
      https://raw.githubusercontent.com/0xcd21h/borg-commander/main/scripts/install.sh
      | sh
platforms:
  - Linux
  - macOS
tags:
  - tui
  - file-manager
  - dual-pane
  - shell
  - docker
  - process-monitor
  - network-monitor
  - security
  - remote-access
  - nat-traversal
  - git
  - mcp
  - ai-agents
  - rust
media: https://raw.githubusercontent.com/0xcd21h/borg-commander/main/docs/demo.gif
logo: https://raw.githubusercontent.com/0xcd21h/borg-commander/main/docs/brand/icon.png
updated: '2026-11-10'
---
