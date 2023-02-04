import {shallowMount} from '@vue/test-utils';
import FooterTop from './FooterTop.vue';

describe('FooterTop', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(FooterTop);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
