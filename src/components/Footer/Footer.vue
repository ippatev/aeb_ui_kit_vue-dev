<script lang="ts">
import {defineComponent, useSlots} from 'vue';
import AebFooterTop from './FooterTop/FooterTop.vue';
import AebFooterMenu from './FooterMenu/FooterMenu.vue';
import AebFooterBottom from './FooterBottom/FooterBottom.vue';

export default defineComponent({
    name: 'aeb-footer',
    components: {AebFooterTop, AebFooterMenu, AebFooterBottom},
    setup() {
        const slot = useSlots();
        return {
            hasContent: slot.default
        };
    }
});
</script>

<template>
    <footer v-if="hasContent" class="aeb-footer">
        <div class="aeb-footer__content">
            <slot></slot>
        </div>
    </footer>

    <footer v-else class="aeb-footer">
        <div class="aeb-footer__content">
            <aeb-footer-top></aeb-footer-top>
            <aeb-footer-menu></aeb-footer-menu>
            <aeb-footer-bottom></aeb-footer-bottom>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import './Footer.scss';
</style>
