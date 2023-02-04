import {shallowMount} from '@vue/test-utils';
import Label from './Label.vue';

describe('Label', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Label);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
