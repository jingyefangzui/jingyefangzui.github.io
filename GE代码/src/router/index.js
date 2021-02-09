import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import changjing from '@/components/changjing/changjing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/components/index/index'),
    },
    {
      path: '/changjing',
      name: 'changjing',
      component: () => import('@/components/changjing/changjing'),
    },
  ]
})
