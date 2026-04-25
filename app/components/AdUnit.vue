<template>
  <div :class="containerClass" :style="containerStyle">
    <ins
      v-if="adsenseId"
      class="adsbygoogle block"
      :data-ad-client="adsenseId"
      :data-ad-slot="slot"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

const props = defineProps<{
  slot: string
  placement: 'below-results' | 'sidebar' | 'in-content'
}>()

const { public: { adsenseId } } = useRuntimeConfig()

// Fixed heights per placement prevent CLS when ads load
const MIN_HEIGHTS: Record<typeof props.placement, string> = {
  'below-results': '90px',
  'sidebar': '250px',
  'in-content': '250px',
}

const containerClass = computed(() => {
  const base = 'w-full overflow-hidden bg-gray-50 rounded'
  return base
})

const containerStyle = computed(() => ({
  minHeight: MIN_HEIGHTS[props.placement],
}))

onMounted(() => {
  if (adsenseId && typeof window !== 'undefined' && (window as any).adsbygoogle) {
    ;(window as any).adsbygoogle.push({})
  }
})
</script>
