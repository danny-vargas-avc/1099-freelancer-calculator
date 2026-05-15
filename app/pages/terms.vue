<template>
  <main class="max-w-2xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold text-zinc-100 mb-6">Terms of Service</h1>
    <p class="text-sm text-zinc-600 mb-8">Last updated: January 2026</p>
    <div class="space-y-6 text-zinc-400">
      <section>
        <h2 class="text-lg font-semibold text-zinc-100 mb-2">Not Tax Advice</h2>
        <p>
          The calculators on 1099Freelancer are provided for informational and educational purposes only.
          They are <strong>not tax advice</strong> and are not a substitute for professional
          guidance from a qualified CPA, tax attorney, or enrolled agent. Results are estimates
          only and may differ from your actual tax liability.
        </p>
      </section>
      <section>
        <h2 class="text-lg font-semibold text-zinc-100 mb-2">Accuracy</h2>
        <p>
          We make reasonable efforts to keep tax data current and accurate. However, tax laws
          change frequently, and we cannot guarantee that all information is complete or up to
          date. Always verify calculations against official IRS publications or a tax professional.
        </p>
      </section>
      <section>
        <h2 class="text-lg font-semibold text-zinc-100 mb-2">Limitation of Liability</h2>
        <p>
          1099Freelancer is not liable for any errors, penalties, or financial losses arising from
          use of these calculators. You use this site at your own risk.
        </p>
      </section>
      <section>
        <h2 class="text-lg font-semibold text-zinc-100 mb-2">Use of This Site</h2>
        <p>
          You may use these calculators for personal, non-commercial purposes. You may not
          scrape, reproduce, or redistribute calculator results or site content without
          written permission.
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service — 1099Freelancer',
  description: 'Terms of service for 1099Freelancer. Calculators are for informational purposes only and not tax advice.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://1099freelancer.com/terms' }] })
</script>
