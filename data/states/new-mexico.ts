import type { StateTaxData } from '../types'

export const newMexico: StateTaxData = {
  name: 'New Mexico',
  abbreviation: 'NM',
  slug: 'new-mexico',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 5500, rate: 0.015 },
      { min: 5500, max: 16500, rate: 0.032 },
      { min: 16500, max: 33500, rate: 0.043 },
      { min: 33500, max: 66500, rate: 0.047 },
      { min: 66500, max: 210000, rate: 0.049 },
      { min: 210000, max: Infinity, rate: 0.059 },
    ],
    married: [
      { min: 0, max: 8000, rate: 0.015 },
      { min: 8000, max: 24000, rate: 0.032 },
      { min: 24000, max: 48000, rate: 0.043 },
      { min: 48000, max: 100000, rate: 0.047 },
      { min: 100000, max: 315000, rate: 0.049 },
      { min: 315000, max: Infinity, rate: 0.059 },
    ],
  },
  standardDeduction: { single: 16100, married: 32200 },
  cities: [
    { name: 'Albuquerque', slug: 'albuquerque', localTaxRate: 0 },
    { name: 'Las Cruces', slug: 'las-cruces', localTaxRate: 0 },
    { name: 'Rio Rancho', slug: 'rio-rancho', localTaxRate: 0 },
    { name: 'Santa Fe', slug: 'santa-fe', localTaxRate: 0 },
    { name: 'Roswell', slug: 'roswell', localTaxRate: 0 },
    { name: 'Farmington', slug: 'farmington', localTaxRate: 0 },
    { name: 'Clovis', slug: 'clovis', localTaxRate: 0 },
    { name: 'Hobbs', slug: 'hobbs', localTaxRate: 0 },
    { name: 'Alamogordo', slug: 'alamogordo', localTaxRate: 0 },
    { name: 'Carlsbad', slug: 'carlsbad', localTaxRate: 0 },
  ],
  uniqueCopy: `New Mexico has a six-bracket progressive income tax system with rates from 1.5% to 5.9%. New Mexico's standard deduction mirrors the federal amount ($16,100 for single filers), which is generous. No New Mexico city charges a local income tax. New Mexico has significant oil and gas revenue that helps fund state services, contributing to a moderate overall tax burden despite the income tax. Compared to neighboring Texas (no income tax) and Arizona (2.5% flat), New Mexico's income tax is higher. Colorado (4.4% flat) is slightly lower for most earners. New Mexico is generally considered to have a moderate overall tax environment for the Southwest, and its income tax rates are competitive with many eastern states.`,
  faqs: [
  {
    question: "What is the New Mexico income tax rate for 2026?",
    answer: "New Mexico has six brackets from 1.5% on income up to $5,500 to 5.9% on income above $210,000 for single filers."
  },
  {
    question: "Does New Mexico use the federal standard deduction?",
    answer: "Yes. New Mexico's standard deduction matches the federal amount — $16,100 for single filers in 2026."
  },
  {
    question: "Do New Mexico cities charge local income tax?",
    answer: "No. No city in New Mexico charges a local income tax on wages."
  },
  {
    question: "How does New Mexico compare to Texas for take-home pay?",
    answer: "Texas has no state income tax, making it more favorable. On an $80,000 salary, a Texas worker takes home roughly $4,000 more per year than a New Mexico worker at the same income."
  }
],
}
