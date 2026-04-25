<template>
  <footer class="bg-zinc-900 border-t border-zinc-800 mt-16">
    <div class="max-w-6xl mx-auto px-4 py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <h3 class="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">Top States</h3>
          <ul class="space-y-1.5">
            <li v-for="state in topStates" :key="state.slug">
              <NuxtLink
                :to="`/1099-tax-calculator/${state.slug}`"
                class="text-sm text-zinc-400 hover:text-zinc-100 hover:underline transition-colors"
              >
                {{ state.name }} 1099 Calculator
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">Calculators</h3>
          <ul class="space-y-1.5">
            <li v-for="calc in calcTypes" :key="calc.href">
              <NuxtLink :to="calc.href" class="text-sm text-zinc-400 hover:text-zinc-100 hover:underline transition-colors">
                {{ calc.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">No Income Tax States</h3>
          <ul class="space-y-1.5">
            <li v-for="state in noTaxStates" :key="state.slug">
              <NuxtLink
                :to="`/1099-tax-calculator/${state.slug}`"
                class="text-sm text-zinc-400 hover:text-zinc-100 hover:underline transition-colors"
              >
                {{ state.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">1099Freelancer</h3>
          <p class="text-sm text-zinc-400 leading-relaxed">
            Free tax calculators for freelancers and 1099 contractors. Updated for 2026 tax brackets.
          </p>
          <p class="text-xs text-zinc-600 mt-4">
            For informational purposes only. Not tax advice.
            Consult a tax professional for your specific situation.
          </p>
        </div>

      </div>

      <div class="border-t border-zinc-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
        <span>© {{ new Date().getFullYear() }} 1099Freelancer.com · 2026 Tax Year Data</span>
        <nav class="flex gap-4">
          <NuxtLink to="/about" class="hover:text-zinc-300 transition-colors">About</NuxtLink>
          <NuxtLink to="/privacy" class="hover:text-zinc-300 transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-zinc-300 transition-colors">Terms of Service</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { allStates } from '../../data/states/index'

const TOP_STATE_SLUGS = ['california', 'texas', 'florida', 'new-york', 'illinois', 'pennsylvania', 'ohio', 'georgia', 'north-carolina', 'michigan']
const topStates = TOP_STATE_SLUGS.map(slug => allStates.find(s => s.slug === slug)!).filter(Boolean)
const noTaxStates = allStates.filter(s => !s.hasIncomeTax)

const calcTypes = [
  { href: '/1099-tax-calculator', label: '1099 Tax Calculator' },
  { href: '/quarterly-tax-estimator', label: 'Quarterly Tax Estimator' },
  { href: '/freelancer-deduction-calculator', label: 'Deduction Calculator' },
]
</script>
