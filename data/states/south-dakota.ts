import type { StateTaxData } from '../types'

export const southDakota: StateTaxData = {
  name: 'South Dakota',
  abbreviation: 'SD',
  slug: 'south-dakota',
  hasIncomeTax: false,
  cities: [
    { name: 'Sioux Falls', slug: 'sioux-falls', localTaxRate: 0 },
    { name: 'Rapid City', slug: 'rapid-city', localTaxRate: 0 },
    { name: 'Aberdeen', slug: 'aberdeen', localTaxRate: 0 },
    { name: 'Brookings', slug: 'brookings', localTaxRate: 0 },
    { name: 'Watertown', slug: 'watertown', localTaxRate: 0 },
    { name: 'Mitchell', slug: 'mitchell', localTaxRate: 0 },
    { name: 'Yankton', slug: 'yankton', localTaxRate: 0 },
    { name: 'Pierre', slug: 'pierre', localTaxRate: 0 },
    { name: 'Huron', slug: 'huron', localTaxRate: 0 },
    { name: 'Spearfish', slug: 'spearfish', localTaxRate: 0 },
  ],
  uniqueCopy: `South Dakota is one of nine states with no state income tax, and it also has no corporate income tax. South Dakota funds its government primarily through sales tax, property tax, and video lottery revenue. No city in South Dakota charges a local income tax. Sioux Falls and Rapid City workers keep 100% of their earnings at the state level. South Dakota consistently ranks as one of the most tax-friendly states for individuals nationally. Compared to neighboring Minnesota (up to 9.85%) and Iowa (3.8% flat), South Dakota's advantage is substantial. The overall cost of living in South Dakota is well below the national average, amplifying the effective take-home benefit. South Dakota is a popular state for incorporation and trusts due to its favorable tax and legal environment.`,
  faqs: [
  {
    question: "Does South Dakota have a state income tax?",
    answer: "No. South Dakota has no state income tax on wages or most forms of income."
  },
  {
    question: "Do South Dakota cities charge local income tax?",
    answer: "No. No city in South Dakota charges a local income tax on wages."
  },
  {
    question: "How much more do I take home in South Dakota vs Minnesota?",
    answer: "Significantly more. On an $80,000 salary, a South Dakota worker takes home roughly $4,000–$5,000 more per year than the same earner in Minnesota, which has rates up to 9.85%."
  },
  {
    question: "What taxes does a South Dakota employee still pay?",
    answer: "South Dakota employees pay federal income tax and FICA — Social Security (6.2% up to $184,500) and Medicare (1.45%). No state or local income tax applies."
  }
],
}
