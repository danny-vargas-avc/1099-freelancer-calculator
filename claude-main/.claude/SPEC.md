# 1099 Freelancer Tax Calculator — SPEC v1

## What We're Building

Programmatic SEO calculator site for 1099 contractors, freelancers, and self-employed workers.
3 calculators × 51 states = 153+ static pages at launch. Monetized with AdSense.
Revenue target: $300–800/mo at month 12.

Reuses the full tax engine from paybreakdown (`/Users/danny/Desktop/side stuff/paybreakdown`):
composables, data/federal, data/states, and supporting components. No tax logic is written from scratch.

---

## Tech Stack

- **Nuxt 3** — SSG, same config as paybreakdown
- **Vercel** — Free hosting, auto-deploys
- **TypeScript** — Same type interfaces as paybreakdown (`data/types.ts`)
- **Tailwind CSS** — Same utility classes, fully responsive
- **Tax Year:** 2026

---

## Calculators (all 3 at launch)

1. **1099 Tax Calculator** — Net self-employment income → SE tax (15.3%), federal income tax
   (after 50% SE deduction), state income tax → annual net income + effective rate
2. **Quarterly Tax Estimator** — Annual income → 4 quarterly IRS payment amounts with due dates.
   Includes safe harbor rule (100% of prior-year tax or 90% of current-year).
3. **Freelancer Deduction Calculator** — Business expenses (home office, mileage, equipment,
   health insurance, retirement contributions) → reduction in taxable SE income → tax saved

---

## Pages

### URL Structure

```
/                                              → Homepage (1099 tax calculator, hero, cross-links)
/1099-tax-calculator                           → Federal SE tax calc
/1099-tax-calculator/[state]                   → State-specific (×51)
/quarterly-tax-estimator                       → Quarterly payment schedule
/quarterly-tax-estimator/[state]               → State-specific (×51)
/freelancer-deduction-calculator               → Deduction estimator
/freelancer-deduction-calculator/[state]       → State-specific (×51)
/about
/privacy
/terms
```

### Page Template (every generated state page)

```
[Breadcrumb] Home > Calculator Name > State
[H1] {State} 1099 Tax Calculator 2026
[Calculator widget — interactive, instant results]
[AdSense — below results]
[H2] {State} Tax Overview for 1099 Workers
[150-200 words unique state copy — reused from paybreakdown state data]
[H2] {State} Tax Brackets for 2026
[Tax bracket table]
[H2] Frequently Asked Questions
[FAQ — 4-5 questions, at least 2 state-specific — reused from paybreakdown state data]
[AdSense — in-content]
[Internal links to related calculators and neighboring states]
```

---

## Calculator Details

### 1. 1099 Tax Calculator

**Inputs:**
- Net self-employment income (annual)
- Filing status (Single / Married Filing Jointly)
- State (dropdown → 51 options)

**Outputs:**
- SE tax: 15.3% × 92.35% of net income (both employer + employee share)
- SE deduction: 50% of SE tax, subtracted before federal income tax
- Federal income tax: applied to (income − SE deduction − standard deduction)
- State income tax: bracket or flat rate per state
- Net income after all taxes
- Effective total tax rate
- Pie chart breakdown: SE Tax / Federal / State / Net Income

**Engine:** `useSelfEmploymentTax` + `useFederalTax` + `useStateTax` from paybreakdown.
The `usePaycheck` orchestrator already handles `employmentType: '1099'`.

### 2. Quarterly Tax Estimator

**Inputs:**
- Expected annual net income
- Filing status
- State
- Prior-year tax liability (optional — enables safe harbor calculation)

**Outputs:**
- 4 quarterly payment amounts (equal splits of estimated annual tax)
- Due dates: April 15, June 16, September 15, January 15, 2027
- Safe harbor amount if prior-year tax provided (max of 90% current / 100% prior)
- Full tax breakdown: SE tax, federal, state

**Engine:** Same as #1. `QuarterlyEstimator.vue` from paybreakdown is the starting point.

### 3. Freelancer Deduction Calculator

**Inputs:**
- Gross self-employment income
- Home office (sq ft used / total sq ft OR simplified $5/sq ft method)
- Vehicle/mileage (business miles × IRS rate: $0.67/mi for 2026)
- Equipment & supplies (annual spend)
- Health insurance premiums (self-employed deductible 100%)
- Retirement contributions (SEP-IRA up to 25% of net, max $70,000; Solo 401k up to $23,500 employee + 25% employer)
- Other deductions (freeform dollar amount)
- Filing status
- State

**Outputs:**
- Total deductions
- Adjusted net SE income (gross − total deductions)
- SE tax on adjusted income
- Federal income tax on adjusted income (after SE deduction)
- State income tax on adjusted income
- Tax saved vs. no deductions
- Effective rate before/after deductions

**Note:** This is a new calculator not in paybreakdown. Needs a `FreelancerDeductionCalculator.vue`
component and a `useDeductions` composable that computes IRS deduction caps before calling the
existing tax engine.

---

## Results Display

- Pie chart: SE Tax / Federal Tax / State Tax / Net Income (same `ResultsBreakdown.vue` component)
- Supporting table with dollar amounts and percentages
- On deduction calculator: before/after comparison table

---

## Tax Data (2026) — All Reused from Paybreakdown

### Federal (copy `data/federal/2026.ts` verbatim)

```typescript
selfEmployment: { rate: 0.153, deductiblePortion: 0.5 }
fica: { socialSecurityWageCap: 184500 }
```

SE tax applies to 92.35% of net SE income (IRS: accounts for employer-side deductibility).
SS portion (12.4%) only applies up to the wage cap. Medicare (2.9%) applies to all SE income.

