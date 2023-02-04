export type WizardStepProps = {
    title?: string;
    isValid?: boolean;
    isActive?: boolean;
    isCompleted?: boolean;
    showPrev?: boolean;
    showNext?: boolean;
    onNext?: () => void;
    onPrev?: () => void;
    onComplete?: () => void;
};
