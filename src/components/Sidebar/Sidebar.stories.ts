import AebSidebar from './Sidebar.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {html} from 'code-tag';

export default {
    title: 'Components/Sidebar',
    component: AebSidebar,
    args: {
        isRight: false,
        isOpen: true,
        layoutMod: 'none'
    },
    argTypes: {
        layoutMod: {
            control: {type: 'select'},
            options: ['none', 'burger']
        },
        default: {
            table: {
                disable: true
            }
        }
    }
} as Meta<typeof AebSidebar>;

const wrapper = {marginTop: '20px'};
const item = {display: 'flex', alignItems: 'center', padding: '15px 0', userSelect: 'none'};
const icon = {marginRight: '20px'};

export const Default: StoryFn<typeof AebSidebar> = (args) => ({
    components: {AebSidebar},
    setup() {
        return {args, wrapper, item, icon};
    },
    template: html` <aeb-sidebar
        :isOpen="args.isOpen"
        :isRight="args.isRight"
        :layoutMod="args.layoutMod === 'burger' ? 'burger' : null">
        <div v-if="args.layoutMod === 'burger'" :style="wrapper">
            <div :style="item">
                <div :style="icon">
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.6667 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4H8.33333"
                            stroke="#A3AAAE"
                            stroke-width="2" />
                        <rect x="8" y="1" width="8" height="6" rx="1" stroke="#A3AAAE" stroke-width="2" />
                        <rect x="4" y="11" width="7" height="5" rx="1" stroke="#A3AAAE" stroke-width="2" />
                        <rect x="14.5" y="10.5" width="6" height="1" rx="0.5" stroke="#A3AAAE" />
                        <rect x="14.5" y="15.5" width="6" height="1" rx="0.5" stroke="#A3AAAE" />
                    </svg>
                </div>
                Главная
            </div>
            <div :style="item">
                <div :style="icon">
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.6667 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4H8.33333"
                            stroke="#A3AAAE"
                            stroke-width="2" />
                        <rect x="8" y="1" width="8" height="6" rx="1" stroke="#A3AAAE" stroke-width="2" />
                        <rect x="4" y="11" width="7" height="5" rx="1" stroke="#A3AAAE" stroke-width="2" />
                        <rect x="14.5" y="10.5" width="6" height="1" rx="0.5" stroke="#A3AAAE" />
                        <rect x="14.5" y="15.5" width="6" height="1" rx="0.5" stroke="#A3AAAE" />
                    </svg>
                </div>
                Шаблоны
            </div>
            <div :style="item">
                <div :style="icon">
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.6667 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4H8.33333"
                            stroke="#A3AAAE"
                            stroke-width="2" />
                        <rect x="8" y="1" width="8" height="6" rx="1" stroke="#A3AAAE" stroke-width="2" />
                        <rect x="4" y="11" width="7" height="5" rx="1" stroke="#A3AAAE" stroke-width="2" />
                        <rect x="14.5" y="10.5" width="6" height="1" rx="0.5" stroke="#A3AAAE" />
                        <rect x="14.5" y="15.5" width="6" height="1" rx="0.5" stroke="#A3AAAE" />
                    </svg>
                </div>
                История загрузкок
            </div>
            <div :style="item">
                <div :style="icon">
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.6667 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4H8.33333"
                            stroke="#A3AAAE"
                            stroke-width="2" />
                        <rect x="8" y="1" width="8" height="6" rx="1" stroke="#A3AAAE" stroke-width="2" />
                        <rect x="4" y="11" width="7" height="5" rx="1" stroke="#A3AAAE" stroke-width="2" />
                        <rect x="14.5" y="10.5" width="6" height="1" rx="0.5" stroke="#A3AAAE" />
                        <rect x="14.5" y="15.5" width="6" height="1" rx="0.5" stroke="#A3AAAE" />
                    </svg>
                </div>
                Скачанные файлы
            </div>
            <div :style="item">
                <div :style="icon">
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.6667 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4H8.33333"
                            stroke="#A3AAAE"
                            stroke-width="2" />
                        <rect x="8" y="1" width="8" height="6" rx="1" stroke="#A3AAAE" stroke-width="2" />
                        <rect x="4" y="11" width="7" height="5" rx="1" stroke="#A3AAAE" stroke-width="2" />
                        <rect x="14.5" y="10.5" width="6" height="1" rx="0.5" stroke="#A3AAAE" />
                        <rect x="14.5" y="15.5" width="6" height="1" rx="0.5" stroke="#A3AAAE" />
                    </svg>
                </div>
                Настройки
            </div>
        </div>
        <div v-if="args.layoutMod === 'none'">Default sidebar</div>
    </aeb-sidebar>`
});
