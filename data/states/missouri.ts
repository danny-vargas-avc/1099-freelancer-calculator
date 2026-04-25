import type { StateTaxData } from '../types'

export const missouri: StateTaxData = {
  name: 'Missouri',
  abbreviation: 'MO',
  slug: 'missouri',
  hasIncomeTax: true,
  flatRate: 0.02,
  standardDeduction: { single: 16100, married: 32200 },
  cities: [
    { name: 'Kansas City', slug: 'kansas-city', localTaxRate: 0.01 },
    { name: 'St. Louis', slug: 'st-louis', localTaxRate: 0.01 },
    { name: 'Springfield', slug: 'springfield', localTaxRate: 0 },
    { name: 'Columbia', slug: 'columbia', localTaxRate: 0 },
    { name: 'Independence', slug: 'independence', localTaxRate: 0 },
    { name: 'Lee\'s Summit', slug: 'lees-summit', localTaxRate: 0 },
    { name: 'O\'Fallon', slug: 'ofallon', localTaxRate: 0 },
    { name: 'St. Joseph', slug: 'st-joseph', localTaxRate: 0 },
    { name: 'St. Charles', slug: 'st-charles', localTaxRate: 0 },
    { name: 'Blue Springs', slug: 'blue-springs', localTaxRate: 0 },
  ],
  uniqueCopy: `Missouri recently cut its income tax to a flat rate of 2% — one of the lowest income tax rates among states that have one. Missouri has been aggressively reducing its income tax as part of a multi-year reform effort. Two Missouri cities do charge local income taxes: Kansas City charges 1% and St. Louis charges 1% on wages earned within city limits. Outside these two cities, no local income taxes apply. Missouri's standard deduction mirrors the federal amount ($16,100 for single filers), which is generous. Compared to neighboring Kansas (5.2% flat) and Illinois (4.95% flat), Missouri's 2% flat rate is dramatically lower, making it one of the more attractive states in the Midwest for take-home pay — particularly outside Kansas City and St. Louis.`,
  faqs: [
  {
    question: "What is the Missouri income tax rate for 2026?",
    answer: "Missouri has a flat income tax rate of 2% on all taxable income for 2026."
  },
  {
    question: "Does Kansas City Missouri have a local income tax?",
    answer: "Yes. Kansas City charges a 1% earnings tax on wages earned within city limits. Combined with the state rate, Kansas City workers pay 3% total."
  },
  {
    question: "Does St. Louis have a local income tax?",
    answer: "Yes. St. Louis charges a 1% earnings tax on wages. Combined with the state rate, St. Louis workers pay 3% total."
  },
  {
    question: "How does Missouri compare to Kansas for take-home pay?",
    answer: "Missouri's 2% flat rate is dramatically lower than Kansas's 5.2% flat rate. On an $80,000 salary, a Missouri worker saves roughly $2,560 per year in state income tax compared to a Kansas worker."
  }
],
}
