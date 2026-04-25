import type { StateTaxData } from '../types'

export const hawaii: StateTaxData = {
  name: 'Hawaii',
  abbreviation: 'HI',
  slug: 'hawaii',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 9600, rate: 0.014 },
      { min: 9600, max: 14400, rate: 0.032 },
      { min: 14400, max: 19200, rate: 0.055 },
      { min: 19200, max: 24000, rate: 0.064 },
      { min: 24000, max: 36000, rate: 0.068 },
      { min: 36000, max: 48000, rate: 0.072 },
      { min: 48000, max: 125000, rate: 0.076 },
      { min: 125000, max: 175000, rate: 0.079 },
      { min: 175000, max: 225000, rate: 0.0825 },
      { min: 225000, max: 275000, rate: 0.09 },
      { min: 275000, max: 325000, rate: 0.10 },
      { min: 325000, max: Infinity, rate: 0.11 },
    ],
    married: [
      { min: 0, max: 19200, rate: 0.014 },
      { min: 19200, max: 28800, rate: 0.032 },
      { min: 28800, max: 38400, rate: 0.055 },
      { min: 38400, max: 48000, rate: 0.064 },
      { min: 48000, max: 72000, rate: 0.068 },
      { min: 72000, max: 96000, rate: 0.072 },
      { min: 96000, max: 250000, rate: 0.076 },
      { min: 250000, max: 350000, rate: 0.079 },
      { min: 350000, max: 450000, rate: 0.0825 },
      { min: 450000, max: 550000, rate: 0.09 },
      { min: 550000, max: 650000, rate: 0.10 },
      { min: 650000, max: Infinity, rate: 0.11 },
    ],
  },
  standardDeduction: { single: 4400, married: 8800 },
  cities: [
    { name: 'Honolulu', slug: 'honolulu', localTaxRate: 0 },
    { name: 'Pearl City', slug: 'pearl-city', localTaxRate: 0 },
    { name: 'Hilo', slug: 'hilo', localTaxRate: 0 },
    { name: 'Kailua', slug: 'kailua', localTaxRate: 0 },
    { name: 'Waipahu', slug: 'waipahu', localTaxRate: 0 },
    { name: 'Kaneohe', slug: 'kaneohe', localTaxRate: 0 },
    { name: 'Mililani Town', slug: 'mililani-town', localTaxRate: 0 },
    { name: 'Kahului', slug: 'kahului', localTaxRate: 0 },
    { name: 'Kihei', slug: 'kihei', localTaxRate: 0 },
    { name: 'Ewa Beach', slug: 'ewa-beach', localTaxRate: 0 },
  ],
  uniqueCopy: `Hawaii has the most brackets of any state — 12 — with rates from 1.4% up to 11% on income above $325,000. For middle earners, Hawaii's tax burden is among the highest in the nation. A single filer earning $80,000 hits the 7.6-7.9% range, which is higher than most states. Hawaii's high cost of living — particularly housing — compounds the tax burden. The standard deduction is $4,400 for single filers, lower than both the federal amount and most states, meaning more income is exposed to state tax. Hawaii has no local city income taxes. One small offset: Hawaii has no SDI (state disability insurance) withholding that employees pay. Compared to neighboring states — there are none, Hawaii is an island — it ranks among the top 5 highest-taxed states for middle-income earners nationally.`,
  faqs: [
  {
    question: "What is the Hawaii income tax rate for 2026?",
    answer: "Hawaii has 12 tax brackets ranging from 1.4% on income up to $9,600 to 11% on income above $325,000 for single filers."
  },
  {
    question: "Is Hawaii one of the highest-taxed states?",
    answer: "Yes. Hawaii consistently ranks among the top 3-5 highest-taxed states for middle-income earners due to its high brackets and low standard deduction."
  },
  {
    question: "Does Hawaii have local city income taxes?",
    answer: "No. Hawaii does not have local city income taxes on wages."
  },
  {
    question: "Does Hawaii have SDI (disability insurance) withholding?",
    answer: "Hawaii has a Temporary Disability Insurance (TDI) program, but the employee contribution rate is very small and capped. It is much less significant than California's SDI."
  }
],
}
