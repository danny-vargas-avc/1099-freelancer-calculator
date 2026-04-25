import type { StateTaxData } from '../types'

export const nevada: StateTaxData = {
  name: 'Nevada',
  abbreviation: 'NV',
  slug: 'nevada',
  hasIncomeTax: false,
  cities: [
    { name: 'Las Vegas', slug: 'las-vegas', localTaxRate: 0 },
    { name: 'Henderson', slug: 'henderson', localTaxRate: 0 },
    { name: 'Reno', slug: 'reno', localTaxRate: 0 },
    { name: 'North Las Vegas', slug: 'north-las-vegas', localTaxRate: 0 },
    { name: 'Sparks', slug: 'sparks', localTaxRate: 0 },
    { name: 'Carson City', slug: 'carson-city', localTaxRate: 0 },
    { name: 'Fernley', slug: 'fernley', localTaxRate: 0 },
    { name: 'Elko', slug: 'elko', localTaxRate: 0 },
    { name: 'Mesquite', slug: 'mesquite', localTaxRate: 0 },
    { name: 'Boulder City', slug: 'boulder-city', localTaxRate: 0 },
  ],
  uniqueCopy: `Nevada is one of nine states with no state income tax. Nevada's government is funded largely through gaming taxes, sales taxes, and tourism revenue. No Nevada city charges a local income tax. Las Vegas and Reno workers keep 100% of their state-level income — no state deductions whatsoever. Compared to neighboring California (up to 13.3% + 1.1% SDI) and Utah (4.5% flat), Nevada's advantage is substantial. A worker earning $100,000 in Las Vegas takes home roughly $9,000–$13,000 more per year than the same earner in California. Nevada does have a higher-than-average sales tax (6.85% state rate, up to 8.375% with county additions), but for wage earners, the no-income-tax benefit far outweighs the sales tax difference.`,
  faqs: [
  {
    question: "Does Nevada have a state income tax?",
    answer: "No. Nevada has no state income tax on wages or most forms of income."
  },
  {
    question: "Do Nevada cities charge local income tax?",
    answer: "No. Las Vegas, Henderson, Reno, and all other Nevada cities charge no local income tax."
  },
  {
    question: "How much more do I take home in Nevada vs California?",
    answer: "Significantly more. On a $100,000 salary, a Nevada worker takes home roughly $9,000–$13,000 more per year than a California worker, due to California's high income tax rates and SDI."
  },
  {
    question: "What taxes does a Nevada employee still pay?",
    answer: "Nevada employees pay federal income tax and FICA only — Social Security (6.2% up to $184,500) and Medicare (1.45%). No state or local income tax."
  }
],
}
