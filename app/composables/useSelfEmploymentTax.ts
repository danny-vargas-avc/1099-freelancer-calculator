export function useSelfEmploymentTax() {
  function calculate(
    netSelfEmploymentIncome: number,
    seRate: number,
    deductiblePortion: number,
    socialSecurityWageCap: number,
  ) {
    // SE tax applies to 92.35% of net SE income (equivalent to employer+employee share)
    const seWages = netSelfEmploymentIncome * 0.9235
    const seTaxableForSS = Math.min(seWages, socialSecurityWageCap)
    const seTax = seTaxableForSS * seRate + Math.max(0, seWages - socialSecurityWageCap) * 0.029
    // 50% of SE tax is deductible from gross income for federal income tax
    const deduction = seTax * deductiblePortion
    return { seTax, deduction, seWages }
  }

  return { calculate }
}
