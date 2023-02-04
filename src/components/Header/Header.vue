<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'aeb-header',
    props: {
        white: {
            type: Boolean,
            default: false
        }
    }
});
</script>

<template>
    <header :class="{white}" class="aeb-header">
        <slot />
    </header>
</template>

<style lang="scss" scoped>
@import './Header.scss';
</style>
