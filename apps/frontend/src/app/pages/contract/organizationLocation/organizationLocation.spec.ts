import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from '../../../routes/router';
import Login from './organizationLocation.vue';

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe('Login', () => {
  const wrapper = mount(Login, {
    global: {
      plugins: [router]
    }
  });

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Inicio de sesión');
  });
});
