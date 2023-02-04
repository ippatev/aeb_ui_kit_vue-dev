import AebVisa from './Visa.vue';
import AebVisaItem from './VisaItem/VisaItem.vue';
import AebSpanTitle from './VisaSpan/VisaSpanTitle.vue';
import AebSpanSubtitle from './VisaSpan/VisaSpanSubtitle.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {html} from 'code-tag';

export default {
    title: 'Components/Visa',
    component: AebVisa
} as Meta<typeof AebVisa>;

export const Default: StoryFn<typeof AebVisa> = (args) => ({
    components: {AebVisa, AebVisaItem, AebSpanTitle, AebSpanSubtitle},
    template: html` <aeb-visa>
        <aeb-visa-item :status="'isProgress'">
            <aeb-span-title> Верификатор</aeb-span-title>
            <aeb-span-subtitle> На рассмотрении</aeb-span-subtitle>
        </aeb-visa-item>

        <aeb-visa-item :status="'isProgress'">
            <aeb-span-title> Кредитный аналитик</aeb-span-title>
            <aeb-span-subtitle> На рассмотрении</aeb-span-subtitle>
        </aeb-visa-item>

        <aeb-visa-item :status="'isReturned'">
            <aeb-span-title> Подразделение кредитных рисков</aeb-span-title>
            <aeb-span-subtitle> Отправлено на доработку</aeb-span-subtitle>
        </aeb-visa-item>

        <aeb-visa-item :status="'isAgreed'">
            <aeb-span-title> Залоговое подразделение</aeb-span-title>
            <aeb-span-subtitle> Согласовано</aeb-span-subtitle>
        </aeb-visa-item>
        <aeb-visa-item :status="'isAgreed'">
            <aeb-span-title> Залоговое подразделение</aeb-span-title>
            <aeb-span-subtitle> Согласовано</aeb-span-subtitle>
        </aeb-visa-item>
    </aeb-visa>`
});
