import type { StateTaxData } from '../types'

export const oklahoma: StateTaxData = {
  name: 'Oklahoma',
  abbreviation: 'OK',
  slug: 'oklahoma',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 3750, rate: 0 },
      { min: 3750, max: 4900, rate: 0.025 },
      { min: 4900, max: 7200, rate: 0.035 },
      { min: 7200, max: Infinity, rate: 0.045 },
    ],
    married: [
      { min: 0, max: 7500, rate: 0 },
      { min: 7500, max: 9800, rate: 0.025 },
      { min: 9800, max: 12200, rate: 0.035 },
      { min: 12200, max: Infinity, rate: 0.045 },
    ],
  },
  standardDeduction: { single: 6350, married: 12700 },
  cities: [
    { name: 'Oklahoma City', slug: 'oklahoma-city', localTaxRate: 0 },
    { name: 'Tulsa', slug: 'tulsa', localTaxRate: 0 },
    { name: 'Norman', slug: 'norman', localTaxRate: 0 },
    { name: 'Broken Arrow', slug: 'broken-arrow', localTaxRate: 0 },
    { name: 'Edmond', slug: 'edmond', localTaxRate: 0 },
    { name: 'Lawton', slug: 'lawton', localTaxRate: 0 },
    { name: 'Moore', slug: 'moore', localTaxRate: 0 },
    { name: 'Midwest City', slug: 'midwest-city', localTaxRate: 0 },
    { name: 'Enid', slug: 'enid', localTaxRate: 0 },
    { name: 'Stillwater', slug: 'stillwater', localTaxRate: 0 },
  ],
  uniqueCopy: `Oklahoma has a progressive income tax with a top rate of 4.5%, with income under $3,750 untaxed. Oklahoma's standard deduction of $6,350 for single filers is moderate. No Oklahoma city charges a local income tax on wages. Oklahoma has significant oil and gas revenue that helps fund state government, which contributes to relatively moderate tax rates. Compared to neighboring Texas (no income tax), Oklahoma workers pay meaningfully more in state tax. Arkansas to the east has a lower top rate (3.9%), and Kansas to the north has a higher flat rate (5.2%). Oklahoma's 4.5% top rate is roughly in line with the regional average for the South Central states.`,
  faqs: [
  {
    question: "What is the Oklahoma income tax rate for 2026?",
    answer: "Oklahoma has four brackets: 0% up to $3,750, 2.5% from $3,750 to $4,900, 3.5% from $4,900 to $7,200, and 4.5% above $7,200 for single filers."
  },
  {
    question: "Do Oklahoma cities charge local income tax?",
    answer: "No. No city in Oklahoma charges a local income tax on wages."
  },
  {
    question: "How does Oklahoma compare to Texas for take-home pay?",
    answer: "Texas has no state income tax, so Texas workers take home more. On an $80,000 salary, the difference is roughly $3,000–$3,600 per year."
  },
  {
    question: "What is Oklahoma's standard deduction?",
    answer: "Oklahoma's standard deduction is $6,350 for single filers — lower than the federal standard deduction of $16,100."
  }
],
}
