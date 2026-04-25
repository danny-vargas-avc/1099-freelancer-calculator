# SEO Portfolio — Master Plan

## Overview

Build 12 ad-monetized static calculator/tool sites using a shared Nuxt 3 boilerplate. Each site targets a different niche with programmatic SEO (one template → hundreds/thousands of pages). Revenue from display ads + affiliate links. Total cost: ~$120/yr in domains.

**Conservative target:** $2,000-3,000/mo by month 12, $5,000-8,000/mo by month 18.

---

## The 12 Sites

| # | Niche | What it does | Pages | RPM | Build Time | Month 12 Est. |
|---|-------|-------------|-------|-----|-----------|---------------|
| 1 | Paycheck/salary calculators | Gross → net pay with federal + state taxes, FICA, Medicare. State-specific pages + top 50 cities per state. | 2,500+ | $15-30 | 1 day ✅ | $800-2,000 |
| 2 | 1099/Freelancer tax calc | Self-employment tax, quarterly estimated payments, deduction calculator. Reuses #1's tax engine. | 300+ | $15-25 | 3-4 days | $300-800 |
| 3 | Developer utilities | JSON formatter, base64 encode/decode, regex tester, UUID generator, epoch converter, JWT decoder, hash generator. Each tool = one SEO page. | 10-20 | $5-10 | 1 week | $500-1,500 |
| 4 | IP/VPN lookup | Show user's IP, geolocation, ISP, VPN detection. Monetize with VPN affiliate links ($30-100/signup) not just ads. | 1-5 | VPN affiliate | 3-4 days | $400-1,500 |
| 5 | Unit converter | Programmatic pages for every conversion pair (/kg-to-lbs, /celsius-to-fahrenheit). OnlineConversion.com still runs 1998 HTML. | 1,000+ | $8-15 | 1 week | $600-2,000 |
| 6 | Auto/car payment calc | Car loan payment, EV vs gas cost comparison, depreciation calculator. State-specific insurance/registration variants. | 200+ | $8-18 | 1 week | $300-1,000 |
| 7 | Writer tools | Word/character counter, readability score, keyword density, AI content detection, headline analyzer. WordCounter.net gets 11.5M visits with 24min sessions. | 5-10 | $5-12 | 1 week | $300-1,000 |
| 8 | Subnet/network calculator | CIDR calculator, IP range, VLSM, subnet mask converter. Existing tools look ancient. High-value IT/DevOps audience. | 50+ | $10-20 | 3-4 days | $300-900 |
| 9 | Cron expression builder | Visual cron builder, natural language input ("every Tuesday at 3pm"), AWS/GCP syntax support, next 10 executions preview. crontab.guru gets 500K/mo with one input field. | 100+ | $5-10 | 3-4 days | $300-800 |
| 10 | Rent vs buy calculator | Interactive calculator with current mortgage rates, property taxes, maintenance, opportunity cost. State-specific variants. NYT version got 187K shares. | 51+ | $20-40 | 1 week | $300-1,000 |
| 11 | GLSL shader editor | Live WebGL shader editor with real-time preview. SEO pages per shader type (noise, gradient, particle systems, etc). Reverse-engineers ShaderToy's audience into a tool-first experience. Built on Three.js — unique competitive advantage. | 50-100 | $20-40 | 1-2 weeks | $300-1,200 |
| 12 | Bundle size analyzer | Upload webpack/vite stats JSON, get an interactive treemap showing exactly what's bloating your bundle. webpack-bundle-analyzer is CLI/local only — no clean web version exists. SEO pages per bundler type and framework. High-intent senior engineer audience. | 10-20 | $20-35 | 1 week | $300-1,000 |
| | **Combined** | | | | **~12 weeks** | **$4,700-14,700** |

---

## Why Sites #11 and #12 Are Different

Every other site in this portfolio competes on volume. Sites #11 and #12 compete on **capability and credibility.**

### Site #11 — GLSL Shader Editor
- **Hard to build** = fewer competitors. No clean, modern, free GLSL editor with SEO-optimized pages exists.
- **ShaderToy** is a community platform, not a tool. Individual shader utility pages with live editors fill a real gap.
- **Three.js/WebGL background** means you can evaluate correctness, handle edge cases, and build something developers actually trust.
- **Organic sharing potential** is unlike any other site in this portfolio. A developer tweet or HN post can drive thousands of backlinks that calculator sites never earn.
- **Sponsorship ceiling** is high. Creative coding tools attract companies like Vercel, Codrops, Three.js ecosystem sponsors, and game dev SaaS.
- **RPM is finance-tier** because the audience is senior engineers and creative technologists — high advertiser intent.

