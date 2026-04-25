<template>
  <div class="overflow-x-auto">
    <table class="w-full text-sm border-collapse">
      <thead>
        <tr class="bg-gray-50 text-left">
          <th class="px-4 py-2 font-medium text-gray-600 border-b border-gray-200">Tax Rate</th>
          <th class="px-4 py-2 font-medium text-gray-600 border-b border-gray-200">Income Range</th>
          <th class="px-4 py-2 font-medium text-gray-600 border-b border-gray-200 text-right">Max Tax in Bracket</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr v-for="(bracket, i) in brackets" :key="i" class="hover:bg-gray-50">
          <td class="px-4 py-2 font-semibold text-gray-900">{{ pct(bracket.rate) }}</td>
          <td class="px-4 py-2 text-gray-700">
            {{ fmt(bracket.min) }} – {{ bracket.max === Infinity ? 'and above' : fmt(bracket.max) }}
          </td>
          <td class="px-4 py-2 text-right text-gray-500">
            {{ bracket.max === Infinity ? '—' : fmt((bracket.max - bracket.min) * bracket.rate) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { TaxBracket } from '../../data/types'

defineProps<{
  brackets: TaxBracket[]
}>()

function fmt(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

function pct(rate: number): string {
  return (rate * 100).toFixed(1).replace(/\.0$/, '') + '%'
}
</script>
