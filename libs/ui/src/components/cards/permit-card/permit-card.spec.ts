import { mount } from '@vue/test-utils';
import PermitCard from './permit-card.vue';

describe('PermitCard', () => {
  it('renders properly', () => {
    const wrapper = mount(PermitCard, {});
    expect(wrapper.text()).toContain('Welcome to PermitCard');
  });
});
