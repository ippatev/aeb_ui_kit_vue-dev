import {shallowMount} from '@vue/test-utils';
import FileAttach from './FileAttach.vue';

describe('FileAttach', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(FileAttach);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
