import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from '../../../routes/router';
import Asociation from './asociation.vue';

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe('Asociation', () => {
  const wrapper = mount(Asociation, {
    global: {
      plugins: [router]
    }
  });

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Inicio de sesión');
  });
});
