<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IProductItemCard} from './CreditItemCard.types';
import AebButton from '../Button/Button.vue';

export default defineComponent({
    name: 'aeb-credit-item-card',
    components: {AebButton},
    props: {
        cardInfo: {
            type: Object as PropType<IProductItemCard>
        }
    },
    emits: ['buttonClickEvent', 'infoClickEvent'],
    setup(props, {emit}) {
        return {
            emit
        };
    }
});
</script>

<template>
    <div
        :style="{
            backgroundImage: cardInfo?.image && `url('/assets/images/product-cards/${cardInfo.image}')`,
            backgroundColor: cardInfo?.backgroundColor
        }"
        class="credit-item-card">
        <div class="credit-item-card__info-icon" @click="emit('infoClickEvent')"></div>
        <div class="credit-item-card__title-wrapper" @click="emit('buttonClickEvent')">
            <div class="credit-item-card__title">«{{ cardInfo?.title }}»</div>
            <div class="credit-item-card__title-text">{{ cardInfo?.caption }}</div>
        </div>
        <div class="credit-item-card__details-wrapper">
            <div class="credit-item-card__credit-details">
                <div v-if="cardInfo?.details?.time" class="credit-item-card__credit-details-item">
                    <div class="credit-item-card__credit-details-item-title">Срок кредита</div>
                    <div class="credit-item-card__credit-details-item-separator"></div>
                    <div class="credit-item-card__credit-details-item-value">
                        до {{ cardInfo?.details?.time }}
                        {{ cardInfo?.details?.timeMeasure }}
                    </div>
                </div>
                <div v-if="cardInfo?.details?.rate" class="credit-item-card__credit-details-item">
                    <div class="credit-item-card__credit-details-item-title">Ставка</div>
                    <div class="credit-item-card__credit-details-item-separator"></div>
                    <div class="credit-item-card__credit-details-item-value">{{ cardInfo?.details?.rate }} %</div>
                </div>
                <div v-if="cardInfo?.details?.amount" class="credit-item-card__credit-details-item">
                    <div class="credit-item-card__credit-details-item-title">Сумма кредита</div>
                    <div class="credit-item-card__credit-details-item-separator"></div>
                    <div class="credit-item-card__credit-details-item-value">
                        до {{ cardInfo?.details?.amount }}
                        {{ cardInfo?.details?.amountMeasure }}
                    </div>
                </div>
            </div>
        </div>
        <div class="credit-item-card__button-wrapper">
            <aeb-button label="Рассчитать кредит" @click="emit('buttonClickEvent')"></aeb-button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './CreditItemCard.scss';
</style>
