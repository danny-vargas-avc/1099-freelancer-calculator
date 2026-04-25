import type { StateTaxData, TaxBracket } from '../../data/types'

function calcProgressiveTax(income: number, brackets: TaxBracket[]): number {
  let tax = 0
  for (const bracket of brackets) {
    if (income <= bracket.min) break
    const taxable = Math.min(income, bracket.max) - bracket.min
    tax += taxable * bracket.rate
  }
  return tax
}

export function useStateTax() {
  function calculate(
    grossAnnual: number,
    filingStatus: 'single' | 'married',
    state: StateTaxData,
    localTaxRate: number = 0,
  ) {
    if (!state.hasIncomeTax) {
      const sdi = state.sdi ? grossAnnual * state.sdi : 0
      const local = grossAnnual * localTaxRate
      return { stateTax: 0, sdi, local, total: sdi + local, effectiveRate: 0 }
    }

    let taxableIncome = grossAnnual
    if (state.standardDeduction) {
      const deduction = filingStatus === 'married'
        ? state.standardDeduction.married
        : state.standardDeduction.single
      taxableIncome = Math.max(0, grossAnnual - deduction)
    }

    let stateTax = 0
    if (state.flatRate) {
      stateTax = taxableIncome * state.flatRate
    } else if (state.brackets) {
      stateTax = calcProgressiveTax(taxableIncome, state.brackets[filingStatus])
    }

    const sdi = state.sdi ? grossAnnual * state.sdi : 0
    const local = grossAnnual * localTaxRate
    const total = stateTax + sdi + local
    const effectiveRate = grossAnnual > 0 ? stateTax / grossAnnual : 0

    return { stateTax, sdi, local, total, effectiveRate }
  }

  return { calculate }
}
