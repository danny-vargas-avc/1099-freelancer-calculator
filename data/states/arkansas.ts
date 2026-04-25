import type { StateTaxData } from '../types'

export const arkansas: StateTaxData = {
  name: 'Arkansas',
  abbreviation: 'AR',
  slug: 'arkansas',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 4600, rate: 0.02 },
      { min: 4600, max: Infinity, rate: 0.039 },
    ],
    married: [
      { min: 0, max: 4600, rate: 0.02 },
      { min: 4600, max: Infinity, rate: 0.039 },
    ],
  },
  standardDeduction: { single: 2470, married: 4940 },
  cities: [
    { name: 'Little Rock', slug: 'little-rock', localTaxRate: 0 },
    { name: 'Fort Smith', slug: 'fort-smith', localTaxRate: 0 },
    { name: 'Fayetteville', slug: 'fayetteville', localTaxRate: 0 },
    { name: 'Springdale', slug: 'springdale', localTaxRate: 0 },
    { name: 'Jonesboro', slug: 'jonesboro', localTaxRate: 0 },
    { name: 'North Little Rock', slug: 'north-little-rock', localTaxRate: 0 },
    { name: 'Conway', slug: 'conway', localTaxRate: 0 },
    { name: 'Rogers', slug: 'rogers', localTaxRate: 0 },
    { name: 'Pine Bluff', slug: 'pine-bluff', localTaxRate: 0 },
    { name: 'Bentonville', slug: 'bentonville', localTaxRate: 0 },
  ],
  uniqueCopy: `Arkansas has dramatically simplified its income tax over the past few years, cutting from a six-bracket system down to two brackets with rates of 2% and 3.9%. The top rate of 3.9% is among the lower top rates for states with progressive systems, making Arkansas competitive with flat-tax states in the region. This rate reduction — part of a broader tax reform effort — means Arkansas workers now keep more of their income than they did just a few years ago. No Arkansas city charges a local income tax. The standard deduction is $2,470 for single filers, which is on the lower end nationally. Compared to neighboring Missouri (2% flat) and Tennessee (no income tax), Arkansas sits in the middle, but its recent reforms have made it more competitive than states like Louisiana and Alabama.`,
  faqs: [
  {
    question: "What is the Arkansas income tax rate for 2026?",
    answer: "Arkansas has two brackets: 2% on income up to $4,600 and 3.9% on income above $4,600 for single filers."
  },
  {
    question: "Has Arkansas reduced its income tax recently?",
    answer: "Yes. Arkansas has reduced its top rate multiple times in recent years, dropping from over 5% to 3.9% as part of an ongoing tax reform effort."
  },
  {
    question: "Do Arkansas cities charge local income tax?",
    answer: "No. No city in Arkansas imposes a local income tax on wages."
  },
  {
    question: "How does Arkansas compare to neighboring states for take-home pay?",
    answer: "Arkansas workers pay slightly more than those in no-income-tax Tennessee but less than those in many other southern states. The 3.9% top rate is competitive regionally."
  }
],
}
