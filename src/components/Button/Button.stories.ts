import AebButton from './Button.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {action} from '@storybook/addon-actions';
import './stories.scss';
import {html} from 'code-tag';

export default {
    title: 'Components/Button',
    component: AebButton,
    argTypes: {
        iconSource: {
            control: {type: 'select'},
            options: ['', './images/button-icons/icon-download.svg', './images/button-icons/icon-edit.svg']
        },
        disabledIconSource: {
            control: {type: 'select'},
            options: [
                '',
                './images/button-icons/disabled/icon-download.svg',
                './images/button-icons/disabled/icon-edit.svg'
            ]
        },
        hoveredIconSource: {
            control: {type: 'select'},
            options: ['', './images/button-icons/hovered/icon-spinner.svg']
        },
        hoverClass: {
            table: {
                disable: true
            }
        },
        onClick: {
            table: {
                disable: true
            }
        },
        default: {
            table: {
                disable: true
            }
        },
        click: {
            table: {
                disable: true
            }
        }
    }
} as Meta<typeof AebButton>;

export const Default: StoryFn<typeof AebButton> = (args) => ({
    components: {AebButton},
    setup() {
        return {args};
    },
    template: '<aeb-button v-bind="args" />'
});

Default.args = {
    label: 'Button',
    showIcon: true,
    solid: false,
    disabled: false,
    iconSource: './images/button-icons/icon-download.svg',
    disabledIconSource: './images/button-icons/disabled/icon-download.svg',
    hoveredIconSource: '',
    leftIcon: true,
    rightIcon: false,
    fill: false,
    showDropdown: false,
    onClick: action('clicked')
};

export const WithContent: StoryFn<typeof AebButton> = (args) => ({
    components: {AebButton},
    setup() {
        return {args};
    },
    template: html`
        <aeb-button v-bind="args">
            <div v-if="args.leftIcon" class="icon icon-left" :class="args.solid">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="18" height="14" rx="1" stroke-width="2" />
                    <path d="M3 5L21 19" stroke-width="2" />
                    <path d="M21 5L3 19" stroke-width="2" />
                </svg>
            </div>
            <div>Button</div>
            <div v-if="args.rightIcon" class="icon icon-right" :class="args.solid">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.999999 1L4.92929 4.92929C4.96834 4.96834 5.03166 4.96834 5.07071 4.92929L9 1"
                        stroke-width="2"
                        stroke-linecap="round" />
                </svg>
            </div>
        </aeb-button>
    `
});

WithContent.args = {
    ...Default.args,
    label: '',
    showIcon: false,
    solid: false,
    disabled: false,
    disabledIconSource: '',
    hoveredIconSource: '',
    leftIcon: true,
    rightIcon: true,
    fill: false,
    showDropdown: false,
    hoverClass: 'hoverClass'
};
