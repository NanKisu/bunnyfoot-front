import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    apiUrl: 'https://bbti.site/server/',
    envHost: 'https://bbti.site'
  }
})
