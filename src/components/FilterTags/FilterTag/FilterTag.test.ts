import {shallowMount} from '@vue/test-utils';
import FilterTag from './FilterTag.vue';

describe('FilterTag', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(FilterTag);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
