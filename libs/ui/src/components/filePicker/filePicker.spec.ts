import { mount } from '@vue/test-utils';
import FilePicker from './filePicker.vue';

describe('FilePicker', () => {
  it('renders properly', () => {
    const wrapper = mount(FilePicker, {});
    expect(wrapper.text()).toContain('Welcome to FilePicker');
  });
});
