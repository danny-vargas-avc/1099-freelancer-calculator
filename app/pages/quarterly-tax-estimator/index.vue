<template>
  <main class="max-w-3xl mx-auto px-4 py-10">
    <Breadcrumb :crumbs="[{ label: 'Home', href: '/' }, { label: 'Quarterly Tax Estimator' }]" class="mb-6" />

    <h1 class="text-3xl font-bold text-gray-900 mb-2">Quarterly Tax Estimator 2026</h1>
    <p class="text-gray-500 mb-8">
      Estimate your 2026 quarterly estimated tax payments as a freelancer or self-employed worker.
      Calculates SE tax + federal income tax broken into four IRS payment deadlines.
      Add your prior-year tax liability to see your safe harbor amount.
    </p>

    <QuarterlyEstimator />

    <section class="mt-12">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Calculate by State</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <NuxtLink
          v-for="state in allStates"
          :key="state.slug"
          :to="`/quarterly-tax-estimator/${state.slug}`"
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
  title: 'Quarterly Tax Estimator 2026 — Freelancer Estimated Tax Payments',
  description: 'Estimate your 2026 quarterly tax payments as a freelancer or 1099 contractor. Calculate how much to pay in April, June, September, and January. Includes safe harbor calculation.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://1099freelancer.com/quarterly-tax-estimator' }] })
</script>
