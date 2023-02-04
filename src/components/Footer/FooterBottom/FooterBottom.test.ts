import {shallowMount} from '@vue/test-utils';
import FooterBottom from './FooterBottom.vue';

describe('FooterBottom', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(FooterBottom);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
