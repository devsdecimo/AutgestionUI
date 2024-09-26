import { mount } from '@vue/test-utils';
import StyledButton from './styled_button.vue';

describe('StyledButton', () => {
  it('renders properly', () => {
    const wrapper = mount(StyledButton, {});
    expect(wrapper.text()).toContain('Welcome to StyledButton');
  });
});
