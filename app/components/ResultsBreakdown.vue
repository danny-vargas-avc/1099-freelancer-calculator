<template>
  <div class="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
    <div class="bg-gradient-to-br from-indigo-600 to-violet-600 text-white px-6 py-8 text-center">
      <p class="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-1">Net Annual Income</p>
      <p class="text-5xl font-bold tracking-tight">{{ fmt(result.netAnnual) }}</p>
      <p class="text-indigo-200 text-sm mt-2">after all taxes</p>
      <div class="mt-4 inline-flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1 text-xs text-white">
        <span class="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
        {{ (result.effectiveTotalRate * 100).toFixed(1) }}% effective tax rate
      </div>
    </div>

    <div class="px-6 py-6 flex flex-col sm:flex-row gap-6 items-center">
      <div class="flex-shrink-0 relative">
        <svg viewBox="0 0 42 42" class="w-36 h-36" aria-hidden="true">
          <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#f3f4f6" stroke-width="5" />
          <circle
            v-for="(seg, i) in segments"
            :key="i"
            cx="21" cy="21" r="15.9155"
            fill="none"
            :stroke="seg.color"
            stroke-width="5"
            :stroke-dasharray="`${seg.dash} ${100 - seg.dash}`"
            :stroke-dashoffset="seg.offset"
            stroke-linecap="butt"
          />
        </svg>
        <div class="absolute inset-0 flex items-center justify-center flex-col">
          <span class="text-xs text-gray-400 leading-none">keep</span>
          <span class="text-sm font-bold text-gray-900">{{ pct(result.netAnnual / result.grossAnnual) }}</span>
        </div>
      </div>

      <div class="flex-1 w-full">
        <table class="w-full text-sm">
          <tbody class="divide-y divide-gray-50">
            <tr v-for="row in rows" :key="row.label">
              <td class="py-2.5 flex items-center gap-2">
                <span class="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0" :style="{ background: row.color }" />
                <span class="text-gray-600">{{ row.label }}</span>
              </td>
              <td class="py-2.5 text-right text-gray-400 text-xs pr-3">{{ pct(row.amount / result.grossAnnual) }}</td>
              <td class="py-2.5 text-right font-semibold text-gray-900">{{ fmt(row.amount) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <p class="text-xs text-gray-400 text-center pb-4">
      Estimates for {{ new Date().getFullYear() }} tax year · For informational purposes only
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PaycheckResult } from '../composables/usePaycheck'

const props = defineProps<{ result: PaycheckResult }>()

function fmt(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}
function pct(n: number): string {
  return (n * 100).toFixed(1) + '%'
}

const COLORS = {
  net: '#22c55e',
  federal: '#3b82f6',
  state: '#8b5cf6',
  se: '#ef4444',
}

const rows = computed(() => {
  const r = props.result
  return [
    { label: 'Net Income', color: COLORS.net, amount: r.netAnnual },
    { label: 'Self-Employment Tax', color: COLORS.se, amount: r.selfEmployment.tax },
    { label: 'Federal Income Tax', color: COLORS.federal, amount: r.federal.tax },
    ...(r.state.tax > 0 ? [{ label: 'State Income Tax', color: COLORS.state, amount: r.state.tax }] : []),
    ...(r.state.sdi > 0 ? [{ label: 'State SDI', color: COLORS.state, amount: r.state.sdi }] : []),
  ].filter(row => row.amount > 0)
})

const segments = computed(() => {
  const r = props.result
  const total = r.grossAnnual
  const slices = [
    { amount: r.selfEmployment.tax, color: COLORS.se },
    { amount: r.federal.tax, color: COLORS.federal },
    { amount: r.state.tax + r.state.sdi, color: COLORS.state },
    { amount: r.netAnnual, color: COLORS.net },
  ].filter(s => s.amount > 0)

  let offset = 25
  return slices.map(s => {
    const dash = (s.amount / total) * 100
    const seg = { dash, offset: 100 - offset, color: s.color }
    offset += dash
    return seg
  })
})
</script>
