<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: 'aeb-sidebar',
    props: {
        isRight: {
            type: Boolean,
            default: false
        },
        isOpen: {
            type: Boolean,
            default: true
        },
        layoutMod: {
            type: String,
            default: 'burger'
        }
    },

    setup(props) {
        const isOpenSidebar = ref(props.isOpen);
        return {
            isOpenSidebar,
            handleToggleSidebar() {
                isOpenSidebar.value = !isOpenSidebar.value;
            }
        };
    }
});
</script>

<template>
    <div
        :class="{right: isRight, open: isOpenSidebar, 'aeb-sidebar--burger': layoutMod === 'burger'}"
        class="aeb-sidebar">
        <div v-if="!layoutMod" class="aeb-sidebar-items">
            <slot />
        </div>

        <div v-if="layoutMod === 'burger'" class="aeb-sidebar-burger">
            <div class="aeb-sidebar-burger__icon" @click="handleToggleSidebar">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.71387 12H22.2853"
                        stroke="#27303E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2" />
                    <path
                        d="M1.71387 5.14258H22.2853"
                        stroke="#27303E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2" />
                    <path
                        d="M1.71387 18.8574H22.2853"
                        stroke="#27303E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2" />
                </svg>
            </div>
        </div>

        <div v-if="layoutMod === 'burger'" class="aeb-sidebar-items">
            <div class="aeb-sidebar-content">
                <slot />
            </div>
        </div>

        <div v-if="isOpenSidebar" class="aeb-sidebar-footer" />
        <div v-if="!layoutMod" class="aeb-sidebar-toggle-icon" @click="handleToggleSidebar">
            <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
                <path
                    clip-rule="evenodd"
                    d="M15.5359 6.30688L21.7602 13.3677C21.9199 13.5493 22 13.7653 22 14C22 14.2106 21.9341 14.4606 21.7515 14.6422L15.5318 21.6978C15.3721 21.8793 15.1534 22 14.8856 22C14.6176 22 14.399 21.8794 14.2394 21.6977C13.927 21.3423 13.9119 20.7814 14.244 20.4287L19.9121 14L14.2398 7.56653C13.9272 7.21101 13.9119 6.64939 14.2444 6.29664C14.4095 6.11179 14.6412 6 14.8921 6C15.1445 6 15.3769 6.1135 15.5359 6.30688Z"
                    fill="#9CA8AF"
                    fill-rule="evenodd" />
                <path
                    clip-rule="evenodd"
                    d="M7.53586 6.30688L13.7602 13.3677C13.9199 13.5493 14 13.7653 14 14C14 14.2106 13.9341 14.4606 13.7515 14.6422L7.53175 21.6978C7.37212 21.8793 7.15341 22 6.88558 22C6.61765 22 6.39904 21.8794 6.2394 21.6977C5.92703 21.3423 5.91188 20.7814 6.24398 20.4287L11.9121 14L6.23978 7.56653C5.92725 7.21101 5.91186 6.64939 6.24438 6.29664C6.4095 6.11179 6.64121 6 6.89212 6C7.14455 6 7.37688 6.1135 7.53586 6.30688Z"
                    fill="#9CA8AF"
                    fill-rule="evenodd" />
            </svg>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Sidebar.scss';
</style>
