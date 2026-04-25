<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <div class="flex-1">
      <NuxtPage />
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
})
</script>
