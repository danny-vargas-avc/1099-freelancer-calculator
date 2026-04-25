import type { StateTaxData } from '../types'

export const kansas: StateTaxData = {
  name: 'Kansas',
  abbreviation: 'KS',
  slug: 'kansas',
  hasIncomeTax: true,
  flatRate: 0.052,
  standardDeduction: { single: 3605, married: 8240 },
  cities: [
    { name: 'Wichita', slug: 'wichita', localTaxRate: 0 },
    { name: 'Overland Park', slug: 'overland-park', localTaxRate: 0 },
    { name: 'Kansas City', slug: 'kansas-city', localTaxRate: 0 },
    { name: 'Olathe', slug: 'olathe', localTaxRate: 0 },
    { name: 'Topeka', slug: 'topeka', localTaxRate: 0 },
    { name: 'Lawrence', slug: 'lawrence', localTaxRate: 0 },
    { name: 'Shawnee', slug: 'shawnee', localTaxRate: 0 },
    { name: 'Manhattan', slug: 'manhattan', localTaxRate: 0 },
    { name: 'Lenexa', slug: 'lenexa', localTaxRate: 0 },
    { name: 'Salina', slug: 'salina', localTaxRate: 0 },
  ],
  uniqueCopy: `Kansas has a flat income tax rate of 5.2% with a standard deduction of $3,605 for single filers — one of the lower standard deductions in the country, meaning more income is subject to state tax. Kansas recently consolidated from a multi-bracket system to a flat rate. Kansas has no local city income taxes. Kansas City, Kansas is separate from Kansas City, Missouri — the Missouri side has a 1% city income tax, the Kansas side does not. Compared to neighboring Missouri (2% flat) and Nebraska (up to 4.55%), Kansas workers pay more in state income tax. Oklahoma (up to 4.5%) to the south is also lower. The Midwest average puts Kansas near the higher end for the region despite its relatively modest 5.2% rate.`,
  faqs: [
  {
    question: "What is the Kansas income tax rate for 2026?",
    answer: "Kansas has a flat income tax rate of 5.2% on all taxable income."
  },
  {
    question: "Does Kansas City Kansas have a city income tax?",
    answer: "No. Kansas City, Kansas does not charge a city income tax. Note that Kansas City, Missouri (across the state line) does charge a 1% city income tax."
  },
  {
    question: "Do Kansas cities charge local income tax?",
    answer: "No. No city in Kansas imposes a local income tax on wages."
  },
  {
    question: "How does Kansas compare to neighboring states?",
    answer: "Kansas's 5.2% rate is higher than Missouri (2%), Nebraska (up to 4.55%), and Oklahoma (up to 4.5%), making it one of the higher-tax Midwestern states."
  }
],
}
