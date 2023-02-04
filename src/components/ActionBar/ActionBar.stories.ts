import AebActionBar from './ActionBar.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {ref} from 'vue';
import {html} from 'code-tag';

export default {
    title: 'Components/Action bar',
    component: AebActionBar,
    args: {
        zIndex: '99',
        isOpen: false
    },
    argTypes: {
        default: {
            table: {
                disable: true
            }
        }
    }
} as Meta<typeof AebActionBar>;

const btnStyle = `
    padding: 0 40px;
    height: 35px;
    background: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    `;

const actionBarContentStyle = `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Default: StoryFn<typeof AebActionBar> = (args) => ({
    components: {AebActionBar},
    setup() {
        const isOpen = ref(args.isOpen);
        return {args, isOpen, btnStyle, actionBarContentStyle};
    },
    template: html`
        <div class="btn" @click="isOpen = !isOpen" :style="btnStyle">{{ isOpen ? 'Close' : 'Open' }} action bar</div>
        <aeb-action-bar v-bind="args" :isOpen="isOpen">
            <div class="action-bar-content" :style="actionBarContentStyle">
                <h1>Action bar content</h1>
            </div>
        </aeb-action-bar>
    `
});
