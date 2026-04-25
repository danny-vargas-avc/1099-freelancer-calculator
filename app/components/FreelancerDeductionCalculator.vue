<template>
  <div class="w-full max-w-2xl mx-auto space-y-6">
    <form class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-5" @submit.prevent>
      <!-- Income -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="sm:col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-1" for="grossIncome">
            Gross Self-Employment Income ($)
          </label>
          <input
            id="grossIncome"
            v-model.number="grossIncome"
            type="number" min="0" step="1" placeholder="80000"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p class="text-xs text-gray-400 mt-1">Before business expenses and taxes</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="filingStatus">Filing Status</label>
          <select id="filingStatus" v-model="filingStatus"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="state">State</label>
          <select id="state" v-model="selectedStateSlug"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option v-for="s in allStates" :key="s.slug" :value="s.slug">{{ s.name }}</option>
          </select>
        </div>
      </div>

      <!-- Deductions -->
      <div class="border-t border-gray-100 pt-5">
        <p class="text-sm font-medium text-gray-700 mb-4">Business Deductions</p>

        <div class="space-y-4">
          <!-- Home office -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Home Office</label>
            <select v-model="homeOfficeMethod"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2">
              <option value="none">None</option>
              <option value="simplified">Simplified ($5/sq ft, max 300 sq ft)</option>
              <option value="actual">Actual expenses (enter dollar amount)</option>
            </select>
            <input
              v-if="homeOfficeMethod === 'simplified'"
              v-model.number="homeOfficeSqFt"
              type="number" min="0" max="300" step="1" placeholder="100"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p v-if="homeOfficeMethod === 'simplified'" class="text-xs text-gray-400 mt-1">Square feet dedicated to business (max 300)</p>
            <input
              v-if="homeOfficeMethod === 'actual'"
              v-model.number="homeOfficeActual"
              type="number" min="0" step="1" placeholder="0"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1" for="businessMiles">
                Business Miles
              </label>
              <input id="businessMiles" v-model.number="businessMiles"
                type="number" min="0" step="1" placeholder="0"
                class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p class="text-xs text-gray-400 mt-1">$0.67/mi (2026 IRS rate)</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1" for="equipment">
                Equipment & Supplies ($)
              </label>
              <input id="equipment" v-model.number="equipment"
                type="number" min="0" step="1" placeholder="0"
                class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Above-the-line -->
      <div class="border-t border-gray-100 pt-5">
        <p class="text-sm font-medium text-gray-700 mb-4">Above-the-Line Deductions</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1" for="healthInsurance">
              Health Insurance Premiums ($)
            </label>
            <input id="healthInsurance" v-model.number="healthInsurance"
              type="number" min="0" step="1" placeholder="0"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p class="text-xs text-gray-400 mt-1">Self-employed: 100% deductible</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Retirement Account</label>
            <select v-model="retirementType"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2">
              <option value="none">None</option>
              <option value="sep-ira">SEP-IRA (25% of net, max $70k)</option>
              <option value="solo-401k">Solo 401(k) (employee up to $23,500)</option>
            </select>
            <input
              v-if="retirementType !== 'none'"
              v-model.number="retirementContribution"
              type="number" min="0" step="1" placeholder="0"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p v-if="result && retirementType !== 'none'" class="text-xs text-gray-400 mt-1">
              Your cap: {{ fmt(result.retirementCap) }}
            </p>
          </div>

          <div class="sm:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1" for="other">
              Other Deductions ($)
            </label>
            <input id="other" v-model.number="otherDeductions"
              type="number" min="0" step="1" placeholder="0"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
    </form>

    <!-- Results -->
    <div v-if="result && grossIncome > 0" class="space-y-4">
      <!-- Tax saved callout -->
      <div class="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
        <p class="text-sm text-green-700 mb-1">Total Tax Savings</p>
        <p class="text-4xl font-bold text-green-800">{{ fmt(result.taxSaved) }}</p>
        <p class="text-sm text-green-600 mt-1">{{ fmt(result.totalDeductions) }} in deductions</p>
      </div>

      <!-- Before / After comparison -->
      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="grid grid-cols-2 divide-x divide-gray-100">
          <div class="p-5">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Without Deductions</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between text-gray-600">
                <span>SE Tax</span><span>{{ fmt(result.before.seTax) }}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Federal Tax</span><span>{{ fmt(result.before.federalTax) }}</span>
              </div>
              <div v-if="result.before.stateTax > 0" class="flex justify-between text-gray-600">
                <span>State Tax</span><span>{{ fmt(result.before.stateTax) }}</span>
              </div>
              <div class="flex justify-between font-semibold text-gray-900 border-t border-gray-100 pt-2">
                <span>Total Tax</span><span>{{ fmt(result.before.totalTax) }}</span>
              </div>
              <div class="flex justify-between font-semibold text-gray-900">
                <span>Net Income</span><span>{{ fmt(result.before.netIncome) }}</span>
              </div>
              <div class="flex justify-between text-gray-500 text-xs">
                <span>Effective Rate</span><span>{{ pct(result.before.effectiveRate) }}</span>
              </div>
            </div>
          </div>

          <div class="p-5 bg-green-50/40">
            <p class="text-xs font-semibold text-green-600 uppercase tracking-wide mb-3">With Deductions</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between text-gray-600">
                <span>SE Tax</span><span>{{ fmt(result.after.seTax) }}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Federal Tax</span><span>{{ fmt(result.after.federalTax) }}</span>
              </div>
              <div v-if="result.after.stateTax > 0" class="flex justify-between text-gray-600">
                <span>State Tax</span><span>{{ fmt(result.after.stateTax) }}</span>
              </div>
              <div class="flex justify-between font-semibold text-gray-900 border-t border-gray-100 pt-2">
                <span>Total Tax</span><span>{{ fmt(result.after.totalTax) }}</span>
              </div>
              <div class="flex justify-between font-semibold text-green-800">
                <span>Net Income</span><span>{{ fmt(result.after.netIncome) }}</span>
              </div>
              <div class="flex justify-between text-gray-500 text-xs">
                <span>Effective Rate</span><span>{{ pct(result.after.effectiveRate) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Deduction breakdown -->
        <div class="border-t border-gray-100 p-5">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Deduction Breakdown</p>
          <div class="space-y-1.5 text-sm">
            <div v-if="result.homeOfficeDeduction > 0" class="flex justify-between text-gray-600">
              <span>Home Office</span><span>{{ fmt(result.homeOfficeDeduction) }}</span>
            </div>
            <div v-if="result.mileageDeduction > 0" class="flex justify-between text-gray-600">
              <span>Mileage</span><span>{{ fmt(result.mileageDeduction) }}</span>
            </div>
            <div v-if="equipment > 0" class="flex justify-between text-gray-600">
              <span>Equipment & Supplies</span><span>{{ fmt(equipment) }}</span>
            </div>
            <div v-if="result.aboveLineTotal > 0" class="flex justify-between text-gray-600">
              <span>Health Insurance + Retirement</span><span>{{ fmt(result.aboveLineTotal) }}</span>
            </div>
            <div v-if="otherDeductions > 0" class="flex justify-between text-gray-600">
              <span>Other</span><span>{{ fmt(otherDeductions) }}</span>
            </div>
            <div class="flex justify-between font-semibold text-gray-900 border-t border-gray-100 pt-2">
              <span>Total Deductions</span><span>{{ fmt(result.totalDeductions) }}</span>
            </div>
          </div>
        </div>
      </div>

      <p class="text-xs text-gray-500 px-1">
        For informational purposes only. Deduction eligibility depends on your specific situation.
        Consult a tax professional.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { allStates, stateBySlug } from '../../data/states/index'
import { useDeductions } from '../composables/useDeductions'
import type { FilingStatus } from '../composables/usePaycheck'

const props = withDefaults(defineProps<{
  defaultStateSlug?: string
}>(), {
  defaultStateSlug: 'california',
})

const grossIncome = ref<number>(0)
const filingStatus = ref<FilingStatus>('single')
const selectedStateSlug = ref<string>(props.defaultStateSlug)
const homeOfficeMethod = ref<'none' | 'simplified' | 'actual'>('none')
const homeOfficeSqFt = ref<number>(0)
const homeOfficeActual = ref<number>(0)
const businessMiles = ref<number>(0)
const equipment = ref<number>(0)
const healthInsurance = ref<number>(0)
const retirementType = ref<'none' | 'sep-ira' | 'solo-401k'>('none')
const retirementContribution = ref<number>(0)
const otherDeductions = ref<number>(0)

const { calculate } = useDeductions()

const result = computed(() => {
  if (!grossIncome.value || grossIncome.value <= 0) return null
  const state = stateBySlug[selectedStateSlug.value]
  if (!state) return null
  return calculate({
    grossIncome: grossIncome.value,
    filingStatus: filingStatus.value,
    state,
    homeOfficeMethod: homeOfficeMethod.value,
    homeOfficeSqFt: homeOfficeSqFt.value || 0,
    homeOfficeActual: homeOfficeActual.value || 0,
    businessMiles: businessMiles.value || 0,
    equipment: equipment.value || 0,
    healthInsurance: healthInsurance.value || 0,
    retirementType: retirementType.value,
    retirementContribution: retirementContribution.value || 0,
    otherDeductions: otherDeductions.value || 0,
  })
})

function fmt(n: number): string {
  return Math.round(n).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}
function pct(n: number): string {
  return (n * 100).toFixed(1) + '%'
}
</script>
