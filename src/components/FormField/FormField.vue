<script>
import {provide, ref} from 'vue';

export default {
    name: 'aeb-form-field',
    props: {
        center: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        cssMod: {
            type: String
        }
    },

    setup() {
        const focused = ref(false);
        const value = ref('');

        provide('onFocus', () => (focused.value = true));
        provide('onBlur', () => (focused.value = false));
        provide('onChange', (e) => (value.value = e.target.value));

        return {focused, value};
    }
};
</script>
<template>
    <div
        :class="{center, focused, 'aeb-form-field--svoi': cssMod === 'svoi', 'has-value': value, error}"
        class="aeb-form-field">
        <slot />
        <div class="aeb-label">
            <slot name="label" />
        </div>
        <div class="aeb-icon">
            <slot name="icon" />
        </div>
    </div>
</template>
<style lang="scss">
@import './FormField.scss';
</style>
