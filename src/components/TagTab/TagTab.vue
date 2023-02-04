<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'aeb-tag-tab',
    props: {
        label: {
            type: String,
            default: ''
        },
        isActive: {
            type: Boolean,
            default: false
        }
    }
});
</script>

<template>
    <div :class="{'tag--active': isActive}" class="tag">{{ label }}</div>
</template>

<style lang="scss" scoped>
@import './TagTab.scss';
</style>
