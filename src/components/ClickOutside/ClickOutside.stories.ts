import ClickOutside from './ClickOutside.directive';
import {Meta, StoryFn} from '@storybook/vue3';
import {action} from '@storybook/addon-actions';
import {html} from 'code-tag';

export default {
    title: 'Components/Click outside',
    components: {ClickOutside}
} as Meta<typeof ClickOutside>;

export const Default: StoryFn<typeof ClickOutside> = () => ({
    setup() {
        const handleClickOutside = (event: MouseEvent) => {
            action('Outside clicked')(event);
        };
        return {handleClickOutside};
    },
    directives: {
        ClickOutside
    },
    template: html`
        <div v-click-outside="handleClickOutside" style="background: lightblue; padding: 2rem;">
            Кликни по внешнему элементу
        </div>
    `
});
