<script lang="ts">
import {defineComponent, PropType} from 'vue';

export default defineComponent({
    name: 'aeb-breadcrumbs',
    props: {
        routeSequence: {
            type: Array as PropType<string[]>
        }
    },
    emits: ['optionClick'],
    setup(props, {emit}) {
        return {
            emit
        };
    }
});
</script>

<template>
    <div class="aeb-breadcrumbs">
        <div
            v-for="(item, index) in routeSequence"
            :key="index"
            class="aeb-breadcrumbs__item"
            @click="emit('optionClick', index)">
            {{ ' ' + item + ' ' }}
            <span v-if="index !== routeSequence.length - 1" class="aeb-breadcrumbs__icon">
                <svg fill="none" height="6" viewBox="0 0 3 6" width="3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L-6.28109e-09 5.59808L2.2085e-07 0.401924L3 3Z" fill="#A3AAAE" />
                </svg>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Breadcrumbs.scss';
</style>
