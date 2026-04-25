import type { StateTaxData } from '../types'

export const minnesota: StateTaxData = {
  name: 'Minnesota',
  abbreviation: 'MN',
  slug: 'minnesota',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 33310, rate: 0.0535 },
      { min: 33310, max: 109430, rate: 0.068 },
      { min: 109430, max: 203150, rate: 0.0785 },
      { min: 203150, max: Infinity, rate: 0.0985 },
    ],
    married: [
      { min: 0, max: 48780, rate: 0.0535 },
      { min: 48780, max: 194070, rate: 0.068 },
      { min: 194070, max: 329850, rate: 0.0785 },
      { min: 329850, max: Infinity, rate: 0.0985 },
    ],
  },
  standardDeduction: { single: 15300, married: 30600 },
  cities: [
    { name: 'Minneapolis', slug: 'minneapolis', localTaxRate: 0 },
    { name: 'Saint Paul', slug: 'saint-paul', localTaxRate: 0 },
    { name: 'Rochester', slug: 'rochester', localTaxRate: 0 },
    { name: 'Duluth', slug: 'duluth', localTaxRate: 0 },
    { name: 'Brooklyn Park', slug: 'brooklyn-park', localTaxRate: 0 },
    { name: 'Plymouth', slug: 'plymouth', localTaxRate: 0 },
    { name: 'Maple Grove', slug: 'maple-grove', localTaxRate: 0 },
    { name: 'Woodbury', slug: 'woodbury', localTaxRate: 0 },
    { name: 'St. Cloud', slug: 'st-cloud', localTaxRate: 0 },
    { name: 'Eagan', slug: 'eagan', localTaxRate: 0 },
  ],
  uniqueCopy: `Minnesota has a four-bracket progressive income tax system with a top rate of 9.85% — one of the highest top rates in the country. Middle earners are also notably impacted: the 6.8% rate kicks in at just $33,310 for single filers, meaning a worker earning $60,000 pays 6.8% on most of their income. Minnesota's standard deduction of $15,300 is relatively generous. Minnesota has no local city income taxes on wages. Compared to neighboring Wisconsin (up to 7.65%), Iowa (3.8% flat), and North Dakota (up to 2.5%), Minnesota's burden is significantly higher — especially for earners in the $100K-$200K range who face the 7.85% bracket. Minneapolis and St. Paul workers pay Minnesota state tax only, with no additional city income tax.`,
  faqs: [
  {
    question: "What is the Minnesota income tax rate for 2026?",
    answer: "Minnesota has four brackets: 5.35% up to $33,310, 6.8% from $33,310 to $109,430, 7.85% from $109,430 to $203,150, and 9.85% above $203,150 for single filers."
  },
  {
    question: "Do Minneapolis or St. Paul charge city income tax?",
    answer: "No. Neither Minneapolis nor St. Paul charges a local city income tax on wages."
  },
  {
    question: "Is Minnesota one of the highest-taxed states?",
    answer: "Yes, particularly for higher earners. Minnesota's top rate of 9.85% is among the top 5 highest state income tax rates in the country."
  },
  {
    question: "How does Minnesota compare to neighboring North Dakota?",
    answer: "Dramatically. North Dakota's income tax is 0% up to $48,475 and maxes at 2.5%. A Minnesota resident earning $150,000 pays nearly $9,000 more in state income tax than a North Dakota resident at the same income."
  }
],
}
