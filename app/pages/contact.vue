<template>
  <main class="max-w-2xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold text-zinc-100 mb-6">Contact</h1>
    <div class="space-y-4 text-zinc-400 leading-relaxed">
      <p>
        Spotted a calculation bug, an out-of-date tax rate, or a state I forgot to include? I want to hear about it.
        Email is the fastest way to reach me.
      </p>
      <p>
        <a href="mailto:dannyvargasny@gmail.com" class="text-indigo-400 hover:text-indigo-300 transition-colors">dannyvargasny@gmail.com</a>
      </p>
      <p class="text-sm text-zinc-500">
        Heads up: I can't give personalized tax advice — I'm not a CPA. For your specific situation, please talk to a qualified tax professional.
        But anything about the calculators themselves, send away.
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact — 1099Freelancer',
  description: 'Contact 1099Freelancer about bugs, missing states, or out-of-date tax rates. Email dannyvargasny@gmail.com.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://1099freelancer.com/contact' }] })
</script>
