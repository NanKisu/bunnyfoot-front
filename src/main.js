// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import {KAKAO_APP_KEY} from './password'
import {send} from '@/components/SlackBot.js'

Vue.config.productionTip = false

Kakao.init(KAKAO_APP_KEY)
console.log(Kakao.isInitialized())

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
