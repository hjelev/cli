// Hand-written search snippets for the tool pages that get the most search
// impressions (see Search Console → Performance → Pages), where the generated
// title/description undersell the tool or miss what people search for.
//   tagline     — replaces the generated part after "<name> — " in the <title>
//                 (keep it under ~60 chars minus the name)
//   description — replaces the whole generated meta description (≤ 160 chars)
// Keyed by tool id (the file name in content/tools/).

export interface ToolSeo {
	tagline?: string;
	description?: string;
}

export const TOOL_SEO: Record<string, ToolSeo> = {
	psmux: {
		tagline: 'tmux for Windows, PowerShell and cmd.exe',
		description:
			'psmux is a native tmux for Windows: split panes, sessions and tmux keybindings in PowerShell, Windows Terminal and cmd. Install: winget install psmux.',
	},
	opencode: {
		tagline: 'Open-source AI coding agent for the terminal',
		description:
			'OpenCode is an open-source AI coding agent for your terminal: plans, explores and edits code with any model. Install: brew install anomalyco/tap/opencode.',
	},
	cloc: {
		tagline: 'Count lines of code (Linux, macOS, Windows)',
		description:
			'cloc counts blank, comment and code lines in hundreds of languages. Install: brew install cloc, winget install AlDanial.Cloc or scoop install cloc.',
	},
	gdu: {
		tagline: 'Fast disk usage analyzer TUI in Go',
		description:
			'gdu is a fast, interactive disk usage analyzer for the terminal, scanning SSDs in parallel. A visual du alternative. Install: brew install gdu.',
	},
	jjui: {
		tagline: 'TUI for Jujutsu (jj) version control',
		description:
			'jjui is a terminal UI for Jujutsu (jj): browse the log, rebase, squash and split changes interactively. Install: brew install jjui, winget or go.',
	},
	termshark: {
		tagline: 'Wireshark TUI for the terminal',
		description:
			'termshark is a terminal UI for tshark: Wireshark-style packet capture and analysis in any terminal or over SSH. Install: brew install termshark.',
	},
	croft: {
		tagline: 'VS Code-style TUI editor and IDE in Rust',
		description:
			'croft is a VS Code-style three-pane editor and IDE that runs entirely in your terminal, shipped as a single static Rust binary. Install with cargo.',
	},
	wlctl: {
		tagline: 'Wi-Fi, Ethernet & VPN TUI for NetworkManager',
		description:
			'wlctl is a TUI for managing Wi-Fi, Ethernet and VPN connections through NetworkManager on Linux — impala-style UX, no iwd needed. Install: cargo install wlctl.',
	},
	rmpc: {
		tagline: 'Modern terminal MPD client with album art',
		description:
			'rmpc is a modern, configurable terminal MPD client in Rust with album art via terminal image protocols. Install: pacman -S rmpc or cargo binstall rmpc.',
	},
	cliamp: {
		tagline: 'Winamp-style terminal music player',
		description:
			'cliamp is a retro, Winamp-inspired music player for the terminal, written in Go, for Linux, macOS and Windows. Install: brew install bjarneo/cliamp/cliamp.',
	},
	glab: {
		tagline: 'Official GitLab CLI for the terminal',
		description:
			'glab is the official GitLab CLI: issues, merge requests, pipelines and releases from your terminal. Install: brew install glab or winget install glab.glab.',
	},
	onefetch: {
		tagline: 'Git repository summary in your terminal',
		description:
			'onefetch shows a neofetch-style summary of a Git repo: languages, authors, commits and lines of code. Install: brew install onefetch or winget install onefetch.',
	},
	ox: {
		tagline: 'Simple but flexible terminal text editor',
		description:
			'Ox is a simple but flexible terminal text editor in Rust, for anything from prose to code, on Linux, macOS and Windows. Install: brew install ox.',
	},
	dust: {
		tagline: 'A more intuitive du for disk usage, in Rust',
		description:
			'dust is a more intuitive du: see what is using disk space as a sorted tree with bars. Install: brew install dust, scoop install dust or cargo install du-dust.',
	},
	glow: {
		tagline: 'Render Markdown in the terminal',
		description:
			'Glow renders Markdown in the terminal: read READMEs and notes, or browse docs in a TUI. Install: brew install glow or winget install charmbracelet.glow.',
	},
};
