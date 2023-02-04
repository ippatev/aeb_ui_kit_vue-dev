import {shallowMount} from '@vue/test-utils';
import Wizard from './Wizard.vue';

describe('Wizard', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Wizard);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
