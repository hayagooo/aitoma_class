import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/WelcomePage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../views/SchedulePage.vue')
  },
  {
    path: '/assignemnt',
    name: 'Assignment',
    component: () => import('../views/AssignmentPage.vue')
  },
  {
    path: '/material',
    name: 'Material',
    component: () => import('../views/MaterialPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
