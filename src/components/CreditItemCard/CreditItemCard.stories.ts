import AebCreditItemCard from './CreditItemCard.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {CreditItemCardProps, IProductItemCard} from '@/components/CreditItemCard/CreditItemCard.types';
import {html} from 'code-tag';

interface StoryCreditItemCardProps extends CreditItemCardProps {
    data: IProductItemCard;
    partData: IProductItemCard;
    withoutDetails: boolean;
}

const cardData = {
    id: 'simple-solutions',
    title: 'Простые решения',
    caption: 'Кредит, который решит любые задачи!',
    details: {
        time: 5,
        timeMeasure: 'лет',
        rate: 11,
        amount: 3,
        amountMeasure: 'млн ₽'
    },
    backgroundColor: '#EFE9E3'
};

const partialCardData = {
    id: 'simple-solutions',
    title: 'Простые решения',
    caption: 'Кредит, который решит любые задачи!',
    backgroundColor: '#EFE9E3'
};

export default {
    title: 'Components/Credit item card',
    components: {AebCreditItemCard},
    args: {data: cardData, partData: partialCardData, withoutDetails: false},
    argTypes: {
        cardInfo: {
            table: {disable: true}
        },
        infoClickEvent: {
            table: {disable: true}
        },
        buttonClickEvent: {
            table: {disable: true}
        }
    }
} as Meta<StoryCreditItemCardProps>;

export const Default: StoryFn<StoryCreditItemCardProps> = (args) => ({
    components: {AebCreditItemCard},
    setup() {
        return {args};
    },
    template: html` <aeb-credit-item-card v-bind="args" :cardInfo="args.withoutDetails ? args.partData : args.data" /> `
});
