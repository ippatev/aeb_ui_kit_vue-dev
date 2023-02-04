import {shallowMount} from '@vue/test-utils';
import Tooltip from './Tooltip.vue';

describe('Tooltip', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Tooltip);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
