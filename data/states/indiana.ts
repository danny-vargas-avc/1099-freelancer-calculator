import type { StateTaxData } from '../types'

export const indiana: StateTaxData = {
  name: 'Indiana',
  abbreviation: 'IN',
  slug: 'indiana',
  hasIncomeTax: true,
  flatRate: 0.0295,
  cities: [
    { name: 'Indianapolis', slug: 'indianapolis', localTaxRate: 0 },
    { name: 'Fort Wayne', slug: 'fort-wayne', localTaxRate: 0 },
    { name: 'Evansville', slug: 'evansville', localTaxRate: 0 },
    { name: 'South Bend', slug: 'south-bend', localTaxRate: 0 },
    { name: 'Carmel', slug: 'carmel', localTaxRate: 0 },
    { name: 'Fishers', slug: 'fishers', localTaxRate: 0 },
    { name: 'Bloomington', slug: 'bloomington', localTaxRate: 0 },
    { name: 'Hammond', slug: 'hammond', localTaxRate: 0 },
    { name: 'Gary', slug: 'gary', localTaxRate: 0 },
    { name: 'Lafayette', slug: 'lafayette', localTaxRate: 0 },
  ],
  uniqueCopy: `Indiana has a flat state income tax rate of 2.95% — one of the lower flat rates in the country. However, Indiana is unique in that most counties also charge a county income tax ranging from about 0.5% to 3.38% depending on where you live and work. This means your actual effective Indiana income tax rate is higher than 2.95% for most residents. Marion County (Indianapolis) charges an additional 2.02% county tax, for example. Indiana does not have a standard deduction in the traditional sense but offers personal exemptions. The combination of a low state rate plus county taxes means Indiana workers' take-home varies significantly by county. Compared to neighboring Ohio (0-2.75% state + city taxes) and Illinois (4.95% flat, no county tax), Indiana's total burden is similar but structured differently.`,
  faqs: [
  {
    question: "What is the Indiana state income tax rate for 2026?",
    answer: "Indiana has a flat state income tax rate of 2.95%. However, most counties also charge a county income tax (0.5% to 3.38%), increasing your total Indiana tax burden."
  },
  {
    question: "Does Indiana have county income taxes?",
    answer: "Yes. Indiana is one of the few states where nearly every county charges its own income tax in addition to the state rate. The county rate depends on where you live and work."
  },
  {
    question: "What is the Indianapolis county income tax rate?",
    answer: "Marion County (Indianapolis) charges a 2.02% county income tax, bringing the total Indiana rate for Indianapolis residents to roughly 4.97%."
  },
  {
    question: "How does Indiana compare to neighboring states?",
    answer: "Indiana's state rate of 2.95% is lower than Illinois (4.95%) and Michigan (4.25%), but county taxes bring the effective total rate up significantly for most residents."
  }
],
}
