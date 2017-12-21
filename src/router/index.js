import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/landingPage'
import LoginPage from '@/components/loginPage'
import UploadPage from '@/components/uploadPage'
import UploadPage2 from '@/components/uploadPage2'
import UploadPage3 from '@/components/uploadPage3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/upload',
      name: 'UploadPage',
      component: UploadPage
    },
    {
      path: '/upload2',
      name: 'UploadPage2',
      component: UploadPage2
    },
    {
      path: '/upload2',
      name: 'UploadPage2',
      component: UploadPage2
    }
  ]
})