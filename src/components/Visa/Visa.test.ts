import {shallowMount} from '@vue/test-utils';
import Visa from './Visa.vue';

describe('Visa', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Visa);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
