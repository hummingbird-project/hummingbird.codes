// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/ui', '@nuxt/fonts', '@nuxt/image'],

  ui: {
    icons: ['heroicons', 'simple-icons', 'mdi']
  },

  routeRules: {
    '/': { prerender: true }
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
    },
  },

  compatibilityDate: '2024-08-31'
})