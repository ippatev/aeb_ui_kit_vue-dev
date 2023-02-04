<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'aeb-logo'
});
</script>

<template>
    <div class="aeb-header-logo">
        <div class="aeb-header-logo-icon">
            <svg fill="none" height="26" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg">
                <path
                    clip-rule="evenodd"
                    d="M0 0H6V6H0V0ZM0 10H6V16H0V10ZM6 20H0V26H6V20ZM10 0H16V6H10V0ZM16 10H10V16H16V10ZM10 20H16V26H10V20ZM26 0H20V6H26V0ZM20 10H26V16H20V10ZM26 20H20V26H26V20Z"
                    fill="#2F88F0"
                    fill-rule="evenodd" />
            </svg>
        </div>

        <div class="aeb-header-logo-text">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Logo.scss';
</style>
