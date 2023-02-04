import {shallowMount} from '@vue/test-utils';
import Logo from './Logo.vue';

describe('Logo', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Logo);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
