import type { StateTaxData } from '../types'

export const tennessee: StateTaxData = {
  name: 'Tennessee',
  abbreviation: 'TN',
  slug: 'tennessee',
  hasIncomeTax: false,
  cities: [
    { name: 'Memphis', slug: 'memphis', localTaxRate: 0 },
    { name: 'Nashville', slug: 'nashville', localTaxRate: 0 },
    { name: 'Knoxville', slug: 'knoxville', localTaxRate: 0 },
    { name: 'Chattanooga', slug: 'chattanooga', localTaxRate: 0 },
    { name: 'Clarksville', slug: 'clarksville', localTaxRate: 0 },
    { name: 'Murfreesboro', slug: 'murfreesboro', localTaxRate: 0 },
    { name: 'Franklin', slug: 'franklin', localTaxRate: 0 },
    { name: 'Jackson', slug: 'jackson', localTaxRate: 0 },
    { name: 'Johnson City', slug: 'johnson-city', localTaxRate: 0 },
    { name: 'Bartlett', slug: 'bartlett', localTaxRate: 0 },
  ],
  uniqueCopy: `Tennessee has no state income tax on wages or salaries, making it one of the most tax-friendly states for wage earners. Tennessee previously taxed interest and dividend income (the "Hall Income Tax"), but that was fully phased out in 2021. No Tennessee city charges a local income tax. Tennessee workers in Memphis, Nashville, Knoxville, and Chattanooga all keep the same amount — no state or local income tax on their paycheck. Tennessee funds its state government primarily through sales tax (7% state rate, one of the highest in the country) and business taxes. For W-2 employees, the no-income-tax benefit is straightforward: your only deductions below gross pay are federal income tax and FICA. Compared to neighboring Georgia (5.19% flat) and North Carolina (3.99% flat), Tennessee workers take home significantly more.`,
  faqs: [
  {
    question: "Does Tennessee have a state income tax?",
    answer: "No. Tennessee has no income tax on wages, salaries, or most earned income. The Hall Income Tax on dividends and interest was eliminated in 2021."
  },
  {
    question: "Does Tennessee tax retirement income?",
    answer: "No. Tennessee does not tax wages, Social Security, pension income, or retirement account distributions."
  },
  {
    question: "Do Tennessee cities charge local income tax?",
    answer: "No. Nashville, Memphis, Knoxville, Chattanooga, and all other Tennessee cities charge no local income tax on wages."
  },
  {
    question: "How much more do I take home in Tennessee vs Georgia?",
    answer: "On an $80,000 salary, a Tennessee worker takes home roughly $4,200 more per year than a Georgia worker (who pays 5.19% flat state income tax)."
  }
],
}
