<script lang="ts">
import {defineComponent} from 'vue';
import './Tooltip.scss';

export default defineComponent({
    name: 'aeb-tooltip-component',
    props: {
        content: {
            type: String,
            default: ''
        }
    }
});
</script>

<template>
    <div ref="tooltipRef" class="aeb-new-tooltip">
        <div class="aeb-new-tooltip__container">
            {{ content }}
            <slot v-if="!content" />
        </div>
    </div>
</template>
