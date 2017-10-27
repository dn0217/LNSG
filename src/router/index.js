import Vue from 'vue'
import Router from 'vue-router'
import Index from '../papes/Index'
import Works from '../papes/Works'
import Note from '../papes/Note'
import Talk from '../papes/Talk'
import About from '../papes/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
  ]
})
