import { mount } from '@vue/test-utils';
import GridItem from './grid_item.vue';

describe('GridItem', () => {
  it('renders properly', () => {
    const wrapper = mount(GridItem, {});
    expect(wrapper.text()).toContain('Welcome to GridItem');
  });
});
