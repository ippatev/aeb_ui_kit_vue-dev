import AebFilterTags from './FilterTags.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {action} from '@storybook/addon-actions';
import {ref} from 'vue';
import {html} from 'code-tag';

const tags = [
    {
        value: 'tag-one',
        label: 'Первый тэг'
    },
    {
        value: 'tag-two',
        label: 'Второй тэг'
    },
    {
        value: 'tag-three',
        label: 'Третий тэг'
    },
    {
        value: 'tag-four',
        label: 'Четвёртый тэг'
    },
    {
        value: 'tag-five',
        label: 'Пятый тэг'
    },
    {
        value: 'tag-six',
        label: 'Шестой тэг'
    },
    {
        value: 'tag-seven',
        label: 'Седьмой тэг'
    },
    {
        value: 'tag-eight',
        label: 'Восьмой тэг'
    },
    {
        value: 'tag-nine',
        label: 'Девятый тэг'
    },
    {
        value: 'tag-ten',
        label: 'Десятый тэг'
    }
];

export default {
    title: 'Components/Filter tags'
} as Meta<typeof AebFilterTags>;

export const Default: StoryFn<typeof AebFilterTags> = () => ({
    components: {AebFilterTags},
    setup() {
        const filterValue = ref<string[]>([]);
        const onChange = (newTags: string[]) => {
            filterValue.value = newTags.slice();
            action('[Filter value]: ')(newTags);
        };
        return {filterValue, onChange, tags};
    },
    template: html` <aeb-filter-tags :tags="tags" @onChange="onChange" :filterValue="filterValue" /> `
});
