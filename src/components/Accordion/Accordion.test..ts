import {shallowMount} from '@vue/test-utils';
import Accordion from './Accordion.vue';

describe('Accordion', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Accordion);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
