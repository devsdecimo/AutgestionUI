import { mount } from '@vue/test-utils';
import SalaryCompositionCard from './salary-composition-card.vue';

describe('SalaryCompositionCard', () => {
  it('renders properly', () => {
    const wrapper = mount(SalaryCompositionCard, {});
    expect(wrapper.text()).toContain('Welcome to SalaryCompositionCard');
  });
});
