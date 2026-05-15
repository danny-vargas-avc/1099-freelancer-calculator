<template>
  <main class="max-w-3xl mx-auto px-4 py-10">
    <Breadcrumb
      :crumbs="[
        { label: 'Home', href: '/' },
        { label: 'Deduction Calculator', href: '/freelancer-deduction-calculator' },
        { label: state.name },
      ]"
      class="mb-6"
    />

    <h1 class="text-3xl font-bold text-zinc-100 mb-2">
      {{ state.name }} Freelancer Deduction Calculator 2026
    </h1>
    <p class="text-zinc-400 mb-8">
      See how business deductions reduce your {{ state.name }} freelancer taxes in 2026.
      Deductions lower your net SE income, which reduces both your SE tax and
      {{ state.hasIncomeTax ? `${state.name} state income tax` : 'federal income tax (no state income tax in ' + state.name + ')' }}.
    </p>

    <FreelancerDeductionCalculator :default-state-slug="state.slug" />

    <AdUnit slot="1234567894" placement="below-results" class="mt-6" />

    <section class="mt-10">
      <h2 class="text-xl font-semibold text-zinc-100 mb-3">
        Deductions for {{ state.name }} Freelancers
      </h2>
      <p
        v-for="(para, i) in state.uniqueCopy.split('\n\n')"
        :key="i"
        class="text-zinc-400 leading-relaxed mb-3"
      >{{ para }}</p>
    </section>

    <div class="mt-10">
      <FaqSection :faqs="state.faqs" />
    </div>

    <AdUnit slot="1234567895" placement="in-content" class="mt-8" />

    <div class="mt-8">
      <StateLinks :state-slug="state.slug" :state-name="state.name" current-calc="freelancer-deduction-calculator" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { stateBySlug } from '../../../data/states/index'
import { useJsonLd } from '../../composables/useJsonLd'

const route = useRoute()
const state = stateBySlug[route.params.state as string]
if (!state) throw createError({ statusCode: 404, statusMessage: 'State not found' })

const pageUrl = `https://1099freelancer.com/freelancer-deduction-calculator/${state.slug}`
const title = `${state.name} Freelancer Deduction Calculator 2026`
const description = `See how business deductions reduce your ${state.name} freelancer taxes in 2026. Home office, mileage, retirement contributions — before-and-after tax comparison.`

useSeoMeta({ title, description, ogUrl: pageUrl })
useHead({ link: [{ rel: 'canonical', href: pageUrl }] })

const { injectWebApplication, injectFaqPage, injectBreadcrumbList } = useJsonLd()
injectWebApplication(title, description, pageUrl)
injectFaqPage(state.faqs)
injectBreadcrumbList([
  { label: 'Home', href: '/' },
  { label: 'Deduction Calculator', href: '/freelancer-deduction-calculator' },
  { label: state.name },
])
</script>
