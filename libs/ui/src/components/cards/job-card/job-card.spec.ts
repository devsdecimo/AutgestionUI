import { mount } from '@vue/test-utils';
import JobCard from './job-card.vue';

describe('JobCard', () => {
  it('renders properly', () => {
    const wrapper = mount(JobCard, {});
    expect(wrapper.text()).toContain('Welcome to JobCard');
  });
});
