import {shallowMount} from '@vue/test-utils';
import TagTab from './TagTab.vue';

describe('TagTab', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(TagTab);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
