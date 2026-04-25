import { useFederalTax } from './useFederalTax'
import { useFICA } from './useFICA'
import { useStateTax } from './useStateTax'
import { useSelfEmploymentTax } from './useSelfEmploymentTax'
import { currentFederal } from '../../data/federal/index'
import type { StateTaxData } from '../../data/types'

export type PayPeriod = 'annual' | 'monthly' | 'biweekly' | 'weekly'
export type FilingStatus = 'single' | 'married'
export type EmploymentType = 'w2' | '1099'

export interface PaycheckResult {
  grossAnnual: number
  grossPerPeriod: number
  netAnnual: number
  netPerPeriod: number
  effectiveTotalRate: number
  federal: { tax: number; taxableIncome: number; deduction: number; effectiveRate: number }
  fica: { socialSecurity: number; medicare: number; total: number }
  state: { tax: number; sdi: number; local: number; total: number; effectiveRate: number }
  selfEmployment: { tax: number; deduction: number }
}

const PAY_PERIODS: Record<PayPeriod, number> = {
  annual: 1,
  monthly: 12,
  biweekly: 26,
  weekly: 52,
}

export function usePaycheck() {
  const { calculate: calcFederal } = useFederalTax()
  const { calculate: calcFICA } = useFICA()
  const { calculate: calcState } = useStateTax()
  const { calculate: calcSE } = useSelfEmploymentTax()

  function calculate(params: {
    grossPay: number
    payPeriod: PayPeriod
    filingStatus: FilingStatus
    state: StateTaxData
    localTaxRate?: number
    employmentType?: EmploymentType
  }): PaycheckResult {
    const { grossPay, payPeriod, filingStatus, state, localTaxRate = 0, employmentType = 'w2' } = params
    const periodsPerYear = PAY_PERIODS[payPeriod]
    const grossAnnual = grossPay * periodsPerYear

    const fed = currentFederal

    let federalTaxableIncome = grossAnnual
    let seTax = 0
    let seDeduction = 0

    if (employmentType === '1099') {
      const se = calcSE(grossAnnual, fed.selfEmployment.rate, fed.selfEmployment.deductiblePortion, fed.fica.socialSecurityWageCap)
      seTax = se.seTax
      seDeduction = se.deduction
      federalTaxableIncome = grossAnnual - seDeduction
    }

    const federal = calcFederal(federalTaxableIncome, filingStatus, fed.brackets, fed.standardDeduction)

    const fica = employmentType === 'w2'
      ? calcFICA(grossAnnual, fed.fica.socialSecurityRate, fed.fica.medicareRate, fed.fica.socialSecurityWageCap)
      : { socialSecurity: 0, medicare: 0, additionalMedicare: 0, total: 0 }

    const stateResult = calcState(grossAnnual, filingStatus, state, localTaxRate)

    const totalTaxAnnual = federal.tax + fica.total + stateResult.total + seTax
    const netAnnual = grossAnnual - totalTaxAnnual
    const netPerPeriod = netAnnual / periodsPerYear
    const grossPerPeriod = grossPay
    const effectiveTotalRate = grossAnnual > 0 ? totalTaxAnnual / grossAnnual : 0

    return {
      grossAnnual,
      grossPerPeriod,
      netAnnual,
      netPerPeriod,
      effectiveTotalRate,
      federal: {
        tax: federal.tax,
        taxableIncome: federal.tax,
        deduction: federal.deduction,
        effectiveRate: federal.effectiveRate,
      },
      fica: {
        socialSecurity: fica.socialSecurity,
        medicare: fica.medicare + fica.additionalMedicare,
        total: fica.total,
      },
      state: {
        tax: stateResult.stateTax,
        sdi: stateResult.sdi,
        local: stateResult.local,
        total: stateResult.total,
        effectiveRate: stateResult.effectiveRate,
      },
      selfEmployment: {
        tax: seTax,
        deduction: seDeduction,
      },
    }
  }

  return { calculate, PAY_PERIODS }
}
