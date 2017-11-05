import Vue from 'vue'
import VueRouter from 'vue-router';
import iView from 'iview';
import app from './App.vue'
import router from './router/index'
import 'iview/dist/styles/iview.css';
import { Swipe, SwipeItem } from 'mint-ui'
import VueScroller from "vue-scroll"

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueScroller);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render:h=>h(app)
})
