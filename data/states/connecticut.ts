import type { StateTaxData } from '../types'

export const connecticut: StateTaxData = {
  name: 'Connecticut',
  abbreviation: 'CT',
  slug: 'connecticut',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 10000, rate: 0.02 },
      { min: 10000, max: 50000, rate: 0.045 },
      { min: 50000, max: 100000, rate: 0.055 },
      { min: 100000, max: 200000, rate: 0.06 },
      { min: 200000, max: 250000, rate: 0.065 },
      { min: 250000, max: 500000, rate: 0.069 },
      { min: 500000, max: Infinity, rate: 0.0699 },
    ],
    married: [
      { min: 0, max: 20000, rate: 0.02 },
      { min: 20000, max: 100000, rate: 0.045 },
      { min: 100000, max: 200000, rate: 0.055 },
      { min: 200000, max: 400000, rate: 0.06 },
      { min: 400000, max: 500000, rate: 0.065 },
      { min: 500000, max: 1000000, rate: 0.069 },
      { min: 1000000, max: Infinity, rate: 0.0699 },
    ],
  },
  cities: [
    { name: 'Bridgeport', slug: 'bridgeport', localTaxRate: 0 },
    { name: 'New Haven', slug: 'new-haven', localTaxRate: 0 },
    { name: 'Stamford', slug: 'stamford', localTaxRate: 0 },
    { name: 'Hartford', slug: 'hartford', localTaxRate: 0 },
    { name: 'Waterbury', slug: 'waterbury', localTaxRate: 0 },
    { name: 'Norwalk', slug: 'norwalk', localTaxRate: 0 },
    { name: 'Danbury', slug: 'danbury', localTaxRate: 0 },
    { name: 'New Britain', slug: 'new-britain', localTaxRate: 0 },
    { name: 'West Hartford', slug: 'west-hartford', localTaxRate: 0 },
    { name: 'Greenwich', slug: 'greenwich', localTaxRate: 0 },
  ],
  uniqueCopy: `Connecticut has a seven-bracket progressive income tax system with rates from 2% to 6.99%. Connecticut consistently ranks among the highest-tax states in the Northeast, with high property taxes, high income taxes, and a relatively high cost of living. The 6.99% top rate applies to income over $500,000, but middle earners face rates of 5.5-6.5% — well above the national average. Connecticut has no statewide local income tax on wages. One nuance: Connecticut offers a "tax benefit recapture" mechanism where higher earners effectively lose the benefit of lower brackets, meaning the marginal rate can appear higher for some income ranges. Compared to neighboring New York (up to 10.9%) and Massachusetts (5% flat), Connecticut sits in the middle but remains one of the heavier-taxed states nationally.`,
  faqs: [
  {
    question: "What is the Connecticut income tax rate for 2026?",
    answer: "Connecticut has seven brackets from 2% on income up to $10,000 to 6.99% on income above $500,000 for single filers."
  },
  {
    question: "Does Connecticut have local income taxes?",
    answer: "No. Connecticut does not have local or city income taxes on wages. Only the state rate applies."
  },
  {
    question: "How does Connecticut compare to New York for take-home pay?",
    answer: "Connecticut's top rate of 6.99% is lower than New York's 10.9% top rate, making Connecticut more favorable for high earners. For middle earners, the difference is smaller."
  },
  {
    question: "Does Connecticut have a standard deduction?",
    answer: "Connecticut does not use a standard deduction in the traditional sense. Instead it uses personal exemptions and a credit system to reduce taxable income."
  }
],
}
