<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: 'aeb-checkbox',
    props: {
        id: {
            type: String
        },
        hasError: {
            type: Boolean
        },
        name: {
            type: String || undefined,
            default: undefined
        },
        checked: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: ['change'],

    setup(props, {emit}) {
        const innerChecked = ref<boolean>(false);
        const handleClick = (event: any): void => {
            innerChecked.value = !innerChecked.value;
            emit('change', event);
        };
        const onInteractionEvent = (event: any) => {
            event.stopPropagation();
        };
        return {props, handleClick, onInteractionEvent, innerChecked};
    }
});
</script>

<template>
    <div
        :class="{
            'aeb-checkbox-checked': innerChecked,
            'aeb-checkbox-disabled': props.disabled,
            'aeb-checkbox-error': props.hasError,
            'aeb-checkbox-checked-disabled': props.checked && props.disabled
        }">
        <label :for="props.id" class="aeb-checkbox-layout">
            <div class="aeb-checkbox-container">
                <input
                    :id="props.id"
                    :checked="innerChecked"
                    :disabled="props.disabled"
                    :name="props.name"
                    hidden
                    type="checkbox"
                    @change="(event) => onInteractionEvent(event)"
                    @click="(event) => handleClick(event)" />
                <div class="aeb-checkbox-indicator">
                    <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                        <path
                            clip-rule="evenodd"
                            d="M9 16L4 11.1923L5.4 9.84615L9 13.3077L16.6 6L18 7.34615L9 16V16Z"
                            fill="#EEEEEE"
                            fill-rule="evenodd" />
                    </svg>
                </div>
                <div class="aeb-checkbox-label">
                    <slot />
                </div>
            </div>
        </label>
    </div>
</template>

<style lang="scss" scoped>
@import './Checkbox.scss';
</style>
