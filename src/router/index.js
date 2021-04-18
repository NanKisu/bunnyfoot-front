import Vue from 'vue'
import Router from 'vue-router'
import WelComePage from '@/components/WelComePage'
import GuidePage from '@/components/GuidePage'
import CheckUploadPage from '@/components/CheckUploadPage'
// import ImageSelectPage from '@/components/ImageSelectPage'
import QuestionPage from '@/components/QuestionPage'
import ResultPage from '@/components/ResultPage'
import TestPage from '@/components/TestPage'

Vue.use(Router)

export default new Router({
  mode: 'hash',
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
      path: '/check',
      name: 'CheckUploadPage',
      component: CheckUploadPage
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
    },
    {
      path: '/test',
      name: 'TestPage',
      component: TestPage
    }
  ]
})
