// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import VueGtag from 'vue-gtag'
import {store} from './store'
import {KAKAO_APP_KEY} from './password'

Vue.config.productionTip = false

Kakao.init(KAKAO_APP_KEY)
console.log(Kakao.isInitialized())

Vue.use(VueGtag, {
  config: {
    id: 'UA-193115120-1'
  }
}, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  components: { App },
  template: '<App/>'
})

