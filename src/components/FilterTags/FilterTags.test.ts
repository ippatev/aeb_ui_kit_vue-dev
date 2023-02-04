import {shallowMount} from '@vue/test-utils';
import FilterTags from './FilterTags.vue';

describe('FilterTags', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(FilterTags);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
