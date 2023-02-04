import {shallowMount} from '@vue/test-utils';
import Select from './Select.vue';

describe('Spinner', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Select);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
