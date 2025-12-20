// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap'
  ],
  plugins: [
    { src: '~/plugins/aos', mode: 'client' }
  ],
  ssr: true,
  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://www.advancetrade.asia'
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',
  nitro: {
    preset: 'static'
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800]
    },
    display: 'swap',
    preload: true,
    prefetch: true,
    download: true // optional: font disimpan lokal
  },
  sitemap: {
    urls: [
      {
        loc: '/',
        priority: 1.0,
        changefreq: 'monthly'
      }
    ]
  }
})
