import redirectRootToPortal from './route-redirect'

function isUndefined (nuxtConfig) {
  return nuxtConfig !== undefined &&
  nuxtConfig.router !== undefined &&
  nuxtConfig.router.base !== undefined
}

export default (nuxtConfig) => {
  return {
    /**
     * 'render:setupMiddleware'
     * {@link node_modules/nuxt/lib/core/renderer.js}
     */
    setupMiddleware (app) {
      app.use('/', redirectRootToPortal(isUndefined(nuxtConfig) ? nuxtConfig.router.base : '/'))
    }
  }
}
