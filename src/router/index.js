import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/landingPage'
import LoginPage from '@/components/loginPage'

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
    }
  ]
})
