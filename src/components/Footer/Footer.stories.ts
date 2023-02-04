import AebFooter from './Footer.vue';
import {Meta, Story} from '@storybook/vue3';
import {commonItems, commonLinks} from './Footer.constants';
import AebFooterTop from './FooterTop/FooterTop.vue';
import AebFooterMenu from './FooterMenu/FooterMenu.vue';
import AebFooterBottom from './FooterBottom/FooterBottom.vue';
import {html} from 'code-tag';

export default {
    title: 'Components/Footer',
    component: AebFooter,
    args: {
        items: commonItems,
        links: commonLinks,
        includeTop: true,
        includeMenu: true,
        includeBottom: true
    },
    argTypes: {
        default: {
            table: {
                disable: true
            }
        }
    }
} as Meta<typeof AebFooter>;

export const Default: Story<typeof AebFooter> = (args) => ({
    components: {AebFooter, AebFooterTop, AebFooterMenu, AebFooterBottom},
    setup() {
        return {args};
    },
    template: html`
        <aeb-footer>
            <aeb-footer-top v-if="args.includeTop" />
            <aeb-footer-menu :items="args.items" v-if="args.includeMenu" />
            <aeb-footer-bottom :links="args.links" v-if="args.includeBottom" />
        </aeb-footer>
    `
});
