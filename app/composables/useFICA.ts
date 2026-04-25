export function useFICA() {
  function calculate(
    grossAnnual: number,
    socialSecurityRate: number,
    medicareRate: number,
    socialSecurityWageCap: number,
  ) {
    const ssWages = Math.min(grossAnnual, socialSecurityWageCap)
    const socialSecurity = ssWages * socialSecurityRate
    const medicare = grossAnnual * medicareRate
    // Additional Medicare tax: 0.9% on wages over $200k (single) / $250k (married)
    // Withheld at $200k threshold for W-2 regardless of filing status
    const additionalMedicare = grossAnnual > 200000 ? (grossAnnual - 200000) * 0.009 : 0
    const total = socialSecurity + medicare + additionalMedicare
    return { socialSecurity, medicare, additionalMedicare, total }
  }

  return { calculate }
}
