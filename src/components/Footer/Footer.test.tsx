import {shallowMount} from '@vue/test-utils';
import Footer from './Footer.vue';

describe('Footer', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Footer);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
