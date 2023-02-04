import AebCheckbox from './Checkbox.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {html} from 'code-tag';

export default {
    title: 'Components/Checkbox',
    args: {
        disabled: false,
        hasError: false
    }

    // component: AebCheckbox
} as Meta<typeof AebCheckbox>;

export const Default: StoryFn<typeof AebCheckbox> = (args) => ({
    setup() {
        return {args};
    },
    components: {AebCheckbox},
    template: html` <form style="background: white; padding: 10px">
        <aeb-checkbox name="agree" id="agree" :disabled="args.disabled" :hasError="args.hasError">
            Checkbox label
        </aeb-checkbox>
    </form>`
});
