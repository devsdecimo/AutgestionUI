import { createWebHistory, createRouter } from 'vue-router';
// Layouts
import { MainLayout, AuthLayout } from '@ventura/ui';

const routes = [
  {
    path: '/',
    component: () => import('../pages/home/home.vue'),
    meta: {
      layout: MainLayout,
      title: 'Home',
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
      title: 'Additional Identifications',
    },
  },
  {
    path: '/profile',
    component: () => import('../pages/profile/profile.vue'),
    meta: {
      layout: MainLayout,
      title: 'Profile',
    },
  },
  {
    path: '/contract',
    component: () => import('../pages/contract/contract.vue'),
    meta: {
      layout: MainLayout,
      title: 'Contract'
    },
    children: [
      {
        path: '',
        component: () => import('../pages/contract/main/main.vue'),
        meta: {
          title: 'Contract',
        },
      },
      {
        path: 'organization',
        component: () => import('../pages/contract/organizationLocation/organizationLocation.vue'),
        meta: {
          title: 'Organization',
        },
      },
      {
        path: 'asociation',
        component: () => import('../pages/contract/asociation/asociation.vue'),
        meta: {
          title: 'Asociation',
        },
      },
      {
        path: 'payment',
        component: () => import('../pages/contract/payment/payment.vue'),
        meta: {
          title: 'Payment',
        },
      },
    ]
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
      title: 'Record',
    },
  },
  {
    path: '/record/personal-references',
    component: () =>
      import('../pages/record/personal-references/personal-references.vue'),
    meta: {
      layout: MainLayout,
      title: 'Personal References',
    },
  },
 
  {
    path: '/vacations',
    component: () => import('../pages/vacation/vacation.vue'),
    meta: {
      layout: MainLayout,
    },
    children: [
      {
        path: '',
        component: () => import('../pages/vacation/main/main.vue'),
        meta: {
          title: 'Vacations',
        },
      },
      {
        path: 'request',
        component: () => import('../pages/vacation/request/request.vue'),
        meta: {
          title: 'Vacations',
        },
      },
      {
        path: 'year-report',
        component: () => import('../pages/vacation/year-report/year-report.vue'),
        meta: {
          title: 'Vacations',
        },
      },
      {
        path: 'resolutions',
        component: () => import('../pages/vacation/resolutions/resolutions.vue'),
        meta: {
          title: 'Vacations',
        },
      },
    ]
  },
  {
    path: '/vacations/request/create',
    component: () => import('../pages/vacation/create/create.vue'),
    meta: {
      layout: MainLayout,
      title: 'Vacations',
    },
  },
  {
    path: '/vacations/request/:id',
    component: () => import('../pages/vacation/detail/detail.vue'),
    meta: {
      layout: MainLayout,
      title: 'Vacations',
    },
  },
  {
    path: '/vacations/approve/:id',
    component: () => import('../pages/vacation/approve/approve.vue'),
    meta: {
      layout: MainLayout,
      title: 'Vacations',
    },
  },
  {
    path: '/salaries',
    component: () => import('../pages/salaries/salaries.vue'),
    meta: {
      layout: MainLayout,
      title: 'Salaries',
    },
  },
  {
    path: '/salaries/:id',
    component: () => import('../pages/salaries/detail/detail.vue'),
    meta: {
      layout: MainLayout,
      title: 'Detail Salary',
    },
  },
  {
    path: '/permissions',
    component: () => import('../pages/permissions/permissions.vue'),
    meta: {
      layout: MainLayout,
      title: 'Permissions',
    },
    children: [
      {
        path: '',
        component: () => import('../pages/permissions/requests/requests.vue'),
        meta: {
          title: 'Permissions requests',
        },
      },
      {
        path: 'resolutions',
        component: () => import('../pages/permissions/resolutions/resolutions.vue'),
        meta: {
          title: 'Permissions resolutions',
        },
      },
    ]
  },
  {
    path: '/permissions/create',
    component: () => import('../pages/permissions/create/create.vue'),
    meta: {
      layout: MainLayout,
      title: 'Permissions',
    }
  },
  {
    path: '/actions',
    component: () => import('../pages/actions/actions.vue'),
    meta: {
      layout: MainLayout,
      title: 'Actions',
    }
  },
  {
    path: '/requests',
    component: () => import('../pages/requests/requests.vue'),
    meta: {
      layout: MainLayout,
      title: 'Requests',
    },
  },
  {
    path: '/requests/:id',
    component: () => import('../pages/requests/detail/detail.vue'),
    meta: {
      layout: MainLayout,
      title: 'Requests',
    },
  },
  {
    path: '/time',
    component: () => import('../pages/time/time.vue'),
    meta: {
      layout: MainLayout,
      title: 'Time',
    },
    children: [
      {
        path: '',
        component: () => import('../pages/time/register/register.vue'),
        meta: {
          title: 'Time',
        },
      },
      {
        path: 'records',
        component: () => import('../pages/time/records/records.vue'),
        meta: {
          title: 'Time Records',
        },
      },
    ]
  },
  {                                                                                                                                                                                   
    path: '/:pathMatch(.*)*',
    component: () => import('../pages/errors/404.vue'),
    meta: {
      layout: MainLayout,
      title: 'Time Records',
    },                                                                                                                                                    
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { routes };
export default router;
