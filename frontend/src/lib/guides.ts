// Hand-curated landing pages built on top of the tools collection:
//   /alternatives/<slug>/  — modern replacements for a classic command or app
//   /collections/<slug>/   — themed roundups that cut across categories
// Tool ids must match files in content/tools/; the build fails on an unknown
// id (see resolveGuideTools) so a deleted listing can't leave a dead card.
// Keep each list at MIN_INDEXABLE_LISTINGS (3) or more so no page is thin.

import type { CollectionEntry } from 'astro:content';

export interface Guide {
	slug: string;
	title: string; // page <h1>, also the base of the <title>
	intro: string; // one or two sentences shown under the heading and used as the meta description
	tools: string[];
}

export interface Alternative extends Guide {
	replaces: string; // the classic command or app, shown as `replaces` in tool pages' SEE ALSO
}

export const ALTERNATIVES: Alternative[] = [
	{
		slug: 'ls',
		replaces: 'ls',
		title: 'Modern alternatives to ls',
		intro: 'Drop-in ls replacements with colors, icons, git status, tree views and human-readable sizes.',
		tools: ['eza', 'lsd', 'lla', 'nat', 'pls', 'logo-ls', 'g', 'nls', 'lstr'],
	},
	{
		slug: 'grep',
		replaces: 'grep',
		title: 'Modern alternatives to grep',
		intro: 'Faster, friendlier ways to search text and code: recursive by default, .gitignore-aware, and some interactive.',
		tools: ['ripgrep', 'ugrep', 'igrep', 'ygrep'],
	},
	{
		slug: 'top',
		replaces: 'top / ps',
		title: 'Modern alternatives to top and ps',
		intro: 'Process and resource monitors with graphs, mouse support and better defaults than the stock top, plus friendlier process listings than ps.',
		tools: ['btop', 'htop', 'gtop', 'procs', 'ctop', 'metropolis', 'bpytop'],
	},
	{
		slug: 'du',
		replaces: 'du / df',
		title: 'Disk usage analyzers: modern alternatives to du and df',
		intro: 'See where your disk space went: visual, sorted and fast disk usage analyzers for the terminal, from interactive TUIs like gdu to one-shot trees like dust.',
		tools: ['dust', 'gdu', 'duf', 'parallel-disk-usage', 'dutree'],
	},
	{
		slug: 'cd',
		replaces: 'cd',
		title: 'Smarter alternatives to cd',
		intro: 'Jump to directories you use often, or navigate interactively, instead of typing full paths.',
		tools: ['zoxide', 'walk', 'broot'],
	},
	{
		slug: 'diff',
		replaces: 'diff',
		title: 'Modern alternatives to diff',
		intro: 'Syntax-highlighted, structural and side-by-side diffs for code, git and config files.',
		tools: ['delta', 'difftastic', 'diffnav', 'dyff'],
	},
	{
		slug: 'ctrl-r',
		replaces: 'Ctrl-R history search',
		title: 'Better shell history than Ctrl-R',
		intro: 'Searchable, synced and context-aware shell history to replace the default reverse search.',
		tools: ['atuin', 'mcfly', 'suvadu', 'fzf', 'flyline'],
	},
	{
		slug: 'ping',
		replaces: 'ping / traceroute',
		title: 'Modern alternatives to ping and traceroute',
		intro: 'Network diagnostics with live latency graphs, per-hop stats and readable output.',
		tools: ['sping', 'ttl', 'netwatch', 'trippy'],
	},
	{
		slug: 'nano',
		replaces: 'nano',
		title: 'Beginner-friendly alternatives to nano',
		intro: 'Terminal editors with familiar shortcuts (Ctrl-S, Ctrl-C), mouse support and syntax highlighting, no modal editing required.',
		tools: ['micro', 'edit', 'fresh', 'pnana', 'ox', 'slap', 'ttt', 'orbiton', 'cleecode', 'kibi'],
	},
	{
		slug: 'vim',
		replaces: 'vim',
		title: 'Modal editors: alternatives to vim',
		intro: 'Modern modal editors for people who like the vim way of editing but want different defaults.',
		tools: ['neovim', 'helix', 'kakoune', 'amp', 'ad', 'kiwi'],
	},
	{
		slug: 'tmux',
		replaces: 'tmux',
		title: 'Alternatives to tmux, including tmux for Windows',
		intro: 'Terminal multiplexers and workspaces: split panes, persistent sessions and layouts, including psmux, a native tmux for Windows PowerShell and cmd.',
		tools: ['zellij', 'byobu', 'psmux'],
	},
	{
		slug: 'postman',
		replaces: 'Postman',
		title: 'Terminal alternatives to Postman',
		intro: 'Build, send and save HTTP requests without leaving the terminal.',
		tools: ['posting', 'atac', 'slumber', 'noodle', 'payk'],
	},
	{
		slug: 'docker-desktop',
		replaces: 'Docker Desktop',
		title: 'Terminal alternatives to Docker Desktop',
		intro: 'Manage containers, images and logs from a TUI instead of a desktop app.',
		tools: ['lazydocker', 'dtop', 'ctop', 'dive'],
	},
	{
		slug: 'excel',
		replaces: 'Excel',
		title: 'TUI CSV viewers and terminal alternatives to Excel',
		intro: 'TUI spreadsheets and CSV viewers: open, sort, filter and query CSV, TSV and XLSX files right in the terminal.',
		tools: ['visidata', 'sc-im', 'tabiew', 'csvlens', 'sheets', 'xleak'],
	},
	{
		slug: 'spotify',
		replaces: 'Spotify app',
		title: 'Spotify clients for the terminal',
		intro: 'Control and stream Spotify from a lightweight terminal UI.',
		tools: ['spotify-player', 'spotify-tui', 'spotatui', 'myx'],
	},
	{
		slug: 'obsidian',
		replaces: 'Obsidian',
		title: 'Terminal alternatives to Obsidian',
		intro: 'Markdown note-taking and knowledge bases that live in the terminal.',
		tools: ['emeraldian', 'ekphos', 'shoin', 'tsuzuri', 'lazymark', 'nb'],
	},
	{
		slug: 'neofetch',
		replaces: 'neofetch',
		title: 'Maintained alternatives to neofetch',
		intro: 'neofetch is archived; these fetch tools show system and repository info at a glance, faster and still maintained.',
		tools: ['fastfetch', 'macchina', 'onefetch'],
	},
	{
		slug: 'wireshark',
		replaces: 'Wireshark',
		title: 'Wireshark TUIs: terminal alternatives to Wireshark',
		intro: 'Capture, inspect and analyze network packets and connections from a TUI instead of a desktop app — works over SSH on headless servers.',
		tools: ['termshark', 'kyanos', 'rustnet'],
	},
	{
		slug: 'vscode',
		replaces: 'VS Code',
		title: 'Terminal IDEs: alternatives to VS Code',
		intro: 'Editors with file trees, tabs, LSP and mouse support that bring an IDE workflow into the terminal.',
		tools: ['termide', 'toast', 'ttt', 'croft', 'cleecode', 'fresh', 'orbiton'],
	},
	{
		slug: 'thunderbird',
		replaces: 'Thunderbird / Outlook',
		title: 'Terminal email clients: alternatives to Thunderbird',
		intro: 'Read, search and send email from a fast, keyboard-driven terminal client.',
		tools: ['aerc', 'neomutt', 'himalaya', 'matcha', 'tidemail'],
	},
	{
		slug: 'tail',
		replaces: 'tail -f / less',
		title: 'Terminal log viewers: better than tail and less',
		intro: 'TUI log viewers that follow, filter and search logs from files, journald and remote hosts with highlighting, timelines and queries.',
		tools: ['lnav', 'lazyjournal', 'nerdlog', 'goaccess'],
	},
];

