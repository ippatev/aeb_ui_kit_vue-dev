import {shallowMount} from '@vue/test-utils';
import Header from './Header.vue';

describe('Header', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Header);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
