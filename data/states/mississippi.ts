import type { StateTaxData } from '../types'

export const mississippi: StateTaxData = {
  name: 'Mississippi',
  abbreviation: 'MS',
  slug: 'mississippi',
  hasIncomeTax: true,
  flatRate: 0.04,
  standardDeduction: { single: 2300, married: 4600 },
  cities: [
    { name: 'Jackson', slug: 'jackson', localTaxRate: 0 },
    { name: 'Gulfport', slug: 'gulfport', localTaxRate: 0 },
    { name: 'Southaven', slug: 'southaven', localTaxRate: 0 },
    { name: 'Hattiesburg', slug: 'hattiesburg', localTaxRate: 0 },
    { name: 'Biloxi', slug: 'biloxi', localTaxRate: 0 },
    { name: 'Meridian', slug: 'meridian', localTaxRate: 0 },
    { name: 'Tupelo', slug: 'tupelo', localTaxRate: 0 },
    { name: 'Olive Branch', slug: 'olive-branch', localTaxRate: 0 },
    { name: 'Horn Lake', slug: 'horn-lake', localTaxRate: 0 },
    { name: 'Greenville', slug: 'greenville', localTaxRate: 0 },
  ],
  uniqueCopy: `Mississippi has a flat income tax rate of 4% — down from a tiered system with higher rates, as part of ongoing tax reform. Mississippi is one of the lowest-cost states to live in nationally, so the effective burden on workers' purchasing power is often lower than the nominal rate suggests. The standard deduction is $2,300 for single filers, which is on the lower end. Mississippi has no local city income taxes. Compared to neighboring Alabama (up to 5%), Tennessee (no income tax), and Louisiana (3% flat), Mississippi's 4% sits in the middle. Mississippi is continuing to reduce its income tax rate under recently enacted legislation, with further cuts planned in subsequent years.`,
  faqs: [
  {
    question: "What is the Mississippi income tax rate for 2026?",
    answer: "Mississippi has a flat income tax rate of 4% on all taxable income."
  },
  {
    question: "Is Mississippi reducing its income tax?",
    answer: "Yes. Mississippi has enacted income tax cuts and is phasing down the rate over several years under current legislation."
  },
  {
    question: "Do Mississippi cities charge local income tax?",
    answer: "No. No city in Mississippi charges a local income tax on wages."
  },
  {
    question: "How does Mississippi compare to Tennessee for take-home pay?",
    answer: "Tennessee has no income tax on wages, so Tennessee workers take home more than Mississippi workers. On an $60,000 salary, the difference is roughly $2,400 per year."
  }
],
}
