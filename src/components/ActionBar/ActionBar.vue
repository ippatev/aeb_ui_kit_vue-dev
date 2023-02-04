<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'aeb-action-bar',
    props: {
        zIndex: {
            type: String
        },
        isOpen: {
            type: Boolean
        }
    }
});
</script>

<template>
    <div :class="{'aeb-action-bar--open': isOpen}" :style="{zIndex}" class="aeb-action-bar">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
@import './ActionBar.scss';
</style>
