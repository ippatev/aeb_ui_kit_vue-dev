<script>
import {inject} from 'vue';

export default {
    name: 'aeb-input',
    setup() {
        const onFocus = inject('onFocus', () => {});
        const onBlur = inject('onBlur', () => {});
        const onChange = inject('onChange', () => {});

        return {onFocus, onBlur, onChange};
    }
};
</script>
<template>
    <input class="aeb-input" @blur="onBlur" @focus="onFocus" @input="onChange" />
</template>
