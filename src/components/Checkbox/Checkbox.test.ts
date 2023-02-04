import {shallowMount} from '@vue/test-utils';
import Checkbox from './Checkbox.vue';

describe('Checkbox', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Checkbox);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
