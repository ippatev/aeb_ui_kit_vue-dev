<script lang="ts">
import {defineComponent, PropType} from 'vue';
import AebFilterTag from './FilterTag/FilterTag.vue';

type Tag = {
    value: string;
    label: string;
};

export default defineComponent({
    name: 'aeb-filter-tags',
    components: {AebFilterTag},
    props: {
        tags: {type: Object as PropType<Tag[]>},
        filterValue: {type: Array as PropType<string[]>, default: () => []}
    },
    emits: ['onChange'],
    setup(props, {emit}) {
        const clickHandler = (value: string) => {
            emit(
                'onChange',
                props.filterValue.includes(value)
                    ? props.filterValue.filter((fv) => fv !== value)
                    : [...props.filterValue, value]
            );
        };
        return {clickHandler};
    }
});
</script>

<template>
    <div class="aeb-filter-tags">
        <aeb-filter-tag
            v-for="(tag, i) in tags"
            :key="i"
            :active="filterValue.includes(tag.value)"
            :value="tag.value"
            @clickHandler="clickHandler">
            {{ tag.label }}
        </aeb-filter-tag>
    </div>
</template>

<style lang="scss" scoped>
@import './FilterTags.scss';
</style>
