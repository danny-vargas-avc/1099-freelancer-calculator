import type { StateTaxData } from '../types'

export const northDakota: StateTaxData = {
  name: 'North Dakota',
  abbreviation: 'ND',
  slug: 'north-dakota',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 48475, rate: 0 },
      { min: 48475, max: 244825, rate: 0.0195 },
      { min: 244825, max: Infinity, rate: 0.025 },
    ],
    married: [
      { min: 0, max: 81350, rate: 0 },
      { min: 81350, max: 244825, rate: 0.0195 },
      { min: 244825, max: Infinity, rate: 0.025 },
    ],
  },
  standardDeduction: { single: 16100, married: 32200 },
  cities: [
    { name: 'Fargo', slug: 'fargo', localTaxRate: 0 },
    { name: 'Bismarck', slug: 'bismarck', localTaxRate: 0 },
    { name: 'Grand Forks', slug: 'grand-forks', localTaxRate: 0 },
    { name: 'Minot', slug: 'minot', localTaxRate: 0 },
    { name: 'West Fargo', slug: 'west-fargo', localTaxRate: 0 },
    { name: 'Williston', slug: 'williston', localTaxRate: 0 },
    { name: 'Dickinson', slug: 'dickinson', localTaxRate: 0 },
    { name: 'Mandan', slug: 'mandan', localTaxRate: 0 },
    { name: 'Jamestown', slug: 'jamestown', localTaxRate: 0 },
    { name: 'Wahpeton', slug: 'wahpeton', localTaxRate: 0 },
  ],
  uniqueCopy: `North Dakota has one of the lowest income tax burdens in the nation. Income under $48,475 is taxed at 0% for single filers — meaning most North Dakota workers pay no state income tax at all. Above that threshold, the rate is just 1.95%, rising to 2.5% above $244,825. North Dakota's standard deduction mirrors the federal amount ($16,100 for single filers). No North Dakota city charges a local income tax. North Dakota's oil and gas production has historically funded much of state government, allowing very low income tax rates. Compared to neighboring Minnesota (up to 9.85%) and South Dakota (no income tax), North Dakota sits closer to South Dakota for most earners. Fargo and Bismarck workers effectively pay 0% state income tax on average salaries.`,
  faqs: [
  {
    question: "What is the North Dakota income tax rate for 2026?",
    answer: "Income up to $48,475 is taxed at 0% for single filers. The rate is 1.95% from $48,475 to $244,825, and 2.5% above that."
  },
  {
    question: "Do most North Dakota workers pay state income tax?",
    answer: "No. Since the 0% bracket extends to $48,475 for single filers, many North Dakota workers pay little to no state income tax."
  },
  {
    question: "Do North Dakota cities charge local income tax?",
    answer: "No. No city in North Dakota charges a local income tax on wages."
  },
  {
    question: "How does North Dakota compare to Minnesota for take-home pay?",
    answer: "Significantly better. A North Dakota single filer earning $80,000 pays roughly $620 in state income tax, while a Minnesota single filer at the same income pays roughly $4,700."
  }
],
}
