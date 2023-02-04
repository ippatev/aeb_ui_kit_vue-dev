<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: 'aeb-accordion',
    props: {
        header: {
            type: String
        }
    },
    setup() {
        const isOpen = ref(false);
        const contentRef = ref(null);
        return {
            contentRef,
            isOpen
        };
    }
});
</script>

<template>
    <div :class="{'aeb-accordion--open': isOpen}" class="aeb-accordion">
        <div :class="{'aeb-accordion__header--open': isOpen}" class="aeb-accordion__header" @click="isOpen = !isOpen">
            <span class="aeb-accordion__heading">
                {{ header }}
            </span>
            <div :class="{'aeb-accordion__arrow-icon--open': isOpen}" class="aeb-accordion__arrow-icon">
                <svg fill="none" height="6" viewBox="0 0 10 6" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.999999 1L4.92929 4.92929C4.96834 4.96834 5.03166 4.96834 5.07071 4.92929L9 1"
                        stroke="#27303E"
                        stroke-linecap="round"
                        stroke-width="2" />
                </svg>
            </div>
        </div>
        <div
            ref="contentRef"
            :style="{height: isOpen ? contentRef?.scrollHeight + 'px' : 0}"
            class="aeb-accordion__content">
            <slot />
            <div class="aeb-accordion__stub-padding"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Accordion.scss';
</style>
