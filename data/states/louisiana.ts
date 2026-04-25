import type { StateTaxData } from '../types'

export const louisiana: StateTaxData = {
  name: 'Louisiana',
  abbreviation: 'LA',
  slug: 'louisiana',
  hasIncomeTax: true,
  flatRate: 0.03,
  standardDeduction: { single: 12875, married: 25750 },
  cities: [
    { name: 'New Orleans', slug: 'new-orleans', localTaxRate: 0 },
    { name: 'Baton Rouge', slug: 'baton-rouge', localTaxRate: 0 },
    { name: 'Shreveport', slug: 'shreveport', localTaxRate: 0 },
    { name: 'Metairie', slug: 'metairie', localTaxRate: 0 },
    { name: 'Lafayette', slug: 'lafayette', localTaxRate: 0 },
    { name: 'Lake Charles', slug: 'lake-charles', localTaxRate: 0 },
    { name: 'Bossier City', slug: 'bossier-city', localTaxRate: 0 },
    { name: 'Monroe', slug: 'monroe', localTaxRate: 0 },
    { name: 'Alexandria', slug: 'alexandria', localTaxRate: 0 },
    { name: 'Kenner', slug: 'kenner', localTaxRate: 0 },
  ],
  uniqueCopy: `Louisiana simplified its income tax to a flat rate of 3% for 2026, down from a previously tiered system with rates up to 4.25%. The flat rate applies uniformly to all income above a modest personal exemption. Louisiana's standard deduction of $12,875 is relatively generous. Louisiana has no local city income taxes on wages. Louisiana is notable for allowing residents to deduct federal income taxes paid on their state return — one of only a handful of states that does this, which reduces the effective state tax burden. Compared to neighboring Texas (no income tax) and Mississippi (4% flat), Louisiana's 3% rate is competitive. The overall state tax burden in Louisiana tends to be moderate, though sales taxes (among the highest in the nation when combined with local rates) affect overall affordability.`,
  faqs: [
  {
    question: "What is the Louisiana income tax rate for 2026?",
    answer: "Louisiana has a flat income tax rate of 3% on all taxable income for 2026."
  },
  {
    question: "Does Louisiana allow a deduction for federal taxes paid?",
    answer: "Yes. Louisiana allows residents to deduct their federal income tax liability when calculating state taxable income, which is uncommon and reduces the effective state tax rate."
  },
  {
    question: "Do Louisiana cities charge local income tax?",
    answer: "No. No city in Louisiana charges a local income tax on wages."
  },
  {
    question: "How does Louisiana compare to Texas for take-home pay?",
    answer: "Texas has no income tax, so Texas workers take home more. But Louisiana's 3% flat rate is among the lower rates for states that do have income tax."
  }
],
}
