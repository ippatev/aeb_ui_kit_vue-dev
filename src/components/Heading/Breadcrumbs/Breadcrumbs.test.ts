import {shallowMount} from '@vue/test-utils';
import Breadcrumbs from './Breadcrumbs.vue';

describe('Breadcrumbs', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Breadcrumbs);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
