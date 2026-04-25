import type { StateTaxData } from '../types'

export const ohio: StateTaxData = {
  name: 'Ohio',
  abbreviation: 'OH',
  slug: 'ohio',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 26050, rate: 0 },
      { min: 26050, max: Infinity, rate: 0.0275 },
    ],
    married: [
      { min: 0, max: 26050, rate: 0 },
      { min: 26050, max: Infinity, rate: 0.0275 },
    ],
  },
  cities: [
    { name: 'Columbus', slug: 'columbus', localTaxRate: 0.025 },
    { name: 'Cleveland', slug: 'cleveland', localTaxRate: 0.025 },
    { name: 'Cincinnati', slug: 'cincinnati', localTaxRate: 0.018 },
    { name: 'Toledo', slug: 'toledo', localTaxRate: 0.0225 },
    { name: 'Akron', slug: 'akron', localTaxRate: 0.025 },
    { name: 'Dayton', slug: 'dayton', localTaxRate: 0.0225 },
    { name: 'Parma', slug: 'parma', localTaxRate: 0.025 },
    { name: 'Canton', slug: 'canton', localTaxRate: 0.02 },
    { name: 'Youngstown', slug: 'youngstown', localTaxRate: 0.0275 },
    { name: 'Lorain', slug: 'lorain', localTaxRate: 0.02 },
  ],
  uniqueCopy: `Ohio has a straightforward state income tax structure: income below $26,050 is completely untaxed, and income above that threshold is taxed at a flat 2.75%. On paper, this makes Ohio one of the lower state income tax states. In practice, Ohio is notable for having some of the most pervasive local income taxes in the country — nearly every city and municipality charges its own tax ranging from 1% to 2.75%, stacked on top of the state rate.

Here's what a single Ohio filer keeps in 2026 (state tax only, no city tax): on a $50,000 salary, take-home is $41,696 per year ($3,475/month), with just $659 in state income tax. At $80,000, you keep $63,626 ($5,302/month), paying $1,484 in state tax. At $100,000, take-home is $77,146 ($6,429/month) with $2,034 in state tax. At $150,000, you keep $110,382 ($9,199/month) with $3,409 in state tax. Add your city's local tax on top: Columbus and Cleveland workers at $80,000 pay an additional $2,000 per year in city income tax alone.

Ohio's low state rate looks attractive compared to Indiana (3.05%), Michigan (4.05%), and Pennsylvania (3.07%). But the local tax layer changes the math significantly for workers in major Ohio cities. Columbus workers face a combined 5.25% effective rate on income above $26,050. Cleveland workers face 5.25% as well. Workers in Cincinnati (1.8% city) face a lower 4.55% combined rate. Suburban Ohio workers in low-rate municipalities — sometimes under 1% local — benefit most from Ohio's competitive state rate.

Watch out: Ohio taxes based on where you work, not where you live. If you live in a low-tax suburb but commute into Columbus, you owe Columbus's 2.5% city income tax on all income earned within the city. Some municipalities have reciprocity agreements that credit local taxes paid elsewhere, but many do not. Getting this wrong is a common cause of unexpected April tax bills for Ohio workers — verify your work municipality's rate and any reciprocity rules with your employer's payroll department.`,
  faqs: [
  {
    question: "What is the Ohio state income tax rate for 2026?",
    answer: "Ohio taxes income above $26,050 at a flat 2.75%. Income below $26,050 is tax-free."
  },
  {
    question: "Does Columbus charge a city income tax?",
    answer: "Yes. Columbus charges a 2.5% city income tax. Combined with the state rate, Columbus workers pay roughly 5.25% on income above $26,050."
  },
  {
    question: "Does Cleveland charge a city income tax?",
    answer: "Yes. Cleveland charges a 2.5% city income tax, making it one of the higher combined tax burdens in Ohio."
  },
  {
    question: "What is Cincinnati's local income tax rate?",
    answer: "Cincinnati charges 1.8% local income tax. Combined with Ohio's state rate, Cincinnati workers pay roughly 4.55% on income above $26,050."
  }
],
}
