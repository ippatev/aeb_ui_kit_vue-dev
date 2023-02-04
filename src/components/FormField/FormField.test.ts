import {shallowMount} from '@vue/test-utils';
import FormField from './FormField.vue';

describe('FormField', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(FormField);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