### IRS Deduction Rates for 2026 (Deduction Calculator only)

```typescript
mileageRate: 0.67              // per business mile
homeofficSimplified: 5.00      // per sq ft, max 300 sq ft
sepIraMax: 70000               // or 25% of net compensation, whichever is less
solo401kEmployee: 23500        // employee elective deferral
```

### State (copy `data/states/` directory verbatim)

All 51 state files with brackets, SDI, cities, faqs, uniqueCopy.
9 no-income-tax states: AK, FL, NH, NV, SD, TN, TX, WA, WY — pages exist, call out "no state income tax."

---

## Ad Strategy

Same placement as paybreakdown:
1. Below calculator results
2. Sidebar (desktop only)
3. In-content between FAQ and internal links

Slots render empty until publisher ID is configured. `AdUnit.vue` component copied from paybreakdown.

---

## SEO Requirements (every page)

- Unique `<title>`: `{State} 1099 Tax Calculator 2026 | [brand]`
- Unique `<meta description>`
- Schema.org `FAQPage` markup on state pages
- Schema.org `WebApplication` markup on all calculator pages
- `<link rel="canonical">` set correctly
- Open Graph tags
- Breadcrumbs on every page
- Internal links to related calculators and neighboring states
- `sitemap.xml` covering all generated URLs
- `robots.txt`

---

## Responsive Design

- Tailwind CSS, same breakpoints as paybreakdown
- Fully functional at 375px (mobile), 768px (tablet), 1280px+ (desktop)
- Calculator inputs and pie chart usable on all breakpoints

---

## Pages Required for AdSense Approval

- `/about` — establishes site credibility
- `/privacy` — discloses cookies, analytics, AdSense data collection
- `/terms` — states calculators are for informational purposes only, not tax advice
- Footer: Privacy link, Terms link, "Not tax advice" disclaimer on every page

---

## Content Quality (Anti-Thin-Content)

All state copy comes from paybreakdown's `uniqueCopy` and `faqs` fields — already written, already unique.
The deduction calculator state pages should add 1-2 sentences specific to the deduction
calculator angle (e.g., "California requires SDI payments which cannot be deducted as a
business expense" or "Texas has no income tax, so deductions only offset federal and SE tax").

---

## What Is Reused from Paybreakdown (Copy, Not Rebuild)

| Asset | Source path |
|-------|-------------|
| `useFederalTax.ts` | `app/composables/useFederalTax.ts` |
| `useStateTax.ts` | `app/composables/useStateTax.ts` |
| `useFICA.ts` | `app/composables/useFICA.ts` |
| `useSelfEmploymentTax.ts` | `app/composables/useSelfEmploymentTax.ts` |
| `usePaycheck.ts` | `app/composables/usePaycheck.ts` |
| `useJsonLd.ts` | `app/composables/useJsonLd.ts` |
| `data/types.ts` | `data/types.ts` |
| `data/federal/` | `data/federal/` |
| `data/states/` | `data/states/` |
| `AdUnit.vue` | `app/components/AdUnit.vue` |
| `FaqSection.vue` | `app/components/FaqSection.vue` |
| `Breadcrumb.vue` | `app/components/Breadcrumb.vue` |
| `StateLinks.vue` | `app/components/StateLinks.vue` |
| `TaxBracketTable.vue` | `app/components/TaxBracketTable.vue` |
| `ResultsBreakdown.vue` | `app/components/ResultsBreakdown.vue` |
| `QuarterlyEstimator.vue` (base) | `app/components/QuarterlyEstimator.vue` |
| `nuxt.config.ts` (adapt) | `nuxt.config.ts` |
| `tailwind.config.js` | `tailwind.config.js` |

## What Gets Built New

| Asset | Notes |
|-------|-------|
| `SelfEmploymentCalculator.vue` | 1099-focused widget (no W-2 toggle, deeper SE output) |
| `FreelancerDeductionCalculator.vue` | New component for deduction calc inputs + results |
| `useDeductions.ts` | Composable: IRS deduction caps → adjusted income → calls usePaycheck |
| `pages/index.vue` | Homepage with 1099 hero, cross-links to all 3 calculators |
| `pages/1099-tax-calculator/` | index + [state] |
| `pages/quarterly-tax-estimator/` | index + [state], adapted from paybreakdown |
| `pages/freelancer-deduction-calculator/` | index + [state] (new) |
| `pages/about.vue`, `privacy.vue`, `terms.vue` | Standard pages |
| `app.vue`, `layouts/default.vue` | Adapted from paybreakdown |

---

## Out of Scope for v1

- W-2 paycheck calculator (different product — belongs on paybreakdown)
- Blog/informational content
- User accounts or saved calculations
- PDF export
- Email capture
- Affiliate links (add post-launch)
- City-level pages (add after state pages are indexed)

---

## Verification Criteria

1. `npm run generate` — all 153+ static pages build without errors
2. Lighthouse: Performance 90+, SEO 100
3. 1099 calc on $80,000 income, single, California:
   - SE tax ≈ $11,304 (80000 × 0.9235 × 0.153)
   - SE deduction ≈ $5,652
   - Federal taxable ≈ $58,448 (80000 − 5652 − 16100 standard deduction)
   - Net result within $10 of IRS tax estimator
4. Quarterly estimator: 4 equal payments × 4 = total annual tax
5. Deduction calc: $10,000 in deductions reduces SE tax by ~$1,413 (10000 × 0.9235 × 0.153)
6. All 51 state pages render with correct brackets
7. `sitemap.xml` contains all generated URLs
8. Schema markup validates via Google Rich Results Test
9. Calculator usable at 375px width
10. Ad slots present in DOM, empty without publisher ID
