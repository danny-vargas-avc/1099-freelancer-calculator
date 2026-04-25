import type { StateTaxData } from '../types'

export const oregon: StateTaxData = {
  name: 'Oregon',
  abbreviation: 'OR',
  slug: 'oregon',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 4550, rate: 0.0475 },
      { min: 4550, max: 11400, rate: 0.0675 },
      { min: 11400, max: 125000, rate: 0.0875 },
      { min: 125000, max: Infinity, rate: 0.099 },
    ],
    married: [
      { min: 0, max: 9100, rate: 0.0475 },
      { min: 9100, max: 22800, rate: 0.0675 },
      { min: 22800, max: 250000, rate: 0.0875 },
      { min: 250000, max: Infinity, rate: 0.099 },
    ],
  },
  standardDeduction: { single: 2910, married: 5820 },
  cities: [
    { name: 'Portland', slug: 'portland', localTaxRate: 0 },
    { name: 'Salem', slug: 'salem', localTaxRate: 0 },
    { name: 'Eugene', slug: 'eugene', localTaxRate: 0 },
    { name: 'Gresham', slug: 'gresham', localTaxRate: 0 },
    { name: 'Hillsboro', slug: 'hillsboro', localTaxRate: 0 },
    { name: 'Beaverton', slug: 'beaverton', localTaxRate: 0 },
    { name: 'Bend', slug: 'bend', localTaxRate: 0 },
    { name: 'Medford', slug: 'medford', localTaxRate: 0 },
    { name: 'Springfield', slug: 'springfield', localTaxRate: 0 },
    { name: 'Corvallis', slug: 'corvallis', localTaxRate: 0 },
  ],
  uniqueCopy: `Oregon has a four-bracket progressive income tax with a top rate of 9.9% — among the highest in the country for middle and upper earners. The 8.75% bracket kicks in at just $11,400 for single filers, meaning workers who earn a modest income still face high marginal rates. Oregon's standard deduction of $2,910 for single filers is among the lowest in the nation, further increasing taxable income. However, Oregon has no statewide sales tax — one of only five states without one. This sales tax benefit partially offsets the income tax burden for consumption-focused spending. No Oregon city charges a local income tax on wages (though the Portland Metro area has a separate business income tax for high earners). Oregon workers in Portland take home noticeably less than comparable workers in nearby Vancouver, Washington, which has no income tax.`,
  faqs: [
  {
    question: "What is the Oregon income tax rate for 2026?",
    answer: "Oregon has four brackets: 4.75% up to $4,550, 6.75% from $4,550 to $11,400, 8.75% from $11,400 to $125,000, and 9.9% above $125,000 for single filers."
  },
  {
    question: "Does Oregon have a sales tax?",
    answer: "No. Oregon has no statewide sales tax, which partially offsets the income tax burden for everyday purchases."
  },
  {
    question: "How does Portland compare to Vancouver, WA for take-home pay?",
    answer: "Vancouver, Washington has no state income tax. A Portland worker earning $80,000 pays roughly $5,500+ more in state income tax than the same earner across the river in Vancouver, WA."
  },
  {
    question: "Do Oregon cities charge local income tax?",
    answer: "No standard city income tax. However, the Portland Metro area has a Supportive Housing Services tax and Multnomah County has a Preschool for All tax that may apply to higher earners."
  }
],
}
