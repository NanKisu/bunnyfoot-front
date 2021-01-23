import Vue from 'vue'
import Router from 'vue-router'
import WelComePage from '@/components/WelComePage'
import SeleceMethodPage from '@/components/SeleceMethodPage'
import ImageSelectPage from '@/components/ImageSelectPage'
import ImageCapturePage from '@/components/ImageCapturePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelComePage',
      component: WelComePage
    },
    {
      path: '/seletMethod',
      name: 'SeleceMethodPage',
      component: SeleceMethodPage
    },
    {
      path: '/imageSelect',
      name: 'ImageSelectPage',
      component: ImageSelectPage
    },
    {
      path: '/imageCapture',
      name: 'ImageCapturePage',
      component: ImageCapturePage
    }
  ]
})
