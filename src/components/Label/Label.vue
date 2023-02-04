<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'aeb-label'
});
</script>

<template>
    <div class="aeb-label">
        <div class="aeb-label-text">
            <slot />
        </div>
        <div class="aeb-label-icon-close">
            <svg fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                <path
                    clip-rule="evenodd"
                    d="M14 1.4L12.6 0L7 5.6L1.4 0L0 1.4L5.6 7L0 12.6L1.4 14L7 8.4L12.6 14L14 12.6L8.4 7L14 1.4Z"
                    fill="#2F88F0"
                    fill-rule="evenodd" />
            </svg>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Label.scss';
</style>
