import {shallowMount} from '@vue/test-utils';
import ActionBar from './ActionBar.vue';

describe('ActionBar', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(ActionBar);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
