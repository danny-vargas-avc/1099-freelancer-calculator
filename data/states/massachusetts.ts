import type { StateTaxData } from '../types'

export const massachusetts: StateTaxData = {
  name: 'Massachusetts',
  abbreviation: 'MA',
  slug: 'massachusetts',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 1083150, rate: 0.05 },
      { min: 1083150, max: Infinity, rate: 0.09 },
    ],
    married: [
      { min: 0, max: 1083150, rate: 0.05 },
      { min: 1083150, max: Infinity, rate: 0.09 },
    ],
  },
  cities: [
    { name: 'Boston', slug: 'boston', localTaxRate: 0 },
    { name: 'Worcester', slug: 'worcester', localTaxRate: 0 },
    { name: 'Springfield', slug: 'springfield', localTaxRate: 0 },
    { name: 'Lowell', slug: 'lowell', localTaxRate: 0 },
    { name: 'Cambridge', slug: 'cambridge', localTaxRate: 0 },
    { name: 'New Bedford', slug: 'new-bedford', localTaxRate: 0 },
    { name: 'Brockton', slug: 'brockton', localTaxRate: 0 },
    { name: 'Quincy', slug: 'quincy', localTaxRate: 0 },
    { name: 'Lynn', slug: 'lynn', localTaxRate: 0 },
    { name: 'Fall River', slug: 'fall-river', localTaxRate: 0 },
  ],
  uniqueCopy: `Massachusetts charges a flat 5% income tax rate on most income, with a 9% surtax on income above $1,083,150 (the "millionaires tax" passed in 2022). For the vast majority of earners, Massachusetts is effectively a flat 5% state — which is lower than many people assume given Massachusetts' reputation as "Taxachusetts." There is no Massachusetts standard deduction, but there are personal exemptions and various credits. Massachusetts has no local city income taxes. Compared to neighboring Rhode Island (3.75-5.99%), Connecticut (2-6.99%), and New Hampshire (no income tax), Massachusetts sits in the middle for most income levels. The high cost of living — especially in the Boston metro — means the overall affordability picture is more complex than the tax rate alone suggests.`,
  faqs: [
  {
    question: "What is the Massachusetts income tax rate for 2026?",
    answer: "Massachusetts charges 5% on most income, and 9% on income above $1,083,150 (the millionaires surtax)."
  },
  {
    question: "Does Massachusetts have local city income taxes?",
    answer: "No. No city in Massachusetts charges a local income tax on wages."
  },
  {
    question: "What is the Massachusetts \"millionaires tax\"?",
    answer: "A 4% surtax (on top of the regular 5% rate, for a 9% total) was added on income above approximately $1 million, approved by voters in 2022."
  },
  {
    question: "How does Massachusetts compare to New Hampshire for take-home pay?",
    answer: "New Hampshire has no income tax on wages, so New Hampshire workers take home significantly more than Massachusetts workers — roughly $4,000 more per year on an $80,000 salary."
  }
],
}
