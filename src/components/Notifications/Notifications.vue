<script lang="ts">
import {defineComponent, PropType} from 'vue';

export type Notification = {
    id: number;
    message: string;
    header: string;
    iconPath: string;
};

export default defineComponent({
    name: 'aeb-notifications',
    props: {
        notifications: {
            type: Array as PropType<Notification[]>,
            required: true,
            default: () => []
        }
    },
    emits: ['handleClose'],
    setup(props, {emit}) {
        const clickHandler = (id: number) => {
            emit('handleClose', id);
        };

        return {
            clickHandler
        };
    }
});
</script>

<template>
    <div v-if="notifications.length" class="aeb-new-notifications">
        <div v-for="(item, i) in notifications" v-bind:key="i" class="aeb-new-notifications__item">
            <div class="aeb-new-notifications__icon">
                <img :src="item.iconPath" alt="picture" />
            </div>
            <div class="aeb-new-notifications__info">
                <div class="aeb-new-notifications__header">
                    {{ item.header }}
                </div>
                <div class="aeb-new-notifications__msg">
                    {{ item.message }}
                </div>
            </div>
            <div class="aeb-new-notifications__close" @click="() => clickHandler(item.id)">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.63086 5.63074L18.3693 18.3692" stroke="white" stroke-linecap="round" stroke-width="2" />
                    <path d="M18.3691 5.63074L5.63065 18.3692" stroke="white" stroke-linecap="round" stroke-width="2" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Notifications.scss';
</style>
