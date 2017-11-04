import Vue from 'vue'
import VueRouter from 'vue-router'
import body from '../components/body/body.vue'




export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/body'
    },
    {
      path: '/body',
      component: body
    },
  ]
})


