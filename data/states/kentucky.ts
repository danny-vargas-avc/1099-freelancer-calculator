import type { StateTaxData } from '../types'

export const kentucky: StateTaxData = {
  name: 'Kentucky',
  abbreviation: 'KY',
  slug: 'kentucky',
  hasIncomeTax: true,
  flatRate: 0.035,
  standardDeduction: { single: 3360, married: 3360 },
  cities: [
    { name: 'Louisville', slug: 'louisville', localTaxRate: 0.022 },
    { name: 'Lexington', slug: 'lexington', localTaxRate: 0.0225 },
    { name: 'Bowling Green', slug: 'bowling-green', localTaxRate: 0.0195 },
    { name: 'Owensboro', slug: 'owensboro', localTaxRate: 0.0195 },
    { name: 'Covington', slug: 'covington', localTaxRate: 0.0225 },
    { name: 'Hopkinsville', slug: 'hopkinsville', localTaxRate: 0 },
    { name: 'Richmond', slug: 'richmond', localTaxRate: 0 },
    { name: 'Florence', slug: 'florence', localTaxRate: 0 },
    { name: 'Georgetown', slug: 'georgetown', localTaxRate: 0 },
    { name: 'Henderson', slug: 'henderson', localTaxRate: 0.015 },
  ],
  uniqueCopy: `Kentucky has a flat state income tax rate of 3.5%, but many of Kentucky's cities and counties also charge local occupational taxes — making Kentucky one of the more complex states for paycheck calculations. Louisville (Jefferson County) charges a 2.2% occupational tax, Lexington-Fayette charges 2.25%, and dozens of smaller cities have their own rates ranging from 1% to 2.5%. The combination of state and local taxes means Louisville workers pay about 5.7% total, and Lexington workers pay about 5.75%. Kentucky's standard deduction is $3,360 — lower than most states. Compared to neighboring Tennessee (no income tax) and Indiana (2.95% state), Kentucky's combined burden is notably higher for workers in major cities.`,
  faqs: [
  {
    question: "What is the Kentucky state income tax rate for 2026?",
    answer: "Kentucky has a flat state income tax rate of 3.5%. However, many cities and counties charge additional local occupational taxes ranging from 1% to 2.5%."
  },
  {
    question: "Does Louisville have a local income tax?",
    answer: "Yes. Louisville (Jefferson County) charges a 2.2% occupational license fee on wages. Combined with the 3.5% state rate, Louisville workers pay about 5.7% total."
  },
  {
    question: "Does Lexington have a local income tax?",
    answer: "Yes. Lexington-Fayette Urban County charges a 2.25% occupational license fee. Combined with state tax, Lexington workers pay about 5.75% total."
  },
  {
    question: "How does Kentucky compare to Tennessee for take-home pay?",
    answer: "Tennessee has no state income tax, so Tennessee workers take home meaningfully more than Kentucky workers, especially those in cities with local taxes."
  }
],
}
