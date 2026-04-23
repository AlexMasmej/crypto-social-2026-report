---
url: https://rodeo.club (redirects to foundation-labs.xyz)
date_added: 2026-04-20
source_type: user-note + web-research
category: app
parent_company: [[Foundation Labs]] — **acquired by Blackdove on 2026-01-30**
---

# Rodeo (rodeo.club)

## User thesis (Alex)

> The feed was mostly buyers and included a referral, meaning it was a sort of **collect-to-earn economy if you were a known curator**.

This is the load-bearing observation. Most SocialFi apps describe their flywheel as creator-centric (creator earns on trades of their token). Rodeo's economic topology is different: **the curator/taster earns by being an early collector with downstream influence**. The feed signal is "things buyers like me also bought," and the referral cut makes known tastemakers able to monetize their taste directly — a collector-economy rather than a creator-economy.

## Research summary

Rodeo is an onchain social network / "social sketchbook" by **[[Foundation Labs]]** — the team behind the Foundation NFT marketplace. Posts are collectible NFTs on **[[Base]]**; the feed surfaces what's being collected, and collectors earn on downstream mints they influence.

- **Launched:** 2024
- **Chain:** Base L2 (confirmed)
- **Investor:** 1kx led a round (thesis piece: "Why we invested in Rodeo, a social network for creatives")
- **Parent company acquired:** [[Foundation Labs]] acquired by **Blackdove** on **January 30, 2026**

## Mechanism (confirmed)

**Mint fee:** `0.0001 ETH` (~$0.23) per collect

**Fee split:**
| Recipient | Share | Amount |
|---|---|---|
| **Creator** (poster) | 50% | 0.00005 ETH |
| **Influencer** (collector whose feed/link drove the mint) | 25% | 0.000025 ETH |
| **Foundation / platform** | 25% | 0.000025 ETH |

**Influencer flywheel:** when another user mints a post **after seeing it in your feed or via your referral link**, you earn 25% of the mint fee. Payouts auto-deposit on-chain; notifications appear in the app.

This is the mechanism that operationalizes Alex's "collect-to-earn for known curators" observation: your feed is your investment thesis, and curatorial signal captures economic value directly.

## Notable design choices

- **Cheap mints (~$0.23)** — low friction, encourages collecting volume
- **50/25/25 split** — creator-majority but with a substantial influencer cut (unusual; most platforms give <5% to referrers)
- **Base-native** — inherits Coinbase distribution + low gas
- **NFT-first not coin-first** — posts are mintable NFTs, not ERC-20 content coins like [[Zora]]'s model
- **Feed-as-referral-graph** — scrolling itself generates attributable economic activity

## Why this matters vs Zora

| | [[Zora]] | Rodeo |
|---|---|---|
| Post representation | ERC-20 "content coin" per post | NFT mint per post |
| Fee split | 1/1/1 (creator/platform/LP) | 50/25/25 (creator/influencer/platform) |
| Economic flywheel | Liquidity-pair compounding (3-coin flywheel) | Referral graph compounding (curator economy) |
| Chain | Zora Network (OP Stack) + Base App integration | Base |
| Dominant earner | Creators + LP providers | Creators + curators/collectors |

Both on Base's orbit, both "post = asset." Different theories about **where economic value concentrates** — Zora bets on liquidity-pair depth; Rodeo bets on attention-graph attribution.

## Status

Live as a product; ownership transferred to **Blackdove** via Foundation Labs acquisition on **2026-01-30**. Future direction under new ownership unknown.

## Related

- [[Foundation Labs]] — parent (acquired by Blackdove)
- [[Foundation (NFT marketplace)]] — sibling product
- [[Aura (Foundation Labs)]] — sibling product (pop-culture prediction market)
- [[Zora]] — direct structural competitor on Base
- [[Base]] — chain
- [[Context (social feed)]] — conceptual predecessor (wallet-activity-as-content); Rodeo solved the monetization problem Context couldn't

## Open questions

- Post-acquisition roadmap under Blackdove?
- DAU and mint volume at time of acquisition?
- Any overlap / consolidation with other Blackdove properties?
- Did the team fully transition? Foundation Labs founders staying?

## Sources

- [Creating and Collecting NFTs on Rodeo — Bankless](https://www.bankless.com/nfts-on-rodeo)
- [What do I earn from Influencing on Rodeo? — Rodeo Help Center](https://help.rodeo.club/hc/en-us/articles/27870065868059-What-do-I-earn-from-Influencing-on-Rodeo)
- [Creator Earnings and Rewards — Rodeo Help Center](https://help.rodeo.club/hc/en-us/categories/27610700937371-Creator-Earnings-and-Rewards)
- [Thesis: Why we invested in Rodeo — 1kx](https://1kx.network/writing/thesis-why-we-invested-in-rodeo-a-social-network-for-creatives)
- [Rodeo on Product Hunt](https://www.producthunt.com/products/rodeo-6)
- [Foundation Labs Company Profile — PitchBook](https://pitchbook.com/profiles/company/435605-86) (acquired by Blackdove 2026-01-30)
