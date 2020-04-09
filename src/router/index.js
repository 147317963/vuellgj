import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  //登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  //  首页
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  //  报表
  {
    path: '/report/:id',
    name: 'report',
    component: () => import('@/views/report.vue'),
  },
  //  信息中心
  {
    path: '/msglist/',
    name: 'msglist',
    component: () => import('@/views/msglist.vue'),
  },
  //  订单信息
  {
    path: '/orderinfo',
    name: 'orderinfo',
    component: () => import('@/views/orderinfo.vue'),
  },
  //  游戏
  {
    path: '/game/:type',
    name: 'game',
    component: () => import('@/views/game.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
