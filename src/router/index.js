import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'
import notfind from '@/pages/notfind'

import answer from '@/pages/answer'
import rule from '@/pages/rule'
import record from '@/pages/record'
import redbeg from '@/pages/redbeg'



Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },{
    path: "*",
    name: 'notfind',
    component: notfind
  },{
    path: '/answer',
    name: 'answer',
    component: answer
  },{
    path: '/rule',
    name: 'rule',
    component: rule
  },{
    path: '/record',
    name: 'record',
    component: record
  },{
    path: '/redbeg',
    name: 'redbeg',
    component: redbeg
  },

  ]
})
