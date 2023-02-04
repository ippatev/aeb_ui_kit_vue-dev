import {shallowMount} from '@vue/test-utils';
import Sidebar from './Sidebar.vue';

describe('Sidebar', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Sidebar);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
