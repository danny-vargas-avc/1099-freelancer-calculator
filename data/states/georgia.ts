import type { StateTaxData } from '../types'

export const georgia: StateTaxData = {
  name: 'Georgia',
  abbreviation: 'GA',
  slug: 'georgia',
  hasIncomeTax: true,
  flatRate: 0.0519,
  standardDeduction: { single: 12000, married: 24000 },
  cities: [
    { name: 'Atlanta', slug: 'atlanta', localTaxRate: 0 },
    { name: 'Augusta', slug: 'augusta', localTaxRate: 0 },
    { name: 'Columbus', slug: 'columbus', localTaxRate: 0 },
    { name: 'Macon', slug: 'macon', localTaxRate: 0 },
    { name: 'Savannah', slug: 'savannah', localTaxRate: 0 },
    { name: 'Athens', slug: 'athens', localTaxRate: 0 },
    { name: 'Sandy Springs', slug: 'sandy-springs', localTaxRate: 0 },
    { name: 'Roswell', slug: 'roswell', localTaxRate: 0 },
    { name: 'Albany', slug: 'albany', localTaxRate: 0 },
    { name: 'Johns Creek', slug: 'johns-creek', localTaxRate: 0 },
  ],
  uniqueCopy: `Georgia moved to a flat income tax rate of 5.19% in 2024, transitioning from its previous graduated system. The rate is legislatively scheduled to gradually decrease toward 4.99% in future years as part of a broader tax reform package. Georgia has no local city income taxes — Atlanta, Savannah, Augusta, and every other city apply the same state rate. Combined with Georgia's relatively lower cost of living compared to coastal states, the effective financial picture for Georgia workers is often more favorable than the headline rate suggests.

Here's what a single Georgia filer keeps in 2026: on a $50,000 salary, take-home is $39,760 per year ($3,313/month), with $2,595 going to state income tax. At $80,000, you keep $60,958 ($5,080/month), paying $4,152 in state tax. At $100,000, take-home is $73,990 ($6,166/month) with $5,190 in state tax. At $150,000, you keep $106,006 ($8,834/month) with $7,785 in state tax.

Compared to Florida and Tennessee (no income tax on wages), a Georgia worker earning $80,000 pays $4,152 more per year in state income taxes. Against South Carolina (graduated to 6.5%) and North Carolina (4.75% flat), Georgia's 5.19% rate sits in the middle of the Southeast. At the same income levels, North Carolina workers take home about $352 more per year at $80,000 due to the lower flat rate. Georgia's forthcoming rate reductions will narrow these gaps over the next several years.

Watch out: Georgia's transition from a graduated to a flat tax system is recent enough that many workers and tax preparers may still reference the old bracket structure. If you moved to Georgia recently or are using old withholding tables, verify that your employer is withholding at the current 5.19% flat rate. Underwithholding under the old system can result in an unexpected balance due at filing time.`,
  faqs: [
  {
    question: "What is the Georgia income tax rate for 2026?",
    answer: "Georgia has a flat income tax rate of 5.19% on all taxable income for 2026."
  },
  {
    question: "Is Georgia's income tax rate going down?",
    answer: "Yes. Georgia's flat rate is scheduled to decrease incrementally under current law, with a long-term target around 4.99%."
  },
  {
    question: "Do Georgia cities charge local income tax?",
    answer: "No. No city in Georgia imposes a local income tax on wages."
  },
  {
    question: "How does Georgia compare to neighboring states for take-home pay?",
    answer: "Georgia workers pay more than those in no-income-tax Florida and Tennessee, but Georgia's 5.19% rate is comparable to other southeastern states and is trending downward."
  }
],
}
