---
url: https://frenzy.fun
date_added: 2026-04-20
source_type: user-note + web-research
category: app
---

# Frenzy (frenzy.fun)

## User thesis (Alex)

> TikTok trends without launchpad scams.

The load-bearing distinction: **Frenzy is a trend trading interface, not a launchpad.** The supply isn't random people launching memecoins — it's curated viral trends extracted from TikTok/X. This removes the rug-and-drain vector that defines [[pump.fun]] and [[Believe (believe.app)]] economies.

## Research summary

iOS app branded **"Frenzy — Trade Trends"**, developed by **FAFO, Inc.** Users trade assets representing current TikTok + X trends with the idea of "buying trends before they go viral." Self-custodial wallet.

## Mechanism (partial — product details light in public sources)

- Trends (TikTok / X memes, audio, challenges) are listable as tradable positions
- Users can **suggest trends** from the in-app search page or at frenzy.fun
- Self-custodial wallet — users hold their own keys
- Framed explicitly as **entertainment**, not investment (legal CYA but also positioning)

## Key distinction vs launchpad apps

| Dimension | pump.fun / Believe | Frenzy |
|---|---|---|
| Supply source | Anyone launches anything | Curated trend listings |
| Scam vector | High (launch-and-rug) | Lower (no token to rug; trend is not a person's project) |
| Economic primitive | Bonding curve on new token | Position on trend signal |
| Target user | Memecoin speculators | TikTok-native Gen Z |

## Chain / platform

Not definitively stated in research — most likely **Solana or Base** based on the current SocialFi cluster. Needs verification.

## Notable features

- Native iOS app (App Store distribution, not web wrapper)
- Trend curation removes one dimension of scam risk
- User-submitted trend listings introduce a different kind of curation economy (who gets to propose a trend?)

## Related

- [[Giggles]] — adjacent concept: video-scroll UX on top of trend/prediction trading; the UX-forward cousin to Frenzy's trading-UI-forward approach
- [[pump.fun]] — the launchpad model Frenzy is explicitly NOT
- [[Polymarket]] — prediction-market ancestor for "trade on outcomes, not assets"

## Resolved (via Alex-direct, 2026-04-23)

- **Underlying asset:** each trend is a [[pump.fun]] memecoin. A "trend position" is long/short on that memecoin — no Frenzy-specific synthetic, futures, or LP primitive. Frenzy is a **curation + UX layer over pump.fun's token + curve**.
- **Resolution / expiry:** the underlying pump.fun coin trades indefinitely (or until it graduates / dies), so positions don't expire per se — they're held as long as the trend is tradable on pump.fun. Exit is a pump.fun sell.
- **Chain:** [[Solana]].
- **Trend submission:** **gated curation**. Frenzy issues some trend coins itself; others are sourced from organic pump.fun coins that performed well. Users can submit trend proposals via the Frenzy app, but listing is gated — not permissionless like pump.fun itself.

## Implication

Frenzy's "no launchpad scams" framing rests on the curation layer, not on a different liquidity primitive. Under the hood it's still pump.fun bonding-curve memecoins; Frenzy's edge is the filter on which coins make it into the Frenzy UI as "trends."

## Sources

- [Frenzy — Trade Trends on App Store](https://apps.apple.com/us/app/frenzy-trade-trends/id6755049887)
- [How to Use Frenzy Dot Fun App — TikTok](https://www.tiktok.com/discover/how-to-use-frenzy-dot-fun-app)
- Direct WebFetch of frenzy.fun: JS-rendered splash, no substantive content
