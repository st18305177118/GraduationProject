import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import washBook from '@/views/washBook/washBook'
import bestSell from '@/views/bestSell/bestSell'
import fiveStars from '@/views/fiveStars/fiveStars'
import newShelves from '@/views/newShelves/newShelves'
import freeShipping from '@/views/freeShipping/freeShipping'
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
    },
    {
      path: '/fiveStars',
      name: 'fiveStars',
      component: fiveStars
    },
    {
      path: '/newShelves',
      name: 'newShelves',
      component: newShelves
    },
    {
      path: '/freeShipping',
      name: 'freeShipping',
      component: freeShipping
    }
  ]
})
