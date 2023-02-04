<script lang="ts">
import {defineComponent, onMounted, onUnmounted, PropType, ref} from 'vue';
import {Boundaries, vertices} from '@/components/Tooltip/Tooltip.vue';

export default defineComponent({
    name: 'aeb-pop-up',
    props: {
        position: {
            type: String as PropType<'top' | 'left' | 'right' | 'bottom'>,
            default: 'bottom'
        }
    },
    setup(props) {
        const popupRef = ref<any>();
        const popupComponentRef = ref<any>();
        const popUpConfig: vertices = {
            right: (boundaries: Boundaries, popUp: any) => {
                const targetHalf: number = boundaries.top + boundaries.height / 2;
                const tooltipHalf: number = popUp.offsetHeight / 2;

                return [boundaries.right + 15, targetHalf - tooltipHalf];
            },
            bottom: (boundaries: Boundaries, popUp: any) => {
                const targetHalf: number = boundaries.right - boundaries.width / 2;
                const tooltipHalf: number = popUp.offsetWidth / 2;

                return [targetHalf - tooltipHalf, boundaries.bottom + 15];
            },
            left: (boundaries: Boundaries, popUp: any) => {
                const targetHalf: number = boundaries.top + boundaries.height / 2;
                const tooltipHalf: number = popUp.offsetHeight / 2;

                return [boundaries.left - popUp.offsetWidth - 15, targetHalf - tooltipHalf];
            },
            top: (boundaries: Boundaries, popUp: any) => {
                const targetHalf: number = boundaries.right - boundaries.width / 2;
                const tooltipHalf: number = popUp.offsetWidth / 2;

                return [targetHalf - tooltipHalf, boundaries.top - popUp.offsetHeight - 15];
            }
        };
        const handleClick = (event: MouseEvent) => {
            if (event.target !== popupRef.value.children[0]) return;
            const popUp = popupComponentRef.value.children[0];

            if (popUp) {
                popUp.style.opacity = '1';
                popUp.style.pointerEvents = 'all';
                const boundaries: Boundaries = popupRef.value.getBoundingClientRect();
                const [left, top] = popUpConfig[props.position](boundaries, popUp);

                popUp.style.left = `${left}px`;
                popUp.style.top = `${top}px`;
                popUp.className = `aeb-pop-up aeb-pop-up--${props.position}`;
            }
        };
        onMounted(() => {
            popupRef.value?.addEventListener('click', handleClick);
        });
        onUnmounted(() => {
            popupRef.value?.removeEventListener('click', handleClick);
        });
        return {popupRef, popupComponentRef, props};
    }
});
</script>

<template>
    <div ref="popupRef">
        <slot />
    </div>
    <div ref="popupComponentRef">
        <slot name="content"></slot>
    </div>
</template>

<style lang="scss" scoped>
@import './PopUp.scss';
</style>
