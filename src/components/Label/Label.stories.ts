import AebLabel from './Label.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {html} from 'code-tag';

export default {
    title: 'Components/Label',
    component: AebLabel,
    argTypes: {
        default: {
            table: {
                disable: true
            }
        }
    }
} as Meta<typeof AebLabel>;

export const Default: StoryFn<typeof AebLabel> = () => ({
    components: {AebLabel},
    template: html`<aeb-label>Константинов Степан Дмитриевич</aeb-label>`
});
