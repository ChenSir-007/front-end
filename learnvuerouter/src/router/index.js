import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    //redirect重定向
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:'档案'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      title:'关于'
    }
  },
  {
    path: '/user/:userid',
    name: 'User',
    component: () => import('../views/User'),
    meta:{
      title:'用户'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile'),
    meta:{
      title:'档案'
    }
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})
//router全局导航守卫
//前置守卫（guard）
router.beforeEach((to,from,next) => {
  document.title = to.meta.title
  next()
})
//后置钩子(hook)
// router.afterEach()

export default router
