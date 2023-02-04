import {shallowMount} from '@vue/test-utils';
import Button from './Button.vue';

describe('Button', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Button);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
