import {shallowMount} from '@vue/test-utils';
import PopUp from './PopUp.vue';

describe('PopUp', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(PopUp);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
