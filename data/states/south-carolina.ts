import type { StateTaxData } from '../types'

export const southCarolina: StateTaxData = {
  name: 'South Carolina',
  abbreviation: 'SC',
  slug: 'south-carolina',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 3640, rate: 0 },
      { min: 3640, max: 18230, rate: 0.03 },
      { min: 18230, max: Infinity, rate: 0.06 },
    ],
    married: [
      { min: 0, max: 3640, rate: 0 },
      { min: 3640, max: 18230, rate: 0.03 },
      { min: 18230, max: Infinity, rate: 0.06 },
    ],
  },
  standardDeduction: { single: 8350, married: 16700 },
  cities: [
    { name: 'Columbia', slug: 'columbia', localTaxRate: 0 },
    { name: 'Charleston', slug: 'charleston', localTaxRate: 0 },
    { name: 'North Charleston', slug: 'north-charleston', localTaxRate: 0 },
    { name: 'Mount Pleasant', slug: 'mount-pleasant', localTaxRate: 0 },
    { name: 'Rock Hill', slug: 'rock-hill', localTaxRate: 0 },
    { name: 'Greenville', slug: 'greenville', localTaxRate: 0 },
    { name: 'Summerville', slug: 'summerville', localTaxRate: 0 },
    { name: 'Goose Creek', slug: 'goose-creek', localTaxRate: 0 },
    { name: 'Hilton Head Island', slug: 'hilton-head-island', localTaxRate: 0 },
    { name: 'Sumter', slug: 'sumter', localTaxRate: 0 },
  ],
  uniqueCopy: `South Carolina has a three-bracket income tax system where the first $3,640 is tax-free, followed by 3% up to $18,230, and 6% above that. The 6% top rate is among the higher rates in the Southeast. South Carolina's standard deduction of $8,350 for single filers is moderate. No South Carolina city charges a local income tax on wages. South Carolina has been discussing income tax reform to reduce the top rate, and some reductions have occurred in recent years. Compared to neighboring North Carolina (3.99% flat, trending lower) and Georgia (5.19% flat), South Carolina's 6% top rate is higher. Workers in Charleston and Greenville — fast-growing metros attracting remote workers from higher-tax states — still benefit from no local city income tax.`,
  faqs: [
  {
    question: "What is the South Carolina income tax rate for 2026?",
    answer: "South Carolina has three brackets: 0% up to $3,640, 3% from $3,640 to $18,230, and 6% above $18,230 for single filers."
  },
  {
    question: "Do South Carolina cities charge local income tax?",
    answer: "No. No city in South Carolina charges a local income tax on wages."
  },
  {
    question: "How does South Carolina compare to North Carolina for take-home pay?",
    answer: "North Carolina's flat 3.99% rate is lower than South Carolina's 6% top rate for most middle-to-upper earners. A South Carolina worker earning $80,000 pays roughly $1,600 more in state income tax than the same earner in North Carolina."
  },
  {
    question: "Is South Carolina reducing its income tax?",
    answer: "South Carolina has been gradually reducing its top rate from 7% and has targeted 6% in recent years. Further reductions are under discussion."
  }
],
}
