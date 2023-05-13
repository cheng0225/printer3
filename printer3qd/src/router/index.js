import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: '',
      component: () => import('@/views/app1/err.vue')
    },
    {
      path: '/app1/v2',
      component: () => import('@/views/app1/v2.vue')
    },
    {
      path: '/app1/add',
      component: () => import('@/views/app1/add.vue')
    },
    {
      path: '/app1/v4',
      component: () => import('@/views/app1/v4.vue')
    }
  ]
})
