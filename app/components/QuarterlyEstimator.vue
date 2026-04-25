<template>
  <div class="w-full max-w-2xl mx-auto">
    <form class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4" @submit.prevent>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="annualIncome">
            Expected Annual Income ($)
          </label>
          <input
            id="annualIncome"
            v-model.number="annualIncome"
            type="number" min="0" step="1" placeholder="0"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p class="text-xs text-gray-400 mt-1">After business expenses</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="priorYearTax">
            Prior-Year Tax Liability ($) <span class="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="priorYearTax"
            v-model.number="priorYearTax"
            type="number" min="0" step="1" placeholder="0"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p class="text-xs text-gray-400 mt-1">Enables safe harbor calculation</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="filingStatus">
            Filing Status
          </label>
          <select
            id="filingStatus"
            v-model="filingStatus"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="state">State</label>
          <select
            id="state"
            v-model="selectedStateSlug"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option v-for="s in allStates" :key="s.slug" :value="s.slug">{{ s.name }}</option>
          </select>
        </div>
      </div>
    </form>

    <div v-if="estimate" class="mt-6 space-y-4">
      <!-- Safe harbor banner -->
      <div v-if="safeHarborAmount" class="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-sm">
        <p class="font-medium text-indigo-900 mb-1">Safe Harbor: {{ fmt(safeHarborAmount / 4) }} / quarter</p>
        <p class="text-indigo-700">
          Pay {{ fmt(safeHarborAmount) }} total ({{ fmt(safeHarborAmount / 4) }} each quarter) to avoid
          IRS underpayment penalties. This is the lesser of 90% of current-year tax or 100% of last year's tax.
        </p>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">2026 Quarterly Payment Schedule</h2>
        <div class="space-y-3">
          <div
            v-for="q in estimate.quarters"
            :key="q.label"
            class="flex items-center justify-between p-3 rounded-lg bg-gray-50"
          >
            <div>
              <p class="font-medium text-gray-900 text-sm">{{ q.label }}</p>
              <p class="text-xs text-gray-500">Due {{ q.due }}</p>
            </div>
            <p class="font-semibold text-gray-900">{{ fmt(q.amount) }}</p>
          </div>
        </div>
        <div class="border-t border-gray-100 mt-4 pt-4 flex justify-between font-semibold text-gray-900">
          <span>Total Annual Tax</span>
          <span>{{ fmt(estimate.totalTax) }}</span>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-3">Tax Breakdown</h2>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between text-gray-600">
            <span>Self-Employment Tax (15.3%)</span>
            <span>{{ fmt(estimate.result.selfEmployment.tax) }}</span>
          </div>
          <div class="flex justify-between text-gray-600">
            <span>Federal Income Tax</span>
            <span>{{ fmt(estimate.result.federal.tax) }}</span>
          </div>
          <div v-if="estimate.result.state.tax > 0" class="flex justify-between text-gray-600">
            <span>State Income Tax</span>
            <span>{{ fmt(estimate.result.state.tax) }}</span>
          </div>
          <div class="flex justify-between text-gray-500 text-xs pt-1">
            <span>SE deduction applied</span>
            <span>−{{ fmt(estimate.result.selfEmployment.deduction) }}</span>
          </div>
          <div class="flex justify-between font-semibold text-gray-900 border-t border-gray-100 pt-2">
            <span>Effective Tax Rate</span>
            <span>{{ (estimate.result.effectiveTotalRate * 100).toFixed(1) }}%</span>
          </div>
        </div>
      </div>

      <p class="text-xs text-gray-500 px-1">
        Quarterly payments are each 25% of estimated annual tax. Dates follow IRS 2026 schedule.
        Consult a tax professional for your exact liability.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { allStates, stateBySlug } from '../../data/states/index'
import { usePaycheck } from '../composables/usePaycheck'
import type { FilingStatus } from '../composables/usePaycheck'

const QUARTERS = [
  { label: 'Q1 — January–March', due: 'April 15, 2026' },
  { label: 'Q2 — April–May', due: 'June 16, 2026' },
  { label: 'Q3 — June–August', due: 'September 15, 2026' },
  { label: 'Q4 — September–December', due: 'January 15, 2027' },
]

const props = withDefaults(defineProps<{
  defaultStateSlug?: string
}>(), {
  defaultStateSlug: 'california',
})

const annualIncome = ref<number>(0)
const priorYearTax = ref<number>(0)
const filingStatus = ref<FilingStatus>('single')
const selectedStateSlug = ref<string>(props.defaultStateSlug)

const { calculate } = usePaycheck()

const estimate = computed(() => {
  if (!annualIncome.value || annualIncome.value <= 0) return null
  const state = stateBySlug[selectedStateSlug.value]
  if (!state) return null

  const result = calculate({
    grossPay: annualIncome.value,
    payPeriod: 'annual',
    filingStatus: filingStatus.value,
    state,
    employmentType: '1099',
  })

  const totalTax = result.selfEmployment.tax + result.federal.tax + result.state.total
  const perQuarter = totalTax / 4

  return {
    result,
    totalTax,
    quarters: QUARTERS.map(q => ({ ...q, amount: perQuarter })),
  }
})

// Safe harbor: lesser of 90% current-year or 100% prior-year tax
const safeHarborAmount = computed(() => {
  if (!estimate.value || !priorYearTax.value || priorYearTax.value <= 0) return null
  const ninetyPctCurrent = estimate.value.totalTax * 0.9
  const hundredPctPrior = priorYearTax.value
  return Math.min(ninetyPctCurrent, hundredPctPrior)
})

function fmt(n: number): string {
  return Math.round(n).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}
</script>
