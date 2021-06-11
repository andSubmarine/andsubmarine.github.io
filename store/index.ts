import Vuex from 'vuex'
import ContentModule from './ContentModule'

const store = new Vuex.Store({
  modules: {
    contentModule: ContentModule
  }
})

export default () => store
