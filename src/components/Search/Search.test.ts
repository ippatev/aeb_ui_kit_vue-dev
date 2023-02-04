import {shallowMount} from '@vue/test-utils';
import Search from './Search.vue';

describe('Search', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Search);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
