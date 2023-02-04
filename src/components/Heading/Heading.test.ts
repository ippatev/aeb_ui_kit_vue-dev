import {shallowMount} from '@vue/test-utils';
import Heading from './Heading.vue';

describe('Heading', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Heading);
        expect(wrapper.find('h1').exists()).toBe(true);
    });
});
