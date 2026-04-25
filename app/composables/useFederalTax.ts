import type { TaxBracket } from '../../data/types'

function calcProgressiveTax(income: number, brackets: TaxBracket[]): number {
  let tax = 0
  for (const bracket of brackets) {
    if (income <= bracket.min) break
    const taxable = Math.min(income, bracket.max) - bracket.min
    tax += taxable * bracket.rate
  }
  return tax
}

export function useFederalTax() {
  function calculate(
    grossAnnual: number,
    filingStatus: 'single' | 'married',
    brackets: { single: TaxBracket[]; married: TaxBracket[] },
    standardDeduction: { single: number; married: number; headOfHousehold: number },
  ) {
    const deduction = filingStatus === 'married' ? standardDeduction.married : standardDeduction.single
    const taxableIncome = Math.max(0, grossAnnual - deduction)
    const tax = calcProgressiveTax(taxableIncome, brackets[filingStatus])
    const effectiveRate = grossAnnual > 0 ? tax / grossAnnual : 0
    return { tax, taxableIncome, deduction, effectiveRate }
  }

  return { calculate }
}
