import { mount } from '@vue/test-utils';
import InputPassword from './inputPassword.vue';

describe('InputPassword', () => {
  it('renders properly', () => {
    const wrapper = mount(InputPassword, {});
    expect(wrapper.text()).toContain('Welcome to InputPassword');
  });
});
