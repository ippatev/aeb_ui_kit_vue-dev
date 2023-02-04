import AebPagination from './Pagination.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {html} from 'code-tag';
import {ref} from 'vue';

const style = {background: 'rgba(255,255,255,0.2)'};

const amountOptions = [
    {
        value: 10,
        label: 'По 10 на стр.'
    },
    {
        value: 20,
        label: 'По 20 на стр.'
    },
    {
        value: 30,
        label: 'По 30 на стр.'
    }
];
export default {
    title: 'Components/Pagination',
    args: {amountOptions, totalPages: 200},
    argTypes: {
        totalPages: {
            name: 'Total pages'
        },
        amountOptions: {
            table: {
                disable: true
            }
        },
        page: {
            table: {disable: true}
        },
        amount: {
            table: {disable: true}
        },
        adaptive: {
            table: {disable: true}
        },
        pageSelect: {
            table: {disable: true}
        },
        amountChange: {
            table: {disable: true}
        }
    },
    component: AebPagination
} as Meta<typeof AebPagination>;

export const Default: StoryFn<typeof AebPagination> = (args) => ({
    components: {AebPagination},
    setup(props) {
        const amount = ref<number>(10);
        const amountChange = (newAmount: number) => {
            amount.value = newAmount;
        };
        return {props, args, amount, amountChange, amountOptions, style};
    },
    template: html`
        <div :style="style">
            <aeb-pagination
                    :totalPages="args.totalPages"
                    :amountOptions="args.amountOptions"
                    @amountChange="amountChange"
                    :amount="amount"
                    :adaptive="5">
        </div>
    `
});
