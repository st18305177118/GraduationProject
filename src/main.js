// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import scroll from 'vue-seamless-scroll'
import apiConfig from '../config/api.config'
Vue.use(VueAxios,axios)
axios.defaults.baseURL = apiConfig.baseUrl
Vue.use(iview)
Vue.use(scroll)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
