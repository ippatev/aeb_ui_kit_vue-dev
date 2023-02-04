<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'aeb-heading',
    props: {
        text: {
            type: String
        }
    }
});
</script>

<template>
    <h1 class="aeb-heading">
        {{ text }}
    </h1>
</template>

<style lang="scss" scoped>
@import './Heading.scss';
</style>
