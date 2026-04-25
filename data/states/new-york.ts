import type { StateTaxData } from '../types'

export const newYork: StateTaxData = {
  name: 'New York',
  abbreviation: 'NY',
  slug: 'new-york',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 8500, rate: 0.039 },
      { min: 8500, max: 11700, rate: 0.044 },
      { min: 11700, max: 13900, rate: 0.0515 },
      { min: 13900, max: 80650, rate: 0.054 },
      { min: 80650, max: 215400, rate: 0.059 },
      { min: 215400, max: 1077550, rate: 0.0685 },
      { min: 1077550, max: 5000000, rate: 0.0965 },
      { min: 5000000, max: 25000000, rate: 0.103 },
      { min: 25000000, max: Infinity, rate: 0.109 },
    ],
    married: [
      { min: 0, max: 17150, rate: 0.039 },
      { min: 17150, max: 23600, rate: 0.044 },
      { min: 23600, max: 27900, rate: 0.0515 },
      { min: 27900, max: 161550, rate: 0.054 },
      { min: 161550, max: 323200, rate: 0.059 },
      { min: 323200, max: 2155350, rate: 0.0685 },
      { min: 2155350, max: 5000000, rate: 0.0965 },
      { min: 5000000, max: 25000000, rate: 0.103 },
      { min: 25000000, max: Infinity, rate: 0.109 },
    ],
  },
  standardDeduction: { single: 8000, married: 16050 },
  cities: [
    { name: 'New York City', slug: 'new-york-city', localTaxRate: 0.03876 },
    { name: 'Buffalo', slug: 'buffalo', localTaxRate: 0 },
    { name: 'Rochester', slug: 'rochester', localTaxRate: 0 },
    { name: 'Yonkers', slug: 'yonkers', localTaxRate: 0.01477 },
    { name: 'Syracuse', slug: 'syracuse', localTaxRate: 0 },
    { name: 'Albany', slug: 'albany', localTaxRate: 0 },
    { name: 'New Rochelle', slug: 'new-rochelle', localTaxRate: 0 },
    { name: 'Mount Vernon', slug: 'mount-vernon', localTaxRate: 0 },
    { name: 'Schenectady', slug: 'schenectady', localTaxRate: 0 },
    { name: 'Utica', slug: 'utica', localTaxRate: 0 },
  ],
  uniqueCopy: `New York has a progressive income tax with rates ranging from 4% to 10.9% for top earners, plus a mandatory State Disability Insurance (SDI) deduction. The state standard deduction for single filers is $8,000 — lower than the federal standard deduction — meaning more of your income is exposed to state tax. New York's tax burden is among the highest of any state, even before factoring in New York City's additional local income tax.

Here's what a single New York State filer keeps in 2026 (state taxes only, excluding NYC): on a $50,000 salary, take-home is $40,252 per year ($3,354/month), with $2,103 going to state taxes. At $80,000, you keep $61,387 ($5,116/month), paying $3,723 in state taxes. At $100,000, take-home is $74,320 ($6,193/month) with $4,860 in state taxes. At $150,000, you keep $105,981 ($8,832/month). If you live and work in New York City, subtract another $1,500 to $5,800 from these figures depending on income — the NYC income tax adds up to 3.876% on top of state taxes.

Compared to neighboring Pennsylvania (3.07% flat tax), a New York earner at $80,000 pays roughly $1,267 more in state income taxes. Against New Jersey, the gap at $80,000 is about $751. The "live in New Jersey, work in NYC" calculation is common: you escape the NYC local income tax while still commuting in, which can save $3,000-$6,000 per year depending on income. Connecticut workers face similar combined burdens to New York at most income levels.

Watch out: New York City imposes its own income tax of up to 3.876% on residents who live and work in the five boroughs. This is separate from New York State income tax and stacks on top of it. An $80,000 NYC resident pays roughly $3,000 in city tax alone — on top of $3,723 in state tax. Combined with federal taxes, a mid-income NYC earner can face effective total rates exceeding 35%. If you work in NYC but live in New Jersey, you generally avoid the city tax.`,
  faqs: [
  {
    question: "What is the New York state income tax rate for 2026?",
    answer: "New York has nine brackets from 3.9% on income up to $8,500 to 10.9% on income above $25 million for single filers."
  },
  {
    question: "Does New York City have its own income tax?",
    answer: "Yes. NYC residents pay an additional city income tax of 3.078% to 3.876% on top of the state tax, bringing combined rates to nearly 14% for higher earners."
  },
  {
    question: "Does Yonkers have a local income tax?",
    answer: "Yes. Yonkers charges a 1.477% surcharge on state income tax liability for Yonkers residents."
  },
  {
    question: "How much less do I take home in NYC vs upstate New York?",
    answer: "Significantly less. An NYC resident earning $100,000 pays roughly $3,876 more per year in city income tax compared to an upstate New York resident at the same income, who pays only the state rate."
  }
],
}
