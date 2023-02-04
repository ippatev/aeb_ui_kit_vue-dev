<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'aeb-wizard-step',
    props: {
        isActive: {
            type: Boolean
        }
    }
});
</script>

<template>
    <div v-if="isActive">
        <slot></slot>
    </div>
</template>
