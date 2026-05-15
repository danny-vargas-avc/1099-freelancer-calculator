<template>
  <main class="max-w-2xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold text-zinc-100 mb-6">About 1099Freelancer</h1>
    <div class="space-y-4 text-zinc-400 leading-relaxed">
      <p>
        I built 1099Freelancer because every freelancer tax calculator I could find was either gated behind a sign-up,
        hidden inside a tax-prep funnel, or hadn't been updated since 2022. I do a fair amount of contract work myself,
        and every January I'd go through the same painful exercise — pulling up the IRS quarterly tables, scribbling
        numbers in a notes app, second-guessing whether I had the SE deduction right.
      </p>
      <p>
        This site is the version of that I wanted to exist. Every calculator uses the current 2026 IRS tax brackets,
        the 15.3% self-employment tax, and the actual state income tax tables (or no state tax, for the lucky nine).
        All math happens in your browser — your income numbers never touch a server. I update the brackets when the
        IRS publishes them each January.
      </p>
      <p>
        <strong class="text-zinc-200">A clear caveat:</strong> I'm a developer, not a CPA. These calculators are
        estimates for planning purposes — quarterly check-ins, "can I afford to take this contract" math, that kind
        of thing. For your actual return, talk to a tax professional. If you spot a bug or an out-of-date number,
        <NuxtLink to="/contact" class="text-indigo-400 hover:text-indigo-300 transition-colors">email me</NuxtLink>.
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About 1099Freelancer — Why I Built This',
  description: 'Why I built 1099Freelancer: a free, no-signup tax calculator for freelancers using current 2026 IRS brackets. All math runs in your browser.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://1099freelancer.com/about' }] })
</script>
