import type { StateTaxData } from '../types'

export const iowa: StateTaxData = {
  name: 'Iowa',
  abbreviation: 'IA',
  slug: 'iowa',
  hasIncomeTax: true,
  flatRate: 0.038,
  standardDeduction: { single: 16100, married: 32200 },
  cities: [
    { name: 'Des Moines', slug: 'des-moines', localTaxRate: 0 },
    { name: 'Cedar Rapids', slug: 'cedar-rapids', localTaxRate: 0 },
    { name: 'Davenport', slug: 'davenport', localTaxRate: 0 },
    { name: 'Sioux City', slug: 'sioux-city', localTaxRate: 0 },
    { name: 'Iowa City', slug: 'iowa-city', localTaxRate: 0 },
    { name: 'Waterloo', slug: 'waterloo', localTaxRate: 0 },
    { name: 'Ames', slug: 'ames', localTaxRate: 0 },
    { name: 'West Des Moines', slug: 'west-des-moines', localTaxRate: 0 },
    { name: 'Ankeny', slug: 'ankeny', localTaxRate: 0 },
    { name: 'Dubuque', slug: 'dubuque', localTaxRate: 0 },
  ],
  uniqueCopy: `Iowa reformed its income tax system and now has a flat rate of 3.8% for 2026, down significantly from what was previously a multi-bracket system with rates up to 8.53%. Iowa's flat rate mirrors the federal standard deduction ($16,100 for single filers), making the standard deduction one of the most generous in the country at the state level. Iowa is continuing to phase down its rate — the long-term target is 3.9% (which it already hit ahead of schedule). Iowa has no local city income taxes. Compared to neighboring Wisconsin (up to 7.65%) and Illinois (4.95% flat), Iowa's 3.8% flat rate is meaningfully more favorable. Minnesota to the north charges up to 9.85%, making Iowa a relatively attractive option for workers near the border.`,
  faqs: [
  {
    question: "What is the Iowa income tax rate for 2026?",
    answer: "Iowa has a flat income tax rate of 3.8% on all taxable income for 2026."
  },
  {
    question: "Has Iowa recently reduced its income tax?",
    answer: "Yes significantly. Iowa cut from a progressive system with a top rate of 8.53% to a flat 3.8%, one of the larger state income tax reductions in recent years."
  },
  {
    question: "Do Iowa cities charge local income tax?",
    answer: "No. No city in Iowa imposes a local income tax on wages."
  },
  {
    question: "How does Iowa compare to neighboring states?",
    answer: "Iowa's 3.8% flat rate is lower than Illinois (4.95%), Wisconsin (up to 7.65%), and Minnesota (up to 9.85%). It is higher than no-income-tax neighbors like South Dakota."
  }
],
}
