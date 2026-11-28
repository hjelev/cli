---
name: headquarters
category: Git
short_description: >-
  A CLI dashboard that groups local Git repos in a table view, runs batch
  fetches and safe fast-forward updates, and launches lazygit per repo
description: >-
  - Explicit repositories plus bounded discovery below root directories, with
  include and exclude patterns and clear precedence rules.

  - Status per repository: branch, detached or unborn HEAD, operations in
  progress, staged/modified/deleted/renamed/conflicting/untracked entries,
  upstream state, stash entries, remotes, latest commit, and last fetch time;
  the detail panel lists the most recent commits (three by default) and the
  incoming upstream commits as of the last fetch. - A repository that was never
  fetched or not within seven days is flagged in the table and has a quick
  filter. Stash entries are only reported, as a count and with a quick filter;
  applying or dropping them stays with lazygit.

  - Other local branches that need attention, such as a stale main or a branch
  with unpushed work, shown as a count with details in the side panel; old and
  ignored branches are filtered out, pinned branches always count.

  - Families as a filter or as a collapsible tree, text, family, and state
  filters (family:work, is:dirty, is:behind, …), and sorting, also by health
  with the most urgent repositories on top.

  - Enter opens the selected repository in lazygit, or in the terminal Git
  client configured in [lazygit]; the dashboard refreshes the repository
  afterward.

  - Concurrent fetch of the selected or visible repositories with progress,
  cancellation, retry, and an interactive retry in the terminal for repositories
  that need a passphrase.

  - Safe update after one confirmation that lists the incoming commits of each
  repository: the dashboard fetches first, then fast-forwards only branches that
  can be updated safely, without merge commits, rebases, or stashes, and lists
  every skipped repository with the reason. The operations view then serves as a
  worklist: open blocked repositories in lazygit, see which blockers are
  resolved, and continue.

  - Delete merged local branches across repositories after a preview: only
  branches whose changes are all in the default branch, also after squash and
  rebase merges, and every kept branch is listed with the reason.

  - headquarters status prints the same status, filter results, and health as
  JSON for scripts and status bars, with an exit status for checks such as
  "nothing uncommitted before shutdown". It only reads, unless --fetch is given.

  - Configurable launchers for a shell, an editor, or a file manager.

  - y copies the worktree path, branch name, primary remote URL, or its web URL
  (HTTPS, also for SSH remotes) of the selected repository to the clipboard.

  - lazygit-style panels with titled borders, one column per count (staged,
  modified, untracked, stashed, ahead, behind) plus a State column for
  everything else, per-cell colors, spinners and progress bars, dialogs as
  overlays, and header counters that double as quick filters. Colors, built-in
  theme presets (such as high contrast, Catppuccin, Dracula, and Gruvbox), and
  the symbol set (Unicode, Nerd Font, ASCII) are configurable; NO_COLOR is
  honored.
repository_url: https://github.com/mmo-con/headquarters
author: Markus moll
license: MIT
language: Go
installation:
  - method: script
    command: >-
      curl -fsSL
      https://github.com/mmo-con/headquarters/releases/latest/download/install.sh
      -o install.sh && sh install.sh
platforms:
  - Linux
  - Macos
tags:
  - tui
  - git
media: >-
  https://github.com/mmo-con/headquarters/blob/main/docs/images/headquarters-screenshot.png
logo: https://github.com/mmo-con/headquarters/blob/main/docs/images/headquarters.png
updated: '2026-11-28'
---
