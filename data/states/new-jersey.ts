import type { StateTaxData } from '../types'

export const newJersey: StateTaxData = {
  name: 'New Jersey',
  abbreviation: 'NJ',
  slug: 'new-jersey',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 20000, rate: 0.014 },
      { min: 20000, max: 35000, rate: 0.0175 },
      { min: 35000, max: 40000, rate: 0.035 },
      { min: 40000, max: 75000, rate: 0.0553 },
      { min: 75000, max: 500000, rate: 0.0637 },
      { min: 500000, max: 1000000, rate: 0.0897 },
      { min: 1000000, max: Infinity, rate: 0.1075 },
    ],
    married: [
      { min: 0, max: 20000, rate: 0.014 },
      { min: 20000, max: 50000, rate: 0.0175 },
      { min: 50000, max: 70000, rate: 0.0245 },
      { min: 70000, max: 80000, rate: 0.035 },
      { min: 80000, max: 150000, rate: 0.0553 },
      { min: 150000, max: 500000, rate: 0.0637 },
      { min: 500000, max: 1000000, rate: 0.0897 },
      { min: 1000000, max: Infinity, rate: 0.1075 },
    ],
  },
  cities: [
    { name: 'Newark', slug: 'newark', localTaxRate: 0 },
    { name: 'Jersey City', slug: 'jersey-city', localTaxRate: 0 },
    { name: 'Paterson', slug: 'paterson', localTaxRate: 0 },
    { name: 'Elizabeth', slug: 'elizabeth', localTaxRate: 0 },
    { name: 'Edison', slug: 'edison', localTaxRate: 0 },
    { name: 'Woodbridge', slug: 'woodbridge', localTaxRate: 0 },
    { name: 'Lakewood', slug: 'lakewood', localTaxRate: 0 },
    { name: 'Toms River', slug: 'toms-river', localTaxRate: 0 },
    { name: 'Hamilton', slug: 'hamilton', localTaxRate: 0 },
    { name: 'Trenton', slug: 'trenton', localTaxRate: 0 },
  ],
  uniqueCopy: `New Jersey has a progressive income tax with rates from 1.4% to 10.75%, though the practical burden for most earners falls in the 5.525% to 6.37% bracket range. New Jersey also collects small deductions for State Disability Insurance (SDI) and Family Leave Insurance (FLI) from each paycheck. While New Jersey does not have a local city income tax, its property taxes are the highest in the nation — averaging over $9,000 per household annually — which affects overall cost of living significantly even though it doesn't appear on a pay stub.

Here's what a single New Jersey filer keeps in 2026: on a $50,000 salary, take-home is $41,085 per year ($3,424/month), with $1,271 going to state taxes. At $80,000, you keep $62,139 ($5,178/month), paying $2,972 in state taxes. At $100,000, take-home is $74,935 ($6,245/month) with $4,246 in state tax. At $150,000, you keep $106,361 ($8,863/month) with $7,431 in state tax.

New Jersey sits between New York and Pennsylvania in terms of take-home pay on wages. Against Pennsylvania at $100,000, New Jersey workers pay roughly $1,175 more per year in state income tax. Against New York State (excluding NYC) at $80,000, New Jersey workers actually take home about $752 more. This makes the live-in-New-Jersey, work-in-New-York-City arrangement financially interesting: you avoid NYC's 3.876% local income tax while paying a somewhat lower New Jersey state rate, potentially saving $2,000-$5,000 per year at mid-to-high income levels.

Watch out: New Jersey has an "exit tax" — a withholding on the proceeds of a home sale when the seller is moving out of state. New Jersey withholds either 8.97% of the gain or 2% of the sale price (whichever is higher) as a prepayment toward the final tax liability. This is reconciled on your final New Jersey return, but it can create a significant short-term cash flow issue if you're relying on home sale proceeds to fund a move or down payment on a new home elsewhere. Plan for this if you're selling a New Jersey property as part of a relocation.`,
  faqs: [
  {
    question: "What is the New Jersey income tax rate for 2026?",
    answer: "New Jersey has seven brackets from 1.4% on income up to $20,000 to 10.75% on income above $1 million for single filers."
  },
  {
    question: "Does New Jersey have local city income taxes?",
    answer: "No. New Jersey cities do not charge local income taxes on wages."
  },
  {
    question: "How does New Jersey compare to Pennsylvania for take-home pay?",
    answer: "Pennsylvania's flat 3.07% state rate is significantly lower than New Jersey's rates for most earners. A New Jersey worker earning $80,000 pays roughly $3,500 more in state income tax than a Pennsylvania worker at the same income."
  },
  {
    question: "Why does New Jersey have such high taxes overall?",
    answer: "New Jersey has high income taxes AND some of the highest property taxes in the country. The combination reflects high public service costs in a densely populated, high-cost-of-living state."
  }
],
}
