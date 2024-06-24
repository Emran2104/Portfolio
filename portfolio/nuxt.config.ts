// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    // "@nuxtjs/tailwindcss", 
    "@pinia/nuxt", 
    "@nuxt/image", 
    "@nuxtjs/i18n", 
    "@nuxt/eslint",
    '@nuxt/ui',
  ],
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
        semi: true,
      }
    }
  }
})
