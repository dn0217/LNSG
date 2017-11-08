import Vue from 'vue'
import Router from 'vue-router'
import Index from '../papes/Index'
import Works from '../papes/Works'
import Note from '../papes/Note'
import Talk from '../papes/Talk'
import About from '../papes/About'
import Detail from '../papes/Detail'

Vue.use(Router)

let souce = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "vp" :  "pc";
let indexPape = souce === 'pc' ? Index :  null //Wap组件待开发

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: indexPape
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    },
    {
      path: '/Note',
      name: 'Note',
      component: Note
    },
    {
      path: '/Talk',
      name: 'Talk',
      component: Talk
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
    },
  ]
})
