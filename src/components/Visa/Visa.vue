<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'aeb-visa'
});
</script>

<template>
    <div class="aeb-visa">
        <h3>Визы</h3>
        <div class="aeb-visa-timeline">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Visa.scss';
</style>
