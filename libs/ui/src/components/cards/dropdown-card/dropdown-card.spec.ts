import { mount } from '@vue/test-utils';
import Card from './dropdown-card.vue';

describe('Card', () => {
  it('renders properly', () => {
    const wrapper = mount(Card, {});
    expect(wrapper.text()).toContain('Welcome to Card');
  });
});
