---
type: synthesis
author: "[@alexmasmej](https://x.com/alexmasmej)"
editor: Claude
version: v2
last_updated: 2026-04-23
status: public release
---

# The consumer-crypto-social idea maze

_A synthesis of the design space from 2019 to 2026, by [@alexmasmej](https://x.com/alexmasmej). Edited and compiled with Claude from ~27 primary-source files._

## What this is

This document maps the "idea maze" of consumer-crypto-social — in Balaji Srinivasan's sense: a graph of design choices, where the answer comes partly from walking paths others already walked (and noting where they ended up). It covers every notable attempt in the space from the 2019 whitepaper era through the late-2025 → early-2026 great unwind, extracting six design axes, a timeline, what worked, what didn't, and sixteen durable lessons.

The author shipped nine apps in this space between 2021 and Q1 2026 (Showtime, Drakula, 10K, CTA.fun, Breakout v1, Breakout v2, Captcha, and two stealth launches). Most of the post-mortems are first-person. The synthesis draws on that direct lineage plus primary-source research on every other major attempt in the category.

**How to read this:**
- Every claim traces to a file in `raw/`. Treat the raw files as evidence; this document is interpretation.
- It's a living synthesis. Version bumps happen when conclusions materially change — lessons are hypotheses, not laws, and get demoted when an app falsifies them.

## The six axes of the maze

Most consumer-crypto-social products vary along six dimensions. Mapping each app on each axis reveals the empty regions of the maze.

### 1. Identity coupling — how tightly is the token tied to a real person's identity?

Apps often span multiple rows. [[Zora]] appears in three (trends / content / creators); [[CTA.fun]] is decoupled because the winning reply earns the token, not the tagger.

| Coupling | Examples |
|---|---|
| Memes | [[pump.fun]], [[rug.fun]], [[Zora]] trends, [[CTA.fun]] |
| Content | [[Zora]] content coins, [[Rodeo]] mints, [[Showtime (tryshowtime.com)]] |
| Creator (with consent) | [[friend.tech]], [[$ALEX token]], [[Drakula (drakula.app)]], [[Breakout v1]], [[Believe (believe.app)]], [[Zora]] creator coins, [[Scoop]] (Farcaster creator profiles), [[Clout (clout.me)]] (Pasternak self-tokenized) |
| Creator (without consent) | [[BitClout]] (2021), [[Bags (bags.fm)]] (2026), [[2100]] (paper, 2019), [[Believe v2]] (sentiment markets on named individuals — Pasternak, Bier, etc.), [[Clout (clout.me)]] (also pre-populated coins for famous tech-Twitter profiles like Nikita Bier) |

### 2. Earning topology — who captures value?

Most apps pay the launcher/creator in some form — the rows below capture the _additional_ captures that define each app's character. Apps listed in a non-launcher row almost always _also_ reward the launcher.

| Who earns | Examples |
|---|---|
| Creator launches and earns | [[pump.fun]], [[Believe (believe.app)]], [[Rodeo]], [[mint.fun]], [[$ALEX token]], [[friend.tech]], [[Drakula (drakula.app)]], [[Giggles]], [[Frenzy (frenzy.fun)]], [[Zora]] (content + creator coins both pay the launching creator), [[Clout (clout.me)]] |
| Referrer earns | [[Rodeo]] (25% cut on feed-driven mints — the feed _is_ the referral), [[mint.fun]] (indirectly, via the **Boost** ecosystem — creators pay to get ranked higher) |
| Creator earns without consent, must claim | [[BitClout]] (2021 — pre-populated creator coins for the top 15k Twitter accounts; the person had to claim to collect), [[Bags (bags.fm)]] (2026 — fees attributed to the tagged X handle; the beg-to-claim loop is what actually works, not the originally-promised top-100-holder dividends) |
| Consumers earn | [[10K.world]] (watch-to-earn), [[CTA.fun]] (reply-to-earn — pre-mined $CTA on Solana; most-liked reply wins) |
| LP earns | [[Zora]] (1% of 3% fee) |

### 3. Liquidity structure — how is the market made?

| Structure | Examples |
|---|---|
| Bonding curves + AMM | [[friend.tech]], [[pump.fun]], [[Believe (believe.app)]], [[BitClout]], [[Giggles]], [[Frenzy (frenzy.fun)]] (wraps [[pump.fun]] memecoins on Solana — curated UI layer, same underlying curve), [[Scoop]] (Farcaster creator profiles on a bonding curve), [[Zora]], [[rug.fun]], [[Clout (clout.me)]] (Solana / Meteora). **Chain and venue differ but the mechanism is the same class** — a mathematical curve prices the asset. |
| NFT mints (ERC-1155, one-at-a-time) | [[Rodeo]], [[mint.fun]] |
| Coin-trend wrapping underlying assets | [[meme.market]] (NFTs bundled under a coin "trend"), [[Zora]] trends |
| Fixed supply with drip emission | [[2100]] (2100/account), [[$ALEX token]] |
| Prediction markets (LMSR / CPMM) | [[Breakout v2]], [[context.markets]] |

### 4. Bootstrap strategy — how do initial users get there?

| Strategy | Examples |
|---|---|
| X / Crypto Twitter | [[Believe (believe.app)]] (launcher tweets _is_ the launch), [[Bags (bags.fm)]] (anyone tweets-to-launch), [[CTA.fun]] (tag a post/thread to trigger a $CTA bounty contest), [[Zora]] (creators post coins on X), [[friend.tech]] (CT invite-code drops + key-price tweets), [[BitClout]] (pre-populated top-15k Twitter accounts; launched on CT), [[$ALEX token]] (launched through CT announcements and discussion), [[Clout (clout.me)]] (CT GTM + pre-populated coins for famous tech-Twitter profiles). Covers both mention-mechanic launches and apps that used X / crypto-Twitter as their primary discovery surface. |
| Ride [[Farcaster]] | [[Drakula (drakula.app)]] (video + DEGEN-curve), [[Scoop]] (bonding-curve trading of Farcaster creator profiles — similar to Drakula but with no video; creator profiles were the content unit. Made by the same team that later shipped [[Frenzy (frenzy.fun)]]), [[Rodeo]] (Farcaster-native creator + collector graph) |
| Ride TikTok | [[Giggles]] (GTM + content source), [[Frenzy (frenzy.fun)]] (GTM + trend source). **Emerging pattern:** TikTok is increasingly the GTM surface for crypto-consumer apps in 2026, where X was dominant in 2024–2025. |
| Invite codes with scarcity | [[friend.tech]], [[Breakout v1]], [[Foundation (NFT marketplace)]] (invites were for early creators), [[Farcaster]] (early access required DMing [[Dan Romero|@dwr]] on X for a personal invite) |
| Pre-populate accounts for famous targets (without consent) | [[BitClout]] top 15k, [[Bags (bags.fm)]] Twitter handles, [[Clout (clout.me)]] (famous tech-Twitter profiles like Nikita Bier) |
| Self-launch (founder tokenizes themselves) | [[$ALEX token]] |

### 5. Content surface — what's the unit of content?

| Unit | Examples |
|---|---|
| Text | [[Farcaster]] casts |
| Video | [[Drakula (drakula.app)]], [[10K.world]], [[Giggles]] |
| NFT art / mint | [[Showtime (tryshowtime.com)]], [[Rodeo]], [[Zora]] app, [[Context (social feed)]] (social feed of NFTs) |
| Trend signals | [[Frenzy (frenzy.fun)]], [[Giggles]], [[meme.market]] (NFTs bundled under coin trends), [[Zora]] trends |
| Outcomes / predictions | [[context.markets]], [[Breakout v2]], [[Believe v2]] (sentiment / popularity trajectories of named individuals — "outcome-less" prediction markets) |
| Meme (coin-as-meme, detachable from identity even if tagged to a handle) | [[pump.fun]], [[Believe (believe.app)]], [[Bags (bags.fm)]] |
| Identity itself | [[BitClout]], [[friend.tech]], [[$ALEX token]], [[Scoop]] (Farcaster creator profiles), [[Clout (clout.me)]] (pure identity-as-coin, no other content) |
| Trader actions / portfolios | [[Fomo (fomo.family)]] |

### 6. User action — what do users actually DO?

| Action | Examples |
|---|---|
| Trade creators | [[Believe (believe.app)]], [[$ALEX token]], [[Drakula (drakula.app)]], [[Scoop]], [[Clout (clout.me)]] |
| Trade memes | [[pump.fun]], [[Bags (bags.fm)]], [[Frenzy (frenzy.fun)]], [[Giggles]] |
| Collect | [[Rodeo]], [[Zora]] (pre-coins era — gallery / collection UX), [[Showtime (tryshowtime.com)]] |
| Speculate on someone else's attention | [[Breakout v2]], [[Believe v2]] |
| Follow / copy traders | [[Fomo (fomo.family)]] |
| Post (and pay for the privilege) | [[Captcha (captcha.social)]] (buyback-to-post) |
| Earn for consuming | [[10K.world]] |
| Tip / engage | DEGEN on [[Farcaster]], [[CTA.fun]] (replies win) |
| Vote on another human's life | [[$ALEX token]] Control My Life |

---

## The timeline, walked

### 2019 — whitepaper era
- **[[2100]]** (Citizen Hex Inc.): lock DAI → mint fixed-supply username tokens. Whitepaper-complete, prior-art-aware (cited HSX, Stolen!, Augur), thoughtful design — **never reached mainnet.** Cycle-timing failure: consumer appetite for tokenized-Twitter wasn't there in 2019.

### 2020–2021 — handmade + mass-market era
- **[[$ALEX token]]** (April 2020): the author's own experiment — $20K in 123 hours from 29 participants, 15% of income for 3y capped at $100K, DAI quarterly. 200 holders on Uniswap at peak, $330K market cap. The handmade prototype of nearly every mechanic later platformized (personal tokens, ISAs, whale-gated communities). The contract is still live on mainnet but the project is **dormant** — volume only spikes around new launches by the author. Long-lived ≠ retained.
- **[[BitClout]]** (March 2021): own-chain L1, bonding-curve creator coins, pre-populated with top 15k Twitter accounts. Peaked at ~$1B implied valuation. Class-action-sued, pivoted to DeSo, faded.
- **[[Showtime (tryshowtime.com)]]** (author's app #1, **original launch 2021–2023**): NFT-gallery consumption UX, Instagram-style feed for browsing NFTs. Consumption-first, non-transactional. The NFT market collapsed underneath it; no monetization path without transactions.

### 2023 — Base L2 revelation
- **[[friend.tech]]** (August 2023): bonding-curve keys + invite codes + Base L2. Hit $50M TVL early. **Proved the mechanic to normies** and made Base a consumer chain. Died by mid-2024 — reflexivity without retention.

### 2024 — Solana launchpad era begins + aggregation consolidation
- **[[pump.fun]]** (Jan 2024): Solana memecoins, x·y=k curve, originally **$69k graduation → Raydium** (the move that **ended the pure-bonding-curve era**; pump.fun has since moved off the Raydium graduation). Combined with an incredible brand, instantly-understandable UI, and trivially-easy create-a-coin UX, it became the most revenue-generative crypto protocol of 2024.
- **[[mint.fun]]** acquired by [[Zora]] — discovery layer folds into upstream protocol.
- **[[Rodeo]]** (2024): Base NFT mints, 50/25/25 split (creator / influencer / platform), curator-driven feed. The **closed-loop flywheel**: most items in a user's feed came _from referrers_, so any purchase from the feed fed value back to the curator who surfaced it — curators were incentivized to keep surfacing, buyers were constantly buying curator-surfaced items, creators got paid via the base split. The failure mode was the **transaction model**: every mint was a sub-$1 microtransaction, which is the worst-of-both-worlds between Farcaster-style free tapping (too much friction to compete) and Solana-style variable-amount coin buys (not enough volume to compete on speculation).
- **[[Drakula (drakula.app)]]** (author's app #2, **2024**): video + DEGEN-denominated bonding curve on Farcaster. Curve reflexively peaked then collapsed; the Farcaster ecosystem faded in the same window.
- **[[Clout (clout.me)]]** (late 2024, Solana / Meteora): the **earliest** of the post-friend.tech creator-coin attempts. Trade creator identity itself as the only content unit — nothing else. Founder Ben Pasternak self-tokenized via a **capped 8K presale to 100 participants** that 100x'd for early buyers. **GTM was X / crypto-Twitter**, with the platform also pre-populating coins for **famous tech-Twitter profiles like Nikita Bier** (without consent). Flopped after a massive pump-and-dump on Pasternak's own coin. Pasternak then evolved the project into [[Believe (believe.app)]] v1 (and later targeted the same Bier-class non-CT figures again in [[Believe v2]]'s sentiment markets — the Bier thread runs the whole Pasternak arc). Lesson: SOL/Meteora curves can pump harder than Base/friend.tech, but without utility on top of the coin even the bigger pump doesn't translate to retention.

### 2025 — flywheel era
- **[[Zora]]** three-coin flywheel ships; ZORA token launches April 23, 2025. $353M Q2 volume, $27M to creators, 179k creators. What actually made Zora work was the **Instagram-like mobile app wrapping a liquidity flywheel** — content coins ↔ creator coins ↔ ZORA — with X/Twitter as the out-of-app discovery surface. **ZORA coin reached ~$1B market cap in mid-2025** at the peak of the creator-coin wave. Base App integration **July 17** bundled Farcaster's graph + Zora's coins into Coinbase wallet; it **was subsequently shut down** and did not meaningfully help. Reflexivity has since faded; a **recent "trends" launch** has not reversed the fade — Zora is currently stagnant.
- **[[Believe (believe.app)]]** (May 2025 peak): X-mention launches. Collapsed "launch" and "go viral" into one tweet. LAUNCHCOIN hit $200M+.
- **[[10K.world]]** (author's app #3, **H1 2025**): watch-to-earn attention-mining. Selected for sybil rings and farmers, not genuine viewers.
- **[[CTA.fun]]** (author's app #4, **H2 2025**): pre-mined $CTA bounty on Solana; tagging a post/thread triggered a contest, most-liked reply earned the payout. Farmed by humans; KOLs refused to tag because of shill-game stigma.
- **[[Breakout v1]] / Breakout Berkeley** (author's app #5, **H2 2025**): college-gated creator coins. Berkeley-only, invite-only, ~15 users, never publicly announced. Killed because memecoins beat "student-memecoin" on every open-speculation dimension.
- **[[Fomo (fomo.family)]]** (started 2025) — **social trading** app: easy-to-use cross-chain wallet with a built-in social graph of **traders, not content creators**. The cleanest commercial success in consumer-crypto-social of the 2025–2026 era; doing **$15M run rate** as of 2026-04. Proves that the surviving shape of "social" in crypto is **social-trading** (social graph _around_ traders), not creator-content graphs.

### Late 2025 → early 2026 — the great unwind

Late 2025 through early 2026 is a **category-level inflection** in consumer-crypto-social. A large share of the 2021–2025 fragmentation-era products either shut down, were acquired, paused, or faded to near-dormant. The survivor set is much smaller than the 2024–2025 peak.

**Shut down / paused in this window:**
- **[[Lens]]** — shut down **late 2025, the same week as Farcaster's Neynar event** — part of the first concentrated wave of the great unwind. (The other serious protocol-level-social attempt besides Farcaster; its exit reframes L9's "protocol-level winners" picture.)
- **[[Foundation Labs]]** — entire stack shut down (Rodeo, Foundation, Aura). A **Blackdove sale was attempted and failed**; Foundation Labs simply wound down rather than finding a home for its products.
- **[[Context (the team/company)]]** — entire arc shut down (Context gallery, context.markets, rug.fun, meme.market) in Q1 2026. mint.fun stays at Zora (the only clean commercial exit in the arc).
- **[[Believe (believe.app)]]** — essentially **paused** after Believe v2 (sentiment markets) failed; v1's LAUNCHCOIN momentum has faded.
- **Author's portfolio (2021–Q1 2026):** Showtime (#1, 2021–2023), Drakula (#2, 2024), 10K (#3, H1 2025), CTA.fun (#4, H2 2025), Breakout v1 / Berkeley (#5, H2 2025), Breakout v2 / @breakoutapp (#6, Jan–Mar 2026), **Captcha (#8, Jan–Mar 2026 — currently live)**, and **one stealth app (#9, Jan–Mar 2026, killed without public naming)**. Apps #6, #8, and #9 all shipped in the same Jan–Mar 2026 window on an AI-native build stack, which made iteration cheap enough to treat each as a disposable experiment. **Only Captcha remains live** — with thin retention (a few agent hobbyists + farmers). "Business of hits, not sunk-cost coping."

**Acquired / reframed in this window:**
- **[[Farcaster]] → [[Neynar]]** (late 2025 / early 2026, same week as Lens's shutdown). The acquisition happened but has **flopped** — the widely-reported ~$1B figure was not the actual deal price, and post-deal consumer momentum has stalled. Current state (as of 2026-04): **stagnating, not dead** — developer-centric refocus hasn't produced consumer pull; graph-level momentum has stalled; no acceleration signal. Protocol still alive, consumer execution has faded.

**Still live, still shipping in 2026:**
- **[[Bags (bags.fm)]]** productizes BitClout's "tokenize-without-consent" pattern, but as **third-party-initiated** memecoins tied to X handles (softening the social-license posture vs BitClout's platform-initiated tokenization). Attach a coin to any X handle, fees accrue to the tagged creator pending claim — the beg-to-claim loop is the live retention mechanic; the originally-promised top-100-holder dividends did not work. AI projects become prime targets. $4M hackathon announced. **Volatile but overall big traction**; no legal problems as of 2026-04.
- **[[Frenzy (frenzy.fun)]]** (Solana, iOS app) — trend-trading on TikTok virality; each "trend" is a [[pump.fun]] memecoin under the hood. Frenzy's edge is the **curation layer**: some trend coins are issued by Frenzy itself, others are promoted from organic pump.fun winners. Users can submit trend proposals in-app, but listing is gated. Framed as "TikTok trends without launchpad scams" — the scam resistance comes from curation, not from a different liquidity primitive. **TikTok is GTM.**
- **[[Giggles]]**: Justin Jin, 19, raises $1.2M from 1kx (April 2026). Video + trend signals on **TikTok** graph (GTM + content source), bonding-curve liquidity. Not a prediction market despite some early framing.
- **[[Captcha (captcha.social)]]** (author's app #8, **Jan–Mar 2026**, currently live): buyback-to-post mechanic, mobile + web + agent API. Swap migration shipped 2026-03-19. Novelty-driven reflexivity has faded; **active retention is down to a few agent hobbyists and farmers**. Launching a coin subjected Captcha to the same post-novelty reflexivity curve every other coin-based app has faced; the agentic cohort didn't grow into the retention engine it might have been.
- **[[Fomo (fomo.family)]]** (started 2025, crushing it through 2026) — **the commercial standout of the post-unwind era.** Cross-chain wallet + built-in trader-follow social graph; **$15M run rate** as of 2026-04. Not a launchpad, not a prediction market, not a creator-coin platform — a **social-trading wallet** where the graph is traders (not content creators) and the social primitive surfaces trading activity. Operationalizes the fact that crypto's actual influencer class is traders.

**Net read of the unwind:** the fragmentation era of 2021–2025 is over. The smaller survivor set: **Fomo** (the post-unwind commercial standout, $15M run rate), **pump.fun**, **Bags** (volatile but high traction), **Frenzy**, **Giggles**, **Zora** (faded; recent trends launch has not reversed the fade), **Captcha** (thin retention), and the **Farcaster protocol** itself. Whether this is the **end** of the fragmentation era (and a new consolidation around a few durable survivors) or a **pause** before the next primitive emerges is the single most load-bearing open question for 2026–2027.

---

## What worked (at least in a window)

1. **pump.fun — brand + UX + graduation** — four compounding factors, not just a clever curve: (1) **incredible brand** that became synonymous with the category; (2) **instantly-understandable UI** — a first-time user grasps what the app does and why to use it within seconds; (3) **trivially easy "create a coin" UX** that collapsed the onboarding friction memecoin launching used to carry; (4) **pioneered the $69k graduation** from bonding curve to an external AMM (originally Raydium), which **ended the pure-bonding-curve era** — no serious launchpad after pump.fun tried to survive on a curve alone (compare friend.tech, BitClout). pump.fun has since moved off the Raydium graduation, but the precedent held. Combined with Solana's speed + low fees, this made pump.fun the most revenue-generative crypto protocol of 2024.
2. **friend.tech's bonding curve + invite code scarcity + Base L2** — peaked hard; the **mechanic proof** is what worked, not the gated-chat product, which failed to retain users.
3. **Zora's three-coin flywheel in an Instagram-like mobile app** — content coins ↔ creator coins ↔ ZORA, compounding inside a consumer-app UX, with X as the out-of-app discovery surface. This — not the Base App wallet integration (which shipped July 2025, was later shut down, and did not help) — drove Q2 2025's $353M. Reflexivity has since faded.
4. **Believe's X-mention as launch surface** — collapsed two steps (launch somewhere + promote on X) into one tweet.
5. **mint.fun's aggregation UX** — the only clean commercial exit in [[Context (the team/company)]]'s arc. [[Zora]] acquired it for the **tech**: mint.fun was generating meaningful referral fees into Zora, and owning the aggregator directly was more valuable than paying it out.
6. **Farcaster as protocol** — 250k MAU and a Neynar acquisition in Jan 2026 (the widely-cited ~$1B figure was not the actual deal price). Protocol-level thinking did survive the app-level noise in the sense that there's still a Farcaster to acquire, but the acquisition itself has flopped post-close — no consumer acceleration, stalled momentum. Credit the protocol primitive, not the deal outcome.
7. **$ALEX as prototype, not as retention proof** — the 2020 handmade experiment previewed almost every SocialFi mechanic later platformized (personal token, ISA, community-gating on holdings, whale-exclusive Telegram). The contract is still on mainnet, but the project is **dormant**; volume only spikes around the author's new launches. The value here is archaeological — it showed what would work at platform scale — not that a personal-token-around-one-human retains over years.
8. **Rodeo's closed-loop referral economy** — the 25% referrer cut wasn't just a kickback; it was structural. The feed was curator-surfaced, so most buys on the feed routed value back to the person who put the item there. Curators kept curating because every feed-driven sale paid them, creating a genuine closed-loop economy (curators → feed → buyers → curators). Limiting factor below — but this is the cleanest operationalization of the curator-economy thesis in the wiki.
9. **Bags' coercive-claim mechanic** — ethically gray, commercially hot. BitClout 2021 re-productized with TikTok/AI surface area.
10. **[[Fomo (fomo.family)]] — social trading around traders, not content creators** — cross-chain wallet + trader-follow graph; $15M run rate as of 2026-04. The cleanest commercial success in consumer-crypto-social of the 2025–2026 era and the counter-example to "crypto social failed" — what works is social-graph-around-traders, not social-graph-around-content-creators. See L12.
11. **[[Drakula (drakula.app)]] — pioneered GTM flywheels via ecosystem-token-denominated curves** — by denominating its creator-coin bonding curves in **DEGEN** (Farcaster's ecosystem token) instead of ETH or a stable, Drakula made every coin purchase a DEGEN purchase, and every DEGEN-holder a Drakula stakeholder. The result was a tight loop where Drakula's user growth fed DEGEN demand and DEGEN holders had a direct interest in Drakula's success — a real **GTM flywheel** with the host social graph (Farcaster), not just distribution-on-top-of-it. The product itself didn't retain (see "What didn't work"), but the mechanic — denominate in your host ecosystem's social token to align growth incentives — is the template. **[[Zora]] is the direct descendant**, generalizing the idea into a **three-coin flywheel** that runs both ways around creators: content ↔ creator (each post pumps the creator coin and vice versa) and creator ↔ ZORA (creator coin success pumps the platform token and vice versa). Drakula did the one-tier version on Farcaster; Zora did the three-tier version with its own ecosystem token.

## What didn't work (and why)

- **[[2100]]** — cycle timing. Right mechanic, wrong year. (2019 < 2021 < 2023 consumer appetite.)
- **[[friend.tech]]** — bonding-curve reflexivity without retention. Keys gave access to chat; chat wasn't compelling enough to justify post-hype key prices. Exit-driven users left.
- **[[BitClout]]** — the usual retrospective cites the class action, but the substance is broader: **bonding-curve reflexivity + consent-less markets started by the platform itself** was too socially-bold for 2021. People reacted to the audacity of an L1 pre-populating 15k real-person tokens without asking. Bags (2026) addresses this specific weakness by making a **third party** tag-and-launch, which softens the posture from "platform tokenizes the subject" to "someone else tokenized the subject." The legal case was a lagging indicator; the social-license problem was primary. Own-chain friction + BTC → CLOUT bridge compounded it, but wouldn't have sunk a socially-acceptable product.
- **[[Showtime (tryshowtime.com)]]** — gallery-style consumption UX was ahead of its time, but the underlying **NFT market collapsed** and there was no transaction-monetization path underneath; better-UX-on-a-dying-market is still a dying market.
- **[[Drakula (drakula.app)]]** — DEGEN-denominated bonding curve **reflexively peaked then failed to retain**; the surrounding [[Farcaster]] ecosystem also faded in the same window, so even curve-reflexivity-survivors had nowhere to route attention. Double-faded: app + graph.
- **[[10K.world]]** — watch-to-earn attracted **sybil rings and reward farmers**, not genuinely interested viewers. Any attention-token with pure-$-reward per action reliably selects for farmers over audiences; no filter held.
- **[[CTA.fun]]** (Solana) — mechanism: **pre-mined $CTA bounty pool**, anyone (OP or not) could tag a post/thread, and after a window the **most-liked reply won $CTA**. Failed on two joined fronts. (1) The reply game was **farmed by humans** (not bots — humans strategically optimizing for likes on reply threads); the pre-mined bounty shape selected for farmers just like pure-$-reward watch-to-earn does. (2) **Creators saw no upside and the stigma of "tagging into some farm shill game" was too high** — KOLs wouldn't trigger contests because doing so associated them with the farm-game aesthetic, and without KOL-originated tags the contests didn't reach the intended audience. Correct primitive (pay winners of attention contests), wrong trigger design (the triggering act itself cost the triggerer reputation).
- **[[Breakout v1]]** — launched Berkeley-only, invite-only, **~15 users, never publicly announced**; no second campus. The kill decision came from a fork in the analysis: (a) if the students weren't famous, no speculator interest; (b) if they were famous, **backers preferred to invest in their underlying project** because memecoins beat "student-memecoin" on any contested open-speculation field. The only remaining path was **project coins** (tokenize the student's actual venture), but project coins are less sexy than memecoins and require more legal work, so the team declined to build that direction. Generalizable lesson: demographic-gated creator coins lose to the memecoin gravity well on every dimension that matters to retail speculators (sexiness, regulatory lightness, virality). Reviving the thesis requires coupling demographic gating with something memecoins can't replicate.
- **[[Believe v2]]** (sentiment markets) — pivot from Believe v1's X-mention launchpad to **outcome-less prediction markets** on the popularity trajectory of named non-CT figures (Ben Pasternak, Nikita Bier, etc.). Goal was to **capture audience outside of CT**. Failed for the same structural reason as Breakout v2: popularity is a trend, not a moment; the escape-CT ambition was orthogonal to — and couldn't rescue — a trend-shaped market structure. Reinforces L6.
- **One stealth app (author's #9, Jan–Mar 2026)** — shipped and killed without public naming, part of the rapid Q1-2026 shipping cadence on the AI-native build stack. Specific post-mortem not captured.
- **[[Breakout v2]]** — CT-mindshare prediction markets on Base, LMSR market structure, Kaito Yaps as oracle. Shut down after **7 days at ~$35K volume** (~$30K in the first two weeks). **Two product-level reasons:**
  1. **Prediction markets are moments, not trends.** The category's winners concentrate volume into sharp live spikes (elections, finals, breaking events) where urgency drives flow. Continuous-trend markets ("BTC in 15 min", weather, CT mindshare) structurally lack the urgency and get arbitraged by bots. CT mindshare is a trend, not a moment — the primitive was scoped wrong for the category.
  2. **Long-tail prediction markets are a bad business.** Even at an optimistic $1M/week volume with a 2% fee, revenue is only ~$1M/year. Owning major markets (Polymarket / Kalshi shape) dominates owning the long tail — the economics of aggregating small markets don't pencil.
  Kaito also didn't meaningfully respond as oracle — volume was too small for them to care. Called off early because shipping the next thing is cheap on an AI-native stack; "business of hits, not sunk-cost coping."
- **[[Context (social feed)]]** — aggregation of public data can't monetize without owning the attention layer. Pivoted; team shipped 4 more products before winding down.
- **[[Rodeo]]'s transaction model** (not the economy — the economy was right) — every action was a sub-$1 mint, which is **worst-of-both-worlds**: orders of magnitude more friction than free interaction (Farcaster-style tap/like), and orders of magnitude less flexibility than variable-amount coin buys (Solana memecoin-style "buy any amount"). The closed-loop referral economy couldn't compensate for transaction-level UX friction. Blackdove sale attempted in Jan 2026 and failed; Foundation Labs wound down.
- **[[meme.market]]** — NFTs wrapped under a coin "trend" (not a prediction market, despite the name). Didn't break out; sunset with the Context wind-down.
- **[[context.markets]]** — the only actual prediction-market product in the Context arc. [[Polymarket]] + [[Kalshi]] sucked the oxygen at $15B and $22B valuations.
- **Foundation Labs' arc** — parallel to Context's: NFT marketplace → social (Rodeo) → prediction markets (Aura) → **attempted Blackdove sale failed → wound down**. No soft landing.
- **[[Lens]]** — shut down in the great unwind. Two joined root causes: (1) **sybil'd** — open permissionless graph semantics let fake accounts dominate and broke every downstream "active user / engaged follower" metric; (2) **protocol-first, not product-first** — Lens shipped graph primitives and hoped ecosystem apps would produce consumer pull, but no Lens app crossed into mainstream traction. By the time the team recognized a first-party anchor product was needed, [[Farcaster]] (with Warpcast as its first-party app) had already won the consumer wedge and the window closed. **Generalizable: protocol-first fails in consumer-crypto-social — a usable product is required to anchor the protocol, shipped early enough to accumulate real users before the category window closes.**
- **BitClout → DeSo pivot** — generalizing from "tokenize Twitter" to "social protocol" removed the thing that made it culturally viral.

---

## The 16 lessons (current best read)

**L1. Bonding curves alone are too speculative; graduation helps assets last longer.** Every _pure_-curve app peaked hard and collapsed (friend.tech, BitClout, Clout.me). A bonding curve is a pure speculation instrument — price goes up as more buyers enter, goes down as they exit, and that's the entire loop. Without a post-curve life, the asset has no reason to exist once the reflex cools. Clout.me sharpens the point: SOL/Meteora curves can pump _harder_ than friend.tech-on-Base ever did (a presale 100x'd for early buyers), but with no utility on top of the coin even the bigger pump still flopped. Pump intensity ≠ product survival. pump.fun was the inflection: the **$69k graduation from curve to AMM** (originally Raydium) gave coins continued trading life after the curve — graduated assets could keep moving for months instead of dying within hours. No serious launchpad after pump.fun has tried to survive on a pure curve. The apps that persist all pair curves with something else that outlasts the speculation: graduation (pump.fun), a three-tier liquidity flywheel wrapped in a consumer mobile app (Zora), identity-claim coercion (Bags), TikTok-native curation over pump.fun itself (Frenzy). Even those eventually face reflexivity fade — Zora's reflexivity has now faded, Captcha's has too.

**L2. Chain-native UX is mandatory; bridges are fatal.** BitClout's own-chain forced BTC→CLOUT bridges and added friction. friend.tech launched on Base, eliminated that friction, broke out. Any launchpad today that requires a bridge loses to one that doesn't.

**L3. Distribution beats mechanism — and in 2025 the dominant distribution surface is X, not wallet integrations.** Zora's Q2 2025 $353M came from an Instagram-like mobile app wrapping a content-coin/creator-coin/ZORA liquidity flywheel, with X as the out-of-app discovery layer. The Base App wallet integration (July 2025) was later shut down and did not drive the numbers. Believe made the X-native point even more explicit: the launch _is_ a tweet. When evaluating a new consumer-crypto-social primitive, the test isn't "is the mechanic clever" — it's "does X carry it for free, and does the in-app loop compound."

**L4. "Tokenize without consent" has a ~5-year productization cycle — and the limiting factor is social license, not legal exposure.** 2100 (paper, 2019) → BitClout (executed, 2021) → Bags (productized, 2026). Each iteration learns from the prior's failure mode. BitClout's real weakness wasn't the class action — it was that the **platform itself** pre-populated 15k tokens of real people, which read as institutional audacity and was too socially-bold for 2021. Bags addresses that specific weakness structurally: **a third-party user** tags-and-launches a coin, so the platform can frame itself as neutral infrastructure rather than the tokenizer. This is a genuine social-posture improvement, not just legal reframing. Whether Bags succeeds probably hinges on whether that third-party-initiated framing holds up under sustained use or whether it collapses back into "the platform enables mass non-consensual tokenization."

**L5. X/Twitter as launch surface strictly dominates web UI.** Believe's virality came from the launch action _being_ a public tweet. Pre-Believe launchpads required two steps (launch + promote on X); Believe collapsed this into one. CTA.fun's earlier reply-reward pattern anticipated this.

**L6. Prediction-markets-on-attention keep getting tried and keep failing — and the reasons are now product-specific, not just positioning.** Context arc (context.markets), Foundation Labs (Aura), Breakout v2, Believe v2 sentiment markets — all shut down or struggled. Two reasons compound on top of Polymarket/Kalshi eating from above:
- **Moments beat trends.** Winning prediction markets concentrate attention into sharp live spikes (elections, finals, breaking news); continuous-trend markets ("BTC in 15 min", weather, CT mindshare) structurally lack urgency and get arbitraged by bots. Attention-markets almost always end up as trends, not moments — baked-in strike against the category.
- **Long-tail economics don't work.** Even $1M/week at 2% fees is ~$1M/year — the only viable shape is owning major markets, not aggregating long-tail ones. Attention markets are inherently long-tail (many small topics, no single dominant event), which is structurally the worse side of that math.
When evaluating a new prediction-market pitch, the two product-level screens are: (a) does the market concentrate into moments, and (b) is there a plausible path to major-market volume rather than long-tail aggregation? Both no → don't build. (Note: meme.market, despite the name, was not a prediction market — it was NFTs wrapped under coin "trends.")

**L7. "Buyback-to-post" (Captcha) has no clean precedent in the wiki — but by launching a coin it took on reflexivity too.** The closest relatives are [[2100]]'s lock-DAI-to-stake (but there the user is earning someone else's token) and [[friend.tech]]'s pay-to-access (but there the user is paying to read, not to post). Captcha's "burn my own token to produce content" inverts the SocialFi direction. Post-launch, **novelty-driven reflexivity is fading**; the retention that has emerged is among **agentic users** doing "crypto-agent" workflows (auto-posting, transacting, launching coins via the agent API). The open question is whether agentic retention is a real second wind or a niche; the generalizable lesson is that launching a coin, no matter the mechanic, enrolls the product in reflexivity-past-novelty.

**L8. Closed-graph / demographic bets remain under-tested — and the open-memecoin field is a gravitational trap.** Most SocialFi goes for maximum reach from day one. Facebook-Harvard-analog: closed-graph high-density might outperform open-graph low-density at equal size. [[Breakout v1]] was the cleanest crypto-native attempt, but it **never publicly launched** (Berkeley-only, invite-only, ~15 users) — it was killed before the closed-graph thesis was actually tested, because the analysis concluded that the only speculative shape that could compete with open memecoins required moving to **project coins** (legally heavier, less retail-sexy), not creator coins. $ALEX is sometimes cited as a closed-graph example but it's dormant with news-driven spikes — not a live retention proof either. The generalizable read: closed-graph creator coins lose to open memecoins on every retail-speculation dimension. Reviving the thesis requires pairing demographic gating with something memecoins can't replicate (recurring governance, IP rights, real-world access, etc.) rather than competing on speculation-sexiness.

**L9. Content-as-coin vs activity-as-social vs identity-as-coin are orthogonal, not competing — but as of early 2026 none of them has a durable winner, and protocol-first attempts at the social branch failed.** Current state of play: Zora captured the window on content-as-coin (via an Instagram-like app + flywheel + X discovery) but its reflexivity has faded; Farcaster captured the window on protocol-level-social — but only because it had **Warpcast as a credible first-party consumer app** anchoring the protocol; [[Lens]], which shipped protocol-first without an anchor product, got **sybil'd** and lost the window to Farcaster before finally shutting down in the great unwind. Farcaster's later stagnation post-Neynar doesn't retroactively validate Lens's approach — it just means the whole protocol-level-social category window was narrower than it looked. Identity-as-coin has had no clean winner since friend.tech collapsed — Bags is trying it through third-party-initiated tokenization but is a product, not a category claim. **Protocol-first without a product is not a viable strategy in consumer-crypto-social.** "Capturing the window" proved not to mean "retaining the category" in any of the three branches.

**L10. X may not be the right GTM channel for mainstream consumer-crypto-social — TikTok is the leading candidate to replace it.** 2024–2025 was the X era (pump.fun, Believe v1, Zora all rode crypto-Twitter). In 2026, the TikTok-native cluster has arrived: [[Frenzy (frenzy.fun)]] and [[Giggles]] both use TikTok as GTM and content source. **Current scale reality-check:** Giggles has pulled **dozens of thousands** of users — growing but still very small; TikTok-GTM is directionally promising, not yet empirically proven. Parallel to that, [[Believe v2]] (sentiment markets on non-CT tech figures) explicitly targeted audiences outside CT and failed. **The deeper thesis under the GTM shift:** consumer-crypto-social is best targeted at **casual users, not CT natives**, because CT users are too locked-in on trading-as-the-point to engage with any social aspect in-app. Whether TikTok is the right casual-user surface (vs Discord, Telegram, iMessage, Instagram) is an open question — TikTok is the first to show any signal at all. When pitching a new consumer-crypto product, the L3 screen ("does X carry it for free") is becoming a two-part screen: (a) which non-CT surface plausibly carries discovery, and (b) is the target user actually casual-native or CT-native? If CT-native, assume no social-in-app engagement.

**L11. The great unwind reveals that crypto is for trading, not social — and the "social" that does work is tethered to traders, not content creators.** The late-2025 → early-2026 unwind didn't happen because one specific mechanic got disproven — it happened because **investor and founder fatigue compounded against years of a no-success graveyard, and bear-market conditions stripped away the optimism premium that had subsidized "web3 decentralized social graph" dreams**. What survived the unwind is almost entirely **trading-forward** products (pump.fun, Bags, Frenzy, Giggles — speculation interfaces with social garnish) plus [[Fomo (fomo.family)]] (the exception that proves the rule — a social-trading wallet with a trader-follow graph, $15M run rate — see L12), plus Zora (faded) and Captcha (thin retention). What died was the social-first / protocol-first / ICM-first / creator-content-first bets. The meta-screen for any new consumer-crypto product: **is this fundamentally a trading product (or a social layer that sits on top of trading behavior), or a social product with trading elements?** The second shape is now empirically a graveyard; the first is where any remaining gravity lives. Social-first isn't impossible forever — but it's fighting 2021–2026 of accumulated failure evidence.

**L12. Traders are the rising influencer class in crypto — and FOMO can seed network effects.** Consumer-crypto-social's repeated failures on creator-content graphs (Zora, Rodeo, Showtime, Drakula-as-creator-platform, Lens, Believe v1 creator-coin framing) traced partly to a miscasting problem: the category kept trying to import Instagram / TikTok / YouTube influencer logic into crypto, but **the people who are actually influential in crypto are traders** — their legibility, credibility, and aspirational signal all trace to trading P&L, not creative output. [[Fomo (fomo.family)]]'s $15M run rate operationalizes this: its social graph is traders, the content is portfolio/trade activity, and the UX surfaces what the user is already there for. **Why this is a major opportunity, not just an insight:** trader-anchored social graphs unlock **FOMO-driven network effects** that creator-anchored graphs can't replicate. Watching a trader make money creates immediate, visceral, self-reinforcing pull (do what they're doing, follow what they're buying, copy-trade) — every successful trade becomes both content and an acquisition event. Design implication: when building a social layer into a crypto-consumer product, the graph should be of traders (or whoever produces the legible edge in the specific niche — funds, quants, early-buyers), not generic-creator-content. [[Kaito]]'s attention-rankings on CT influence implicitly assumed the same thing but monetized it as an oracle; Fomo is the product shape.

**L13. The Apple Pay → USDC onramp acceptance rate is a silent category bottleneck.** A first-order infrastructure friction holding back every consumer-crypto-social app: Apple Pay → USDC onramp acceptance rates at the major providers (Moonpay, Coinbase, Coinflow) are **still below 50%** as of 2026-04 — **Coinflow is currently leading** the pack, but even the leader is sub-50%. More than half of mainstream users who decide to fund a crypto-social app from their iPhone are silently rejected at the payment step — they never make it onchain and never get counted as a "real" churn signal, because the app doesn't see them. **Stripe is the best near-term hope** — its onramp team is reportedly working to push acceptance toward 90%. This matters disproportionately because **users who successfully onboard money into a crypto-social app retain far above average** — the mainstream-user onramp funnel is both the most broken part of the stack and the cohort with the highest downstream LTV. Any consumer-crypto product that treats the payment integration as "plug in Moonpay and move on" is leaving most of its potential retained mainstream users on the curb, invisibly. When Stripe (or anyone) ships 90% acceptance, expect a step-change in any product whose target user is casual-native rather than CT-native (see L10).

**L14. Coins scale better than NFTs — but NFTs may come back if they deliver experience and status.** The 2024–2026 commercial winners are almost all coin-based (pump.fun, Bags, Frenzy, Giggles, Believe v1, Fomo). The NFT-anchored consumer-social attempts (Showtime, Rodeo, Zora pre-coins, Foundation) all faded or stagnated. Structurally: coins are **fungible, fractional, and unbounded** — anyone can hold any size position; speculation scales linearly with attention. NFTs are **discrete, bounded, and gated** — each unit is its own market with its own depth limit, which throttles speculative throughput and reflexivity. For pure attention-or-meme markets, coins win. **Forward-looking carve-out:** NFTs may return for use cases where the discrete/bounded nature is the feature — specifically, **delivering experience or status that fungible tokens can't replicate** (event access, IRL membership, scarce identity claims). The wrong frame is "NFTs as digital collectibles to flip"; the right frame is "NFTs as keys to something only NFT-holders get." Until that shape ships at scale, coins remain the default token format.

**L15. Solana mobile beats Base web.** The post-2024 commercial standouts (pump.fun, Bags, Frenzy, Fomo) are almost all **Solana + mobile-native**. The Base + web cluster (friend.tech, Zora as a desktop product, Rodeo) either faded or struggled to retain. The combination matters as a unit: Solana's fee structure makes microtransactions and rapid trading economically viable, mobile is where consumer attention actually lives in 2026, and the two compound (Solana wallets + mobile UX = something Base + web couldn't match). This sharpens L2 (chain-native UX is mandatory): the specific chain-native UX that wins in 2026 is Solana on mobile, not Base on the browser. New consumer-crypto-social pitches should default to Solana + iOS/Android-native unless there's a specific reason to prefer Base or web — and "the team is more comfortable with EVM" is not such a reason.

**L16. Agents may become a meaningful demand source and content engine.** Captcha's residual retention is concentrated in agentic users running auto-post / auto-transact / auto-launch workflows (see L7). What looks like a niche today might be a structural shift: as LLM agents become cheaper and more capable, they become a **net new demand source for crypto-consumer products** — they can hold wallets, transact 24/7, generate content, populate feeds, and create speculative volume. Two non-obvious implications: (1) "spam vs valuable agent content" is a design problem, not a binary — products that build mechanisms to surface high-quality agent activity (verified-agent reputation, cost-to-post, agent leaderboards) may unlock entirely new content streams; (2) agent demand could provide the "always-on baseline activity" that solves the cold-start problem for consumer-social products that otherwise need humans to bootstrap engagement. Captcha is the current cleanest live test of this thesis; whether the agent cohort becomes a real engine or stays a hobbyist niche is the open question for 2026–2027.

---

## Unexplored regions of the maze

Paths nobody has cleanly walked. Candidate territory for anyone hunting the next primitive in the category:

- **Token-gated access at the protocol layer, not app layer.** [[friend.tech]] and [[Unlock Protocol]] both did this at app layer; nobody's made it a protocol primitive.
- **AI-agent-native posting.** Captcha's agent API is exploring this; open question whether agents become meaningful content producers vs pure spam vectors.
- **Demographic/closed-graph social with native crypto.** [[Breakout v1]] tried college-students; the Facebook analog is unfinished. A high-trust closed graph with crypto-native commerce is theoretically powerful.
- **Watch-to-earn at scale without diluting to zero.** [[10K.world]] attempted it; every attention-token platform struggles with Sybil + dilution. Unresolved.
- **Consumption-first NFT UX with retention.** [[Showtime (tryshowtime.com)]] tried; [[Rodeo]] got closer via its closed-loop curator/referrer economy — but Rodeo's sub-$1 microtransactions were the wrong transaction shape (too heavy vs free tapping, too rigid vs variable-amount coin buys). Open question: does the Rodeo closed-loop economy work if the action is free-interaction or variable-size instead of fixed microtransaction?
- **Governance-over-a-person at platform scale.** [[$ALEX token]]'s Control My Life experiment is the longest-running instance (~5 years). Nobody's productized it because it's weird; but "DAO governance of a person" might be a primitive for creator economies.
- **Prediction markets specifically on crypto-Twitter influence.** [[Breakout v2]] tested this on Base with LMSR and Kaito Yaps as oracle; failed because CT mindshare is a _trend_ (continuous, no urgency spike) and the long-tail math doesn't pencil. The category can plausibly work for **moment-shaped** crypto-Twitter events (specific viral spikes with time-boxed resolution) but not for continuous-mindshare tracking.
- **Zora-style content-coin flywheel for video** (not just images). Tempting but [[Drakula (drakula.app)]] (video + bonding curve) already struggled; may need different economics for video's higher-effort content.

---

## Current reads (2026-04)

- **Does Captcha's buyback-to-post retain past novelty?** **No, not meaningfully.** Active users are now down to a couple of **agent hobbyists and farmers**, not a durable retained cohort. Launching a coin enrolled Captcha in reflexivity-past-novelty regardless of mechanic novelty; the agentic cohort that showed up didn't grow into the retention engine it might have been. Open sub-question: does agent-hobbyist + farmer constitute a legitimate long-tail niche worth serving, or is it the last echo of a faded reflex?
- **Does Bags face the BitClout legal fate?** **Not yet — no legal problems as of 2026-04.** Class-action exposure is still the same _structural_ vector, but the "creator royalty" + third-party-initiated framing is holding up so far. 12–24 months will tell whether an inflection (one high-profile non-consensual target + publicity) triggers the BitClout-shaped suit.
- **Neynar-Farcaster era: stagnate or accelerate?** **Stagnating, not dead.** Developer-centric refocus hasn't produced consumer pull; graph-level momentum has stalled; but the protocol is still live. No acceleration signal. Farcaster's place in this wiki is now "protocol-level idea validated, consumer execution stalled" rather than "live protocol winner" — update L9 accordingly.
- **Did the 2026 consolidation wave continue?** **Yes — late 2025 → early 2026 is a big shift in consumer-crypto-social, arguably a category-level inflection.** All of the following shut down or effectively paused in this window: [[Lens]]; [[Foundation Labs]]' entire stack (Rodeo, Foundation, Aura); [[Context (the team/company)]]'s full arc (Context gallery, context.markets, rug.fun, meme.market); [[Believe (believe.app)]] essentially paused; and the author's entire prior portfolio except Captcha. The fragmentation era of 2021–2025 has ended; what survives is a much smaller set (Fomo, pump.fun, Bags, Frenzy, Giggles, Zora, Captcha, and the Farcaster protocol itself). **Why it happened when it did:** investor and founder fatigue compounded after years of the category being a graveyard with no success stories, combined with **bear-market realism** — the downturn clarified that crypto's actual use case is **trading, not "web3 decentralized social graph" dreams**. The unwind is the space admitting what it is. Open question: does a new fragmentation wave start from this smaller base, or does the survivor set consolidate further?
- **What killed each of the author's prior apps specifically?** Nine apps shipped across 2021–Q1 2026: Showtime (#1, 2021–23), Drakula (#2, 2024), 10K (#3, H1 2025), CTA (#4, H2 2025), Breakout v1 / Berkeley (#5, H2 2025), Breakout v2 (#6, Jan–Mar 2026), Captcha (#8, Jan–Mar 2026 — currently live), plus one stealth app killed without public naming (#9, Jan–Mar 2026). Post-mortems captured for #1–6 under "What didn't work." Only Captcha remains live. Apps #6, #8, and #9 shipped in a three-month window on an AI-native build stack — iteration became cheap enough to treat each as a disposable experiment, enabling the "business of hits, not sunk-cost coping" cadence.

---

## How this document evolves

This is a living synthesis. Each new primary source in `raw/` can update the axis tables, timeline, or lesson set. Version bumps happen when conclusions materially change — not on every edit. If any of the 16 lessons get falsified by a new app or data point, it gets demoted with an explanation rather than quietly deleted. Lessons are hypotheses, not laws.

---

---

**Author:** [@alexmasmej](https://x.com/alexmasmej) — shipped nine consumer-crypto-social apps 2021–2026 (Showtime, Drakula, 10K, CTA.fun, Breakout v1, Breakout v2, Captcha, plus two stealth launches). All direct-source claims trace back to that lineage.

**Editorial / compilation support:** Claude, from ~27 primary-source files in the accompanying `raw/` directory.

**Feedback, corrections, or additions:** DM [@alexmasmej](https://x.com/alexmasmej) or open an issue in the source repo.

_Version v2 · Last updated 2026-04-23._
