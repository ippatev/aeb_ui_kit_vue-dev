<script lang="ts">
import {defineComponent, PropType, useSlots} from 'vue';
import {commonItems} from '../Footer.constants';
import {Link} from '@/components/Footer/Footer.types';

export default defineComponent({
    name: 'aeb-footer-menu',
    props: {items: {type: Array as PropType<Link[]>, default: () => commonItems}},
    setup() {
        const slot = useSlots();
        return {
            hasContent: slot.default
        };
    }
});
</script>

<template>
    <slot></slot>
    <div v-if="!hasContent" class="aeb-footer-menu">
        <div class="aeb-footer-menu__wrapper">
            <a v-for="(item, i) in items" :key="i" :href="item.link" class="aeb-footer-menu__item">
                {{ ' ' + item.name + ' ' }}
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './FooterMenu.scss';
</style>
