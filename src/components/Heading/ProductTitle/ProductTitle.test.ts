import {shallowMount} from '@vue/test-utils';
import ProductTitle from './ProductTitle.vue';

describe('ProductTitle', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(ProductTitle);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
