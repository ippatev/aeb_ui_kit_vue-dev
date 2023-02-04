import AebHeading from './Heading.vue';
import AebProductTitle from './ProductTitle/ProductTitle.vue';
import AebBreadcrumbs from './Breadcrumbs/Breadcrumbs.vue';
import {StoryFn} from '@storybook/vue3';
import {action} from '@storybook/addon-actions';
import './stories.scss';
import {html} from 'code-tag';

export default {
    title: 'Components/Heading'
};
export const Default: StoryFn<typeof AebHeading & typeof AebBreadcrumbs> = (args) => ({
    components: {AebHeading, AebBreadcrumbs},
    setup() {
        const handler = (id: number) => {
            action('Option click')(id);
        };
        return {args, handler, headingWrapper, breadcrumbs};
    },
    template: html` <div :style="headingWrapper">
        <div :style="breadcrumbs">
            <aeb-breadcrumbs @optionClick="handler" :routeSequence="args.routeSequence" />
        </div>
        <aeb-heading :text="args.text" />
    </div>`
});

Default.args = {
    routeSequence: ['Пункт меню', 'Пункт меню', 'Пункт меню', 'Пункт меню'],
    text: 'Заголовок страницы'
};

Default.argTypes = {
    routeSequence: {
        control: {type: 'array'},
        name: 'sequence'
    }
};
export const ProductTitle: StoryFn<typeof AebProductTitle> = (args) => ({
    components: {AebProductTitle},
    setup() {
        const backHandler = () => {
            action('Back handler')();
        };
        return {args, backHandler, titleWrapper};
    },
    template: html` <div :style="titleWrapper">
        <aeb-product-title :title="args.title" @backHandler="backHandler">
            <div>
                <div class="desc">Краткое описание продукта</div>
                <div class="table">
                    <div class="table__row">
                        <div class="table__head">
                            Срок кредита
                            <span class="table__sep" />
                            <span class="table__desc">до 5 лет</span>
                        </div>
                        <div class="table__head">
                            Ставка
                            <span class="table__sep" />
                            <span class="table__desc">11%</span>
                        </div>
                        <div class="table__head">
                            Сумма кредита
                            <span class="table__sep" />
                            <span class="table__desc">до 3 млн ₽</span>
                        </div>
                    </div>
                </div>
            </div>
        </aeb-product-title>
    </div>`
});
ProductTitle.args = {
    title: 'Название продукта'
};

const headingWrapper = 'padding: 40px; background: white';
const breadcrumbs = 'margin-bottom: 25px';
const titleWrapper = 'padding: 40px; background: rgba(255,255,255,0.7)';
