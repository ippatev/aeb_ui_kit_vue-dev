<script lang="ts">
import {ComponentPublicInstance, computed, defineComponent, onMounted, onUnmounted, ref} from 'vue';
import './Tooltip.scss';
import AebTooltipComponent from './TooltipComponent.vue';

export type Boundaries = {
    left: number;
    top: number;
    bottom: number;
    right: number;
    height: number;
    width: number;
};

type BoundCb = [number, number];

export type vertices = {
    right: (boundaries: Boundaries, tooltip: HTMLDivElement) => BoundCb;
    left: (boundaries: Boundaries, tooltip: HTMLDivElement) => BoundCb;
    top: (boundaries: Boundaries, tooltip: HTMLDivElement) => BoundCb;
    bottom: (boundaries: Boundaries, tooltip: HTMLDivElement) => BoundCb;
};

export default defineComponent({
    name: 'aeb-tooltip',
    components: {AebTooltipComponent},
    props: {
        content: {
            type: String,
            default: ''
        },
        position: {
            type: String,
            default: 'top'
        },
        overflow: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        let tooltipOpen = false;
        let touchTimeStamp: number | null = null;
        const elementRef = ref<ComponentPublicInstance<HTMLElement>>();
        const tooltipProxyRef = ref<ComponentPublicInstance<HTMLElement>>();
        const tooltipRef = computed(() => tooltipProxyRef?.value?.$el);
        const tooltipConfig: any = {
            right: (boundaries: Boundaries, tooltip: HTMLElement) => {
                const targetHalf: number = boundaries.top + boundaries.height / 2;
                const tooltipHalf: number = tooltip.offsetHeight / 2;
                return [boundaries.left + boundaries.width + 15, targetHalf - tooltipHalf];
            },
            bottom: (boundaries: Boundaries, tooltip: HTMLElement) => {
                const targetHalf: number = boundaries.right - boundaries.width / 2;
                const tooltipHalf: number = tooltip.offsetWidth / 2;
                return [targetHalf - tooltipHalf, boundaries.bottom + 15];
            },
            left: (boundaries: Boundaries, tooltip: HTMLElement) => {
                const targetHalf: number = boundaries.top + boundaries.height / 2;
                const tooltipHalf: number = tooltip.offsetHeight / 2;
                return [boundaries.left - tooltip.offsetWidth - 15, targetHalf - tooltipHalf];
            },
            top: (boundaries: Boundaries, tooltip: HTMLElement) => {
                const targetHalf: number = boundaries.right - boundaries.width / 2;
                const tooltipHalf: number = tooltip.offsetWidth / 2;
                return [targetHalf - tooltipHalf, boundaries.top - tooltip.offsetHeight - 15];
            }
        };
        const touchTooltip = (event: TouchEvent) => {
            if (tooltipOpen) {
                hideTooltip();
            } else {
                touchTimeStamp = event.timeStamp;
                showTooltip();
            }
        };
        const touchDocument = (event: TouchEvent) => {
            if (tooltipOpen && event.timeStamp !== touchTimeStamp) {
                hideTooltip();
            }
        };
        const hideTooltip = () => {
            tooltipOpen = false;
            tooltipRef.value.className = 'aeb-new-tooltip';
        };
        const showTooltip = () => {
            if (props.overflow && elementRef?.value) {
                const onOverflow = elementRef?.value?.scrollWidth > elementRef.value.offsetWidth;
                if (!onOverflow) return;
            }
            tooltipOpen = true;
            const boundaries: any = elementRef?.value?.getBoundingClientRect();
            const [left, top] = tooltipConfig[props.position](boundaries, tooltipRef.value);

            tooltipRef.value.className = `aeb-new-tooltip aeb-new-tooltip--open aeb-new-tooltip--${props.position}`;
            tooltipRef.value.style.left = `${left}px`;
            tooltipRef.value.style.top = `${top}px`;
        };
        onMounted(() => {
            elementRef.value?.addEventListener('mouseenter', showTooltip);
            elementRef.value?.addEventListener('mouseleave', hideTooltip);
            elementRef.value?.addEventListener('touchstart', touchTooltip);
        });
        onUnmounted(() => {
            elementRef.value?.removeEventListener('mouseenter', showTooltip);
            elementRef.value?.removeEventListener('mouseleave', hideTooltip);
            elementRef.value?.removeEventListener('touchstart', touchTooltip);
        });
        return {elementRef, tooltipProxyRef, tooltipOpen, props};
    }
});
</script>

<template>
    <div ref="elementRef" v-bind="props">
        <slot />
        <aeb-tooltip-component ref="tooltipProxyRef" :content="content">
            <slot name="tooltip"></slot>
        </aeb-tooltip-component>
    </div>
</template>
