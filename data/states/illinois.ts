import type { StateTaxData } from '../types'

export const illinois: StateTaxData = {
  name: 'Illinois',
  abbreviation: 'IL',
  slug: 'illinois',
  hasIncomeTax: true,
  flatRate: 0.0495,
  cities: [
    { name: 'Chicago', slug: 'chicago', localTaxRate: 0 },
    { name: 'Aurora', slug: 'aurora', localTaxRate: 0 },
    { name: 'Joliet', slug: 'joliet', localTaxRate: 0 },
    { name: 'Naperville', slug: 'naperville', localTaxRate: 0 },
    { name: 'Rockford', slug: 'rockford', localTaxRate: 0 },
    { name: 'Springfield', slug: 'springfield', localTaxRate: 0 },
    { name: 'Elgin', slug: 'elgin', localTaxRate: 0 },
    { name: 'Peoria', slug: 'peoria', localTaxRate: 0 },
    { name: 'Champaign', slug: 'champaign', localTaxRate: 0 },
    { name: 'Waukegan', slug: 'waukegan', localTaxRate: 0 },
  ],
  uniqueCopy: `Illinois has a flat income tax rate of 4.95% applied to all income regardless of earnings level — the same rate whether you earn $30,000 or $300,000. Unlike the federal system or most state systems, Illinois does not conform to the federal standard deduction, meaning nearly your full gross income is subject to state tax with minimal offsets. There are no local city income taxes in Illinois — Chicago, Springfield, and every other city apply the same state rate.

Here's what a single Illinois filer keeps in 2026: on a $50,000 salary, take-home is $39,880 per year ($3,323/month), with $2,475 going to state income tax. At $80,000, you keep $61,150 ($5,096/month), paying $3,960 in state tax. At $100,000, take-home is $74,230 ($6,186/month) with $4,950 in state tax. At $150,000, you keep $106,366 ($8,864/month) with $7,425 in state tax. Because the rate is flat, every additional dollar of income costs you exactly 4.95 cents in Illinois taxes.

Compared to neighboring Indiana (3.05% flat), Illinois workers pay roughly $950 more per year on an $80,000 salary in state income taxes alone. Against Wisconsin (graduated system with rates up to 7.65%), Illinois actually fares better at higher incomes. Versus Michigan (4.05% flat), the Illinois premium is about $720 per year at $80,000. Illinois's flat structure means there's no bracket-climbing risk as income grows — your effective and marginal state rates are always the same.

Watch out: Illinois's flat tax applies broadly with few deductions or credits at the state level. Unlike some states where retirement contributions or health premiums significantly reduce taxable state income, Illinois conforms to different rules than the federal system. For most W-2 workers, there's very little planning you can do to reduce your Illinois income tax bill — the 4.95% is applied to substantially all compensation.`,
  faqs: [
  {
    question: "What is the Illinois income tax rate for 2026?",
    answer: "Illinois has a flat income tax rate of 4.95% on all taxable income."
  },
  {
    question: "Why can't Illinois switch to a graduated income tax?",
    answer: "Illinois' constitution requires a flat income tax. A 2020 ballot measure to allow a graduated tax was rejected by voters."
  },
  {
    question: "Do Illinois cities charge local income tax?",
    answer: "No. No city in Illinois imposes a local income tax on wages."
  },
  {
    question: "Does Illinois have high taxes overall?",
    answer: "Illinois income tax (4.95%) is moderate, but Illinois has some of the highest property taxes in the nation. Overall tax burden depends heavily on whether you own property."
  }
],
}
