<script lang="ts">
import {defineComponent, PropType, ref, shallowRef} from 'vue';
import ClickOutside from '../ClickOutside/ClickOutside.directive';

export type Option = {
    value: string;
    description: string;
    image?: string;
};

export default defineComponent({
    name: 'aeb-search',
    props: {
        withoutBg: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String
        },
        options: {
            type: Array as PropType<Option[]>,
            default: () => []
        },
        examples: {
            type: Array as PropType<string[]>,
            default: () => []
        }
    },
    directives: {
        ClickOutside
    },
    emits: ['onChange'],
    setup(props, {emit}) {
        let value = ref('');
        let onShowOptions = shallowRef(false);

        const blurHandler = () => {
            onShowOptions.value = false;
        };

        const inputHandler = (event: InputEvent) => {
            onShowOptions.value = true;
            value.value = (event.target as HTMLInputElement).value;
            emit('onChange', value.value);
        };

        const clearInput = () => {
            value.value = '';
            emit('onChange', value.value);
        };

        const focusHandler = () => {
            if (value.value) onShowOptions.value = true;
        };

        const inputExample = (term: string) => {
            value.value = term;
            emit('onChange', value.value);
        };

        const selectHandler = (term: string) => {
            value.value = term;
            onShowOptions.value = false;
            emit('onChange', value.value);
        };

        const transform = (optionValue: string): string => {
            return `${optionValue.replace(RegExp(value.value), `<b>${value.value}</b>`)}`;
        };

        return {
            value,
            onShowOptions,
            blurHandler,
            inputHandler,
            clearInput,
            focusHandler,
            inputExample,
            selectHandler,
            transform
        };
    }
});
</script>

<template>
    <div
        :class="{
            'aeb-search--plate': !withoutBg
        }"
        class="aeb-search">
        <div class="aeb-search__input-wrapper">
            <div class="aeb-search__search-icon">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10.5" cy="10.5" r="6.5" stroke="#2F88F0" stroke-width="2" />
                    <path d="M15 15.5L19.5 20" stroke="#2F88F0" stroke-linecap="round" stroke-width="2" />
                </svg>
            </div>
            <input
                v-click-outside="blurHandler"
                :class="{
                    'aeb-search__input--expanded': onShowOptions && !!options.length
                }"
                :placeholder="placeholder"
                :value="value"
                class="aeb-search__input"
                @focus="focusHandler"
                @input="inputHandler" />
            <div v-if="onShowOptions && !!options.length" class="aeb-search__options">
                <div
                    v-for="(option, i) in options"
                    class="aeb-search__option-wrapper"
                    @click="selectHandler(option.value)">
                    <div class="aeb-search__option">
                        <div class="aeb-search__option-img">
                            <img v-if="option.image" :src="option.image" alt="" />
                            <template v-else>
                                {{ option.value[0].toUpperCase() }}
                            </template>
                        </div>
                        <div class="aeb-search__option-content">
                            <div class="aeb-search__option-value" v-html="transform(option.value)"></div>
                            <div class="aeb-search__option-desc">
                                {{ option.description }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <slot v-if="!withoutBg">
                <div v-if="examples.length" class="aeb-search__examples">
                    Например:
                    <span
                        v-for="(example, i) in examples"
                        class="aeb-search__example"
                        @click="() => inputExample(example)">
                        {{ example }}<span v-if="i !== examples.length - 1">,&nbsp;</span>
                    </span>
                </div>
            </slot>
            <div v-if="value" class="aeb-search__close-icon" @click="clearInput">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.63074 5.63086L18.3692 18.3693"
                        stroke="#27303E"
                        stroke-linecap="round"
                        stroke-width="2" />
                    <path
                        d="M18.3693 5.63086L5.63077 18.3693"
                        stroke="#27303E"
                        stroke-linecap="round"
                        stroke-width="2" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Search.scss';
</style>