### Site #12 — Bundle Size Analyzer
- **webpack-bundle-analyzer is CLI/local only.** Every developer who has ever shipped a bloated build has needed a web version. The tool exists — the accessible version doesn't.
- **High-intent audience.** Someone analyzing their bundle is mid-optimization, actively working, likely evaluating tooling. Advertisers pay premium CPM for that signal.
- **SEO pages per framework** — "how to reduce vite bundle size," "webpack bundle analyzer online," "next.js bundle too large" are all rankable queries with weak existing results.
- **Organic sharing via dev Twitter/X.** A clean treemap visualization of a real bundle gets screenshot-shared. That's free backlinks and distribution.
- **Affiliate upside** — recommend Vite, Bun, edge deployment platforms, CDN services. All have programs or sponsorship budgets.

---

## Revenue Projections (Conservative)

### Monthly Revenue Timeline

| | Month 3 | Month 6 | Month 12 | Month 18 | Month 24 |
|---|---------|---------|----------|----------|----------|
| All 12 sites | $50-200 | $800-2,750 | $4,700-14,700 | $7,000-18,500 | $10,000-25,000 |
| Honest median | ~$100 | ~$1,600 | ~$6,000 | ~$9,500 | ~$14,000 |

### Year Totals

- **Year 1 total:** $28,000-45,000 (honest: ~$35,000)
- **Year 2 total:** $70,000-140,000 (honest: ~$90,000)
- **Cost:** ~$120/yr

### Probability Distribution

| Scenario | Odds | Monthly at 12mo |
|----------|------|-----------------|
| Total flop (< $500/mo) | 10% | Google algo change, or don't finish all 11 |
| Underwhelming ($500-2K/mo) | 35% | Thin content, weak SEO execution |
| Hits target ($3-6K/mo) | 35% | 5-6 sites gain traction, 3-4 underperform |
| Outperforms ($6-12K/mo) | 15% | One breakout keyword or VPN affiliate pops |
| Home run ($12K+/mo) | 5% | Multiple sites hit Mediavine tier, #11 gets featured |

---

## Build Order

| Week | What | Site # | Notes |
|------|------|--------|-------|
| 1 | PayBreakdown — LIVE | #1 | ✅ Done |
| 2 | IP/VPN lookup | #4 | Fastest path to affiliate revenue, minimal content needed |
| 3 | 1099/Freelancer tax calc | #2 | Reuses #1 tax engine, nearly free build |
| 3-4 | Developer utilities suite | #3 | Establish dev tool cluster |
| 4-5 | Cron expression builder | #9 | crontab.guru is one input field — this is beatable fast |
| 5-6 | Subnet/network calculator | #8 | Completes dev tool cluster, high RPM audience |
| 6-7 | Unit converter | #5 | Volume play, 1,000+ pages, OnlineConversion.com is ancient |
| 7-8 | Auto/car payment calc | #6 | Mid-tier volume, solid RPM |
| 8-9 | Writer tools | #7 | WordCounter.net 24min sessions = engagement signal |
| 9-10 | Rent vs buy calculator | #10 | Finance RPM, NYT proved the demand |
| 10-11 | GLSL shader editor | #11 | Hardest build, highest upside, save for last when boilerplate is dialed |
| 11-12 | Bundle size analyzer | #12 | Hard to build correctly, pairs naturally with dev tools cluster |

**All 12 deployed within ~12 weeks.** Then maintenance + waiting for SEO to compound.

---

## Site Clusters

### Finance Cluster (Sites #1, #2, #10)
Cross-link aggressively. Paycheck → 1099 → Rent vs Buy is a natural user journey.
Affiliate: TurboTax, H&R Block, Credit Karma, mortgage lenders.
RPM ceiling: $20-50.

### Dev Tools Cluster (Sites #3, #8, #9, #12)
Cross-link between all four. JSON formatter users also need cron builders. Bundle analyzer users are the same audience as subnet calculator users — senior engineers doing infrastructure work.
Affiliate: dev SaaS, cloud providers, IDE tools, CDN/edge platforms.
RPM ceiling: $15-35. Sponsorship potential: high.

### Utility Cluster (Sites #5, #6, #7)
Broader audience, lower RPM, higher volume ceiling.
Affiliate: insurance (auto), writing software (Grammarly, Hemingway).
RPM ceiling: $8-18.

