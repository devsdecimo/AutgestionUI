import { mount } from '@vue/test-utils';
import Grid from './grid.vue';

describe('Grid', () => {
  it('renders properly', () => {
    const wrapper = mount(Grid, {});
    expect(wrapper.text()).toContain('Welcome to Grid');
  });
});
