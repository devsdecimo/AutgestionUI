import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from '../../routes/router';
import Profile from './profile.vue';

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe('Profile', () => {
  const wrapper = mount(Profile, {
    global: {
      plugins: [router]
    }
  });

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Profile');
  });
});
