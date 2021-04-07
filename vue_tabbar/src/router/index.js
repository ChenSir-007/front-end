import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/classification',
    name: 'Classification',
    component: () => import('../views/classification/Classification')
  },
  {
    path: '/buy',
    name: 'Buy',
    component: () => import('../views/buy/Buy')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/mine/Mine')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
