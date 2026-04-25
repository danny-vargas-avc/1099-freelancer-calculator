import type { StateTaxData } from '../types'

export const northCarolina: StateTaxData = {
  name: 'North Carolina',
  abbreviation: 'NC',
  slug: 'north-carolina',
  hasIncomeTax: true,
  flatRate: 0.0399,
  standardDeduction: { single: 12750, married: 25500 },
  cities: [
    { name: 'Charlotte', slug: 'charlotte', localTaxRate: 0 },
    { name: 'Raleigh', slug: 'raleigh', localTaxRate: 0 },
    { name: 'Greensboro', slug: 'greensboro', localTaxRate: 0 },
    { name: 'Durham', slug: 'durham', localTaxRate: 0 },
    { name: 'Winston-Salem', slug: 'winston-salem', localTaxRate: 0 },
    { name: 'Fayetteville', slug: 'fayetteville', localTaxRate: 0 },
    { name: 'Cary', slug: 'cary', localTaxRate: 0 },
    { name: 'Wilmington', slug: 'wilmington', localTaxRate: 0 },
    { name: 'High Point', slug: 'high-point', localTaxRate: 0 },
    { name: 'Concord', slug: 'concord', localTaxRate: 0 },
  ],
  uniqueCopy: `North Carolina has a flat income tax rate of 3.99% and is on a legislated path to further reduce rates in future years — potentially reaching 2.49% by 2030. North Carolina's standard deduction of $12,750 for single filers is relatively generous. No North Carolina city charges a local income tax on wages. North Carolina's flat rate is below the national average for states with income tax, and its reform trajectory makes it increasingly competitive. Compared to neighboring Virginia (up to 5.75%), South Carolina (up to 6%), and Georgia (5.19% flat), North Carolina's 3.99% rate is notably lower. Charlotte and Raleigh workers, despite being in high-growth metro areas with higher costs of living, benefit from one of the lower state income tax rates in the Southeast.`,
  faqs: [
  {
    question: "What is the North Carolina income tax rate for 2026?",
    answer: "North Carolina has a flat income tax rate of 3.99% on all taxable income."
  },
  {
    question: "Is North Carolina reducing its income tax?",
    answer: "Yes. North Carolina has enacted legislation to reduce the flat rate incrementally, with a target of potentially reaching 2.49% by 2030 under current law."
  },
  {
    question: "Do North Carolina cities charge local income tax?",
    answer: "No. No city in North Carolina charges a local income tax on wages."
  },
  {
    question: "How does North Carolina compare to Virginia for take-home pay?",
    answer: "North Carolina's 3.99% rate is significantly lower than Virginia's top rate of 5.75%. On an $80,000 salary, a North Carolina worker saves roughly $1,400 per year compared to a Virginia worker."
  }
],
}
