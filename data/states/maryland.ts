import type { StateTaxData } from '../types'

export const maryland: StateTaxData = {
  name: 'Maryland',
  abbreviation: 'MD',
  slug: 'maryland',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 1000, rate: 0.02 },
      { min: 1000, max: 2000, rate: 0.03 },
      { min: 2000, max: 3000, rate: 0.04 },
      { min: 3000, max: 100000, rate: 0.0475 },
      { min: 100000, max: 125000, rate: 0.05 },
      { min: 125000, max: 150000, rate: 0.0525 },
      { min: 150000, max: 250000, rate: 0.055 },
      { min: 250000, max: 500000, rate: 0.0575 },
      { min: 500000, max: 1000000, rate: 0.0625 },
      { min: 1000000, max: Infinity, rate: 0.065 },
    ],
    married: [
      { min: 0, max: 1000, rate: 0.02 },
      { min: 1000, max: 2000, rate: 0.03 },
      { min: 2000, max: 3000, rate: 0.04 },
      { min: 3000, max: 150000, rate: 0.0475 },
      { min: 150000, max: 175000, rate: 0.05 },
      { min: 175000, max: 225000, rate: 0.0525 },
      { min: 225000, max: 300000, rate: 0.055 },
      { min: 300000, max: 500000, rate: 0.0575 },
      { min: 500000, max: 1000000, rate: 0.0625 },
      { min: 1000000, max: Infinity, rate: 0.065 },
    ],
  },
  standardDeduction: { single: 3350, married: 6700 },
  cities: [
    { name: 'Baltimore', slug: 'baltimore', localTaxRate: 0.032 },
    { name: 'Columbia', slug: 'columbia', localTaxRate: 0.032 },
    { name: 'Germantown', slug: 'germantown', localTaxRate: 0.032 },
    { name: 'Silver Spring', slug: 'silver-spring', localTaxRate: 0.032 },
    { name: 'Waldorf', slug: 'waldorf', localTaxRate: 0.03 },
    { name: 'Ellicott City', slug: 'ellicott-city', localTaxRate: 0.032 },
    { name: 'Glen Burnie', slug: 'glen-burnie', localTaxRate: 0.0281 },
    { name: 'Rockville', slug: 'rockville', localTaxRate: 0.032 },
    { name: 'Frederick', slug: 'frederick', localTaxRate: 0.0296 },
    { name: 'Gaithersburg', slug: 'gaithersburg', localTaxRate: 0.032 },
  ],
  uniqueCopy: `Maryland has a progressive state income tax with rates up to 6.5%, but Maryland is distinctive because every county (and Baltimore City) adds its own income tax — called a county income tax — ranging from 2.25% to 3.2%. Baltimore City charges 3.2%, as do Montgomery and Prince George's Counties. This means Maryland workers in major areas effectively pay 9-10% in combined state and county income tax — among the highest effective rates in the nation for middle earners. Maryland's standard deduction is modest at $3,350 for single filers. No additional city-within-county income taxes apply beyond the county rate. Compared to neighboring Virginia (up to 5.75%, no county tax) and Pennsylvania (3.07% flat, city taxes in major cities), Maryland's combined burden is notably higher.`,
  faqs: [
  {
    question: "What is the Maryland income tax rate for 2026?",
    answer: "Maryland has a progressive state rate up to 6.5%, plus a mandatory county income tax (2.25% to 3.2% depending on your county). Most workers pay 8-10% combined."
  },
  {
    question: "Does Baltimore have a local income tax?",
    answer: "Baltimore City charges a 3.2% local income tax in addition to the state rate, for a combined rate of up to about 9.7% for Baltimore residents."
  },
  {
    question: "What are the county income tax rates in Maryland?",
    answer: "County rates range from 2.25% to 3.2%. Montgomery County, Prince George's County, and Baltimore City all charge 3.2% — the maximum allowed."
  },
  {
    question: "How does Maryland compare to Virginia for take-home pay?",
    answer: "Virginia workers typically take home more than Maryland workers. Virginia's top rate is 5.75% with no county income tax, versus Maryland's combined state+county rates of 8-10%."
  }
],
}
