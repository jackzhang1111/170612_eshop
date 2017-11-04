import Vue from 'vue'
import VueRouter from 'vue-router';
import iView from 'iview';
import app from './App.vue'
import router from './router/index'
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render:h=>h(app)
})
