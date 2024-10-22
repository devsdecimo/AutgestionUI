import { createWebHistory, createRouter } from 'vue-router';
// Layouts
import { MainLayout, AuthLayout } from '@ventura/ui';

const routes = [
  {
    path: '/',
    component: () => import('../pages/home/home.vue'),
    meta: {
      layout: MainLayout,
      title: 'home',
    },
  },
  {
    path: '/login',
    component: () => import('../pages/login/login.vue'),
    meta: {
      layout: AuthLayout,
    },
  },
  {
    path: '/record/additional-identifications',
    component: () =>
      import(
        '../pages/record/additional-identifications/additional-identifications.vue'
      ),
    meta: {
      layout: MainLayout,
      title: 'additionalIdentifications',
    },
  },
  {
    path: '/profile',
    component: () => import('../pages/profile/profile.vue'),
    meta: {
      layout: MainLayout,
      title: 'profile',
    },
  },
  {
    path: '/contract',
    component: () => import('../pages/actions/contract/contract.vue'),
    meta: {
      layout: MainLayout,
      title: 'contract'
    }
  },
  {
    path: '/organization',
    component: () => import('../pages/actions/organizationLocation/organizationLocation.vue'),
    meta: {
      layout: MainLayout,
      title: 'organization'
    },
  },
  {
    path: '/test',
    component: () => import('../pages/test/test.vue'),
    meta: {
      layout: MainLayout,
      title: 'test',
    },
  },
  {
    path: '/record',
    component: () => import('../pages/record/record.vue'),
    meta: {
      layout: MainLayout,
      title: 'record',
    },
  },
  {
    path: '/record/personal-references',
    component: () =>
      import('../pages/record/personal-references/personal-references.vue'),
    meta: {
      layout: MainLayout,
      title: 'personalReferences',
    },
  },
  {
    path: '/asociation',
    component: () => import('../pages/actions/asociation/asociation.vue'),
    meta: {
      layout: MainLayout,
      title: 'asociation'
    }
  },
  {
    path: '/vacations',
    component: () => import('../pages/vacation/vacation.vue'),
    meta: {
      layout: MainLayout,
      title: 'vacations',
    },
  },
  {
    path: '/vacations/request',
    component: () => import('../pages/vacation/request/request.vue'),
    meta: {
      layout: MainLayout,
      title: 'vacations',
    },
  },
  {
    path: '/vacations/request/create',
    component: () => import('../pages/vacation/create/create.vue'),
    meta: {
      layout: MainLayout,
      title: 'vacations',
    },
  },
  {
    path: '/vacations/year-report',
    component: () => import('../pages/vacation/year-report/year-report.vue'),
    meta: {
      layout: MainLayout,
      title: 'vacations',
    },
  },
  {
    path: '/vacations/resolutions',
    component: () => import('../pages/vacation/resolutions/resolutions.vue'),
    meta: {
      layout: MainLayout,
      title: 'vacations',
    },
  },
  {
    path: '/vacations/request/:id',
    component: () => import('../pages/vacation/detail/detail.vue'),
    meta: {
      layout: MainLayout,
      title: 'vacations',
    },
  },
  {
    path: '/vacations/approve/:id',
    component: () => import('../pages/vacation/approve/approve.vue'),
    meta: {
      layout: MainLayout,
      title: 'vacations',
    },
  },
  {
    path: '/salaries',
    component: () => import('../pages/salaries/salaries.vue'),
    meta: {
      layout: MainLayout,
      title: 'salaries',
    },
  },
  {
    path: '/salaries/:id',
    component: () => import('../pages/salaries/detail/detail.vue'),
    meta: {
      layout: MainLayout,
      title: 'detailSalary',
    },
  },
  {
    path: '/permissions',
    component: () => import('../pages/permissions/permissions.vue'),
    meta: {
      layout: MainLayout,
      title: 'permissions',
    },
  },
  {
    path: '/payment',
    component: () => import('../pages/actions/payment/payment.vue'),
    meta: {
      layout: MainLayout,
      title: 'payment'
    }
  },
  {
    path: '/permissions/create',
    component: () => import('../pages/permissions/create/create.vue'),
    meta: {
      layout: MainLayout,
      title: 'permissions',
    }
  },
  {
    path: '/permissions/resolutions',
    component: () => import('../pages/permissions/resolutions/resolutions.vue'),
    meta: {
      layout: MainLayout,
      title: 'permissions',
    }
  },
  {
    path: '/actions',
    component: () => import('../pages/actions/actions.vue'),
    meta: {
      layout: MainLayout,
      title: 'actions',
    }
  },
  {
    path: '/requests',
    component: () => import('../pages/requests/requests.vue'),
    meta: {
      layout: MainLayout,
      title: 'requests',
    },
  },
  {
    path: '/requests/:id',
    component: () => import('../pages/requests/detail/detail.vue'),
    meta: {
      layout: MainLayout,
      title: 'requests',
    },
  },
  {
    path: '/time',
    component: () => import('../pages/time/time.vue'),
    meta: {
      layout: MainLayout,
      title: 'time',
    },
  },
  {
    path: '/time/records',
    component: () => import('../pages/time/records/records.vue'),
    meta: {
      layout: MainLayout,
      title: 'timeRecords',
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { routes };
export default router;
