export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head

  // Global CSS: https://go.nuxtjs.dev/config-css
  head: {
    title: 'learn-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  css: ['@/assets/css/reset.css'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  plugins: [],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  modules: [],


  // server setup
  build: {},

  server: {
    port: process.env.NODE_ENV === 'production' ? null : 5000
  },

  // env config
  env: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://my-json-server.typicode.com/LeeSM0518/nuxt-shopping-tutorial-api' : 'http://localhost:3000'
  }
}
