import {shallowMount} from '@vue/test-utils';
import Table from './Table.vue';

describe('Table', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Table);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
