import {shallowMount} from '@vue/test-utils';
import Pagination from './Pagination.vue';

describe('Pagination', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Pagination);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
