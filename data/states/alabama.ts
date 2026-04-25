import type { StateTaxData } from '../types'

export const alabama: StateTaxData = {
  name: 'Alabama',
  abbreviation: 'AL',
  slug: 'alabama',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 500, rate: 0.02 },
      { min: 500, max: 3000, rate: 0.04 },
      { min: 3000, max: Infinity, rate: 0.05 },
    ],
    married: [
      { min: 0, max: 1000, rate: 0.02 },
      { min: 1000, max: 6000, rate: 0.04 },
      { min: 6000, max: Infinity, rate: 0.05 },
    ],
  },
  standardDeduction: { single: 3000, married: 8500 },
  cities: [
    { name: 'Birmingham', slug: 'birmingham', localTaxRate: 0 },
    { name: 'Montgomery', slug: 'montgomery', localTaxRate: 0 },
    { name: 'Huntsville', slug: 'huntsville', localTaxRate: 0 },
    { name: 'Mobile', slug: 'mobile', localTaxRate: 0 },
    { name: 'Tuscaloosa', slug: 'tuscaloosa', localTaxRate: 0 },
    { name: 'Hoover', slug: 'hoover', localTaxRate: 0 },
    { name: 'Dothan', slug: 'dothan', localTaxRate: 0 },
    { name: 'Auburn', slug: 'auburn', localTaxRate: 0 },
    { name: 'Decatur', slug: 'decatur', localTaxRate: 0 },
    { name: 'Madison', slug: 'madison', localTaxRate: 0 },
  ],
  uniqueCopy: `Alabama uses a three-bracket progressive system with rates from 2% to 5%, making it a relatively low-tax state by national standards. The top rate of 5% kicks in at just $3,000 for single filers — a very low threshold that means most workers hit the top rate quickly. However, because the overall rates stay modest, Alabama's effective tax burden remains well below high-tax states like California or New York. Alabama has no local city income taxes, so your take-home is the same statewide. The state's standard deduction is $3,000 for single filers — lower than the federal deduction — but Alabama also allows a deduction for federal income taxes paid, which is uncommon and reduces your taxable income further. Compared to neighboring Tennessee and Florida (which have no income tax), Alabama workers pay modestly more in state tax but benefit from a lower cost of living overall.`,
  faqs: [
  {
    question: "What is the Alabama state income tax rate?",
    answer: "Alabama has three brackets: 2% on the first $500, 4% from $500 to $3,000, and 5% on income above $3,000 for single filers. Most workers pay an effective rate between 4% and 5%."
  },
  {
    question: "Does Alabama allow a deduction for federal taxes paid?",
    answer: "Yes. Alabama is one of a few states that allows you to deduct your federal income tax liability from your Alabama taxable income, reducing your state tax bill."
  },
  {
    question: "Do Alabama cities charge local income tax?",
    answer: "No. Alabama cities do not impose local income taxes on wages."
  },
  {
    question: "How does Alabama compare to neighboring states for take-home pay?",
    answer: "Alabama workers take home slightly less than those in no-income-tax states like Tennessee and Florida, but more than workers in higher-rate states like Georgia (5.19% flat) or North Carolina (3.99% flat)."
  }
],
}
