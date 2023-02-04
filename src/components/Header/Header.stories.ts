import AebHeader from './Header.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import AebLogo from './Logo/Logo.vue';
import {html} from 'code-tag';

export default {
    title: 'Components/Header',
    component: AebHeader,
    args: {white: false},
    argTypes: {
        default: {
            table: {
                disable: true
            }
        }
    }
} as Meta<typeof AebHeader>;

export const Default: StoryFn<typeof AebHeader> = (args) => ({
    components: {AebHeader, AebLogo},
    setup() {
        return {args};
    },
    template: html`
        <aeb-header v-bind="args">
            <aeb-logo>AEB Logo</aeb-logo>
            <div style="margin-left: 32px; color: #fff">Hello im content of header</div>
        </aeb-header>
    `
});
