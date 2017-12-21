import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/landingPage'
import LoginPage from '@/components/loginPage'
<<<<<<< HEAD
import LoginPage2 from '@/components/loginPage2'
=======
>>>>>>> 996221d4050570e3e3db7738608f212d130bc859

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
<<<<<<< HEAD
    },
    {
      path: '/login2',
      name: 'LoginPage2',
      component: LoginPage2
=======
>>>>>>> 996221d4050570e3e3db7738608f212d130bc859
    }
  ]
})