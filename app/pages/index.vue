<template>
  <main class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold text-zinc-100 mb-2">1099 Tax Calculator 2026</h1>
    <p class="text-zinc-400 mb-8">
      Estimate your self-employment tax, federal income tax, and net annual income as a freelancer or 1099 contractor.
      Includes the SE deduction — 50% of your SE tax is deductible from federal income.
    </p>

    <SelfEmploymentCalculator />

    <section class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <NuxtLink
        v-for="tool in tools"
        :key="tool.href"
        :to="tool.href"
        class="bg-zinc-900 rounded-xl border border-zinc-800 p-5 hover:border-indigo-500/50 hover:bg-zinc-800/50 transition-all"
      >
        <p class="font-semibold text-gray-900 mb-1">{{ tool.label }}</p>
        <p class="text-sm text-gray-500">{{ tool.description }}</p>
      </NuxtLink>
    </section>

    <section class="mt-14">
      <h2 class="text-xl font-semibold text-zinc-100 mb-4">Calculate by State</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <NuxtLink
          v-for="state in allStates"
          :key="state.slug"
          :to="`/1099-tax-calculator/${state.slug}`"
          class="text-sm text-indigo-400 hover:text-indigo-300 hover:underline py-1 transition-colors"
        >
          {{ state.name }}
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { allStates } from '../../data/states/index'

useSeoMeta({
  title: '1099 Tax Calculator 2026 — Freelancer & Self-Employment Tax Estimator',
  description: 'Free 1099 tax calculator for 2026. Estimate self-employment tax (15.3%), federal income tax, and net annual income as a freelancer or independent contractor. All 50 states.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://1099freelancer.com' }] })

const tools = [
  {
    href: '/1099-tax-calculator',
    label: '1099 Tax Calculator',
    description: 'SE tax, federal, and state tax on your contractor income.',
  },
  {
    href: '/quarterly-tax-estimator',
    label: 'Quarterly Tax Estimator',
    description: 'IRS quarterly payment amounts and due dates with safe harbor.',
  },
  {
    href: '/freelancer-deduction-calculator',
    label: 'Deduction Calculator',
    description: 'See how home office, mileage, and retirement reduce your tax bill.',
  },
]
</script>
