import type { StateTaxData } from '../types'

export const arizona: StateTaxData = {
  name: 'Arizona',
  abbreviation: 'AZ',
  slug: 'arizona',
  hasIncomeTax: true,
  flatRate: 0.025,
  standardDeduction: { single: 8350, married: 16700 },
  cities: [
    { name: 'Phoenix', slug: 'phoenix', localTaxRate: 0 },
    { name: 'Tucson', slug: 'tucson', localTaxRate: 0 },
    { name: 'Mesa', slug: 'mesa', localTaxRate: 0 },
    { name: 'Chandler', slug: 'chandler', localTaxRate: 0 },
    { name: 'Scottsdale', slug: 'scottsdale', localTaxRate: 0 },
    { name: 'Gilbert', slug: 'gilbert', localTaxRate: 0 },
    { name: 'Glendale', slug: 'glendale', localTaxRate: 0 },
    { name: 'Tempe', slug: 'tempe', localTaxRate: 0 },
    { name: 'Peoria', slug: 'peoria', localTaxRate: 0 },
    { name: 'Surprise', slug: 'surprise', localTaxRate: 0 },
  ],
  uniqueCopy: `Arizona switched to a flat 2.5% income tax rate — one of the lowest flat rates in the country. Before 2023, Arizona had a multi-bracket system with rates up to 4.5%; the flat rate cut was significant for higher earners. At 2.5%, Arizona workers keep considerably more of their income than in neighboring California (up to 13.3%) or New Mexico (up to 5.9%). No Arizona city charges a local income tax, so your take-home is consistent across Phoenix, Tucson, Scottsdale, and every other city. Arizona's standard deduction of $8,350 for single filers is lower than the federal standard deduction, meaning slightly more income is taxable at the state level. Compared to the national average effective state income tax rate of roughly 4-5%, Arizona's 2.5% flat rate puts most workers well ahead.`,
  faqs: [
  {
    question: "What is the Arizona income tax rate for 2026?",
    answer: "Arizona has a flat income tax rate of 2.5% on all taxable income, regardless of how much you earn."
  },
  {
    question: "Did Arizona recently change its tax rate?",
    answer: "Yes. Arizona moved from a progressive multi-bracket system to a flat 2.5% rate starting in 2023, which was a significant reduction especially for higher earners."
  },
  {
    question: "Do Arizona cities charge local income tax?",
    answer: "No. No city in Arizona charges a local income tax on wages."
  },
  {
    question: "How does Arizona compare to California for take-home pay?",
    answer: "Significantly better. A single filer earning $80,000 in Arizona pays roughly $2,000 in state income tax (2.5%). The same earner in California pays roughly $5,500+ due to California's 9.3% rate at that income level."
  }
],
}
