import {Meta, StoryFn} from '@storybook/vue3';
import AebFormField from './FormField.vue';
import AebInput from './Input.vue';
import AebTextarea from './Textarea.vue';
import {html} from 'code-tag';

export default {
    title: 'Components/Form field',
    args: {
        error: false,
        inputLabel: 'Input',
        textareaLabel: 'Textarea',
        withIcon: false,
        cssMod: 'none'
    },
    argTypes: {
        cssMod: {
            control: {type: 'select'},
            options: ['none', 'svoi']
        }
    }
} as Meta<typeof AebFormField>;

export const Default: StoryFn<typeof AebFormField> = (args) => ({
    components: {AebFormField, AebInput, AebTextarea},
    setup() {
        return {args};
    },
    template: html`
        <aeb-form-field :error="args.error" :cssMod="args.cssMod">
            <template #label> {{ args.inputLabel }}</template>
            <template #icon v-if="args.withIcon">
                <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/privacy_tip/v7/24px.svg" />
            </template>
            <aeb-input type="text" id="inn" style="margin-bottom: 20px" />
        </aeb-form-field>
        <aeb-form-field :error="args.error" :cssMod="args.cssMod">
            <template #label> {{ args.textareaLabel }}</template>
            <template #icon v-if="args.withIcon">
                <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/privacy_tip/v7/24px.svg" />
            </template>
            <aeb-textarea style="height: 200px" />
        </aeb-form-field>
    `
});
