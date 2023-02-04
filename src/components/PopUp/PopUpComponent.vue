<script lang="ts">
import {ComponentPublicInstance, defineComponent, ref} from 'vue';

export default defineComponent({
    name: 'aeb-pop-up-component',
    props: {
        header: {
            type: String
        }
    },
    setup(props) {
        const popUpRef = ref<ComponentPublicInstance<HTMLElement>>();
        const hidePopUp = () => {
            if (popUpRef.value) {
                popUpRef.value.style.opacity = '0';
                popUpRef.value.style.pointerEvents = 'none';
            }
        };
        return {hidePopUp, popUpRef, props};
    }
});
</script>

<template>
    <div ref="popUpRef" class="aeb-pop-up">
        <div class="aeb-pop-up__header">
            <div class="aeb-pop-up__heading">{{ header }}</div>
            <div class="aeb-pop-up__close-icon" @click="hidePopUp">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.63086 5.63074L18.3693 18.3692"
                        stroke="#2F88F0"
                        stroke-linecap="round"
                        stroke-width="2" />
                    <path
                        d="M18.3691 5.63074L5.63065 18.3692"
                        stroke="#2F88F0"
                        stroke-linecap="round"
                        stroke-width="2" />
                </svg>
            </div>
        </div>
        <div class="aeb-pop-up__container">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './PopUp.scss';
</style>
