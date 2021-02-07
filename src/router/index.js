import Vue from 'vue'
import Router from 'vue-router'
import WelComePage from '@/components/WelComePage'
import ImageSelectPage from '@/components/ImageSelectPage'
import QuestionPage from '@/components/QuestionPage'
import ResultPage from '@/components/ResultPage'

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
    },
    {
      path: '/question',
      name: 'QuestionPage',
      component: QuestionPage
    },
    {
      path: '/result',
      name: 'ResultPage',
      component: ResultPage
    }
  ]
})
