import { mount } from '@vue/test-utils';
import SalaryCard from './salary-card.vue';

describe('SalaryCard', () => {
  it('renders properly', () => {
    const wrapper = mount(SalaryCard, {});
    expect(wrapper.text()).toContain('Welcome to SalaryCard');
  });
});
