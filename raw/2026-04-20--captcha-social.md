---
url: https://captcha.social
date_added: 2026-04-20
source_type: builder-direct (Alex) + project memory
category: app
built_by_user: true
status: live (current project)
---

# Captcha (captcha.social)

## Alex's framing

> **Mobile app, web app and agent API social network that's buyback $CAPTCHA to post.**

## Summary

Alex's **current project**. A social network with **three parallel surfaces**:
1. **Mobile app** (React Native / Expo)
2. **Web app**
3. **Agent API** — programmatic posting for autonomous agents

**Economic core:** posting requires **buying back $CAPTCHA** — every post creates token-buy pressure, converting engagement directly into token demand rather than into ad revenue.

## The "buyback to post" mechanic

This is the **novel primitive**. Most SocialFi apps either:
- Tax **trading** (Zora: 3% on trades)
- Tax **access** (friend.tech: 5% on key trades)
- Tax **launches** (pump.fun, Believe: graduation + curve fees)

Captcha taxes **posting itself** — the act of content creation. Every post consumes capital (via buyback), which:
- Raises the cost of spam (anti-bot by economics)
- Creates continuous token-demand even without secondary trading
- Ties protocol revenue directly to user activity (not just user growth)

## Technical stack (from project memory)

- **Frontend:** React Native (Expo 54), web variant
- **Backend:** Convex
- **Auth:** Privy
- **Chain:** Solana
- **Swap infra:** Jupiter for USDC ↔ $CAPTCHA swaps with 3% USDC fee
- **Amounts:** micro-USDC (6 decimals)

## Recent history (from project memory)

- **2026-03-19:** shipped swap migration — replaced old credit system (captcha_deposited / captcha_earned, price oracle) with Jupiter swaps + 3% USDC fee; everything now on-chain USDC + $CAPTCHA tokens
- **2026-03-20:** bumped app version to 1.1.0 for swap migration
- **2026-Q1:** Android OTA production channel paused for bot mitigation, iOS-only update workflow
- **2026-04:** active development; recent commits on env var fixes (Metro inlining) and OTA fingerprint pinning

## Positioning in the space

- **Lineage:** builds on lessons from [[Breakout v1]], [[Breakout v2]], [[Drakula (drakula.app)]], [[10K.world]], [[CTA.fun]], [[Showtime (tryshowtime.com)]]
- **Novel axis:** "buyback to post" — not seen elsewhere in the current SocialFi map. Closest conceptual neighbor is [[2100]]'s DAI-lock requirement, but there you're staking to earn someone else's token; in Captcha you're buying the protocol's token to act
- **Agent API** is unique among the apps in this wiki — opens the product to autonomous-agent usage, which itself is an emerging wave

## Why this matters for the wiki

Captcha is the **active hypothesis** the wiki is arguably being built to inform. The other raw files in `raw/` (friend.tech, Zora, Rodeo, Believe, etc.) are **reference points for Captcha's design decisions**. Keeping Captcha's mechanism documented here lets future Claude compile comparison tables with Captcha as a first-class entry.

## Related

- [[Breakout v2]] — predecessor project by Alex
- [[Drakula (drakula.app)]] — predecessor with video + bonding curve
- [[friend.tech]] / [[Believe (believe.app)]] / [[Zora]] — benchmark consumer-crypto social apps
- [[Privy]] — auth partner
- [[Jupiter]] — swap router
- [[Solana]] — chain

## Open questions (for Alex to fill in as wiki grows)

- Buyback routing — where does the USDC go? (Burned? Treasury? LP?)
- Agent API adoption — how many agent posters vs human posters?
- Mobile vs web vs agent split in DAU
- What's the long-term thesis for $CAPTCHA value accrual beyond posting-demand?
- How does Captcha compare to [[Farcaster]] (protocol) + [[Zora]] (coins app) if you consider the "post = economic event" axis?

## Sources

- Alex-direct (builder) — primary source
- Project memory: see `MEMORY.md` entries on swap migration (2026-03-19), app version, Android OTA pause
- Codebase: `~/Coding/captchav2/` (not linked here; structural source-of-truth)
