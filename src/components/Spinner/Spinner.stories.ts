import AebSpinner from './Spinner.vue';
import {Meta, StoryFn} from '@storybook/vue3';

export default {
    title: 'Components/Spinner',
    component: AebSpinner
} as Meta<typeof AebSpinner>;

export const Default: StoryFn<typeof AebSpinner> = () => ({
    components: {AebSpinner},
    template: `
        <aeb-spinner/>
    `
});
