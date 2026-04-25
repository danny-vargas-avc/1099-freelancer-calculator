<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex items-center flex-wrap gap-1 text-sm text-zinc-500">
      <li v-for="(crumb, i) in crumbs" :key="i" class="flex items-center gap-1">
        <span v-if="i > 0" aria-hidden="true" class="text-zinc-700">/</span>
        <NuxtLink
          v-if="crumb.href"
          :to="crumb.href"
          class="hover:text-zinc-200 hover:underline transition-colors"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span v-else class="text-zinc-200 font-medium" aria-current="page">{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  crumbs: Array<{ label: string; href?: string }>
}>()
</script>
