import { mount } from '@vue/test-utils';
import ActionsDropdown from './actions-dropdown.vue';

describe('ActionsDropdown', () => {
  it('renders properly', () => {
    const wrapper = mount(ActionsDropdown, {});
    expect(wrapper.text()).toContain('Welcome to ActionsDropdown');
  });
});
