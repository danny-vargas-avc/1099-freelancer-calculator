import type { StateTaxData } from '../types'

export const westVirginia: StateTaxData = {
  name: 'West Virginia',
  abbreviation: 'WV',
  slug: 'west-virginia',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 10000, rate: 0.0222 },
      { min: 10000, max: 25000, rate: 0.0296 },
      { min: 25000, max: 40000, rate: 0.0333 },
      { min: 40000, max: 60000, rate: 0.0444 },
      { min: 60000, max: Infinity, rate: 0.0482 },
    ],
    married: [
      { min: 0, max: 10000, rate: 0.0222 },
      { min: 10000, max: 25000, rate: 0.0296 },
      { min: 25000, max: 40000, rate: 0.0333 },
      { min: 40000, max: 60000, rate: 0.0444 },
      { min: 60000, max: Infinity, rate: 0.0482 },
    ],
  },
  cities: [
    { name: 'Charleston', slug: 'charleston', localTaxRate: 0 },
    { name: 'Huntington', slug: 'huntington', localTaxRate: 0 },
    { name: 'Morgantown', slug: 'morgantown', localTaxRate: 0 },
    { name: 'Parkersburg', slug: 'parkersburg', localTaxRate: 0 },
    { name: 'Wheeling', slug: 'wheeling', localTaxRate: 0 },
    { name: 'Weirton', slug: 'weirton', localTaxRate: 0 },
    { name: 'Fairmont', slug: 'fairmont', localTaxRate: 0 },
    { name: 'Beckley', slug: 'beckley', localTaxRate: 0 },
    { name: 'Clarksburg', slug: 'clarksburg', localTaxRate: 0 },
    { name: 'Martinsburg', slug: 'martinsburg', localTaxRate: 0 },
  ],
  uniqueCopy: `West Virginia has a five-bracket progressive income tax with rates from 2.22% to 4.82%. West Virginia has been actively reducing its income tax rates in recent years as part of a broader economic development strategy. The top rate of 4.82% on income above $60,000 is moderate nationally. West Virginia has no local city income taxes. West Virginia's standard deduction structure is limited, but personal exemptions help reduce taxable income. Compared to neighboring Virginia (effective 5.75% for most) and Pennsylvania (3.07% flat), West Virginia falls in the middle. West Virginia's overall affordability is enhanced by a very low cost of living, which partially offsets the income tax burden on purchasing power.`,
  faqs: [
  {
    question: "What is the West Virginia income tax rate for 2026?",
    answer: "West Virginia has five brackets from 2.22% on income up to $10,000 to 4.82% on income above $60,000 for single filers."
  },
  {
    question: "Is West Virginia reducing its income tax?",
    answer: "Yes. West Virginia has been actively cutting income tax rates over the past few years as part of an effort to attract businesses and residents."
  },
  {
    question: "Do West Virginia cities charge local income tax?",
    answer: "No. No city in West Virginia charges a local income tax on wages."
  },
  {
    question: "How does West Virginia compare to Virginia for take-home pay?",
    answer: "West Virginia's top rate of 4.82% is lower than Virginia's effective rate of 5.75% for most earners. A West Virginia worker earning $80,000 saves roughly $750 per year in state income tax compared to a Virginia worker."
  }
],
}
