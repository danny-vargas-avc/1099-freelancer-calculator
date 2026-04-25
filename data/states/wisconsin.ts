import type { StateTaxData } from '../types'

export const wisconsin: StateTaxData = {
  name: 'Wisconsin',
  abbreviation: 'WI',
  slug: 'wisconsin',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 15110, rate: 0.035 },
      { min: 15110, max: 51950, rate: 0.044 },
      { min: 51950, max: 332720, rate: 0.053 },
      { min: 332720, max: Infinity, rate: 0.0765 },
    ],
    married: [
      { min: 0, max: 20150, rate: 0.035 },
      { min: 20150, max: 69220, rate: 0.044 },
      { min: 69220, max: 443390, rate: 0.053 },
      { min: 443390, max: Infinity, rate: 0.0765 },
    ],
  },
  standardDeduction: { single: 13960, married: 25820 },
  cities: [
    { name: 'Milwaukee', slug: 'milwaukee', localTaxRate: 0 },
    { name: 'Madison', slug: 'madison', localTaxRate: 0 },
    { name: 'Green Bay', slug: 'green-bay', localTaxRate: 0 },
    { name: 'Kenosha', slug: 'kenosha', localTaxRate: 0 },
    { name: 'Racine', slug: 'racine', localTaxRate: 0 },
    { name: 'Appleton', slug: 'appleton', localTaxRate: 0 },
    { name: 'Waukesha', slug: 'waukesha', localTaxRate: 0 },
    { name: 'Oshkosh', slug: 'oshkosh', localTaxRate: 0 },
    { name: 'Eau Claire', slug: 'eau-claire', localTaxRate: 0 },
    { name: 'Janesville', slug: 'janesville', localTaxRate: 0 },
  ],
  uniqueCopy: `Wisconsin has a four-bracket progressive income tax with rates from 3.5% to 7.65%. Wisconsin's top rate of 7.65% applies to income above $332,720, but the 5.3% bracket kicks in at just $51,950, meaning many middle-class earners face rates well above the national average. Wisconsin's standard deduction of $13,960 for single filers is moderate. No Wisconsin city charges a local income tax on wages. Wisconsin consistently ranks as a higher-tax state in the Midwest, particularly compared to neighbors Iowa (3.8% flat) and Michigan (4.25% flat). Minnesota to the west has higher rates overall, making Wisconsin slightly more attractive for upper-middle earners by comparison. Milwaukee workers pay only Wisconsin state tax with no additional city income tax.`,
  faqs: [
  {
    question: "What is the Wisconsin income tax rate for 2026?",
    answer: "Wisconsin has four brackets: 3.5% up to $15,110, 4.4% from $15,110 to $51,950, 5.3% from $51,950 to $332,720, and 7.65% above $332,720 for single filers."
  },
  {
    question: "Does Milwaukee charge a city income tax?",
    answer: "No. Milwaukee and all Wisconsin cities do not charge local income taxes on wages."
  },
  {
    question: "How does Wisconsin compare to Iowa for take-home pay?",
    answer: "Iowa's flat 3.8% rate is significantly more favorable for middle earners than Wisconsin's rates. A Wisconsin worker earning $80,000 pays roughly $1,200 more in state income tax than the same earner in Iowa."
  },
  {
    question: "Is Wisconsin one of the higher-taxed Midwestern states?",
    answer: "Yes. Wisconsin's income tax burden is higher than Indiana (2.95%), Michigan (4.25%), Iowa (3.8%), and Ohio (2.75%), but lower than Minnesota (up to 9.85%)."
  }
],
}
