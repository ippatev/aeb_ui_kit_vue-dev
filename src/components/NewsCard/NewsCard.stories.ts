import AebNewsCard from './NewsCard.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import './NewsCard.scss';
import {html} from 'code-tag';

export default {
    title: 'Components/News card',
    component: AebNewsCard,
    args: {
        date: '12 сентября'
    },
    argTypes: {
        default: {
            table: {
                disable: true
            }
        }
    }
} as Meta<typeof AebNewsCard>;

const wrapper = `
    background: rgba(255,255,255,0.1);
    padding: 20px;
`;

export const Default: StoryFn<typeof AebNewsCard> = (args) => ({
    components: {AebNewsCard},
    setup() {
        return {args, wrapper};
    },
    template: html`
        <div :style="wrapper">
            <aeb-news-card v-bind="args">
                <a href="#">
                    Евгения Григорьева: Кредит «Мой гектар» от АЭБ поможет успешно осваивать участки на Дальнем Востоке
                </a>
            </aeb-news-card>
        </div>
    `
});
