<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'aeb-filter-tag',
    props: {
        active: {type: Boolean, default: false},
        value: {type: String}
    },
    emits: ['clickHandler'],
    setup(props, {emit}) {
        return {
            emit
        };
    }
});
</script>

<template>
    <div
        :class="{
            'aeb-filter-tag--active': active
        }"
        class="aeb-filter-tag"
        @click="emit('clickHandler', value)">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
@import './FilterTag.scss';
</style>
