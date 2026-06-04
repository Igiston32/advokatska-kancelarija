// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: import.meta.env.NUXT_APP_BASE_URL || '/'
  },
  nitro: {
    prerender: {
      routes: [
        '/sr',
        '/sr/team',
        '/sr/practice-areas',
        '/sr/clients',
        '/sr/contact',
        '/en',
        '/en/team',
        '/en/practice-areas',
        '/en/clients',
        '/en/contact'
      ]
    }
  }
})
  