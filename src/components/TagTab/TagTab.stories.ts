import AebTagTab from './TagTab.vue';
import {Meta, StoryFn} from '@storybook/vue3';

export default {
    title: 'Components/Tag tab',
    component: AebTagTab,
    args: {
        label: 'Все продукты',
        isActive: false
    }
} as Meta<typeof AebTagTab>;

export const Default: StoryFn<typeof AebTagTab> = (args) => ({
    components: {AebTagTab},
    setup() {
        return {args};
    },
    template: '<aeb-tag-tab v-bind="args" />'
});
