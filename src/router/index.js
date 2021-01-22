import Vue from 'vue'
import Router from 'vue-router'
import WelComePage from '@/components/WelComePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelComePage',
      component: WelComePage
    }
  ]
})
