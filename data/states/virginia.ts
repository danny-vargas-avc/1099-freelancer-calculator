import type { StateTaxData } from '../types'

export const virginia: StateTaxData = {
  name: 'Virginia',
  abbreviation: 'VA',
  slug: 'virginia',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 3000, rate: 0.02 },
      { min: 3000, max: 5000, rate: 0.03 },
      { min: 5000, max: 17000, rate: 0.05 },
      { min: 17000, max: Infinity, rate: 0.0575 },
    ],
    married: [
      { min: 0, max: 3000, rate: 0.02 },
      { min: 3000, max: 5000, rate: 0.03 },
      { min: 5000, max: 17000, rate: 0.05 },
      { min: 17000, max: Infinity, rate: 0.0575 },
    ],
  },
  standardDeduction: { single: 8750, married: 17500 },
  cities: [
    { name: 'Virginia Beach', slug: 'virginia-beach', localTaxRate: 0 },
    { name: 'Norfolk', slug: 'norfolk', localTaxRate: 0 },
    { name: 'Chesapeake', slug: 'chesapeake', localTaxRate: 0 },
    { name: 'Richmond', slug: 'richmond', localTaxRate: 0 },
    { name: 'Newport News', slug: 'newport-news', localTaxRate: 0 },
    { name: 'Alexandria', slug: 'alexandria', localTaxRate: 0 },
    { name: 'Hampton', slug: 'hampton', localTaxRate: 0 },
    { name: 'Roanoke', slug: 'roanoke', localTaxRate: 0 },
    { name: 'Portsmouth', slug: 'portsmouth', localTaxRate: 0 },
    { name: 'Suffolk', slug: 'suffolk', localTaxRate: 0 },
  ],
  uniqueCopy: `Virginia has a four-bracket progressive income tax with a top rate of 5.75%, but Virginia's brackets are notably outdated — the top bracket starts at just $17,000, which is far below what most states consider "high income." This means almost every Virginia worker above a modest salary pays the 5.75% top rate, making Virginia effectively a near-flat 5.75% tax for most earners. Virginia's standard deduction of $8,750 for single filers is moderate. No Virginia city charges a local income tax on wages. Compared to neighboring North Carolina (3.99% flat) and Maryland (up to 6.5% plus county taxes), Virginia's effective rate for most earners is competitive. Virginia has long been expected to update its brackets but has not done so, leaving the outdated structure in place.`,
  faqs: [
  {
    question: "What is the Virginia income tax rate for 2026?",
    answer: "Virginia has four brackets from 2% to 5.75%. Because the top bracket starts at just $17,000, most Virginia workers pay the 5.75% rate on nearly all their taxable income."
  },
  {
    question: "Why do Virginia brackets start so low?",
    answer: "Virginia's income tax brackets were set decades ago and have never been inflation-adjusted. The $17,000 top bracket threshold was significant when set but now captures almost every earner."
  },
  {
    question: "Do Virginia cities charge local income tax?",
    answer: "No. No city in Virginia charges a local income tax on wages."
  },
  {
    question: "How does Virginia compare to North Carolina for take-home pay?",
    answer: "North Carolina's 3.99% flat rate is lower than Virginia's effective near-flat 5.75% rate for most earners. On an $80,000 salary, a North Carolina worker saves roughly $1,400 per year in state income tax."
  }
],
}
