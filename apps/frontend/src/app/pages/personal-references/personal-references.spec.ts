import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PersonalReferences from './personal-references.vue';

describe('PersonalReferences.vue', () => {
    it('renders properly', () => {
        const wrapper = mount(PersonalReferences);
        expect(wrapper.exists()).toBe(true);
    });

    it('has the correct title', () => {
        const wrapper = mount(PersonalReferences);
        const title = wrapper.find('h1');
        expect(title.text()).toBe('Personal References');
    });

    // Add more tests as needed
});