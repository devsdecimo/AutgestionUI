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
    },
  },
    {
      path: '/additional-identifications',
      component: () => import('../pages/additional-identifications/additional-identifications.vue'),
      meta: {
        layout: MainLayout,
        title: 'Identificaciones Adicionales'
      }
    },
  {
    path: '/profile',
    component: () => import('../pages/profile/profile.vue'),
    meta: {
      layout: MainLayout,
      title: 'Perfil'
    }
  },
  {
    path: '/contract',
    component: () => import('../pages/contract/contract.vue'),
    meta: {
      layout: MainLayout,
      title: 'Contrato'
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
    },
  },
  {
    path: '/personal-references',
    component: () => import('../pages/personal-references/personal-references.vue'),
    meta: {
      layout: MainLayout,
      title: 'Referencias Personales'
    }
  },
  {
    path: '/vacations',
    component: () => import('../pages/vacation/vacation.vue'),
    meta: {
      layout: MainLayout,
      title: 'Vacaciones'
    }
  },
  {
    path: '/vacations/request',
    component: () => import('../pages/vacation/request/request.vue'),
    meta: {
      layout: MainLayout,
      title: 'Vacaciones'
    }
  },
  {
    path: '/vacations/request/create',
    component: () => import('../pages/vacation/create/create.vue'),
    meta: {
      layout: MainLayout,
      title: 'Vacaciones'
    }
  },
  {
    path: '/vacations/year-report',
    component: () => import('../pages/vacation/year-report/year-report.vue'),
    meta: {
      layout: MainLayout,
      title: 'Vacaciones'
    }
  },
  {
    path: '/permissions',
    component: () => import('../pages/permissions/permissions.vue'),
    meta: {
      layout: MainLayout,
      title: 'Permisos'
    }
  },
  {
    path: '/vacations/request/:id',
    component: () => import('../pages/vacation/detail/detail.vue'),
    meta: {
      layout: MainLayout,
      title: 'Vacaciones'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { routes }
export default router
