import type { StateTaxData } from '../types'

export const alaska: StateTaxData = {
  name: 'Alaska',
  abbreviation: 'AK',
  slug: 'alaska',
  hasIncomeTax: false,
  cities: [
    { name: 'Anchorage', slug: 'anchorage', localTaxRate: 0 },
    { name: 'Fairbanks', slug: 'fairbanks', localTaxRate: 0 },
    { name: 'Juneau', slug: 'juneau', localTaxRate: 0 },
    { name: 'Sitka', slug: 'sitka', localTaxRate: 0 },
    { name: 'Ketchikan', slug: 'ketchikan', localTaxRate: 0 },
    { name: 'Wasilla', slug: 'wasilla', localTaxRate: 0 },
    { name: 'Kenai', slug: 'kenai', localTaxRate: 0 },
    { name: 'Kodiak', slug: 'kodiak', localTaxRate: 0 },
    { name: 'Bethel', slug: 'bethel', localTaxRate: 0 },
    { name: 'Palmer', slug: 'palmer', localTaxRate: 0 },
  ],
  uniqueCopy: `Alaska is one of only nine states with no state income tax — and uniquely, it also has no statewide sales tax. Alaska funds its government largely through oil and gas revenues. Beyond paying zero state income tax, eligible Alaska residents receive an annual Permanent Fund Dividend (PFD) — a direct cash payment funded by oil royalties — which effectively makes living in Alaska a net positive from a state tax perspective. No city in Alaska charges a local income tax. Your only deductions from your paycheck below the gross pay line are federal income tax and FICA. Compared to the national average, Alaska workers keep significantly more of their earnings at the state level. The tradeoff is a high cost of living, particularly outside Anchorage, driven by the cost of transporting goods to remote areas.`,
  faqs: [
  {
    question: "Does Alaska have a state income tax?",
    answer: "No. Alaska has no state income tax and no statewide sales tax. It is one of the most tax-friendly states for wage earners."
  },
  {
    question: "What is the Alaska Permanent Fund Dividend?",
    answer: "The PFD is an annual payment made to Alaska residents funded by oil royalties. The amount varies by year. It is separate from your paycheck but reduces your overall tax burden."
  },
  {
    question: "Do Alaska cities charge income tax?",
    answer: "No. No city in Alaska imposes a local income tax on wages."
  },
  {
    question: "What taxes does an Alaska employee still pay?",
    answer: "Alaska employees pay federal income tax and FICA (Social Security at 6.2% up to $184,500 and Medicare at 1.45%). There is no state or local income tax."
  }
],
}
