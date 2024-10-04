import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Record from './record.vue';

describe('Record.vue', () => {
    it('renders properly', () => {
        const wrapper = mount(Record);
        expect(wrapper.exists()).toBe(true);
    });

    it('has the correct title', () => {
        const wrapper = mount(Record);
        const title = wrapper.find('h1');
        expect(title.text()).toBe('Record Page');
    });

    // Add more tests as needed
});