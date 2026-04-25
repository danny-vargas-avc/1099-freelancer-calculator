import type { StateTaxData } from '../types'

export const montana: StateTaxData = {
  name: 'Montana',
  abbreviation: 'MT',
  slug: 'montana',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 47500, rate: 0.047 },
      { min: 47500, max: Infinity, rate: 0.0565 },
    ],
    married: [
      { min: 0, max: 95000, rate: 0.047 },
      { min: 95000, max: Infinity, rate: 0.0565 },
    ],
  },
  standardDeduction: { single: 16100, married: 32200 },
  cities: [
    { name: 'Billings', slug: 'billings', localTaxRate: 0 },
    { name: 'Missoula', slug: 'missoula', localTaxRate: 0 },
    { name: 'Great Falls', slug: 'great-falls', localTaxRate: 0 },
    { name: 'Bozeman', slug: 'bozeman', localTaxRate: 0 },
    { name: 'Butte', slug: 'butte', localTaxRate: 0 },
    { name: 'Helena', slug: 'helena', localTaxRate: 0 },
    { name: 'Kalispell', slug: 'kalispell', localTaxRate: 0 },
    { name: 'Havre', slug: 'havre', localTaxRate: 0 },
    { name: 'Anaconda', slug: 'anaconda', localTaxRate: 0 },
    { name: 'Miles City', slug: 'miles-city', localTaxRate: 0 },
  ],
  uniqueCopy: `Montana has a two-bracket income tax system with rates of 4.7% and 5.65%, with the top rate applying to income above $47,500. Montana recently simplified from a more complex multi-bracket system. Montana has no statewide sales tax, which improves overall purchasing power for residents. No Montana city charges a local income tax. Montana's standard deduction mirrors the federal amount ($16,100 for single filers), which is generous. Compared to neighboring Idaho (5.3% flat) and Wyoming (no income tax), Montana falls in the middle. Montana's combination of no sales tax and moderate income tax rates makes it moderately tax-friendly overall, though the growing Bozeman and Billings metro areas have a higher cost of living than the tax burden alone suggests.`,
  faqs: [
  {
    question: "What is the Montana income tax rate for 2026?",
    answer: "Montana has two brackets: 4.7% on income up to $47,500 and 5.65% on income above $47,500 for single filers."
  },
  {
    question: "Does Montana have a sales tax?",
    answer: "No. Montana has no statewide sales tax, which is uncommon and improves overall purchasing power for residents."
  },
  {
    question: "Do Montana cities charge local income tax?",
    answer: "No. No city in Montana charges a local income tax on wages."
  },
  {
    question: "How does Montana compare to Wyoming for take-home pay?",
    answer: "Wyoming has no income tax, so Wyoming workers take home more than Montana workers. On an $80,000 salary, the difference is roughly $4,000–$4,500 per year."
  }
],
}
