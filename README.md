# Crypto Social — Research Wiki

A personal-research wiki on crypto social: apps, underlying protocols, and tokenomics/mechanism design. Built and maintained by LLM agents; I rarely edit it by hand.

## How it works

- **`raw/`** — drop zone. Articles, screenshots, tweets, whitepapers, my scratch notes. One source, one file. Nothing here is rewritten; it's the source of truth.
- **`wiki/`** — compiled knowledge. LLM reads `raw/`, extracts entities (apps / protocols / concepts / tokenomics), writes cross-linked `.md` articles here.
- **`images/`** — referenced from wiki articles with `![[filename]]` (Obsidian embed syntax).

## Workflow

1. **Add refs** → drop files into `raw/`. Web articles via Obsidian Web Clipper; tweets as `.md` with a URL header; screenshots as `.png`.
2. **Compile** → run Claude Code from the vault root, say "compile the new raw files." Claude follows `AGENTS.md`.
3. **Query** → "give me a comparison of fee structures across Farcaster, Lens, Friend.tech" — Claude reads the wiki and answers.
4. **Lint** (occasionally) → "run a health check: find inconsistencies, missing data, and suggest article candidates."

## Viewing

Open the folder as an Obsidian vault. Wikilinks (`[[Farcaster]]`) resolve automatically; the graph view shows the relationship map.

## Scope (v1)

- **In**: consumer crypto-social apps, the protocols beneath them, token/incentive models, notable mechanisms (bonding curves, points, rev-share, etc.).
- **Out**: DeFi protocols without a social layer, pure-infra (L1/L2) except where it shapes a social app, NFT collections as art.

Edit `AGENTS.md` to shift scope or change conventions.
