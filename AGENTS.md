# AGENTS.md — Instructions for Claude

You are maintaining a personal research wiki on crypto social. The owner rarely edits by hand — you do. Your job is to compile, organize, cross-link, and keep the wiki internally consistent.

## Scope

- **In scope:** consumer crypto-social apps (Farcaster, Lens, Friend.tech, Pump.fun social, Zora, etc.), underlying social protocols, token/incentive models, mechanism design (bonding curves, points, rev-share, access tokens).
- **Out of scope:** DeFi without a social layer, pure infrastructure (L1/L2) unless it shapes a specific social app, NFT art collections.
- When unsure, file it and flag it in `wiki/INDEX.md` under "scope questions."

## Directory layout

```
raw/        source material — DO NOT rewrite, only summarize/cite
wiki/       compiled articles — YOU own this
images/     image library — reference with ![[filename]]
```

You decide the substructure inside `wiki/`. Reasonable starting buckets: `apps/`, `protocols/`, `concepts/`, `tokenomics/`, `timeline/`, `comparisons/`. Reorganize when the data motivates it.

## Required maintained files

- **`wiki/INDEX.md`** — master table of contents. Every article should be reachable from here within two hops. Keep categories short; if a section has >10 entries, consider splitting.
- **`wiki/SOURCES.md`** — one line per file in `raw/`: filename, one-sentence summary, date added, which wiki articles cite it. This is your index into the raw pile.

## Compile workflow

When the user says "compile" (or adds new files to `raw/`):

1. **Diff** — list `raw/` files not yet in `SOURCES.md`.
2. **Read** — for each new file, read it. For URLs in `.md` files, follow the link if needed for content.
3. **Summarize into `SOURCES.md`** — one line: filename, summary, date.
4. **Extract entities** — apps, protocols, concepts, tokenomics models mentioned.
5. **File into articles** — for each entity:
   - If article exists: update it; cite the new raw source.
   - If not: create `wiki/<category>/<Name>.md` with frontmatter + content.
6. **Cross-link** — use `[[Wikilinks]]` for every mention of another entity you have an article for.
7. **Update `INDEX.md`** — add new articles under the right section.
8. **Report** — one paragraph summary of what changed: files ingested, articles created, articles updated, open questions.

## Article conventions

### Frontmatter (YAML)

Apps:
```yaml
---
type: app
status: live | paused | defunct | upcoming
launched: YYYY-MM
chain: Ethereum | Solana | Base | ...
protocol: [[Farcaster]]   # if app is built on a protocol
url: https://...
tags: [socialfi, speculation, creator-economy]
---
```

Protocols:
```yaml
---
type: protocol
status: live | upcoming
launched: YYYY-MM
chain: ...
url: ...
tags: [social-graph, identity]
---
```

Concepts / tokenomics:
```yaml
---
type: concept | tokenomics
tags: [...]
---
```

### Body structure (flexible, don't over-engineer)

- **One-line definition** at top.
- **Key facts** (launch, team, funding, chain, TVL/DAU if known) as a short list.
- **Mechanism** — how the thing actually works (the interesting part).
- **Notable moments** — launches, peaks, controversies, deprecations, with dates.
- **Related** — `[[wikilinks]]` to connected articles.
- **Sources** — list of `raw/` files cited, as `- [[../raw/filename]] — relevance`.

Omit any section that has no content. Short articles are fine; one-sentence stubs are not — either find more or don't create the article yet.

## Citation rule

Every non-trivial factual claim in a wiki article must trace back to a file in `raw/`. If you can't cite it, either:
- find a source and file it into `raw/` first, or
- don't write the claim.

Speculation is allowed but must be labeled: `> **Thesis:** ...` or `> **Open question:** ...`.

## Cross-linking

- Use Obsidian-style `[[Article Name]]`. If the article doesn't exist yet, still link it — Obsidian shows unresolved links, which surfaces candidate articles to write.
- Every article should link to at least 2 others. Isolated islands signal either bad categorization or a scope edge.

## Images

- Store in `images/` with descriptive filenames (`farcaster-frames-screenshot.png`, not `image1.png`).
- Embed in articles with `![[filename]]`.
- When user pastes a URL article containing images, download them to `images/` and reference locally (network links rot).

## Query mode

When the user asks a research question ("compare X and Y across Z"):

1. Read `INDEX.md` and `SOURCES.md` first to orient.
2. Read relevant articles.
3. Answer with citations — `[[Article]]` for wiki refs, `raw/file.md` for primary sources.
4. If the answer reveals a gap (missing article, outdated data, contradictions), **file the gap** as a TODO in `wiki/INDEX.md` under "open questions" before finishing.
5. If the user asks for a comparison table or matrix, write it to `wiki/comparisons/<topic>.md` and cite it in the response — don't just dump it in chat.

## Lint mode

When the user says "lint" or "health check":

- Articles without sources or with unresolved `[[links]]`.
- Contradictions between articles (same fact stated differently).
- Missing articles that are heavily `[[linked]]` but don't exist.
- Stale data (articles with launch dates >1y old and no updates).
- Unused `raw/` files not cited anywhere.
- Suggest 3–5 article candidates based on recurring themes across raw/ that aren't yet articles.

Report as a checklist. Don't auto-fix unless user says to.

## Anti-patterns

- Don't rewrite or delete `raw/` files. They're primary sources.
- Don't invent data. No placeholder fake facts.
- Don't bloat articles with tutorial-style prose. This is a reference wiki, not a blog.
- Don't create articles for entities mentioned once in passing. Wait for 2+ cites or explicit user request.
- Don't use long marketing quotes from apps' own docs without critical framing.
- Don't add "last updated" timestamps at the bottom of articles — Obsidian shows file mtime; duplication rots.

## When in doubt

Ask the user. Specifically: scope edges, whether to split or merge articles, which category a new entity belongs in. The wiki's value is in good judgment about structure; guessing produces mess.
