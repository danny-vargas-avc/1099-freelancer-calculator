import type { StateTaxData } from '../types'

export const delaware: StateTaxData = {
  name: 'Delaware',
  abbreviation: 'DE',
  slug: 'delaware',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 2000, rate: 0 },
      { min: 2000, max: 5000, rate: 0.022 },
      { min: 5000, max: 10000, rate: 0.039 },
      { min: 10000, max: 20000, rate: 0.048 },
      { min: 20000, max: 25000, rate: 0.052 },
      { min: 25000, max: 60000, rate: 0.0555 },
      { min: 60000, max: Infinity, rate: 0.066 },
    ],
    married: [
      { min: 0, max: 2000, rate: 0 },
      { min: 2000, max: 5000, rate: 0.022 },
      { min: 5000, max: 10000, rate: 0.039 },
      { min: 10000, max: 20000, rate: 0.048 },
      { min: 20000, max: 25000, rate: 0.052 },
      { min: 25000, max: 60000, rate: 0.0555 },
      { min: 60000, max: Infinity, rate: 0.066 },
    ],
  },
  standardDeduction: { single: 3250, married: 6500 },
  cities: [
    { name: 'Wilmington', slug: 'wilmington', localTaxRate: 0 },
    { name: 'Dover', slug: 'dover', localTaxRate: 0 },
    { name: 'Newark', slug: 'newark', localTaxRate: 0 },
    { name: 'Middletown', slug: 'middletown', localTaxRate: 0 },
    { name: 'Smyrna', slug: 'smyrna', localTaxRate: 0 },
    { name: 'Milford', slug: 'milford', localTaxRate: 0 },
    { name: 'Seaford', slug: 'seaford', localTaxRate: 0 },
    { name: 'Georgetown', slug: 'georgetown', localTaxRate: 0 },
    { name: 'Elsmere', slug: 'elsmere', localTaxRate: 0 },
    { name: 'New Castle', slug: 'new-castle', localTaxRate: 0 },
  ],
  uniqueCopy: `Delaware has a six-bracket progressive income tax with rates from 0% (income under $2,000 is tax-free) up to 6.6%. Delaware is famous as a business incorporation hub — most Fortune 500 companies are incorporated there — but for wage earners, the income tax is moderate. There is no statewide sales tax in Delaware, which improves overall purchasing power. Delaware's 6.6% top rate on income above $60,000 means middle-to-upper earners face a meaningful state tax burden. No Delaware city charges a local income tax. Delaware allows a standard deduction of $3,250 for single filers. Compared to neighboring Maryland (which adds county income taxes on top of state rates) and Pennsylvania (flat 3.07%), Delaware falls in the middle for take-home pay.`,
  faqs: [
  {
    question: "What is the Delaware income tax rate for 2026?",
    answer: "Delaware has six brackets. Income under $2,000 is tax-free. Rates then rise from 2.2% to 6.6% on income above $60,000."
  },
  {
    question: "Does Delaware have a sales tax?",
    answer: "No. Delaware has no statewide sales tax, which is uncommon and improves overall affordability even though income taxes are moderate."
  },
  {
    question: "Do Delaware cities charge local income tax?",
    answer: "No. No city in Delaware imposes a local income tax on wages."
  },
  {
    question: "Why is Delaware popular for business incorporation if the taxes are not especially low?",
    answer: "Delaware's corporate law system and Court of Chancery make it favorable for businesses legally, not necessarily for personal income tax purposes."
  }
],
}
