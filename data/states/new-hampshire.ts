import type { StateTaxData } from '../types'

export const newHampshire: StateTaxData = {
  name: 'New Hampshire',
  abbreviation: 'NH',
  slug: 'new-hampshire',
  hasIncomeTax: false,
  cities: [
    { name: 'Manchester', slug: 'manchester', localTaxRate: 0 },
    { name: 'Nashua', slug: 'nashua', localTaxRate: 0 },
    { name: 'Concord', slug: 'concord', localTaxRate: 0 },
    { name: 'Derry', slug: 'derry', localTaxRate: 0 },
    { name: 'Dover', slug: 'dover', localTaxRate: 0 },
    { name: 'Rochester', slug: 'rochester', localTaxRate: 0 },
    { name: 'Salem', slug: 'salem', localTaxRate: 0 },
    { name: 'Merrimack', slug: 'merrimack', localTaxRate: 0 },
    { name: 'Hudson', slug: 'hudson', localTaxRate: 0 },
    { name: 'Londonderry', slug: 'londonderry', localTaxRate: 0 },
  ],
  uniqueCopy: `New Hampshire has no income tax on wages or salaries, making it one of nine states where workers keep their full earnings at the state level. New Hampshire previously taxed interest and dividend income (the "Interest and Dividends Tax"), but that tax was fully eliminated as of January 1, 2025. New Hampshire also has no statewide sales tax. The state is funded primarily through property taxes — which are among the highest in the nation on a per-capita basis — and various other fees. No New Hampshire city charges a local income tax. For workers commuting from Massachusetts into New Hampshire, the Massachusetts-New Hampshire border is a notable tax boundary: New Hampshire workers pay no state income tax while Massachusetts workers pay 5%.`,
  faqs: [
  {
    question: "Does New Hampshire have a state income tax?",
    answer: "No. New Hampshire has no income tax on wages or salaries. The Interest and Dividends Tax on investment income was also eliminated as of January 1, 2025."
  },
  {
    question: "Does New Hampshire have a sales tax?",
    answer: "No. New Hampshire has no statewide sales tax, making it one of only five states with neither an income tax nor a sales tax."
  },
  {
    question: "Do New Hampshire cities charge local income tax?",
    answer: "No. No city in New Hampshire charges a local income tax on wages."
  },
  {
    question: "What taxes does a New Hampshire employee pay?",
    answer: "New Hampshire employees pay federal income tax and FICA only. There is no state or local income tax on wages."
  }
],
}
