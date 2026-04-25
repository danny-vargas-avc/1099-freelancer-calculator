import type { StateTaxData } from '../types'

export const colorado: StateTaxData = {
  name: 'Colorado',
  abbreviation: 'CO',
  slug: 'colorado',
  hasIncomeTax: true,
  flatRate: 0.044,
  standardDeduction: { single: 16100, married: 32200 },
  cities: [
    { name: 'Denver', slug: 'denver', localTaxRate: 0 },
    { name: 'Colorado Springs', slug: 'colorado-springs', localTaxRate: 0 },
    { name: 'Aurora', slug: 'aurora', localTaxRate: 0 },
    { name: 'Fort Collins', slug: 'fort-collins', localTaxRate: 0 },
    { name: 'Lakewood', slug: 'lakewood', localTaxRate: 0 },
    { name: 'Thornton', slug: 'thornton', localTaxRate: 0 },
    { name: 'Arvada', slug: 'arvada', localTaxRate: 0 },
    { name: 'Westminster', slug: 'westminster', localTaxRate: 0 },
    { name: 'Pueblo', slug: 'pueblo', localTaxRate: 0 },
    { name: 'Boulder', slug: 'boulder', localTaxRate: 0 },
  ],
  uniqueCopy: `Colorado has a flat income tax rate of 4.4% on all taxable income. Colorado's constitution requires a flat tax — not a graduated one — and the state has a unique taxpayer protection mechanism called TABOR (Taxpayer's Bill of Rights) that limits how much tax revenue the government can keep and requires excess revenue to be refunded to taxpayers. In recent years, TABOR refunds have been significant. Colorado's standard deduction mirrors the federal standard deduction ($16,100 for single filers in 2026), which is higher than most states and means less of your income is taxable at the state level. No Colorado city charges a local income tax. Compared to neighboring Utah (4.5%) and New Mexico (up to 5.9%), Colorado's 4.4% flat rate offers a slightly lower burden for most workers.`,
  faqs: [
  {
    question: "What is the Colorado income tax rate for 2026?",
    answer: "Colorado has a flat income tax rate of 4.4% on all taxable income."
  },
  {
    question: "What is TABOR and does it affect my taxes?",
    answer: "TABOR is Colorado's Taxpayer's Bill of Rights. It limits state revenue growth and requires excess collections to be refunded. You may receive a TABOR refund check separate from your paycheck."
  },
  {
    question: "Do Colorado cities charge local income tax?",
    answer: "No. No city in Colorado imposes a local income tax on wages."
  },
  {
    question: "Does Colorado use the federal standard deduction?",
    answer: "Yes. Colorado's standard deduction matches the federal amount — $16,100 for single filers in 2026. This is higher than most states' standard deductions."
  }
],
}
