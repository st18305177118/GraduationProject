import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import washBook from '@/views/washBook/washBook'
import bestSell from '@/views/bestSell/bestSell'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/washBook',
      name: 'washBook',
      component: washBook
    },
    {
      path: '/bestSell',
      name: 'bestSell',
      component: bestSell
    }
  ]
})
