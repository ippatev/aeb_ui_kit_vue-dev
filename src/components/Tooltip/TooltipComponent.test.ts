import {shallowMount} from '@vue/test-utils';
import TooltipComponent from './TooltipComponent.vue';

describe('TooltipComponent', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(TooltipComponent);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
