import AebPopUpComponent from './PopUpComponent.vue';
import AebPopUp from './PopUp.vue';
import {StoryFn} from '@storybook/vue3';
import {defineComponent, ref} from 'vue';
import {html} from 'code-tag';
import './stories.scss';

const wrapper = {
    width: '100%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    marginTop: '200px'
};

const popUpTrigger = {
    width: '200px',
    height: '50px',
    background: 'rgba(255,255,255,0.3)',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none'
};

export default {
    title: 'Components/PopUp',
    components: {AebPopUp},
    args: {
        position: 'bottom'
    },
    argTypes: {
        position: {
            control: {type: 'select'},
            options: ['top', 'right', 'bottom', 'left']
        },
        popUpContent: {
            table: {disable: true}
        },
        header: {
            table: {disable: true}
        }
    }
};

const TestComponent = defineComponent({
    name: 'test-component',
    setup(props) {
        const expanded = ref(false);
        const toggleExpand = () => {
            expanded.value = !expanded.value;
        };
        return {expanded, toggleExpand, props};
    },
    template: html` <div :class="[{'test-component--expanded': expanded}, 'test-component']">
            <div class="test-component__item">
                <div class="test-component__date">03.09.2019</div>
                <div class="test-component__content">
                    Срок действия сертификата закqwehqweklqjwekljqkl;wej;qlkwej;qklwje
                </div>
            </div>
            <div class="test-component__item">
                <div class="test-component__date">03.09.2019</div>
                <div class="test-component__content">
                    Срок действия сертификата закqwehqweklqjwekljqkl;wej;qlkwej;qklwje
                </div>
            </div>
            <div class="test-component__item">
                <div class="test-component__date">03.09.2019</div>
                <div class="test-component__content">
                    Срок действия сертификата закqwehqweklqjwekljqkl;wej;qlkwej;qklwje
                </div>
            </div>
            <div class="test-component__item">
                <div class="test-component__date">03.09.2019</div>
                <div class="test-component__content">
                    Срок действия сертификата закqwehqweklqjwekljqkl;wej;qlkwej;qklwje
                </div>
            </div>
            <div class="test-component__item">
                <div class="test-component__date">03.09.2019</div>
                <div class="test-component__content">
                    Срок действия сертификата закqwehqweklqjwekljqkl;wej;qlkwej;qklwje
                </div>
            </div>
            <div class="test-component__item">
                <div class="test-component__date">03.09.2019</div>
                <div class="test-component__content">
                    Срок действия сертификата закqwehqweklqjwekljqkl;wej;qlkwej;qklwje
                </div>
            </div>
            <div class="test-component__item">
                <div class="test-component__date">03.09.2019</div>
                <div class="test-component__content">
                    Срок действия сертификата закqwehqweklqjwekljqkl;wej;qlkwej;qklwje
                </div>
            </div>
        </div>
        <div class="show-all">
            <div class="show-all__btn" @click="toggleExpand">{{ expanded ? 'Скрыть' : 'Показать все' }}</div>
        </div>`
});

export const Default: StoryFn<typeof AebPopUp> = (args) => ({
    components: {TestComponent, AebPopUp, AebPopUpComponent},
    setup() {
        return {args, wrapper, popUpTrigger};
    },
    template: html`
        <div :style="wrapper">
            <aeb-pop-up :position="args.position" :style="wrapper">
                <template v-slot:content>
                    <aeb-pop-up-component header="Уведомления">
                        <test-component />
                    </aeb-pop-up-component>
                </template>
                <div :style="popUpTrigger">Open / Reposition Pop-up</div>
            </aeb-pop-up>
        </div>
    `
});
