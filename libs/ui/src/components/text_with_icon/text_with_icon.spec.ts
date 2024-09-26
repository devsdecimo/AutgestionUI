import { mount } from '@vue/test-utils';
import TextWithIcon from './text_with_icon.vue';

describe('TextWithIcon', () => {
  it('renders properly', () => {
    const wrapper = mount(TextWithIcon, {});
    expect(wrapper.text()).toContain('Welcome to TextWithIcon');
  });
});
