<script>
import {inject} from 'vue';

export default {
    name: 'aeb-textarea',
    setup() {
        const onFocus = inject('onFocus', () => {});
        const onBlur = inject('onBlur', () => {});
        const onChange = inject('onChange', () => {});

        return {onFocus, onBlur, onChange};
    }
};
</script>
<template>
    <textarea class="aeb-input" @blur="onBlur" @focus="onFocus" @input="onChange" />
</template>
