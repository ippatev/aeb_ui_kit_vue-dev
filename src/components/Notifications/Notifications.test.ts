import {shallowMount} from '@vue/test-utils';
import Notifications from './Notifications.vue';

describe('Notifications', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(Notifications);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
