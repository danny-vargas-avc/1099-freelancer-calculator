<template>
  <section>
    <h2 class="text-xl font-semibold text-zinc-100 mb-4">Other Calculators</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <h3 class="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">{{ stateName }} Calculators</h3>
        <ul class="space-y-1">
          <li v-for="link in stateCalcLinks" :key="link.href">
            <NuxtLink :to="link.href" class="text-indigo-400 hover:text-indigo-300 hover:underline text-sm transition-colors">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div v-if="neighborLinks.length">
        <h3 class="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">Compare Nearby States</h3>
        <ul class="space-y-1">
          <li v-for="link in neighborLinks" :key="link.href">
            <NuxtLink :to="link.href" class="text-indigo-400 hover:text-indigo-300 hover:underline text-sm transition-colors">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { neighbors } from '../../data/neighbors'
import { stateBySlug } from '../../data/states/index'

const props = defineProps<{
  stateSlug: string
  stateName: string
  currentCalc?: string
}>()

const CALC_TYPES = [
  { path: '1099-tax-calculator', label: '1099 Tax Calculator' },
  { path: 'quarterly-tax-estimator', label: 'Quarterly Tax Estimator' },
  { path: 'freelancer-deduction-calculator', label: 'Deduction Calculator' },
]

const stateCalcLinks = computed(() =>
  CALC_TYPES
    .filter(c => c.path !== props.currentCalc)
    .map(c => ({
      href: `/${c.path}/${props.stateSlug}`,
      label: `${props.stateName} ${c.label}`,
    }))
)

const neighborLinks = computed(() =>
  (neighbors[props.stateSlug] ?? []).map(slug => {
    const state = stateBySlug[slug]
    return {
      href: `/1099-tax-calculator/${slug}`,
      label: `${state?.name ?? slug} 1099 Tax Calculator`,
    }
  })
)
</script>
