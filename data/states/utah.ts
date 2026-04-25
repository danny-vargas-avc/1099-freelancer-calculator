import type { StateTaxData } from '../types'

export const utah: StateTaxData = {
  name: 'Utah',
  abbreviation: 'UT',
  slug: 'utah',
  hasIncomeTax: true,
  flatRate: 0.045,
  cities: [
    { name: 'Salt Lake City', slug: 'salt-lake-city', localTaxRate: 0 },
    { name: 'West Valley City', slug: 'west-valley-city', localTaxRate: 0 },
    { name: 'Provo', slug: 'provo', localTaxRate: 0 },
    { name: 'West Jordan', slug: 'west-jordan', localTaxRate: 0 },
    { name: 'Orem', slug: 'orem', localTaxRate: 0 },
    { name: 'Sandy', slug: 'sandy', localTaxRate: 0 },
    { name: 'Ogden', slug: 'ogden', localTaxRate: 0 },
    { name: 'St. George', slug: 'st-george', localTaxRate: 0 },
    { name: 'Layton', slug: 'layton', localTaxRate: 0 },
    { name: 'South Jordan', slug: 'south-jordan', localTaxRate: 0 },
  ],
  uniqueCopy: `Utah has a flat income tax rate of 4.5% on all taxable income. Utah uses a credit-based system rather than a traditional standard deduction — taxpayers receive a nonrefundable credit equal to 6% of the federal standard deduction amount, which functions similarly to a deduction for most filers. No Utah city charges a local income tax. Utah consistently ranks as one of the most business-friendly and tax-competitive states in the Mountain West. Compared to neighboring Nevada (no income tax) and Colorado (4.4% flat), Utah's 4.5% rate is competitive. Arizona's recent flat rate cut to 2.5% has made it more favorable than Utah for most earners. Utah has one of the fastest-growing economies and populations in the country, driven partly by its competitive tax environment relative to California.`,
  faqs: [
  {
    question: "What is the Utah income tax rate for 2026?",
    answer: "Utah has a flat income tax rate of 4.5% on all taxable income."
  },
  {
    question: "Does Utah have a standard deduction?",
    answer: "Utah uses a credit system rather than a traditional deduction. Taxpayers receive a nonrefundable credit equal to 6% of the federal standard deduction, which reduces tax owed."
  },
  {
    question: "Do Utah cities charge local income tax?",
    answer: "No. No city in Utah charges a local income tax on wages."
  },
  {
    question: "How does Utah compare to Nevada for take-home pay?",
    answer: "Nevada has no income tax, so Nevada workers take home more. On an $80,000 salary, a Nevada worker saves roughly $3,600 per year compared to a Utah worker."
  }
],
}
