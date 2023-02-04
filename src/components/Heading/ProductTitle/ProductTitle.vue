<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'aeb-product-title',
    props: {
        title: {
            type: String
        }
    },
    emits: ['backHandler'],
    setup(props, {emit}) {
        return {
            emit
        };
    }
});
</script>
<template>
    <div class="aeb-product-title">
        <div class="aeb-product-title__title">
            <div class="aeb-product-title__back" @click="emit('backHandler')">
                <svg fill="none" height="42" viewBox="0 0 42 42" width="42" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="white" height="42" rx="10" width="42" />
                    <line
                        stroke="#2F88F0"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="13"
                        x2="29"
                        y1="21"
                        y2="21" />
                    <path
                        d="M18 14L12 21L18 28"
                        stroke="#2F88F0"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2" />
                </svg>
            </div>
            <div class="aeb-product-title__heading">
                {{ title }}
            </div>
        </div>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
@import './ProductTitle.scss';
</style>
