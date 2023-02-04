<script lang="ts">
import {computed, defineComponent, reactive} from 'vue';
import {WizardStepProps} from './Wizard.types';

export default defineComponent({
    name: 'aeb-wizard',
    props: {
        isDisabled: {
            type: Boolean
        }
    },
    emits: ['onStepChanged'],
    setup(props, {slots, expose, emit}) {
        const defaultSlot = slots.default?.() as any;
        const wizardSteps =
            defaultSlot[0].type?.name === 'aeb-wizard-step'
                ? defaultSlot.map((step: any) => step.props as WizardStepProps)
                : defaultSlot[0].children.map((step: any) => step.props as WizardStepProps);
        const steps = reactive<WizardStepProps[]>(wizardSteps);
        const completedSteps = computed(() => steps.filter((step) => step?.isCompleted));
        const activeStep = computed<WizardStepProps>(() => steps.find((step) => step.isActive) || steps[0]);
        const activeStepIndex = computed<number>(() => steps.indexOf(activeStep.value));
        const hasNextStep = computed(() => activeStepIndex.value < steps.length - 1);
        const hasPrevStep = computed(() => activeStepIndex.value > 0);

        const goToNextStep = (): void => {
            if (!hasNextStep.value) {
                return;
            }
            activeStep.value.onNext && activeStep.value.onNext();
            setActiveStep(steps[activeStepIndex.value + 1]);
        };

        const setActiveStep = (step: WizardStepProps) => {
            if (step !== activeStep.value) {
                activeStep.value.isActive = false;
                step.isActive = true;
                emit('onStepChanged', step);
            }
        };

        const goToPrevStep = (): void => {
            if (!hasPrevStep.value) {
                return;
            }
            if (!hasNextStep.value && activeStep.value.isCompleted) {
                activeStep.value.isCompleted = false;
                return;
            }
            const nextStep = steps[activeStepIndex.value - 1];
            nextStep.isCompleted = false;
            activeStep.value.onPrev && activeStep.value.onPrev();
            setActiveStep(nextStep);
        };

        const goToFirstStep = (): void => {
            if (hasPrevStep.value) {
                return;
            }
            setActiveStep(steps[0]);
        };

        const onCompleteStep = (): void => {
            activeStep.value.onComplete && activeStep.value.onComplete();
            activeStep.value.isCompleted = true;
            goToNextStep();
        };
        expose({goToNextStep, setActiveStep, goToPrevStep, goToFirstStep, onCompleteStep});

        return {steps, completedSteps, slots};
    }
});
</script>

<template>
    <div class="wizard">
        <div class="wizard-steps">
            <div
                v-for="(step, i) in steps"
                v-bind:key="i"
                :class="{
                    active: step.isActive,
                    completed: step.isCompleted,
                    disabled: isDisabled
                }"
                :style="{width: 100 / steps.length + '%'}"
                class="wizard-step">
                <div class="wizard-step-index">
                    <div v-if="step.isCompleted">
                        <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
                            <path
                                clip-rule="evenodd"
                                d="M25.4674 5.47186C26.1505 6.12666 26.1805 7.21877 25.5345 7.91115L11.9594 22.4601C11.3279 23.1369 10.2805 23.1835 9.59296 22.5654L2.5728 16.2545C1.8694 15.6222 1.80492 14.5316 2.42878 13.8186C3.05264 13.1057 4.1286 13.0403 4.832 13.6726L10.6186 18.8746L23.0608 5.53988C23.7068 4.84751 24.7843 4.81705 25.4674 5.47186Z"
                                fill="#FAFAFA"
                                fill-rule="evenodd" />
                        </svg>
                    </div>
                    <span v-else>{{ i + 1 }}</span>
                </div>
                <div
                    :class="{
                        disabled: isDisabled
                    }"
                    class="wizard-step-title">
                    {{ step.title }}
                </div>
            </div>
            <div class="wizard-steps-line">
                <div
                    v-if="isDisabled === false"
                    :style="{
                        width: (100 / (steps.length - 1)) * completedSteps.length + '%'
                    }"
                    class="wizard-steps-line-active"></div>
            </div>
        </div>
        <div class="wizard-steps-content">
            <component :is="{...slots.default()[i], props: step}" v-for="(step, i) in steps" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Wizard.scss';
</style>
