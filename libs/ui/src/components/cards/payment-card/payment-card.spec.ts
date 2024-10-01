import { mount } from '@vue/test-utils';
import PaymentCard from './payment-card.vue';

describe('PaymentCard', () => {
  it('renders properly', () => {
    const wrapper = mount(PaymentCard, {});
    expect(wrapper.text()).toContain('Welcome to PaymentCard');
  });
});
