import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Config from '../views/Config.vue'
import Profile from '../views/Profile.vue'
import Total from '../views/Total.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Config',
    component: Config,
    meta: { transitionName: 'slide' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { transitionName: 'slide' }
  },
  {
    path: '/total',
    name: 'Total',
    component: Total,
    meta: { transitionName: 'slide' }
  },
]

const router = new VueRouter({
  routes
})

export default router