export const COLLECTIONS: Guide[] = [
	{
		slug: 'modern-unix',
		title: 'Modern Unix: better versions of classic commands',
		intro: 'Faster, friendlier rewrites of the commands you type every day, from cat and ls to grep, du, ps and cd.',
		tools: ['bat', 'eza', 'ripgrep', 'zoxide', 'dust', 'duf', 'procs', 'delta', 'btop', 'hyperfine', 'tldr', 'fzf', 'tokei', 'sping', 'doggo', 'mcfly', 'jq'],
	},
	{
		slug: 'tui-git-clients',
		title: 'TUI git clients',
		intro: 'Stage, commit, branch and browse history from a terminal UI instead of a GUI, plus jjui for Jujutsu (jj) users.',
		tools: ['lazygit', 'gitui', 'gitu', 'grv', 'gitwig', 'jjui', 'forgit', 'diffnav'],
	},
	{
		slug: 'ai-coding-agents',
		title: 'AI coding agents and tools for the terminal',
		intro: 'Coding agents that run in your terminal, plus tools to orchestrate and manage them.',
		tools: ['opencode', 'codex', 'crush', 'herdr', 'backlog-md', 'lazyskills', 'bosun', 'yylo', 'ygrep', 'ycrawl', 'suvadu'],
	},
	{
		slug: 'kubernetes-tuis',
		title: 'Kubernetes and cloud TUIs',
		intro: 'Browse clusters, tail logs and manage cloud resources without a web console.',
		tools: ['k9s', 'kdash', 'sofka', 'k10s', 'cloudlens', 'ytunnel'],
	},
	{
		slug: 'terminal-music-players',
		title: 'Terminal music players',
		intro: 'Local, streaming and radio players with album art, visualizers and keyboard control.',
		tools: ['kew', 'cliamp', 'musikcube', 'rmpc', 'termusic', 'spotify-player', 'spotatui', 'noctavox', 'mocp', 'gtm', 'aethertune', 'lyrtui', 'myx', 'spotify-tui'],
	},
	{
		slug: 'json-csv-data-tools',
		title: 'JSON, CSV and data tools for the terminal',
		intro: 'View, query and transform structured data: JSON processors, CSV viewers and SQL TUIs.',
		tools: ['jq', 'fx', 'jnv', 'visidata', 'xan', 'csvlens', 'tabiew', 'qo', 'harlequin', 'nothing-less', 'dyff', 'pgcli', 'sc-im', 'xleak', 'sheets'],
	},
	{
		slug: 'network-monitoring',
		title: 'Network monitoring in the terminal',
		intro: 'Watch bandwidth, connections, ports and latency live, per interface or per process.',
		tools: ['rustnet', 'netwatch', 'bmon', 'termshark', 'flow', 'portop', 'netop', 'slurm', 'ttl', 'sping', 'yscan', 'shoal', 'lsoff', 'trippy', 'kyanos', 'whosthere'],
	},
	{
		slug: 'ssh-tools',
		title: 'SSH tools and connection managers',
		intro: 'Manage SSH hosts, mount remote filesystems and run commands across servers.',
		tools: ['sshs', 'dssh', 'ctty', 'sshfs', 'sake', 'snips-sh', 'lazyssh'],
	},
	{
		slug: 'markdown-tools',
		title: 'Markdown tools for the terminal',
		intro: 'Render, write, present and convert Markdown without leaving the shell.',
		tools: ['glow', 'slides', 'ekphos', 'emeraldian', 'shoin', 'tsuzuri', 'lazymark', 'rayomd', 'nb'],
	},
	{
		slug: 'terminal-eye-candy',
		title: 'Terminal eye candy',
		intro: 'Weather, world maps, animated monitors and cinematic git replays: tools that make the terminal fun to look at.',
		tools: ['weathr', 'mapscii', 'terrascope', 'ditto', 'gitlogue', 'metropolis', 'fastfetch', 'linecast', 'rust-stakeholder'],
	},
	{
		slug: 'linux-desktop-tuis',
		title: 'TUIs for the Linux desktop',
		intro: 'Manage Wi-Fi, audio, USB devices, fonts and screen zoom on a Linux desktop, and find out why it crashed.',
		tools: ['impala', 'wlctl', 'wiremix', 'usbtree', 'fnt', 'miru', 'whyd'],
	},
	{
		slug: 'self-hosting-homelab',
		title: 'Self-hosting and homelab tools',
		intro: 'Deploy to your own servers, expose services, watch containers and logs, and sync storage from the terminal.',
		tools: ['sidekick', 'ytunnel', 'lazydocker', 'dtop', 'nerdlog', 'rclone', 'cliflux', 'lyrtui', 'process-compose'],
	},
	{
		slug: 'personal-organizers',
		title: 'Personal organizers for the terminal',
		intro: 'Calendars, todo lists, time tracking, budgets and notes that stay out of the way.',
		tools: ['chroncal', 'tuxedo', 'zeit', 'countdown', 'bagels', 'lazymark', 'nb'],
	},
	{
		slug: 'github-gitlab-cli',
		title: 'GitHub and GitLab from the terminal',
		intro: 'Work with pull requests, issues, Actions and repositories on GitHub and GitLab without opening a browser.',
		tools: ['gh', 'glab', 'gh-enhance', 'ghgrab', 'drydock'],
	},
	{
		slug: 'terminal-text-editors',
		title: 'Terminal text editors',
		intro: 'Every text editor in the index that runs in a terminal: modal editors like vim and helix, nano-style editors like micro, and full TUI IDEs like croft and fresh.',
		tools: ['neovim', 'vim', 'helix', 'micro', 'edit', 'emacs', 'kakoune', 'fresh', 'ox', 'croft', 'kibi', 'amp', 'orbiton', 'pnana', 'slap', 'ttt', 'cleecode', 'termide', 'toast', 'kiwi', 'ad'],
	},
	{
		slug: 'windows-cli-tools',
		title: 'CLI and TUI tools for Windows',
		intro: 'Terminal tools that run natively on Windows and install with winget, scoop or choco — for PowerShell, Windows Terminal and cmd, no WSL needed.',
		tools: ['psmux', 'cloc', 'dust', 'bat', 'fzf', 'ripgrep', 'zoxide', 'eza', 'delta', 'micro', 'edit', 'helix', 'glow', 'lazygit', 'gh', 'glab', 'jjui', 'onefetch', 'yazi', 'superfile', 'mpv', 'csvlens', 'hyperfine', 'fastfetch', 'k9s', 'lazydocker'],
	},
];

type Tool = CollectionEntry<'tools'>;

// Most-starred first, the order people expect from a "best of" page.
export function resolveGuideTools(guide: Guide, allTools: Tool[]): Tool[] {
	const byId = new Map(allTools.map((tool) => [tool.id, tool]));
	const missing = guide.tools.filter((id) => !byId.has(id));
	if (missing.length > 0) {
		throw new Error(`lib/guides.ts: "${guide.slug}" lists unknown tool id(s): ${missing.join(', ')}`);
	}
	return guide.tools.map((id) => byId.get(id)!).sort((a, b) => (b.data.repo_stars ?? -1) - (a.data.repo_stars ?? -1));
}

// Guides a tool appears in, for the SEE ALSO line on its page.
export function guidesForTool(toolId: string) {
	return {
		alternatives: ALTERNATIVES.filter((guide) => guide.tools.includes(toolId)),
		collections: COLLECTIONS.filter((guide) => guide.tools.includes(toolId)),
	};
}
