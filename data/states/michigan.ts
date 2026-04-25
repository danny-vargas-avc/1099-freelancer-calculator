import type { StateTaxData } from '../types'

export const michigan: StateTaxData = {
  name: 'Michigan',
  abbreviation: 'MI',
  slug: 'michigan',
  hasIncomeTax: true,
  flatRate: 0.0425,
  cities: [
    { name: 'Detroit', slug: 'detroit', localTaxRate: 0.024 },
    { name: 'Grand Rapids', slug: 'grand-rapids', localTaxRate: 0.015 },
    { name: 'Warren', slug: 'warren', localTaxRate: 0.01 },
    { name: 'Sterling Heights', slug: 'sterling-heights', localTaxRate: 0 },
    { name: 'Lansing', slug: 'lansing', localTaxRate: 0.01 },
    { name: 'Ann Arbor', slug: 'ann-arbor', localTaxRate: 0 },
    { name: 'Flint', slug: 'flint', localTaxRate: 0.01 },
    { name: 'Dearborn', slug: 'dearborn', localTaxRate: 0.01 },
    { name: 'Livonia', slug: 'livonia', localTaxRate: 0 },
    { name: 'Westland', slug: 'westland', localTaxRate: 0 },
  ],
  uniqueCopy: `Michigan has a flat state income tax rate of 4.25%, but like Indiana, many of Michigan's cities charge their own local income taxes. Detroit charges 2.4% for residents (1.2% for non-residents who work in Detroit), Grand Rapids charges 1.5%, Lansing charges 1%, and several other cities have rates of 1-2%. For Detroit residents, the combined state and city rate is 6.65% — one of the higher effective rates in the Midwest. Michigan cities without local taxes include Ann Arbor, Sterling Heights, and most suburban communities. Michigan's flat rate is moderate compared to Wisconsin (up to 7.65%) and Minnesota (up to 9.85%), making it competitive among Great Lakes states for workers outside major cities.`,
  faqs: [
  {
    question: "What is the Michigan state income tax rate for 2026?",
    answer: "Michigan has a flat state income tax rate of 4.25%. Many cities also charge local income taxes ranging from 1% to 2.4%."
  },
  {
    question: "Does Detroit charge a city income tax?",
    answer: "Yes. Detroit charges 2.4% for city residents and 1.2% for non-residents who work in Detroit. Combined with the state rate, Detroit residents pay 6.65% total."
  },
  {
    question: "Which Michigan cities do not have local income tax?",
    answer: "Most Michigan suburbs and smaller cities have no local income tax. Ann Arbor, Sterling Heights, Warren, and Livonia do not charge city income tax."
  },
  {
    question: "How does Michigan compare to neighboring states?",
    answer: "Michigan's 4.25% flat rate is lower than Wisconsin (up to 7.65%) and Minnesota (up to 9.85%), but higher than Indiana (2.95%) and Ohio (up to 2.75%)."
  }
],
}
