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
    },
  },
    {
      path: '/additional-identifications',
      component: () => import('../pages/additional-identifications/additional-identifications.vue'),
      meta: {
        layout: MainLayout,
        title: 'Identificaciones Adicionales'
      }
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { routes }
export default router
