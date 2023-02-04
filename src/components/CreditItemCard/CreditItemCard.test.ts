import {shallowMount} from '@vue/test-utils';
import CreditItemCard from './CreditItemCard.vue';

describe('CreditItemCard', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(CreditItemCard);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
