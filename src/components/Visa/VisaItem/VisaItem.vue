<script lang="ts">
import {defineComponent} from 'vue';
import '../Visa.scss';

export default defineComponent({
    name: 'aeb-visa-item',
    props: {
        status: {
            type: String
        }
    }
});
</script>

<template>
    <div class="aeb-visa-item">
        <div class="aeb-visa-icon">
            <template v-if="status === 'isReturned'">
                <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" fill="#FF3055" r="10" />
                    <rect
                        fill="white"
                        height="12.5"
                        rx="0.875"
                        transform="rotate(-45 5 5.88379)"
                        width="1.75"
                        x="5"
                        y="5.88379" />
                    <rect
                        fill="white"
                        height="12.5"
                        rx="0.875"
                        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 14.7229 5.88379)"
                        width="1.75" />
                </svg>
                <div class="aeb-visa-progress" />
            </template>
            <template v-if="status === 'isAgreed'">
                <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.0283 0.0283264C4.5298 0.0127068 0.0439644 4.47313 0.0283447 9.97167C0.012725 15.4702 4.47315 19.9561 9.97169 19.9717C15.4702 19.9873 19.9561 15.5269 19.9717 10.0283C19.9873 4.52978 15.5269 0.0439461 10.0283 0.0283264Z"
                        fill="#00BF41" />
                    <path
                        d="M13.109 6.98264L9.52446 11.2591L7.67997 9.40447C7.35682 9.07906 6.82998 9.07756 6.50498 9.40114C6.17956 9.72471 6.17807 10.2507 6.50164 10.5761L8.98748 13.0761C9.14367 13.2328 9.35491 13.3206 9.5747 13.3213C9.58716 13.3213 9.60004 13.3213 9.61251 13.3205C9.84563 13.3108 10.0641 13.203 10.2141 13.0239L14.3832 8.04991C14.6779 7.69799 14.6316 7.17435 14.2801 6.87918C13.9282 6.58485 13.4037 6.63072 13.109 6.98264Z"
                        fill="white" />
                </svg>

                <div class="aeb-visa-progress agreed" />
            </template>
            <template v-if="status === 'isProgress'">
                <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" fill="#E7EAEC" r="10" />
                    <path
                        d="M10 3C6.1402 3 3 6.1402 3 10C3 13.8598 6.1402 17 10 17C13.8598 17 17 13.8598 17 10C17 6.1402 13.8598 3 10 3ZM10 15.5105C6.96153 15.5105 4.48934 13.0386 4.48934 10C4.48934 6.96138 6.96153 4.48948 10 4.48948C13.0385 4.48948 15.5107 6.96138 15.5107 10C15.5107 13.0386 13.0385 15.5105 10 15.5105Z"
                        fill="white" />
                    <path
                        d="M13.4088 9.95425H10.1823V6.52288C10.1823 6.23412 9.91762 6 9.59116 6C9.26469 6 9 6.23412 9 6.52288V10.4771C9 10.7659 9.26469 11 9.59116 11H13.4088C13.7353 11 14 10.7659 14 10.4771C14 10.1884 13.7353 9.95425 13.4088 9.95425Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.3" />
                </svg>

                <div class="aeb-visa-progress" />
            </template>
        </div>
        <div :class="`aeb-visa-status ${status}`">
            <slot />
        </div>
    </div>
</template>
