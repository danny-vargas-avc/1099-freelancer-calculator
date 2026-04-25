import type { StateTaxData } from '../types'

export const nebraska: StateTaxData = {
  name: 'Nebraska',
  abbreviation: 'NE',
  slug: 'nebraska',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 4130, rate: 0.0246 },
      { min: 4130, max: 24760, rate: 0.0351 },
      { min: 24760, max: Infinity, rate: 0.0455 },
    ],
    married: [
      { min: 0, max: 8260, rate: 0.0246 },
      { min: 8260, max: 49520, rate: 0.0351 },
      { min: 49520, max: Infinity, rate: 0.0455 },
    ],
  },
  standardDeduction: { single: 8850, married: 17700 },
  cities: [
    { name: 'Omaha', slug: 'omaha', localTaxRate: 0 },
    { name: 'Lincoln', slug: 'lincoln', localTaxRate: 0 },
    { name: 'Bellevue', slug: 'bellevue', localTaxRate: 0 },
    { name: 'Grand Island', slug: 'grand-island', localTaxRate: 0 },
    { name: 'Kearney', slug: 'kearney', localTaxRate: 0 },
    { name: 'Fremont', slug: 'fremont', localTaxRate: 0 },
    { name: 'Hastings', slug: 'hastings', localTaxRate: 0 },
    { name: 'Norfolk', slug: 'norfolk', localTaxRate: 0 },
    { name: 'North Platte', slug: 'north-platte', localTaxRate: 0 },
    { name: 'Columbus', slug: 'columbus', localTaxRate: 0 },
  ],
  uniqueCopy: `Nebraska has a three-bracket progressive income tax with a top rate of 4.55% on income above $24,760 for single filers. Nebraska has been steadily reducing its income tax rates as part of an ongoing reform plan, with the goal of reaching a flat 3.99% rate in coming years. The standard deduction of $8,850 for single filers is moderate. Nebraska has no local city income taxes on wages. Compared to neighboring Iowa (3.8% flat) and Missouri (2% flat), Nebraska's rates are higher, but the ongoing reforms are narrowing that gap. South Dakota and Wyoming to the west have no income tax, making them more attractive for border-area workers.`,
  faqs: [
  {
    question: "What is the Nebraska income tax rate for 2026?",
    answer: "Nebraska has three brackets: 2.46% up to $4,130, 3.51% from $4,130 to $24,760, and 4.55% above $24,760 for single filers."
  },
  {
    question: "Is Nebraska reducing its income tax?",
    answer: "Yes. Nebraska has enacted multi-year income tax cuts aiming for a flat 3.99% rate in coming years."
  },
  {
    question: "Do Nebraska cities charge local income tax?",
    answer: "No. No city in Nebraska imposes a local income tax on wages."
  },
  {
    question: "How does Nebraska compare to Iowa for take-home pay?",
    answer: "Iowa's flat 3.8% rate is slightly more favorable than Nebraska's top rate of 4.55%, though for lower earners Nebraska's lower brackets are competitive."
  }
],
}
