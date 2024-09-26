import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import { routes } from './routes/router';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe('App.vue', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  });

  it('renders a div when no layout is defined in route meta', async () => {
    await router.isReady();
    router.push('/');

    const divLayout = wrapper.get('div');
    expect(divLayout.isVisible()).toBe(true);
  })

  it('renders the custom layout when layout is defined in route meta', async () => {
    await router.isReady();
    router.push('/custom');

    const mainLayout = wrapper.get('[data-test=main-layout]');
    expect(mainLayout.isVisible()).toBe(true);
  })
})
