import AebSelect from './Select.vue';
import AebOption from './Option.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {html} from 'code-tag';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Components/Select',
    component: AebSelect,
    args: {
        hasError: false,
        disabled: false,
        direction: 'bottom'
    },
    argTypes: {
        direction: {
            control: {type: 'radio'},
            options: ['top', 'bottom']
        },
        label: {table: {disable: true}},
        change: {table: {disable: true}},
        value: {table: {disable: true}}
    }
} as Meta<typeof AebSelect>;

export const Default: StoryFn<typeof AebSelect> = (args) => ({
    components: {AebSelect, AebOption},
    setup() {
        const onChange = (value: string) => {
            action('[Select]: ')(value);
        };
        return {args, onChange};
    },
    template: html`
        <aeb-select @change="onChange" v-bind="args">
            <template #label>
                <label>Placeholder <span style="color: var(--red);">*</span></label>
            </template>
            <aeb-option value="option1">Option 1</aeb-option>
            <aeb-option value="option2">Option 2</aeb-option>
            <aeb-option value="option3">Option 3</aeb-option>
        </aeb-select>
    `
});
