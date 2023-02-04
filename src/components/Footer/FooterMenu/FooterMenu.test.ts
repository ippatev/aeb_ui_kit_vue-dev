import {shallowMount} from '@vue/test-utils';
import FooterMenu from './FooterMenu.vue';

describe('FooterMenu', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(FooterMenu);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
