<template>
  <main class="max-w-3xl mx-auto px-4 py-10">
    <Breadcrumb :crumbs="[{ label: 'Home', href: '/' }, { label: 'Deduction Calculator' }]" class="mb-6" />

    <h1 class="text-3xl font-bold text-zinc-100 mb-2">Freelancer Deduction Calculator 2026</h1>
    <p class="text-zinc-400 mb-8">
      See how business deductions reduce your self-employment tax and federal income tax.
      Enter home office, mileage, equipment, health insurance, and retirement contributions
      to see your before-and-after tax comparison.
    </p>

    <FreelancerDeductionCalculator />

    <section class="mt-12">
      <h2 class="text-xl font-semibold text-zinc-100 mb-4">Calculate by State</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <NuxtLink
          v-for="state in allStates"
          :key="state.slug"
          :to="`/freelancer-deduction-calculator/${state.slug}`"
          class="text-sm text-indigo-400 hover:text-indigo-300 hover:underline py-1 transition-colors"
        >
          {{ state.name }}
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { allStates } from '../../../data/states/index'

useSeoMeta({
  title: 'Freelancer Deduction Calculator 2026 — See Your Tax Savings',
  description: 'Calculate how business deductions reduce your 2026 freelancer taxes. Home office, mileage, equipment, health insurance, SEP-IRA — see your before-and-after tax comparison.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://1099freelancer.com/freelancer-deduction-calculator' }] })
</script>
