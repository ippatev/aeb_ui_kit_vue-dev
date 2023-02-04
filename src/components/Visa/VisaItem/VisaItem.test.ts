import {shallowMount} from '@vue/test-utils';
import VisaItem from './VisaItem.vue';

describe('VisaItem', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(VisaItem);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
