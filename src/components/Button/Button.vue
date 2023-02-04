<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: 'aeb-button',
    props: {
        label: {
            type: String,
            default: ''
        },
        solid: {
            type: Boolean,
            default: true
        },
        fill: {
            type: Boolean,
            default: false
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        iconSource: {
            type: String
        },
        disabledIconSource: {
            type: String
        },
        hoveredIconSource: {
            type: String
        },
        showDropdown: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        hoverClass: {
            type: String
        },
        leftIcon: {
            type: Boolean,
            default: true
        },
        rightIcon: {
            type: Boolean,
            default: false
        }
    },
    emits: ['click'],
    setup(props, {emit}) {
        const isHovered = ref(false);
        return {
            isHovered,
            emit
        };
    }
});
</script>

<template>
    <div
        :class="[
            {
                'primary-button--solid': solid,
                'primary-button--fill': fill,
                'primary-button--solid--disabled': solid && disabled,
                'primary-button--disabled': !solid && disabled
            },
            hoverClass
        ]"
        class="primary-button"
        @click="emit('click')"
        @mouseleave="isHovered = false"
        @mouseover="isHovered = true">
        <div
            v-if="label || showDropdown || showIcon"
            :class="{'primary-button__label-wrapper--single': !showIcon && !showDropdown}"
            class="primary-button__label-wrapper">
            <div
                v-if="showIcon && leftIcon"
                :class="{'primary-button__label-image--left': label !== ''}"
                :style="{
                    backgroundImage:
                        'url(' +
                        (isHovered && hoveredIconSource
                            ? hoveredIconSource
                            : disabled && disabledIconSource
                            ? disabledIconSource
                            : iconSource) +
                        ')'
                }"
                class="primary-button__label-image" />
            <div>{{ label }}</div>
            <div
                v-if="showIcon && rightIcon"
                :class="{'primary-button__label-image--right': label !== ''}"
                :style="{
                    backgroundImage: 'url(' + (isHovered && hoveredIconSource ? hoveredIconSource : iconSource) + ')'
                }"
                class="primary-button__label-image" />
            <div v-if="showDropdown" class="primary-button__arrow-down"></div>
        </div>
        <div v-else :class="hoverClass" class="primary-button__label-wrapper">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Button.scss';
</style>
