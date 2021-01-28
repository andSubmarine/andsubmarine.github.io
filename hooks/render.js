import redirectRootToPortal from './route-redirect'

export default nuxtConfig => {
  const router = Reflect.has(nuxtConfig, 'router') ? nuxtConfig.router : {}
  const base = Reflect.has(router, 'base') ? router.base : '/'

  return {
    /**
     * 'render:setupMiddleware'
     * {@link node_modules/nuxt/lib/core/renderer.js}
     */
    setupMiddleware(app) {
      app.use('/', redirectRootToPortal(base))
    }
  }
}