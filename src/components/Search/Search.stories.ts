import AebSearch from './Search.vue';
import {Story} from '@storybook/vue3';
import {action} from '@storybook/addon-actions';
import {Option} from '@/components/Search/Search.vue';
import {shallowRef} from 'vue';

const options = [
    {
        value: 'qwe',
        description: 'wwww'
    },
    {
        value: 'qwz',
        description: 'wqwewww'
    },
    {
        value: 'qwx',
        description: 'wwzxxx123ww'
    }
];

export default {
    title: 'Components/Search',
    components: {AebSearch},
    args: {
        withoutBg: false,
        placeholder: 'Искать среди партнеров',
        examples: ['ХозМаркет', 'Дэйли Март', 'Евростом'],
        options
    }
};

export const Default: Story<typeof AebSearch> = (args) => ({
    components: {AebSearch},
    template: `
        <aeb-search
            v-bind="args"
            :options="options"
            @onChange="changeHandler"
        >
        </aeb-search>
    `,
    setup() {
        const options = shallowRef<Option[]>(args.options);
        const changeHandler = (term: string): void => {
            action('[Search value]: ')(term);
            options.value = args.options.filter((item: Option) => item.value.match(term));
            action('[Options]: ')(options);
        };
        return {options, changeHandler, args};
    }
});
