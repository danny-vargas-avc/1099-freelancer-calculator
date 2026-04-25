import type { StateTaxData } from '../types'

export const districtOfColumbia: StateTaxData = {
  name: 'District of Columbia',
  abbreviation: 'DC',
  slug: 'district-of-columbia',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 10000, rate: 0.04 },
      { min: 10000, max: 40000, rate: 0.06 },
      { min: 40000, max: 60000, rate: 0.065 },
      { min: 60000, max: 250000, rate: 0.085 },
      { min: 250000, max: 500000, rate: 0.0925 },
      { min: 500000, max: 1000000, rate: 0.0975 },
      { min: 1000000, max: Infinity, rate: 0.1075 },
    ],
    married: [
      { min: 0, max: 10000, rate: 0.04 },
      { min: 10000, max: 40000, rate: 0.06 },
      { min: 40000, max: 60000, rate: 0.065 },
      { min: 60000, max: 250000, rate: 0.085 },
      { min: 250000, max: 500000, rate: 0.0925 },
      { min: 500000, max: 1000000, rate: 0.0975 },
      { min: 1000000, max: Infinity, rate: 0.1075 },
    ],
  },
  standardDeduction: { single: 16100, married: 32200 },
  cities: [
    { name: 'Washington', slug: 'washington', localTaxRate: 0 },
  ],
  uniqueCopy: `The District of Columbia has a seven-bracket progressive income tax with a top rate of 10.75% — one of the highest in the country. DC's 8.5% rate kicks in at $60,000, meaning middle-income earners in Washington DC face a substantially higher rate than the national average. DC's standard deduction mirrors the federal amount ($16,100 for single filers). DC does not have city-level taxes separate from the District tax (since DC is itself a city-state). A notable frustration for DC residents: because DC is not a state, residents have no voting representation in Congress despite paying federal income tax — their license plates historically read "Taxation Without Representation." Compared to neighboring Virginia (effective 5.75%) and Maryland (state + county up to 9.7%), DC's rates are among the highest in the region.`,
  faqs: [
  {
    question: "What is the Washington DC income tax rate for 2026?",
    answer: "DC has seven brackets from 4% on income up to $10,000 to 10.75% on income above $1,000,000. The 8.5% rate applies to income from $60,000 to $250,000."
  },
  {
    question: "Does DC have a separate city income tax?",
    answer: "No. Since DC is both a city and a jurisdiction, there is only one income tax — the DC income tax. There is no additional city layer."
  },
  {
    question: "How does DC compare to Virginia for take-home pay?",
    answer: "Virginia workers generally take home more than DC residents at most income levels. Virginia's effective rate for most earners is 5.75%, compared to DC's 8.5% for income above $60,000."
  },
  {
    question: "Do DC residents pay federal income tax despite having no congressional representation?",
    answer: "Yes. DC residents pay full federal income taxes but have no voting representation in Congress. The \"Taxation Without Representation\" phrase is a longstanding political issue for DC residents."
  }
],
}
