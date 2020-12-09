/*import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Master from './components/layouts/Master'
import { BootstrapVue} from 'bootstrap-vue'



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import {  IconsPlugin } from 'bootstrap-vue'

Vue.use(IconsPlugin)


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin


Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

 eslint-disable no-new */

import Vue from 'vue'

import VueRouter from 'vue-router'

import routes from './routes'

import Master from './components/layouts/Master'



Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */


new Vue({
  router: router,
  components: { Master },
  template: '<Master/>'
}).$mount('#app')
