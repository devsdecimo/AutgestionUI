import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import { routes } from './routes/router';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    {
      path: '/no-layout',
      component: {
        template: '<div>No Layout</div>'
      }
    }
  ]
})

describe('App.vue', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  });

  it('renders a div when no layout is defined in route meta', async () => {
    await router.isReady();
    await router.push('/no-layout');

    const divLayout = wrapper.find('div');
    expect(divLayout.isVisible()).toBe(true);
  })

  it('renders the main layout when layout is defined in route meta', async () => {
    await router.isReady();
    await router.push('/');

    const mainLayout = wrapper.get('[data-test=main-layout]');
    expect(mainLayout.isVisible()).toBe(true);
  })

  it('renders the auth layout when layout is defined in route meta', async () => {
    await router.isReady();
    await router.push('/login');

    const authLayout = wrapper.get('[data-test=auth-layout]');
    expect(authLayout.isVisible()).toBe(true);
  })
})
