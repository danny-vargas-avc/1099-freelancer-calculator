<template>
  <section aria-label="Frequently Asked Questions">
    <h2 class="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
    <div class="space-y-4">
      <details
        v-for="(faq, i) in faqs"
        :key="i"
        class="group border border-gray-200 rounded-lg"
      >
        <summary class="flex items-center justify-between cursor-pointer px-4 py-3 font-medium text-gray-900 list-none">
          {{ faq.question }}
          <span class="ml-4 text-gray-400 group-open:rotate-180 transition-transform duration-200">▾</span>
        </summary>
        <div class="px-4 pb-4 pt-1 text-gray-600 text-sm leading-relaxed">
          {{ faq.answer }}
        </div>
      </details>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Faq } from '../../data/types'

defineProps<{
  faqs: Faq[]
}>()
</script>
