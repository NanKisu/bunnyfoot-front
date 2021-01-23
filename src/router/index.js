import Vue from 'vue'
import Router from 'vue-router'
import WelComePage from '@/components/WelComePage'
import ImageSelectPage from '@/components/ImageSelectPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelComePage',
      component: WelComePage
    },
    {
      path: '/imageSelect',
      name: 'ImageSelectPage',
      component: ImageSelectPage
    }
  ]
})
