import { mount } from '@vue/test-utils';
import SideMenu from './side-menu.vue';

describe('SideMenu', () => {
  it('renders properly', () => {
    const wrapper = mount(SideMenu, {});
    expect(wrapper.text()).toContain('Welcome to SideMenu');
  });
});
