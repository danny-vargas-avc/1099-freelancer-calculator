import type { StateTaxData } from '../types'

export const california: StateTaxData = {
  name: 'California',
  abbreviation: 'CA',
  slug: 'california',
  hasIncomeTax: true,
  brackets: {
    single: [
      { min: 0, max: 11079, rate: 0.01 },
      { min: 11079, max: 26264, rate: 0.02 },
      { min: 26264, max: 41452, rate: 0.04 },
      { min: 41452, max: 57542, rate: 0.06 },
      { min: 57542, max: 72724, rate: 0.08 },
      { min: 72724, max: 371479, rate: 0.093 },
      { min: 371479, max: 445771, rate: 0.103 },
      { min: 445771, max: 742953, rate: 0.113 },
      { min: 742953, max: 1000000, rate: 0.123 },
      { min: 1000000, max: Infinity, rate: 0.133 },
    ],
    married: [
      { min: 0, max: 22158, rate: 0.01 },
      { min: 22158, max: 52528, rate: 0.02 },
      { min: 52528, max: 82904, rate: 0.04 },
      { min: 82904, max: 115084, rate: 0.06 },
      { min: 115084, max: 145448, rate: 0.08 },
      { min: 145448, max: 742958, rate: 0.093 },
      { min: 742958, max: 891542, rate: 0.103 },
      { min: 891542, max: 1000000, rate: 0.113 },
      { min: 1000000, max: 1191484, rate: 0.123 },
      { min: 1191484, max: Infinity, rate: 0.133 },
    ],
  },
  standardDeduction: { single: 5540, married: 11080 },
  sdi: 0.011,
  cities: [
    { name: 'Los Angeles', slug: 'los-angeles', localTaxRate: 0 },
    { name: 'San Diego', slug: 'san-diego', localTaxRate: 0 },
    { name: 'San Jose', slug: 'san-jose', localTaxRate: 0 },
    { name: 'San Francisco', slug: 'san-francisco', localTaxRate: 0 },
    { name: 'Fresno', slug: 'fresno', localTaxRate: 0 },
    { name: 'Sacramento', slug: 'sacramento', localTaxRate: 0 },
    { name: 'Long Beach', slug: 'long-beach', localTaxRate: 0 },
    { name: 'Oakland', slug: 'oakland', localTaxRate: 0 },
    { name: 'Bakersfield', slug: 'bakersfield', localTaxRate: 0 },
    { name: 'Anaheim', slug: 'anaheim', localTaxRate: 0 },
    { name: 'Santa Ana', slug: 'santa-ana', localTaxRate: 0 },
    { name: 'Riverside', slug: 'riverside', localTaxRate: 0 },
    { name: 'Stockton', slug: 'stockton', localTaxRate: 0 },
    { name: 'Irvine', slug: 'irvine', localTaxRate: 0 },
    { name: 'Chula Vista', slug: 'chula-vista', localTaxRate: 0 },
  ],
  uniqueCopy: `California has the highest state income tax rate in the country at 13.3% on income over $1 million, and a 9.3% rate that kicks in at just $72,724 for single filers — well below what most people think of as "high income." On top of state income tax, California workers pay a 1.1% State Disability Insurance (SDI) tax with no wage cap. California has no local city income taxes, so your take-home is the same whether you work in Los Angeles or Sacramento. The state standard deduction is just $5,540 for single filers — far below the federal $14,600 — meaning more of your income is taxable at the state level.

Here's what a single California filer actually keeps in 2026 after all taxes: on a $50,000 salary, take-home is approximately $40,603 per year ($3,384/month). At $80,000, take-home is $60,867 ($5,072/month) — with state taxes and SDI costing $4,243 alone. At $100,000, you keep $72,857 ($6,071/month), with state+SDI totaling $6,323. At $150,000, take-home is $102,268 ($8,522/month), with California taking $11,523 in state taxes and SDI before federal taxes even factor in.

Compared to Nevada and Arizona — both no-income-tax or low-tax neighbors — the California gap is significant. An $80,000 earner in California takes home $4,243 less per year in state taxes than the same earner in Nevada. At $150,000, that difference grows to $11,523 annually. This explains the persistent migration from California to Nevada, Arizona, and Texas, particularly among remote workers who no longer need to be in the state for work.

Watch out: California's SDI tax has no wage cap. Unlike most payroll taxes that stop at a certain income threshold, the 1.1% SDI applies to every dollar earned. At $200,000 in gross income, that's $2,200 just in SDI — more than some states' entire income tax bills. Factor this in if you're comparing California to states with similar top rates but no SDI.`,
  faqs: [
    {
      question: 'What is the California state income tax rate for 2026?',
      answer: 'California has 10 tax brackets ranging from 1% to 13.3%. The 9.3% rate applies to single filers earning over $72,724. The top rate of 13.3% applies to income over $1 million.',
    },
    {
      question: 'Does California have a flat tax?',
      answer: 'No. California uses a progressive tax system with 10 brackets. Your rate increases only on income above each threshold — not on your entire income.',
    },
    {
      question: 'What is California SDI and how much is it?',
      answer: 'SDI stands for State Disability Insurance. In 2026, California employees pay 1.1% of all wages with no cap. It funds short-term disability and paid family leave benefits.',
    },
    {
      question: 'Do California cities charge local income tax?',
      answer: 'No. California cities do not impose local income taxes. Your state tax rate is the same whether you work in San Francisco, Los Angeles, or any other city.',
    },
    {
      question: 'How does California compare to other states for take-home pay?',
      answer: 'California ranks among the lowest for take-home pay due to its high progressive rates and SDI. On a $80,000 salary, a California single filer takes home roughly $1,500–$2,500 less per year than the same earner in a no-income-tax state like Texas or Florida.',
    },
  ],
}
