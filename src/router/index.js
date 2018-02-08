import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/papes/Index'
import About from '@/papes/About'
import Detail from '@/papes/Detail'


import MobildIndex from '@/papes/Wap/MobileIndex'

Vue.use(Router)

let souce = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "vp" :  "pc";
let indexPape = souce === 'pc' ? Index :  MobildIndex 

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: indexPape
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
