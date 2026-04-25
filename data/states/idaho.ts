import type { StateTaxData } from '../types'

export const idaho: StateTaxData = {
  name: 'Idaho',
  abbreviation: 'ID',
  slug: 'idaho',
  hasIncomeTax: true,
  flatRate: 0.053,
  standardDeduction: { single: 16100, married: 32200 },
  cities: [
    { name: 'Boise', slug: 'boise', localTaxRate: 0 },
    { name: 'Meridian', slug: 'meridian', localTaxRate: 0 },
    { name: 'Nampa', slug: 'nampa', localTaxRate: 0 },
    { name: 'Idaho Falls', slug: 'idaho-falls', localTaxRate: 0 },
    { name: 'Pocatello', slug: 'pocatello', localTaxRate: 0 },
    { name: 'Caldwell', slug: 'caldwell', localTaxRate: 0 },
    { name: 'Coeur d\'Alene', slug: 'coeur-dalene', localTaxRate: 0 },
    { name: 'Twin Falls', slug: 'twin-falls', localTaxRate: 0 },
    { name: 'Lewiston', slug: 'lewiston', localTaxRate: 0 },
    { name: 'Post Falls', slug: 'post-falls', localTaxRate: 0 },
  ],
  uniqueCopy: `Idaho has a flat income tax rate of 5.3% on all taxable income. Idaho recently moved from a progressive system to a flat rate, simplifying tax filing for residents. The standard deduction matches the federal amount — $16,100 for single filers — which is among the most generous in the country and means a significant portion of income escapes state tax entirely. Idaho has no local city income taxes, so your paycheck is consistent across Boise, Nampa, Meridian, and every other city. Idaho's overall tax burden sits near the middle nationally — not as low as no-income-tax neighbors Washington and Nevada, but well below high-tax California. Idaho has been a destination for tech workers and remote workers relocating from California, partially driven by the lower income tax burden and cost of living.`,
  faqs: [
  {
    question: "What is the Idaho income tax rate for 2026?",
    answer: "Idaho has a flat income tax rate of 5.3% on all taxable income."
  },
  {
    question: "Does Idaho use the federal standard deduction?",
    answer: "Yes. Idaho's standard deduction matches the federal amount — $16,100 for single filers in 2026. This is higher than most states."
  },
  {
    question: "Do Idaho cities charge local income tax?",
    answer: "No. No city in Idaho imposes a local income tax on wages."
  },
  {
    question: "How does Idaho compare to neighboring states?",
    answer: "Idaho workers pay more than those in no-income-tax Washington and Nevada, but significantly less than California workers. The 5.3% flat rate is comparable to Montana's top rate of 5.65%."
  }
],
}
