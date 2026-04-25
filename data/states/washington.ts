import type { StateTaxData } from '../types'

// Washington has no personal income tax on wages — capital gains tax only (not applicable to paychecks)
export const washington: StateTaxData = {
  name: 'Washington',
  abbreviation: 'WA',
  slug: 'washington',
  hasIncomeTax: false,
  cities: [
    { name: 'Seattle', slug: 'seattle', localTaxRate: 0 },
    { name: 'Spokane', slug: 'spokane', localTaxRate: 0 },
    { name: 'Tacoma', slug: 'tacoma', localTaxRate: 0 },
    { name: 'Vancouver', slug: 'vancouver', localTaxRate: 0 },
    { name: 'Bellevue', slug: 'bellevue', localTaxRate: 0 },
    { name: 'Kent', slug: 'kent', localTaxRate: 0 },
    { name: 'Everett', slug: 'everett', localTaxRate: 0 },
    { name: 'Renton', slug: 'renton', localTaxRate: 0 },
    { name: 'Spokane Valley', slug: 'spokane-valley', localTaxRate: 0 },
    { name: 'Kirkland', slug: 'kirkland', localTaxRate: 0 },
    { name: 'Bellingham', slug: 'bellingham', localTaxRate: 0 },
    { name: 'Kennewick', slug: 'kennewick', localTaxRate: 0 },
    { name: 'Federal Way', slug: 'federal-way', localTaxRate: 0 },
    { name: 'Yakima', slug: 'yakima', localTaxRate: 0 },
    { name: 'Redmond', slug: 'redmond', localTaxRate: 0 },
  ],
  uniqueCopy: `Washington State has no personal income tax on wages or salaries — one of only nine states with this distinction. Washington funds its budget primarily through a 6.5% state sales tax (with local additions reaching 10.4% in some areas) and a Business & Occupation tax on gross receipts. For W-2 employees, paycheck deductions are limited entirely to federal income tax and FICA. No Washington city charges a local income tax, making the state uniformly tax-free on wages regardless of where you work.

Here's what a single Washington filer keeps in 2026, paying only federal taxes: on a $50,000 salary, take-home is $42,355 per year ($3,530/month). At $80,000, you keep $65,110 ($5,426/month). At $100,000, take-home is $79,180 ($6,598/month). At $150,000, you keep $113,791 ($9,482/month). Workers in Seattle, Spokane, Bellevue, Tacoma, and every other Washington city see these same numbers — there is no city or county layer on wage income.

Compared to neighboring Oregon (graduated income tax up to 9.9%), a Washington worker earning $80,000 takes home approximately $3,500-$5,000 more per year in avoided state income taxes. Against California at $80,000, Washington workers keep $4,243 more. This difference is a significant driver of the population growth in the greater Seattle area, particularly as remote work has made it easier for high earners to choose their state of residence. A dual-income household earning $200,000 combined saves roughly $12,000-$18,000 per year by living in Washington rather than Oregon.

Watch out: In 2023, Washington introduced a 7% capital gains tax on long-term capital gains above $270,000. This does not apply to wages, salaries, or W-2 income — it is exclusively for investment gains above the threshold. However, high earners who also have substantial investment income should factor this into their planning, as it changes Washington's tax profile for those individuals specifically. Real estate sales, stock options, and business sale proceeds may all be affected depending on structure.`,
  faqs: [
  {
    question: "Does Washington state have an income tax?",
    answer: "No. Washington has no income tax on wages or salaries. A 7% capital gains tax applies to investment gains above $250,000, but regular wages are not taxed."
  },
  {
    question: "Do Seattle or other Washington cities charge local income tax?",
    answer: "No. No city in Washington charges a local income tax on wages."
  },
  {
    question: "How does Washington compare to Oregon for take-home pay?",
    answer: "Washington workers take home significantly more. A Seattle worker earning $100,000 pays no state income tax, while a Portland worker at the same income pays roughly $6,500+ in Oregon state income tax."
  },
  {
    question: "What is Washington's capital gains tax?",
    answer: "Washington charges 7% on capital gains above $250,000 (investment gains only, not wages). This does not affect your regular paycheck."
  }
],
}
