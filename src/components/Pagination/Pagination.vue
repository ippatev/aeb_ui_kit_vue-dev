<script lang="ts">
import {defineComponent, onMounted, onUnmounted, PropType, ref, watch} from 'vue';
import AebSelect from '@/components/Select/Select.vue';
import AebOption from '@/components/Select/Option.vue';

const breakPoints = {
    1150: 5,
    700: 3,
    600: 2
};

const defaultAmountOptions = [
    {
        value: 10,
        label: 'По 10 на стр.'
    },
    {
        value: 20,
        label: 'По 20 на стр.'
    },
    {
        value: 30,
        label: 'По 30 на стр.'
    }
];
type amountOption = {
    value: number;
    label: string;
};

export default defineComponent({
    name: 'aeb-pagination',
    components: {AebSelect, AebOption},
    props: {
        totalPages: {
            type: Number,
            default: 1500
        },
        page: {
            type: Number,
            default: 1
        },
        amount: {
            type: Number
        },
        amountOptions: {
            type: Array as PropType<amountOption[]>,
            default: defaultAmountOptions
        },
        adaptive: {
            type: Number
        }
    },
    emits: ['pageSelect', 'amountChange'],

    setup(props, {emit}) {
        const head = ref<number[]>([]);
        const middle = ref<number[]>([]);
        const tail = ref<number[]>([]);
        const adaptiveBase = ref<number>(13);
        const currentPage = ref<number>(props.page);
        const renderPages = (firstPage: number) => {
            const newMiddle = [...new Array(adaptiveBase.value)]
                .map((_, i) => {
                    const page = firstPage + i;
                    return page <= props.totalPages ? page : 0;
                })
                .filter((item) => !!item);
            middle.value = newMiddle;
            if (props.totalPages === 1) {
                head.value = [];
            } else {
                head.value = [1, 2].filter((page) => !newMiddle.includes(page));
            }
            tail.value = [...new Array(2)]
                .map((_, i) => props.totalPages - i)
                .filter((item) => {
                    return !newMiddle.includes(item) && item > currentPage.value;
                })
                .reverse();
        };
        const middlePageHandler = (page: number) => {
            currentPage.value = page;
            emit('pageSelect', currentPage);
        };
        const nextPageHandler = () => {
            if (currentPage.value === props.totalPages) return;
            const nextPage = currentPage.value + 1;
            currentPage.value = nextPage;
            if (!middle.value.includes(nextPage)) {
                renderPages(nextPage);
            }
            emit('pageSelect', currentPage);
        };
        const prevPageHandler = () => {
            if (currentPage.value === 1) return;

            const prevPage = currentPage.value - 1;
            currentPage.value = prevPage;

            if (!middle.value.includes(prevPage)) {
                renderPages(prevPage - (adaptiveBase.value - 1));
            }

            emit('pageSelect', prevPage);
        };

        const tailPageHandler = (page: number) => {
            currentPage.value = page;
            renderPages(
                [...new Array(adaptiveBase.value)]
                    .map((_, i) => props.totalPages - i)
                    .reverse()
                    .filter((item) => !middle.value.includes(item))[0]
            );

            emit('pageSelect', page);
        };
        const headPageHandler = (page: number) => {
            currentPage.value = page;

            renderPages(1);

            emit('pageSelect', page);
        };

        const amountChangeHandler = (amount: number) => {
            emit('amountChange', amount);
        };
        const resizeWindow = () => {
            const adaptiveStep = +(window.innerWidth / 50).toFixed() * 50;
            if (breakPoints[adaptiveStep as keyof typeof breakPoints]) {
                adaptiveBase.value = breakPoints[adaptiveStep as keyof typeof breakPoints];
                renderPages(middle.value[0]);
            } else if (window.innerWidth > 1150) {
                adaptiveBase.value = props.adaptive || 13;
                renderPages(middle.value[0]);
            }
        };
        onMounted(() => {
            currentPage.value = parseInt(currentPage.value.toString(), 10);
            adaptiveBase.value = props.adaptive ? props.adaptive : adaptiveBase.value;
            if (window.innerWidth <= 600) {
                adaptiveBase.value = 2;
            } else if (window.innerWidth <= 700) {
                adaptiveBase.value = 3;
            } else if (window.innerWidth <= 1150) {
                adaptiveBase.value = 5;
            }
            if (middle.value) {
                currentPage.value = 1;
                renderPages(1);
                emit('pageSelect', 1);
            }

            window.addEventListener('resize', resizeWindow);
        });
        onUnmounted(() => {
            window.removeEventListener('resize', resizeWindow);
        });
        watch(adaptiveBase, () => {
            renderPages(currentPage.value);
        });
        watch(currentPage, () => {
            if (currentPage.value > middle.value[middle.value.length - 1]) {
                renderPages(currentPage.value);
            }
        });
        return {
            props,
            currentPage,
            prevPageHandler,
            head,
            headPageHandler,
            middle,
            middlePageHandler,
            tail,
            tailPageHandler,
            amountChangeHandler,
            nextPageHandler
        };
    }
});
</script>

<template>
    <div class="aeb-pagination">
        <div
            :class="{
                'aeb-pagination__button--disable': currentPage === 1
            }"
            class="aeb-pagination__button"
            @click="prevPageHandler">
            <div class="aeb-pagination__arrow-icon aeb-pagination__arrow-icon--left">
                <svg fill="none" height="10" viewBox="0 0 6 10" width="6" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 9L4.92929 5.07071C4.96834 5.03166 4.96834 4.96834 4.92929 4.92929L1 1"
                        stroke="#2F88F0"
                        stroke-linecap="round"
                        stroke-width="2" />
                </svg>
            </div>
            <span class="aeb-pagination__button-label">Назад</span>
        </div>
        <div class="aeb-pagination__block">
            <div v-for="(page, i) in head" :key="i" class="aeb-pagination__page" @click="headPageHandler(page)">
                {{ page }}
            </div>
            <div v-if="!!head.length" class="aeb-pagination__breaker">...</div>
            <div
                v-for="(page, i) in middle"
                :key="i"
                :class="{
                    'aeb-pagination__page--active': currentPage === page
                }"
                class="aeb-pagination__page"
                @click="middlePageHandler(page)">
                {{ page }}
            </div>
            <div v-if="!!tail.length" class="aeb-pagination__breaker">...</div>

            <div v-for="(page, i) in tail" :key="i" class="aeb-pagination__page" @click="tailPageHandler(page)">
                {{ page }}
            </div>
        </div>
        <div class="aeb-pagination__block">
            <div class="aeb-pagination__amount">
                <aeb-select :direction="'top'" :value="amount" @change="(event) => amountChangeHandler(event)">
                    <aeb-option v-for="(option, i) in amountOptions" :key="i" :value="option.value">
                        {{ option.label }}
                    </aeb-option>
                </aeb-select>
            </div>

            <div class="aeb-pagination__block">
                <div
                    :class="{
                        'aeb-pagination__button--disable': currentPage === totalPages
                    }"
                    class="aeb-pagination__button aeb-pagination__button--right"
                    @click="nextPageHandler()">
                    <span class="aeb-pagination__button-label">Далее</span>
                    <div class="aeb-pagination__arrow-icon aeb-pagination__arrow-icon--right">
                        <svg fill="none" height="10" viewBox="0 0 6 10" width="6" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 9L4.92929 5.07071C4.96834 5.03166 4.96834 4.96834 4.92929 4.92929L1 1"
                                stroke="#2F88F0"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Pagination.scss';
</style>
