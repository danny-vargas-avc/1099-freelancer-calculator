import type { StateTaxData } from '../types'

export const florida: StateTaxData = {
  name: 'Florida',
  abbreviation: 'FL',
  slug: 'florida',
  hasIncomeTax: false,
  cities: [
    { name: 'Jacksonville', slug: 'jacksonville', localTaxRate: 0 },
    { name: 'Miami', slug: 'miami', localTaxRate: 0 },
    { name: 'Tampa', slug: 'tampa', localTaxRate: 0 },
    { name: 'Orlando', slug: 'orlando', localTaxRate: 0 },
    { name: 'St. Petersburg', slug: 'st-petersburg', localTaxRate: 0 },
    { name: 'Hialeah', slug: 'hialeah', localTaxRate: 0 },
    { name: 'Port St. Lucie', slug: 'port-st-lucie', localTaxRate: 0 },
    { name: 'Cape Coral', slug: 'cape-coral', localTaxRate: 0 },
    { name: 'Tallahassee', slug: 'tallahassee', localTaxRate: 0 },
    { name: 'Fort Lauderdale', slug: 'fort-lauderdale', localTaxRate: 0 },
    { name: 'Pembroke Pines', slug: 'pembroke-pines', localTaxRate: 0 },
    { name: 'Hollywood', slug: 'hollywood', localTaxRate: 0 },
    { name: 'Gainesville', slug: 'gainesville', localTaxRate: 0 },
    { name: 'Coral Springs', slug: 'coral-springs', localTaxRate: 0 },
    { name: 'Clearwater', slug: 'clearwater', localTaxRate: 0 },
  ],
  uniqueCopy: `Florida has no state income tax, making it one of the most tax-friendly states for workers and retirees. Like Texas, Florida funds its government primarily through sales taxes and other sources rather than income taxes. Florida has been one of the fastest-growing states in the US over the past decade, driven significantly by migration from high-tax states like New York, New Jersey, and California seeking lower tax burdens.

Here's what a single Florida filer keeps in 2026, paying only federal income tax and FICA: on a $50,000 salary, take-home is $42,355 per year ($3,530/month). At $80,000, you keep $65,110 ($5,426/month). At $100,000, take-home is $79,180 ($6,598/month). At $150,000, you keep $113,791 ($9,482/month). These figures are identical to Texas — both states have zero state income tax, so federal taxes are the only deduction beyond FICA.

Compared to New York, a Florida worker earning $80,000 takes home $3,723 more per year in state taxes avoided. Against New Jersey, the advantage is $2,971 annually. Versus California at $80,000, Florida workers keep $4,243 more. A dual-income household with two earners each making $100,000 saves over $9,700 per year moving from New York to Florida — before accounting for Florida's lower cost of living in many metros compared to NYC.

Watch out: Florida has no income tax on wages, but high earners with significant investment portfolios should note that dividends and capital gains remain subject to federal income tax. For W-2 workers, there are genuinely no paycheck surprises in Florida — what the federal government takes is all you lose. Retirees moving from states like New York should also confirm they've properly established Florida domicile, as some states attempt to tax former residents on income earned during a transition year.`,
  faqs: [
  {
    question: "Does Florida have a state income tax?",
    answer: "No. Florida has no state income tax on wages, salaries, or most forms of income. Your paycheck is only subject to federal income tax and FICA."
  },
  {
    question: "Does Florida tax retirement income?",
    answer: "No. Florida does not tax Social Security benefits, pension income, or retirement account withdrawals. This makes it especially popular for retirees."
  },
  {
    question: "Do Florida cities charge local income tax?",
    answer: "No. No city in Florida charges a local income tax on wages."
  },
  {
    question: "How much more do I take home in Florida vs a state with income tax?",
    answer: "On an $80,000 salary, a Florida worker takes home roughly $3,500–$6,000 more per year than the same earner in states like California (9.3% rate) or New York (state + city up to 14%+)."
  },
  {
    question: "What taxes does a Florida employee still pay?",
    answer: "Florida employees pay federal income tax and FICA — Social Security (6.2% up to $184,500) and Medicare (1.45%). There is no state or local income tax."
  }
],
}
