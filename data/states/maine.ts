import type { StateTaxData } from '../types'

export const maine: StateTaxData = {
  name: 'Maine',
  abbreviation: 'ME',
  slug: 'maine',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 27399, rate: 0.058 },
      { min: 27399, max: 64849, rate: 0.0675 },
      { min: 64849, max: Infinity, rate: 0.0715 },
    ],
    married: [
      { min: 0, max: 54799, rate: 0.058 },
      { min: 54799, max: 129699, rate: 0.0675 },
      { min: 129699, max: Infinity, rate: 0.0715 },
    ],
  },
  standardDeduction: { single: 8350, married: 16700 },
  cities: [
    { name: 'Portland', slug: 'portland', localTaxRate: 0 },
    { name: 'Lewiston', slug: 'lewiston', localTaxRate: 0 },
    { name: 'Bangor', slug: 'bangor', localTaxRate: 0 },
    { name: 'South Portland', slug: 'south-portland', localTaxRate: 0 },
    { name: 'Auburn', slug: 'auburn', localTaxRate: 0 },
    { name: 'Biddeford', slug: 'biddeford', localTaxRate: 0 },
    { name: 'Sanford', slug: 'sanford', localTaxRate: 0 },
    { name: 'Augusta', slug: 'augusta', localTaxRate: 0 },
    { name: 'Saco', slug: 'saco', localTaxRate: 0 },
    { name: 'Westbrook', slug: 'westbrook', localTaxRate: 0 },
  ],
  uniqueCopy: `Maine has a three-bracket progressive income tax system with rates from 5.8% to 7.15%. Maine's top rate kicks in at $64,849 for single filers — a relatively low threshold for the 7.15% rate, meaning many middle-income earners hit the top bracket. Maine has no local city income taxes. The standard deduction of $8,350 for single filers is below the federal amount. Maine's overall tax burden tends to be higher than the national average, reflecting its traditionally strong public services including public school funding. Compared to neighboring New Hampshire (no income tax), Maine workers pay significantly more. Vermont to the west reaches up to 8.75%, making Maine slightly more favorable for upper earners. Massachusetts to the south is generally lower at 5% for most earners.`,
  faqs: [
  {
    question: "What is the Maine income tax rate for 2026?",
    answer: "Maine has three brackets: 5.8% up to $27,399, 6.75% from $27,399 to $64,849, and 7.15% above $64,849 for single filers."
  },
  {
    question: "Do Maine cities charge local income tax?",
    answer: "No. No city in Maine charges a local income tax on wages."
  },
  {
    question: "How does Maine compare to New Hampshire for take-home pay?",
    answer: "New Hampshire has no income tax on wages, making it significantly more favorable than Maine, especially for higher earners who hit Maine's 7.15% top rate."
  },
  {
    question: "What is Maine's standard deduction?",
    answer: "Maine's standard deduction is $8,350 for single filers in 2026 — lower than the federal $16,100, meaning more income is subject to state tax."
  }
],
}
