// 2026 federal tax data — source: IRS Rev. Proc. 2025, Tax Foundation
import type { FederalTaxData } from '../types'

export const federal2026: FederalTaxData = {
  year: 2026,
  brackets: {
    single: [
      { min: 0, max: 12400, rate: 0.10 },
      { min: 12400, max: 50400, rate: 0.12 },
      { min: 50400, max: 105700, rate: 0.22 },
      { min: 105700, max: 201775, rate: 0.24 },
      { min: 201775, max: 256225, rate: 0.32 },
      { min: 256225, max: 640600, rate: 0.35 },
      { min: 640600, max: Infinity, rate: 0.37 },
    ],
    married: [
      { min: 0, max: 24800, rate: 0.10 },
      { min: 24800, max: 100800, rate: 0.12 },
      { min: 100800, max: 211400, rate: 0.22 },
      { min: 211400, max: 403550, rate: 0.24 },
      { min: 403550, max: 512450, rate: 0.32 },
      { min: 512450, max: 768700, rate: 0.35 },
      { min: 768700, max: Infinity, rate: 0.37 },
    ],
  },
  standardDeduction: {
    single: 16100,
    married: 32200,
    headOfHousehold: 24150,
  },
  fica: {
    socialSecurityRate: 0.062,
    medicareRate: 0.0145,
    socialSecurityWageCap: 184500,
  },
  selfEmployment: {
    rate: 0.153,
    deductiblePortion: 0.5,
  },
}
