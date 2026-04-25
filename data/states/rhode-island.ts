import type { StateTaxData } from '../types'

export const rhodeIsland: StateTaxData = {
  name: 'Rhode Island',
  abbreviation: 'RI',
  slug: 'rhode-island',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 82050, rate: 0.0375 },
      { min: 82050, max: 186450, rate: 0.0475 },
      { min: 186450, max: Infinity, rate: 0.0599 },
    ],
    married: [
      { min: 0, max: 164100, rate: 0.0375 },
      { min: 164100, max: 372900, rate: 0.0475 },
      { min: 372900, max: Infinity, rate: 0.0599 },
    ],
  },
  standardDeduction: { single: 11200, married: 22400 },
  cities: [
    { name: 'Providence', slug: 'providence', localTaxRate: 0 },
    { name: 'Warwick', slug: 'warwick', localTaxRate: 0 },
    { name: 'Cranston', slug: 'cranston', localTaxRate: 0 },
    { name: 'Pawtucket', slug: 'pawtucket', localTaxRate: 0 },
    { name: 'East Providence', slug: 'east-providence', localTaxRate: 0 },
    { name: 'Woonsocket', slug: 'woonsocket', localTaxRate: 0 },
    { name: 'Coventry', slug: 'coventry', localTaxRate: 0 },
    { name: 'Cumberland', slug: 'cumberland', localTaxRate: 0 },
    { name: 'North Providence', slug: 'north-providence', localTaxRate: 0 },
    { name: 'Johnston', slug: 'johnston', localTaxRate: 0 },
  ],
  uniqueCopy: `Rhode Island has a three-bracket progressive income tax with rates from 3.75% to 5.99%. Rhode Island's top rate of 5.99% kicks in above $186,450 for single filers. The standard deduction of $11,200 for single filers is moderate. Rhode Island has no local city income taxes on wages. As the smallest state in the country, Rhode Island has a fairly uniform income tax experience statewide. Compared to neighboring Massachusetts (5% flat for most earners) and Connecticut (2-6.99%), Rhode Island falls in the middle. Providence workers pay only the state rate with no additional city tax. Rhode Island's overall affordability is lower than its income tax burden suggests due to high property costs in the Providence metro area.`,
  faqs: [
  {
    question: "What is the Rhode Island income tax rate for 2026?",
    answer: "Rhode Island has three brackets: 3.75% up to $82,050, 4.75% from $82,050 to $186,450, and 5.99% above $186,450 for single filers."
  },
  {
    question: "Does Providence charge a city income tax?",
    answer: "No. Providence and all Rhode Island cities do not charge local income taxes on wages."
  },
  {
    question: "How does Rhode Island compare to Massachusetts for take-home pay?",
    answer: "Rhode Island's 3.75% rate for lower earners is better than Massachusetts's 5% flat rate. But for higher earners, Massachusetts's 5% rate beats Rhode Island's 5.99% top rate."
  },
  {
    question: "What is Rhode Island's standard deduction?",
    answer: "Rhode Island's standard deduction is $11,200 for single filers in 2026."
  }
],
}
