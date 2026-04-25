<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
      <NuxtLink to="/" class="flex items-center gap-2 flex-shrink-0">
        <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold">1</span>
        <span class="font-semibold text-gray-900 text-sm">1099Freelancer</span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-colors"
          active-class="text-indigo-600 bg-indigo-50 hover:bg-indigo-50 hover:text-indigo-600"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <NuxtLink to="/1099-tax-calculator" class="md:hidden text-sm font-medium text-indigo-600">
        Calculators
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { href: '/1099-tax-calculator', label: '1099 Tax' },
  { href: '/quarterly-tax-estimator', label: 'Quarterly Tax' },
  { href: '/freelancer-deduction-calculator', label: 'Deductions' },
]
</script>
