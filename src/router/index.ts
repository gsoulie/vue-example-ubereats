import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../page/Home.vue')
  },
  {
    path: '/restaurant/:restaurantName',
    name: 'restaurant',
    props: true,
    component: () => import('../page/Restaurant.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
