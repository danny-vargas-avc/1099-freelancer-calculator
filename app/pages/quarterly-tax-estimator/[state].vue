<template>
  <main class="max-w-3xl mx-auto px-4 py-10">
    <Breadcrumb
      :crumbs="[
        { label: 'Home', href: '/' },
        { label: 'Quarterly Tax Estimator', href: '/quarterly-tax-estimator' },
        { label: state.name },
      ]"
      class="mb-6"
    />

    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      {{ state.name }} Quarterly Tax Estimator 2026
    </h1>
    <p class="text-gray-500 mb-8">
      Estimate your 2026 quarterly tax payments as a {{ state.name }} freelancer or self-employed worker.
      Covers SE tax (15.3%), federal income tax,
      {{ state.hasIncomeTax ? `and ${state.name} state income tax` : 'and no state income tax' }}.
    </p>

    <QuarterlyEstimator :default-state-slug="state.slug" />

    <AdUnit slot="1234567892" placement="below-results" class="mt-6" />

    <section class="mt-10">
      <h2 class="text-xl font-semibold text-gray-900 mb-3">
        {{ state.name }} Quarterly Taxes for Freelancers
      </h2>
      <p
        v-for="(para, i) in state.uniqueCopy.split('\n\n')"
        :key="i"
        class="text-gray-600 leading-relaxed mb-3"
      >{{ para }}</p>
    </section>

    <div class="mt-10">
      <FaqSection :faqs="state.faqs" />
    </div>

    <AdUnit slot="1234567893" placement="in-content" class="mt-8" />

    <div class="mt-8">
      <StateLinks :state-slug="state.slug" :state-name="state.name" current-calc="quarterly-tax-estimator" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { stateBySlug } from '../../../data/states/index'
import { useJsonLd } from '../../composables/useJsonLd'

const route = useRoute()
const state = stateBySlug[route.params.state as string]
if (!state) throw createError({ statusCode: 404, statusMessage: 'State not found' })

const pageUrl = `https://1099freelancer.com/quarterly-tax-estimator/${state.slug}`
const title = `${state.name} Quarterly Tax Estimator 2026`
const description = `Estimate your 2026 quarterly tax payments as a ${state.name} freelancer. Calculate SE tax, federal income tax, and ${state.hasIncomeTax ? `${state.name} state tax` : 'net payments (no state income tax)'} due each quarter.`

useSeoMeta({ title, description, ogUrl: pageUrl })

const { injectWebApplication, injectFaqPage, injectBreadcrumbList } = useJsonLd()
injectWebApplication(title, description, pageUrl)
injectFaqPage(state.faqs)
injectBreadcrumbList([
  { label: 'Home', href: '/' },
  { label: 'Quarterly Tax Estimator', href: '/quarterly-tax-estimator' },
  { label: state.name },
])
</script>
