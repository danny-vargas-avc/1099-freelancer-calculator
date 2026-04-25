import type { StateTaxData } from '../types'

export const wyoming: StateTaxData = {
  name: 'Wyoming',
  abbreviation: 'WY',
  slug: 'wyoming',
  hasIncomeTax: false,
  cities: [
    { name: 'Cheyenne', slug: 'cheyenne', localTaxRate: 0 },
    { name: 'Casper', slug: 'casper', localTaxRate: 0 },
    { name: 'Laramie', slug: 'laramie', localTaxRate: 0 },
    { name: 'Gillette', slug: 'gillette', localTaxRate: 0 },
    { name: 'Rock Springs', slug: 'rock-springs', localTaxRate: 0 },
    { name: 'Sheridan', slug: 'sheridan', localTaxRate: 0 },
    { name: 'Green River', slug: 'green-river', localTaxRate: 0 },
    { name: 'Evanston', slug: 'evanston', localTaxRate: 0 },
    { name: 'Riverton', slug: 'riverton', localTaxRate: 0 },
    { name: 'Jackson', slug: 'jackson', localTaxRate: 0 },
  ],
  uniqueCopy: `Wyoming is one of nine states with no state income tax, and it also has no corporate income tax. Wyoming is funded primarily by mineral royalties from its significant coal, oil, and natural gas production. No Wyoming city charges a local income tax. Wyoming workers in Cheyenne, Casper, Laramie, and every other city keep 100% of their earnings at the state level. Wyoming has no estate or inheritance tax either, making it particularly attractive for wealth accumulation. Compared to neighboring Colorado (4.4% flat) and Utah (4.5% flat), Wyoming's no-income-tax status provides a substantial advantage. Wyoming also has a lower cost of living than many Western states, amplifying the effective take-home benefit for residents.`,
  faqs: [
  {
    question: "Does Wyoming have a state income tax?",
    answer: "No. Wyoming has no state income tax on wages, salaries, or most forms of income. It is one of the most tax-friendly states in the country."
  },
  {
    question: "Do Wyoming cities charge local income tax?",
    answer: "No. No city in Wyoming charges a local income tax on wages."
  },
  {
    question: "How does Wyoming compare to Colorado for take-home pay?",
    answer: "Wyoming workers take home more. On an $80,000 salary, a Wyoming worker saves roughly $3,500 per year in state income tax compared to a Colorado worker who pays 4.4%."
  },
  {
    question: "What taxes does a Wyoming employee still pay?",
    answer: "Wyoming employees pay federal income tax and FICA — Social Security (6.2% up to $184,500) and Medicare (1.45%). There is no state or local income tax."
  }
],
}