### High-Value Singles (Sites #4, #11)
Site #4: VPN affiliate dominates over ad revenue.
Site #11: Sponsorship + senior dev audience + organic sharing. Runs its own playbook.

---

## Shared Boilerplate Architecture

All 11 sites share the same Nuxt 3 starter. Extract from site #1 after it's done.

```
nuxt-seo-boilerplate/
├── nuxt.config.ts           # SSG config, sitemap, robots
├── app.vue                  # Global layout
├── components/
│   ├── AdUnit.vue           # AdSense wrapper (3 placements)
│   ├── FaqSection.vue       # FAQ with Schema.org markup
│   ├── Breadcrumbs.vue      # SEO breadcrumbs
│   ├── InternalLinks.vue    # Related page grid
│   └── ResultsChart.vue     # Pie/bar chart for breakdowns
├── composables/
│   └── useSeo.ts            # Meta tags, OG, canonical, schema
├── layouts/
│   └── default.vue          # Header, footer, ad slots
├── utils/
│   ├── formatCurrency.ts
│   ├── formatNumber.ts
│   └── sitemap.ts
├── public/
│   ├── robots.txt
│   └── favicon.ico
└── server/
    └── routes/
        └── sitemap.xml.ts
```

For each new site, add:
- `data/` — niche-specific data files
- `pages/` — calculator pages with dynamic routes
- `components/` — calculator widget specific to the niche
- `composables/` — calculation logic

**Fork time after boilerplate exists: 1-3 days per site.**

---

## Anti-Thin-Content Strategy

Google penalizes programmatic pages that are just template-swapped. Every page must feel written for that specific variant.

### Per-Page Unique Content

1. **150-200 words genuinely unique copy** — variant-specific quirks, comparisons, exemptions
2. **Unique FAQ (4-5 questions)** — at least 2 must be variant-specific
3. **Comparison data** — "vs national average" or "vs neighboring states/alternatives"
4. **Sub-variant pages** (city, category) must add local context, not just parent copy with a name swap

### Technical SEO Performance

- **LCP:** < 2.5s — calculator widget renders fast, no heavy JS blocking
- **CLS:** < 0.1 — ad slots have fixed dimensions, no layout shift on load
- **INP:** < 200ms — calculator inputs respond instantly
- Ad containers always reserve space with `min-height` / `aspect-ratio`

### Internal Linking

- Each variant page links to: related tool types, neighboring variants, index page
- Each index page links to: all variant pages
- Footer: top 10 most-searched variants
- Breadcrumbs on every page
- Cross-link between cluster sites where contextually relevant

### Sitemap Strategy

- Sitemap index → sub-sitemaps per section
- `<lastmod>` set to data update date
- Submit all to Google Search Console on day 1

---

## Costs

| Item | Per site | 12 sites |
|------|---------|----------|
| Vercel hosting | Free | Free |
| Domain | ~$10/yr | ~$120/yr |
| SSL/CDN | Free | Free |
| Database | None | $0 |
| Server | None (static) | $0 |
| **Total** | | **~$120/yr** |

Vercel Pro ($20/mo) only if any site exceeds 100GB bandwidth.

---

## Monetization Path

1. **Day 1:** AdSense slots in templates (empty until approved)
2. **Week 2-3:** Apply to Google AdSense per site (need 15+ pages each)
3. **Site #4 (IP/VPN):** VPN affiliate links from day 1 — NordVPN, ExpressVPN, Surfshark ($30-100/signup)
4. **Month 3-6:** AdSense revenue trickles in ($5-10 RPM on new domains)
5. **50K visits on any site:** Apply to Mediavine (2-3x higher RPMs than AdSense)
6. **100K visits:** Apply to AdThrive (highest RPMs)
7. **Sites #1, #2, #10 (finance):** Affiliate links to TurboTax, H&R Block, Credit Karma, mortgage lenders
8. **Site #11 (GLSL):** Reach out to Three.js ecosystem sponsors, Vercel, creative coding SaaS once traffic establishes (~month 6)
9. **Site #12 (Bundle analyzer):** Sponsor outreach to Vite, Bun, Cloudflare, Netlify, Vercel — all have dev tool sponsorship budgets

---

## Backlink Strategy (New Domains)

Each site needs 5-10 quality backlinks in the first 90 days to exit the sandbox faster.

