<script lang="ts">
import {computed, defineComponent, PropType, ref, VNode, watchEffect} from 'vue';
import ClickOutside from '@/components/ClickOutside/ClickOutside.directive';

type Option = {value: string; label: VNode};

export default defineComponent({
    name: 'aeb-select',
    directives: {
        ClickOutside
    },
    emits: ['change'],
    props: {
        hasError: {
            type: Boolean
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String as any
        },
        direction: {
            type: String as PropType<'top' | 'bottom'>,
            default: 'bottom'
        }
    },
    setup(props, {slots, emit}) {
        const isOpen = ref(false);
        const defaultSlot = slots.default?.() as any;
        const children = defaultSlot[0].type?.name === 'aeb-option' ? defaultSlot : defaultSlot[0].children;
        const options = computed(
            () =>
                children?.map((item: any) => ({
                    value: item.props?.value,
                    label: item.children?.default?.()[0].children
                })) || []
        );
        const selectedOption = ref<Option | null>(null);

        watchEffect(
            () =>
                (selectedOption.value =
                    options.value.find((child: {value: any}) => child.value === props.value) || null)
        );

        const closeDropdown = (): void => {
            isOpen.value = false;
        };

        const handleClickOutside = (): void => {
            if (isOpen.value) {
                closeDropdown();
            }
        };

        const openDropdown = (): void => {
            if (props.disabled) return;
            if (isOpen.value) closeDropdown();
            else isOpen.value = true;
        };

        const setValue = (option: Option): void => {
            if (!props.value) {
                selectedOption.value = option;
            }
            emit('change', option.value);
            closeDropdown();
        };

        return {handleClickOutside, openDropdown, setValue, selectedOption, isOpen, options};
    }
});
</script>

<template>
    <div v-click-outside="handleClickOutside" class="aeb-dropdown aeb-dropdown-inner">
        <div
            :class="{
                error: hasError,
                placeholder: !selectedOption,
                open: isOpen && selectedOption
            }"
            class="aeb-dropdown-float-label"
            @click="openDropdown">
            <slot name="label" />
        </div>
        <div
            :class="{open: isOpen, error: hasError, top: direction === 'top'}"
            class="aeb-dropdown-selected-item"
            @click="openDropdown">
            <div v-if="selectedOption">
                {{ selectedOption ? selectedOption.label : '' }}
            </div>
        </div>

        <div :class="{active: isOpen}" class="aeb-dropdown-icon">
            <svg
                v-if="disabled"
                fill="none"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg">
                <rect height="16" rx="3" stroke="#A3AAAE" stroke-width="2" width="18" x="3" y="7" />
                <path
                    d="M8.24682 7C8.08719 6.59903 8 6.16547 8 5.713C8 3.66237 9.79086 2 12 2C14.2091 2 16 3.66237 16 5.713C16 6.16547 15.9128 6.59903 15.7532 7"
                    stroke="#A3AAAE"
                    stroke-width="2" />
            </svg>
            <svg v-else fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.05037 9.36385C5.4204 8.73388 5.86657 7.65674 6.75748 7.65674H13.2428C14.1337 7.65674 14.5798 8.73388 13.9499 9.36385L10.7072 12.6065C10.3167 12.997 9.68353 12.997 9.29301 12.6065L6.05037 9.36385Z"
                    fill="#9CA8AF" />
            </svg>
        </div>
        <div
            :class="{
                open: isOpen,
                error: hasError,
                top: direction === 'top',
                bottom: direction === 'bottom'
            }"
            class="aeb-dropdown-menu">
            <ul>
                <li v-for="option in options" class="aeb-dropdown-item" @click="setValue(option)">
                    {{ option.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Select.scss';
</style>
