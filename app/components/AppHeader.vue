<template>
  <header class="bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
      <NuxtLink to="/" class="flex items-center gap-2 flex-shrink-0">
        <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-500 text-white text-xs font-bold">1</span>
        <span class="font-semibold text-zinc-100 text-sm">1099Freelancer</span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 px-3 py-1.5 rounded-md transition-colors"
          active-class="text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/10 hover:text-indigo-400"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <NuxtLink to="/1099-tax-calculator" class="md:hidden text-sm font-medium text-indigo-400">
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