- **Reddit:** Post genuinely in relevant subs. r/personalfinance (#1, #2), r/webdev (#3, #9, #12), r/sysadmin (#8), r/privacy (#4), r/threejs (#11), r/javascript (#12)
- **Hacker News Show HN:** Dev tools cluster and GLSL editor are HN-appropriate
- **Indie Hackers:** Build log posts for each site — community upvotes finance/SEO projects
- **Product Hunt:** Launch each site. Even modest launches give high-DA backlinks
- **Cross-portfolio linking:** Where contextually relevant, link between your own sites

---

## Tracking

One spreadsheet to rule them all:

```
Site | Domain              | Status | Pages Indexed | Monthly Visits | Revenue | Notes
──────────────────────────────────────────────────────────────────────────────────────
#1   | paybreakdown.com    | Live   | -/2500        | -              | -       | Submit sitemap, watch Search Console
#2   | (tbd)               | Queue  | -             | -              | -       |
#3   | (tbd)               | Queue  | -             | -              | -       |
#4   | (tbd)               | Next   | -             | -              | -       | Priority — affiliate from day 1
#5   | (tbd)               | Queue  | -             | -              | -       |
#6   | (tbd)               | Queue  | -             | -              | -       |
#7   | (tbd)               | Queue  | -             | -              | -       |
#8   | (tbd)               | Queue  | -             | -              | -       |
#9   | (tbd)               | Queue  | -             | -              | -       |
#10  | (tbd)               | Queue  | -             | -              | -       |
#11  | (tbd)               | Queue  | -             | -              | -       | GLSL editor — reputation play
#12  | (tbd)               | Queue  | -             | -              | -       | Bundle analyzer — dev tools cluster anchor
```

Check Google Search Console weekly. Double down on winners, don't waste time optimizing losers.

---

## Key Success Factors

1. **Finish all 12** — most people build 2-3 and quit
2. **Content quality** — unique copy per page, not template-swapped garbage
3. **Patience** — months 1-4 feel like nothing. SEO is delayed gratification
4. **Performance** — Lighthouse 90+, Core Web Vitals green. Slow sites don't rank
5. **Backlinks early** — 5-10 quality links per domain in the first 90 days matters
6. **One lucky break** — 12 sites = 12 lottery tickets. One breakout keyword or viral dev tool share changes everything

---

## Research Data

### Proven Models

- **Calculator.net:** 54M visits/mo, simple calculators, AdSense
- **Omni Calculator:** 23M visits/mo, ~$500K/mo ad revenue, bootstrapped
- **Wise:** 260K programmatic currency pages → 60M+ organic visits/mo
- **Zapier:** 25K integration pages → 16M organic visits/mo
- **tdeecalculator.net:** 2.47M visits/mo from a single niche calc
- **crontab.guru:** 500K/mo from one input field — site #9 beats this on features alone
- **webpack-bundle-analyzer:** Millions of npm downloads/week, zero web version — site #12 owns that gap
- **ShaderToy:** Proves creative coding tool demand — site #11 owns the SEO layer they ignore

### Outdated Sites We're Replacing

| Site | Traffic | What's Wrong |
|------|---------|-------------|
| OnlineConversion.com | Active | 1998 design, zero mobile support |
| Calculator.net | 54M/mo | 2010s aesthetic, cluttered |
| CalculatorSoup.com | 11.4M/mo | Yellow/gray tables layout |
| RapidTables.com | 9.4M/mo | Looks abandoned (but 12min avg session!) |
| WhatIsMyIPAddress.com | 10M/mo | Drowning in ads |
| JSONFormatter.org | 3.5M/mo | Ad-heavy, mediocre UX |
| WordCounter.net | 11.5M/mo | 24min sessions — massive engagement, outdated |
| crontab.guru | 500K/mo | One input field, no visual builder |
| webpack-bundle-analyzer | High dev usage | CLI/local only — no web version exists |
| ShaderToy | Millions | Community platform, zero SEO tooling layer |

### Ad Revenue Reference

| Monthly Visits | RPM | Revenue |
|---|---|---|
| 10K | $10 | $100 |
| 50K | $15 | $750 |
| 100K | $15 | $1,500 |
| 500K | $15 | $7,500 |
| 1M | $20 | $20,000 |

Finance: $20-50 RPM | Developer/IT: $15-35 RPM | Creative/WebGL: $20-40 RPM | General: $5-10 RPM | VPN affiliate: $30-100/signup

### SEO Timeline (Per Site)

- Month 1-2: Google discovers and indexes pages
- Month 3-4: Pages appear in search (positions 20-50)
- Month 5-8: Rankings improve as pages age
- Month 9-12: Traffic compounds
- Month 12-18: Peak performance for initial pages
