import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from '../../routes/router';
import Home from './home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe('Login', () => {
  const wrapper = mount(Home, {
    global: {
      plugins: [router]
    }
  });

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Ir a login');
  });
});
