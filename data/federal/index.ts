// Resolves to the current tax year automatically at runtime.
// Each January: add a new YYYY.ts file — nothing else changes.
import { federal2026 } from './2026'
import type { FederalTaxData } from '../types'

const federalByYear: Record<number, FederalTaxData> = {
  2026: federal2026,
}

export const ACTIVE_TAX_YEAR = new Date().getFullYear()

export const currentFederal: FederalTaxData =
  federalByYear[ACTIVE_TAX_YEAR] ?? federal2026
