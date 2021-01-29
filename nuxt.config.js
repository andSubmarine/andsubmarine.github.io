import hooks from './hooks'
export default {
  /* Nuxt rendering mode
   * See https://nuxtjs.org/api/configuration-mode
   */
  ssr: true,
  /* Nuxt target
   * See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  fallback: true,
  /* Headers of the page
   * See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { http: 'Content-Security-Policy', content: "img-src * 'self' data: https:" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
    ]
  },
  /* Environment (global) variables
   * https://nuxtjs.org/api/configuration-env/
   */
  env: {
    title: process.env.npm_package_name
  },
  /* Global CSS */
  css: ['@/assets/app.scss'],
  /* Plugins to load before mounting the App
   * https://nuxtjs.org/guide/plugins
   */
  plugins: [
  ],
  /* Auto import components
   * See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /* Nuxt.js dev-modules */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-analytics'
  ],
  /* Nuxt.js modules */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /* Axios module configuration
   * See https://axios.nuxtjs.org/options
   */
  axios: {},
  /* Content module configuration
   * See https://content.nuxtjs.org/configuration
   */
  content: {
    // $content api will be served on localhost:3000/content-api
    apiPrefix: 'content-api'
  },
  /* Build configuration
   * See https://nuxtjs.org/api/configuration-build/
   */
  build: {
  },
  /* Router config
   * See https://nuxtjs.org/faq/github-pages/#deploying-to-github-pages-for-repository
   */
  router: {
    base: '/'
  },
  hooks: hooks(this),
  /* Font-Awesome
   * See https://www.npmjs.com/package/@nuxtjs/fontawesome
   */
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  /* Google Analytics
   * See https://google-analytics.nuxtjs.org/
   */
  googleAnalytics: {
    id: 'G-8LTCQ3XGF1'
  }
}
