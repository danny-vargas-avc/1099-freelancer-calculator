<template>
  <main class="max-w-3xl mx-auto px-4 py-10">
    <Breadcrumb
      :crumbs="[
        { label: 'Home', href: '/' },
        { label: '1099 Tax Calculator', href: '/1099-tax-calculator' },
        { label: state.name },
      ]"
      class="mb-6"
    />

    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      {{ state.name }} 1099 Tax Calculator 2026
    </h1>
    <p class="text-gray-500 mb-8">
      Estimate your self-employment taxes as a {{ state.name }} freelancer or contractor.
      Includes SE tax (15.3%), the 50% SE deduction, federal income tax,
      {{ state.hasIncomeTax ? `and ${state.name} state income tax` : 'and no state income tax' }}.
    </p>

    <SelfEmploymentCalculator :default-state-slug="state.slug" />

    <AdUnit slot="1234567890" placement="below-results" class="mt-6" />

    <section class="mt-10">
      <h2 class="text-xl font-semibold text-gray-900 mb-3">
        {{ state.name }} Tax Overview for 1099 Workers
      </h2>
      <p
        v-for="(para, i) in state.uniqueCopy.split('\n\n')"
        :key="i"
        class="text-gray-600 leading-relaxed mb-3"
      >{{ para }}</p>
    </section>

    <div v-if="state.brackets" class="mt-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-3">{{ state.name }} Tax Brackets 2026</h2>
      <TaxBracketTable :brackets="state.brackets.single" />
    </div>

    <div class="mt-10">
      <FaqSection :faqs="state.faqs" />
    </div>

    <AdUnit slot="1234567891" placement="in-content" class="mt-8" />

    <div class="mt-8">
      <StateLinks :state-slug="state.slug" :state-name="state.name" current-calc="1099-tax-calculator" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { stateBySlug } from '../../../data/states/index'
import { useJsonLd } from '../../composables/useJsonLd'

const route = useRoute()
const state = stateBySlug[route.params.state as string]
if (!state) throw createError({ statusCode: 404, statusMessage: 'State not found' })

const pageUrl = `https://1099freelancer.com/1099-tax-calculator/${state.slug}`
const title = `${state.name} 1099 Tax Calculator 2026`
const description = `Free ${state.name} 1099 tax calculator for 2026. Estimate self-employment tax, federal income tax, and ${state.hasIncomeTax ? `${state.name} state tax` : 'net income (no state income tax)'} as a freelancer.`

useSeoMeta({ title, description, ogUrl: pageUrl })

const { injectWebApplication, injectFaqPage, injectBreadcrumbList } = useJsonLd()
injectWebApplication(title, description, pageUrl)
injectFaqPage(state.faqs)
injectBreadcrumbList([
  { label: 'Home', href: '/' },
  { label: '1099 Tax Calculator', href: '/1099-tax-calculator' },
  { label: state.name },
])
</script>
