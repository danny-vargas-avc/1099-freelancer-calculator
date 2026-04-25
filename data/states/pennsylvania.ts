import type { StateTaxData } from '../types'

export const pennsylvania: StateTaxData = {
  name: 'Pennsylvania',
  abbreviation: 'PA',
  slug: 'pennsylvania',
  hasIncomeTax: true,
  flatRate: 0.0307,
  cities: [
    { name: 'Philadelphia', slug: 'philadelphia', localTaxRate: 0.0375 },
    { name: 'Pittsburgh', slug: 'pittsburgh', localTaxRate: 0.03 },
    { name: 'Allentown', slug: 'allentown', localTaxRate: 0.01975 },
    { name: 'Erie', slug: 'erie', localTaxRate: 0.0118 },
    { name: 'Reading', slug: 'reading', localTaxRate: 0.036 },
    { name: 'Scranton', slug: 'scranton', localTaxRate: 0.0334 },
    { name: 'Bethlehem', slug: 'bethlehem', localTaxRate: 0.01 },
    { name: 'Lancaster', slug: 'lancaster', localTaxRate: 0.02 },
    { name: 'Harrisburg', slug: 'harrisburg', localTaxRate: 0.02 },
    { name: 'York', slug: 'york', localTaxRate: 0.0175 },
  ],
  uniqueCopy: `Pennsylvania has one of the simplest income tax structures in the country — a flat 3.07% rate on all taxable income, applied uniformly across all income levels with no standard deduction at the state level for wages. This low rate makes Pennsylvania one of the more tax-friendly states for mid-to-high earners. However, Pennsylvania is notable for having widespread local earned income taxes: most municipalities and school districts add 1-3% on top of the state rate, with Philadelphia charging 3.75% for residents.

Here's what a single Pennsylvania filer keeps in 2026 (state tax only, excluding local EIT): on a $50,000 salary, take-home is $40,820 per year ($3,402/month), with $1,535 going to state income tax. At $80,000, you keep $62,654 ($5,221/month), paying $2,456 in state tax. At $100,000, take-home is $76,110 ($6,343/month) with $3,070 in state tax. At $150,000, you keep $109,186 ($9,099/month) with $4,605 in state tax. Philadelphia residents should subtract an additional 3.75% city tax: roughly $1,875 more at $50,000, $3,000 more at $80,000.

Pennsylvania's low flat rate is particularly favorable for higher earners compared to progressive states. Versus New York at $100,000, a Pennsylvania worker keeps $1,790 more per year in state taxes. Against New Jersey at $100,000, Pennsylvania workers save approximately $1,175 annually. Pennsylvania's 3.07% rate has been politically stable for decades and is unlikely to change dramatically, making it a reliable low-tax environment for long-term financial planning.

Watch out: Local earned income taxes (EIT) in Pennsylvania are significant and surprisingly easy to miss. If you work in Philadelphia, you owe a 3.75% city wage tax as a resident (3.44% for non-residents) on top of the 3.07% state rate — a combined 6.82% total. That combined rate is higher than many full state income tax rates in other states. For workers in Pittsburgh, the local rate is 3%, combining with state for 6.07% total. Always check your specific municipality's EIT rate when calculating actual take-home pay in Pennsylvania.`,
  faqs: [
  {
    question: "What is the Pennsylvania state income tax rate for 2026?",
    answer: "Pennsylvania has a flat state income tax rate of 3.07% on all earned income."
  },
  {
    question: "Does Philadelphia have a city income tax?",
    answer: "Yes. Philadelphia charges 3.75% for city residents and 3.44% for non-residents working in the city. Combined with the state rate, Philadelphia residents pay 6.82% total."
  },
  {
    question: "Does Pittsburgh have a city income tax?",
    answer: "Yes. Pittsburgh charges a 3% local income tax. Combined with the 3.07% state rate, Pittsburgh residents pay about 6.07% total."
  },
  {
    question: "How does Pennsylvania compare to New Jersey for take-home pay?",
    answer: "For workers outside major cities, Pennsylvania's 3.07% flat rate is much more favorable than New Jersey's rates (5.53%+ for most middle earners). But Philadelphia's 3.75% city tax narrows or eliminates that gap for Philly workers."
  }
],
}
