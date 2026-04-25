// Shared TypeScript types for all tax data

export interface TaxBracket {
  min: number
  max: number
  rate: number
}

export interface FederalTaxData {
  year: number
  brackets: {
    single: TaxBracket[]
    married: TaxBracket[]
  }
  standardDeduction: {
    single: number
    married: number
    headOfHousehold: number
  }
  fica: {
    socialSecurityRate: number
    medicareRate: number
    socialSecurityWageCap: number
  }
  selfEmployment: {
    rate: number
    deductiblePortion: number
  }
}

export interface City {
  name: string
  slug: string
  localTaxRate: number
}

export interface Faq {
  question: string
  answer: string
}

export interface StateTaxData {
  name: string
  abbreviation: string
  slug: string
  hasIncomeTax: boolean
  flatRate?: number
  brackets?: {
    single: TaxBracket[]
    married: TaxBracket[]
  }
  standardDeduction?: {
    single: number
    married: number
  }
  sdi?: number
  cities: City[]
  faqs: Faq[]
  uniqueCopy: string
}
