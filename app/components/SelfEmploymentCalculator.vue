<template>
  <div class="w-full max-w-2xl mx-auto space-y-6">
    <form class="bg-zinc-900 rounded-xl border border-zinc-800 p-6 space-y-4" @submit.prevent>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="sm:col-span-2">
          <label class="block text-sm font-medium text-zinc-300 mb-1" for="income">
            Annual Self-Employment Income ($)
          </label>
          <input
            id="income"
            v-model.number="income"
            type="number"
            min="0"
            step="1"
            placeholder="80000"
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p class="text-xs text-zinc-500 mt-1">After business expenses, before taxes</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-zinc-300 mb-1" for="filingStatus">
            Filing Status
          </label>
          <select
            id="filingStatus"
            v-model="filingStatus"
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-zinc-300 mb-1" for="state">
            State
          </label>
          <select
            id="state"
            v-model="selectedStateSlug"
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option v-for="s in allStates" :key="s.slug" :value="s.slug">
              {{ s.name }}
            </option>
          </select>
        </div>
      </div>
    </form>

    <ResultsBreakdown v-if="result" :result="result" />

    <div v-if="result" class="bg-zinc-900 rounded-xl border border-zinc-800 p-5 text-sm space-y-2">
      <p class="font-medium text-zinc-300 mb-3">How it's calculated</p>
      <div class="flex justify-between text-zinc-400">
        <span>SE wages (92.35% of income)</span>
        <span>{{ fmt(result.grossAnnual * 0.9235) }}</span>
      </div>
      <div class="flex justify-between text-zinc-400">
        <span>Self-employment tax (15.3%)</span>
        <span>{{ fmt(result.selfEmployment.tax) }}</span>
      </div>
      <div class="flex justify-between text-zinc-400">
        <span>SE deduction (50% of SE tax)</span>
        <span>−{{ fmt(result.selfEmployment.deduction) }}</span>
      </div>
      <div class="flex justify-between text-zinc-400">
        <span>Federal taxable income</span>
        <span>{{ fmt(result.grossAnnual - result.selfEmployment.deduction - result.federal.deduction) }}</span>
      </div>
      <div class="flex justify-between text-zinc-400">
        <span>Standard deduction</span>
        <span>−{{ fmt(result.federal.deduction) }}</span>
      </div>
      <div class="flex justify-between font-medium text-gray-900 border-t border-zinc-800 pt-2">
        <span>Effective tax rate</span>
        <span>{{ (result.effectiveTotalRate * 100).toFixed(1) }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { allStates, stateBySlug } from '../../data/states/index'
import { usePaycheck } from '../composables/usePaycheck'
import type { FilingStatus } from '../composables/usePaycheck'

const props = withDefaults(defineProps<{
  defaultStateSlug?: string
}>(), {
  defaultStateSlug: 'california',
})

const income = ref<number>(0)
const filingStatus = ref<FilingStatus>('single')
const selectedStateSlug = ref<string>(props.defaultStateSlug)

const { calculate } = usePaycheck()

const result = computed(() => {
  if (!income.value || income.value <= 0) return null
  const state = stateBySlug[selectedStateSlug.value]
  if (!state) return null
  return calculate({
    grossPay: income.value,
    payPeriod: 'annual',
    filingStatus: filingStatus.value,
    state,
    employmentType: '1099',
  })
})

function fmt(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}
</script>
