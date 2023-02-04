import {shallowMount} from '@vue/test-utils';
import VisaSpanTitle from './VisaSpanTitle.vue';
import VisaSpanSubtitle from './VisaSpanSubtitle.vue';

describe('VisaSpanTitle', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(VisaSpanTitle);
        expect(wrapper.find('span').exists()).toBe(true);
    });
});
describe('VisaSpanSubtitle', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(VisaSpanSubtitle);
        expect(wrapper.find('span').exists()).toBe(true);
    });
});
