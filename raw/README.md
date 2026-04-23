# raw/ — source dump zone

Drop anything here. One source, one file. This is the primary-source layer — nothing in here gets rewritten, only summarized and cited from `wiki/`.

## File formats

| Format | Use for |
|---|---|
| `.md` | Web articles (via Obsidian Web Clipper), tweet threads, your own notes |
| `.png` / `.jpg` | Screenshots — put in `../images/` and reference here if needed |
| `.pdf` | Whitepapers, research reports |
| `.txt` | Raw dumps, transcripts |

## Naming

`YYYY-MM-DD--short-slug.ext` is nice but not required. Examples:
- `2025-01-15--farcaster-frames-launch.md`
- `friend-tech-bonding-curve-analysis.md`
- `variant-socialfi-report-q4.pdf`

## When you add something

Tell Claude "compile the new raw files" from the vault root. Claude will read it, update `wiki/SOURCES.md`, and file the content into relevant wiki articles. See `../AGENTS.md` for the full workflow.
