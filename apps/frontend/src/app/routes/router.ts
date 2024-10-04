import { createWebHistory, createRouter } from 'vue-router';

// Layouts
import { MainLayout, AuthLayout } from '@ventura/ui';

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
    path: '/contract',
    component: () => import('../pages/contract/contract.vue'),
    meta: {
      layout: MainLayout,
      title: 'Contrato'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { routes }
export default router
