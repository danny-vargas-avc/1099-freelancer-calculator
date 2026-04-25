import { useSelfEmploymentTax } from './useSelfEmploymentTax'
import { useFederalTax } from './useFederalTax'
import { useStateTax } from './useStateTax'
import { currentFederal } from '../../data/federal/index'
import type { StateTaxData } from '../../data/types'
import type { FilingStatus } from './usePaycheck'

// 2026 IRS rates
const MILEAGE_RATE = 0.67
const HOME_OFFICE_SIMPLIFIED_RATE = 5    // per sq ft
const HOME_OFFICE_SIMPLIFIED_MAX_SQFT = 300
const SEP_IRA_PCT = 0.25
const SEP_IRA_CAP = 70000
const SOLO_401K_EMPLOYEE_CAP = 23500

export interface DeductionInputs {
  grossIncome: number
  filingStatus: FilingStatus
  state: StateTaxData
  homeOfficeMethod: 'none' | 'simplified' | 'actual'
  homeOfficeSqFt: number
  homeOfficeActual: number
  businessMiles: number
  equipment: number
  healthInsurance: number
  retirementType: 'none' | 'sep-ira' | 'solo-401k'
  retirementContribution: number
  otherDeductions: number
}

export interface TaxSummary {
  seTax: number
  federalTax: number
  stateTax: number
  totalTax: number
  netIncome: number
  effectiveRate: number
}

export interface DeductionResult {
  homeOfficeDeduction: number
  mileageDeduction: number
  scheduleCTotal: number
  retirementCap: number
  retirementActual: number
  aboveLineTotal: number
  totalDeductions: number
  adjustedSEIncome: number
  before: TaxSummary
  after: TaxSummary
  taxSaved: number
}

export function useDeductions() {
  const { calculate: calcSE } = useSelfEmploymentTax()
  const { calculate: calcFederal } = useFederalTax()
  const { calculate: calcState } = useStateTax()

  function computeTax(income: number, aboveLine: number, inputs: DeductionInputs): TaxSummary {
    const fed = currentFederal
    const { seTax, deduction: seDeduction } = calcSE(
      income,
      fed.selfEmployment.rate,
      fed.selfEmployment.deductiblePortion,
      fed.fica.socialSecurityWageCap,
    )
    const federalTaxableIncome = income - seDeduction - aboveLine
    const { tax: federalTax, deduction: standardDeduction } = calcFederal(
      federalTaxableIncome,
      inputs.filingStatus,
      fed.brackets,
      fed.standardDeduction,
    )
    const { stateTax, sdi } = calcState(income, inputs.filingStatus, inputs.state)
    const totalTax = seTax + federalTax + stateTax + sdi
    const netIncome = income - totalTax
    const effectiveRate = income > 0 ? totalTax / income : 0
    return { seTax, federalTax, stateTax: stateTax + sdi, totalTax, netIncome, effectiveRate }
  }

  function calculate(inputs: DeductionInputs): DeductionResult {
    // Home office: Schedule C deduction
    let homeOfficeDeduction = 0
    if (inputs.homeOfficeMethod === 'simplified') {
      homeOfficeDeduction = Math.min(inputs.homeOfficeSqFt, HOME_OFFICE_SIMPLIFIED_MAX_SQFT) * HOME_OFFICE_SIMPLIFIED_RATE
    } else if (inputs.homeOfficeMethod === 'actual') {
      homeOfficeDeduction = Math.max(0, inputs.homeOfficeActual)
    }

    const mileageDeduction = Math.max(0, inputs.businessMiles) * MILEAGE_RATE
    const equipmentDeduction = Math.max(0, inputs.equipment)
    const otherDeductions = Math.max(0, inputs.otherDeductions)

    // Schedule C deductions reduce SE income
    const scheduleCTotal = homeOfficeDeduction + mileageDeduction + equipmentDeduction + otherDeductions
    const adjustedSEIncome = Math.max(0, inputs.grossIncome - scheduleCTotal)

    // Retirement cap depends on net SE compensation (after SE deduction)
    const fed = currentFederal
    const { deduction: seDeduction } = calcSE(
      adjustedSEIncome,
      fed.selfEmployment.rate,
      fed.selfEmployment.deductiblePortion,
      fed.fica.socialSecurityWageCap,
    )
    const netSECompensation = Math.max(0, adjustedSEIncome - seDeduction)

    let retirementCap = 0
    if (inputs.retirementType === 'sep-ira') {
      retirementCap = Math.min(netSECompensation * SEP_IRA_PCT, SEP_IRA_CAP)
    } else if (inputs.retirementType === 'solo-401k') {
      retirementCap = Math.min(inputs.retirementContribution, SOLO_401K_EMPLOYEE_CAP)
    }
    const retirementActual = Math.min(Math.max(0, inputs.retirementContribution), retirementCap)

    // Health insurance + retirement: above-the-line (reduce federal taxable, not SE income)
    const healthInsurance = Math.max(0, inputs.healthInsurance)
    const aboveLineTotal = healthInsurance + retirementActual

    const before = computeTax(inputs.grossIncome, 0, inputs)
    const after = computeTax(adjustedSEIncome, aboveLineTotal, inputs)

    return {
      homeOfficeDeduction,
      mileageDeduction,
      scheduleCTotal,
      retirementCap,
      retirementActual,
      aboveLineTotal,
      totalDeductions: scheduleCTotal + aboveLineTotal,
      adjustedSEIncome,
      before,
      after,
      taxSaved: before.totalTax - after.totalTax,
    }
  }

  return { calculate }
}
