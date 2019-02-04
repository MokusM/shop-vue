import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Checkout from '@/components/checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
   ],
  mode: 'history'
})
