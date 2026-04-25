<template>
  <div class="overflow-x-auto">
    <table class="w-full text-sm border-collapse">
      <thead>
        <tr class="bg-zinc-800/50 text-left">
          <th class="px-4 py-2 font-medium text-zinc-400 border-b border-zinc-700">Tax Rate</th>
          <th class="px-4 py-2 font-medium text-zinc-400 border-b border-zinc-700">Income Range</th>
          <th class="px-4 py-2 font-medium text-zinc-400 border-b border-zinc-700 text-right">Max Tax in Bracket</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-zinc-800">
        <tr v-for="(bracket, i) in brackets" :key="i" class="hover:bg-zinc-800/40 transition-colors">
          <td class="px-4 py-2 font-semibold text-indigo-400">{{ pct(bracket.rate) }}</td>
          <td class="px-4 py-2 text-zinc-300">
            {{ fmt(bracket.min) }} – {{ bracket.max === Infinity ? 'and above' : fmt(bracket.max) }}
          </td>
          <td class="px-4 py-2 text-right text-zinc-500">
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
