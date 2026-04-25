<template>
  <section aria-label="Frequently Asked Questions">
    <h2 class="text-xl font-semibold text-zinc-100 mb-4">Frequently Asked Questions</h2>
    <div class="space-y-3">
      <details
        v-for="(faq, i) in faqs"
        :key="i"
        class="group bg-zinc-900 border border-zinc-800 rounded-xl"
      >
        <summary class="flex items-center justify-between cursor-pointer px-4 py-3.5 font-medium text-zinc-200 list-none">
          {{ faq.question }}
          <span class="ml-4 text-zinc-500 group-open:rotate-180 transition-transform duration-200 flex-shrink-0">▾</span>
        </summary>
        <div class="px-4 pb-4 pt-1 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800">
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
