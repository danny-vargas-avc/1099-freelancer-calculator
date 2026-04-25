import type { StateTaxData } from '../types'

export const vermont: StateTaxData = {
  name: 'Vermont',
  abbreviation: 'VT',
  slug: 'vermont',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 49400, rate: 0.0335 },
      { min: 49400, max: 119700, rate: 0.066 },
      { min: 119700, max: 249700, rate: 0.076 },
      { min: 249700, max: Infinity, rate: 0.0875 },
    ],
    married: [
      { min: 0, max: 82400, rate: 0.0335 },
      { min: 82400, max: 199450, rate: 0.066 },
      { min: 199450, max: 249700, rate: 0.076 },
      { min: 249700, max: Infinity, rate: 0.0875 },
    ],
  },
  standardDeduction: { single: 7650, married: 15300 },
  cities: [
    { name: 'Burlington', slug: 'burlington', localTaxRate: 0 },
    { name: 'South Burlington', slug: 'south-burlington', localTaxRate: 0 },
    { name: 'Rutland', slug: 'rutland', localTaxRate: 0 },
    { name: 'Essex', slug: 'essex', localTaxRate: 0 },
    { name: 'Colchester', slug: 'colchester', localTaxRate: 0 },
    { name: 'Shelburne', slug: 'shelburne', localTaxRate: 0 },
    { name: 'Milton', slug: 'milton', localTaxRate: 0 },
    { name: 'Barre', slug: 'barre', localTaxRate: 0 },
    { name: 'Montpelier', slug: 'montpelier', localTaxRate: 0 },
    { name: 'Williston', slug: 'williston', localTaxRate: 0 },
  ],
  uniqueCopy: `Vermont has a four-bracket progressive income tax system with rates from 3.35% to 8.75%. Vermont's top rate of 8.75% applies to income above $249,700, but the 6.6% rate kicks in at just $49,400, meaning many middle-income earners face high marginal rates. Vermont's standard deduction of $7,650 for single filers is below average nationally. Vermont has no local city income taxes. Vermont consistently ranks among the higher-taxed states in New England, behind only Maine (up to 7.15%) and Massachusetts (5% for most earners), though Vermont's top rate significantly exceeds Massachusetts for high earners. Vermont's tax revenue funds a strong social safety net and public services. Compared to neighboring New Hampshire (no income tax), Vermont workers pay significantly more.`,
  faqs: [
  {
    question: "What is the Vermont income tax rate for 2026?",
    answer: "Vermont has four brackets: 3.35% up to $49,400, 6.6% from $49,400 to $119,700, 7.6% from $119,700 to $249,700, and 8.75% above $249,700 for single filers."
  },
  {
    question: "Do Vermont cities charge local income tax?",
    answer: "No. No city in Vermont charges a local income tax on wages."
  },
  {
    question: "How does Vermont compare to New Hampshire for take-home pay?",
    answer: "New Hampshire has no state income tax on wages, making it significantly more favorable. A Vermont worker earning $80,000 pays roughly $3,800 more in state income tax than the same earner in New Hampshire."
  },
  {
    question: "Is Vermont one of the highest-taxed New England states?",
    answer: "Yes. Vermont's top rate of 8.75% is the highest in New England, though Massachusetts's 9% millionaires surtax applies at much higher income levels."
  }
],
}
