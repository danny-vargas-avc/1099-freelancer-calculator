import type { StateTaxData } from '../types'

export const texas: StateTaxData = {
  name: 'Texas',
  abbreviation: 'TX',
  slug: 'texas',
  hasIncomeTax: false,
  cities: [
    { name: 'Houston', slug: 'houston', localTaxRate: 0 },
    { name: 'San Antonio', slug: 'san-antonio', localTaxRate: 0 },
    { name: 'Dallas', slug: 'dallas', localTaxRate: 0 },
    { name: 'Austin', slug: 'austin', localTaxRate: 0 },
    { name: 'Fort Worth', slug: 'fort-worth', localTaxRate: 0 },
    { name: 'El Paso', slug: 'el-paso', localTaxRate: 0 },
    { name: 'Arlington', slug: 'arlington', localTaxRate: 0 },
    { name: 'Corpus Christi', slug: 'corpus-christi', localTaxRate: 0 },
    { name: 'Plano', slug: 'plano', localTaxRate: 0 },
    { name: 'Laredo', slug: 'laredo', localTaxRate: 0 },
    { name: 'Lubbock', slug: 'lubbock', localTaxRate: 0 },
    { name: 'Garland', slug: 'garland', localTaxRate: 0 },
    { name: 'Irving', slug: 'irving', localTaxRate: 0 },
    { name: 'Amarillo', slug: 'amarillo', localTaxRate: 0 },
    { name: 'McKinney', slug: 'mckinney', localTaxRate: 0 },
  ],
  uniqueCopy: `Texas has no state income tax — one of only nine states with this distinction — which means workers keep a meaningful portion of every paycheck that earners in high-tax states send to their state government. Texas funds its budget primarily through property taxes and sales taxes, but neither appears on your pay stub. For W-2 employees, the only deductions from a Texas paycheck are federal income tax and FICA (Social Security and Medicare).

Here's what a single Texas filer keeps in 2026 after federal taxes only: on a $50,000 salary, take-home is $42,355 per year ($3,530/month). At $80,000, you keep $65,110 ($5,426/month). At $100,000, take-home is $79,180 ($6,598/month). At $150,000, you keep $113,791 ($9,482/month). Every dollar of the gap between Texas and high-tax states goes entirely to federal taxes — there is no state layer on top.

Compared to California, a Texas worker earning $80,000 takes home $4,243 more per year — purely from the absence of state income tax. At $100,000, the Texas advantage over California is $6,323 per year. Against New York, the difference at $80,000 is $3,723 per year. This math is why Texas has been one of the fastest-growing states for corporate relocations and remote worker migration. A dual-income household with two $100,000 earners saves over $12,000 per year by living in Texas instead of California.

Watch out: Texas has no income tax on wages, but remote workers who move from California should be aware that California can attempt to tax California-source income for up to a year after a move if you maintain significant ties to the state — such as a California-registered business, property, or a spouse still living there. Fully severing California ties is important to lock in the Texas tax advantage.`,
  faqs: [
    {
      question: 'Does Texas have a state income tax?',
      answer: 'No. Texas has no state income tax. Your paycheck is only subject to federal income tax and FICA (Social Security and Medicare) at the state level.',
    },
    {
      question: 'Do Texas cities charge local income tax?',
      answer: 'No. No city in Texas charges a local income tax. Houston, Dallas, Austin, and San Antonio all have a 0% local income tax rate.',
    },
    {
      question: 'Why does Texas have no income tax but high property taxes?',
      answer: 'Texas funds public services primarily through property taxes and sales tax instead of income tax. Texas property tax rates average around 1.6–1.8% of assessed value — among the highest in the country.',
    },
    {
      question: 'How much more do I take home in Texas vs California?',
      answer: 'On a $80,000 salary as a single filer, a Texas worker takes home approximately $3,500–$5,000 more per year than the same earner in California, due to California\'s 9.3% state rate and 1.1% SDI.',
    },
    {
      question: 'What taxes does a Texas employee still pay?',
      answer: 'Texas employees pay federal income tax and FICA — Social Security (6.2% up to $184,500) and Medicare (1.45%). There is no state income tax, no SDI, and no local income tax.',
    },
  ],
}
