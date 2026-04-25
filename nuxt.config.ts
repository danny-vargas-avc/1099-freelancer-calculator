export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-RWVL7QKNEE', async: true },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-RWVL7QKNEE');`,
        },
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8420827185796423',
          async: true,
          crossorigin: 'anonymous',
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  site: {
    url: 'https://1099freelancer.com',
  },

  runtimeConfig: {
    public: {
      adsenseId: 'ca-pub-8420827185796423',
    },
  },

  sitemap: {
    strictNuxtContentPaths: false,
  },

  hooks: {
    async 'nitro:config'(nitroConfig) {
      const { allStates } = await import('./data/states/index')
      const calcTypes = [
        '1099-tax-calculator',
        'quarterly-tax-estimator',
        'freelancer-deduction-calculator',
      ]
      const routes: string[] = []
      for (const state of allStates) {
        for (const calc of calcTypes) {
          routes.push(`/${calc}/${state.slug}`)
        }
      }
      nitroConfig.prerender ??= {}
      nitroConfig.prerender.routes = [
        ...(Array.isArray(nitroConfig.prerender.routes) ? nitroConfig.prerender.routes : []),
        ...routes,
      ]
    },
  },
})
