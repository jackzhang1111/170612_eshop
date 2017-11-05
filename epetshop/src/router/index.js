import Vue from 'vue'
import VueRouter from 'vue-router'
import middle from '../components/middle/middle.vue'




export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/middle'
    },
    {
      path: '/middle',
      component: middle
    },
  ]
})


