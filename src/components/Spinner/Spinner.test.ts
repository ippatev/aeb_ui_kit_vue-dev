import {shallowMount} from '@vue/test-utils';
import Spinner from './Spinner.vue';

describe('Spinner', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Spinner);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
