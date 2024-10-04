import { createWebHistory, createRouter } from 'vue-router';

// Layouts
import { MainLayout, AuthLayout } from '@ventura/ui';
import { useTitle } from '@vueuse/core';

const routes = [
  {
    path: '/',
    component: () => import('../pages/home/home.vue'),
    meta: {
      layout: MainLayout,
      title: 'Información General'
    }
  },
  {
    path: '/login',
    component: () => import('../pages/login/login.vue'),
    meta: {
      layout: AuthLayout
    }
  },
  {
    path: '/test',
    component: () => import('../pages/test/test.vue'),
    meta: {
      layout: MainLayout,
      title: 'Testing Components'
    }
  },
  {
    path: '/record',
    component: () => import('../pages/record/record.vue'),
    meta: {
      layout: MainLayout,
      title: 'Expediente'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { routes }
export default router
