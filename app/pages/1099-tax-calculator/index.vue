<template>
  <main class="max-w-3xl mx-auto px-4 py-10">
    <Breadcrumb :crumbs="[{ label: 'Home', href: '/' }, { label: '1099 Tax Calculator' }]" class="mb-6" />

    <h1 class="text-3xl font-bold text-gray-900 mb-2">1099 Tax Calculator 2026</h1>
    <p class="text-gray-500 mb-8">
      Estimate your self-employment tax, federal income tax, and net income as a 1099 contractor.
      Includes the SE deduction — 50% of self-employment tax is deductible from federal taxable income.
    </p>

    <SelfEmploymentCalculator />

    <section class="mt-12">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Calculate by State</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <NuxtLink
          v-for="state in allStates"
          :key="state.slug"
          :to="`/1099-tax-calculator/${state.slug}`"
          class="text-sm text-indigo-600 hover:underline py-1"
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
  title: '1099 Tax Calculator 2026 — Self-Employment Tax Estimator',
  description: 'Free 1099 tax calculator for 2026. Estimate your self-employment tax (15.3%), federal income tax, and net take-home as an independent contractor.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://1099freelancer.com/1099-tax-calculator' }] })
</script>
