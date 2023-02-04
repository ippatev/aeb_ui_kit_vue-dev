<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'aeb-news-card',
    props: {
        date: {
            type: String
        }
    }
});
</script>

<template>
    <div class="aeb-news-card">
        <div class="aeb-news-card__date">
            {{ date }}
        </div>
        <div class="aeb-news-card__content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './NewsCard.scss';
</style>
