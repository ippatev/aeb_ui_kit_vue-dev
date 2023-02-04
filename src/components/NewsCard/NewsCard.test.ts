import {shallowMount} from '@vue/test-utils';
import NewsCard from './NewsCard.vue';

describe('NewsCard', () => {
    it('is valid vue element', () => {
        const wrapper = shallowMount(NewsCard);
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
