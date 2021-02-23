import Vue from 'vue'
import Router from 'vue-router'
import WelComePage from '@/components/WelComePage'
import GuidePage from '@/components/GuidePage'
import CheckUpload from '@/components/CheckUpload'
// import ImageSelectPage from '@/components/ImageSelectPage'
import QuestionPage from '@/components/QuestionPage'
import ResultPage from '@/components/ResultPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WelComePage',
      component: WelComePage
    },
    {
      path: '/guide',
      name: 'GuidePage',
      component: GuidePage
    },
    // {
    //   path: '/imageSelect',
    //   name: 'ImageSelectPage',
    //   component: ImageSelectPage
    // },
    {
      path: '/checkUpload',
      name: 'CheckUpload',
      component: CheckUpload
    },
    {
      path: '/question',
      name: 'QuestionPage',
      component: QuestionPage
    },
    {
      path: '/result/:resultId',
      name: 'ResultPage',
      component: ResultPage
    }
  ]
})
