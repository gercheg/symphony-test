export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'AskGPT — Write without second-guessing',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' }
      ]
    },
  },
  compatibilityDate: '2025-01-01',
})
