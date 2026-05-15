<template>
  <div class="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
    <div class="max-w-lg text-center">
      <p class="text-sm font-mono text-indigo-400 mb-3">{{ error?.statusCode || 404 }}</p>
      <h1 class="text-3xl font-bold text-zinc-100 mb-3">
        {{ error?.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
      </h1>
      <p class="text-zinc-400 mb-8 leading-relaxed">
        {{ error?.statusCode === 404
          ? "That page doesn't exist — maybe a state slug got mistyped, or a tool moved. Try one of these:"
          : "We hit an unexpected error. Try heading back home and starting over." }}
      </p>
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <NuxtLink to="/" class="text-sm bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-colors">Home</NuxtLink>
        <NuxtLink to="/1099-tax-calculator" class="text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded-lg transition-colors">1099 Calculator</NuxtLink>
        <NuxtLink to="/quarterly-tax-estimator" class="text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded-lg transition-colors">Quarterly Estimator</NuxtLink>
        <NuxtLink to="/freelancer-deduction-calculator" class="text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded-lg transition-colors">Deductions</NuxtLink>
      </div>
      <button @click="handleError" class="text-sm text-zinc-500 hover:text-zinc-300 underline transition-colors">
        Clear error and reload
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ error: { statusCode?: number; message?: string } | null }>()

const handleError = () => clearError({ redirect: '/' })
</script>
