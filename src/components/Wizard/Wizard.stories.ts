import AebWizard from './Wizard.vue';
import AebWizardStep from './WizardStep.vue';
import AebButton from '../Button/Button.vue';
import {Meta, Story} from '@storybook/vue3';
import {ref} from 'vue';

export default {
    title: 'Components/Wizard'
    // component: AebWizard
} as Meta<typeof AebWizard>;

export const Default: Story<typeof AebWizard> = () => ({
    components: {AebWizard, AebWizardStep, AebButton},
    template: `
        <aeb-wizard ref="wizard">
            <aeb-wizard-step title="Расчет суммы кредита" :isActive="true">
                Content 1
                <aeb-button :solid="false" @click="() => wizard.goToPrevStep()">Назад</aeb-button>
                <aeb-button @click="() => wizard.onCompleteStep()">Вперед</aeb-button>
            </aeb-wizard-step>
            <aeb-wizard-step title="Контактные данные">
                Content 2
                <aeb-button :solid="false" @click="() => wizard.goToPrevStep()">Назад</aeb-button>
                <aeb-button @click="() => wizard.onCompleteStep()">Вперед</aeb-button>
            </aeb-wizard-step>
            <aeb-wizard-step title="Подтверждение номера телефона">
                Content 3
                <aeb-button :solid="false" @click="() => wizard.goToPrevStep()">Назад</aeb-button>
                <aeb-button @click="() => wizard.onCompleteStep()">Вперед</aeb-button>
            </aeb-wizard-step>
        </aeb-wizard>
    `,
    setup() {
        const wizard = ref(null);
        return {wizard};
    }
});
