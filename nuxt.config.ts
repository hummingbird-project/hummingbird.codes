// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/icon'
  ],

  site: {
    url: 'https://hummingbird.codes',
    name: 'Hummingbird Web Framework'
  },

  icon: {
    serverBundle: {
      collections: ['heroicons', 'simple-icons', 'mdi', 'fluent']
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/docs': { redirect: 'https://docs.hummingbird.codes' },
    '/discord': { redirect: 'https://discord.gg/4twfgYqdat' }
  },

  devtools: {
    enabled: true
  },

  typescript: {
    strict: false
  },

  colorMode: {
    preference: 'system',
    fallback: 'light'
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  content: {
    highlight: {
      langs: [
        'json',
        'yaml',
        'shell',
        'swift'
      ],
      theme: {
        default: 'github-light'
      }
    }
  },

  compatibilityDate: '2024-08-31'
})
