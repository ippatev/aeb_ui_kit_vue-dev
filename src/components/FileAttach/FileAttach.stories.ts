import AebFileAttach from './FileAttach.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {action} from '@storybook/addon-actions';
import {html} from 'code-tag';

export default {
    title: 'Components/File Attach',
    components: {AebFileAttach},
    args: {
        showDocumentList: true,
        showPassportInput: true,
        layoutMod: 'none',
        fileTypeMessage: '.xls',
        title: 'Справки о доходах',
        documentList: 'Справка 2НДФЛ, справка о размере пенсии и иные документы, подтверждающие доход'
    },
    argTypes: {
        layoutMod: {
            control: {type: 'select'},
            options: ['none', 'salaryPortal', 'simple']
        },
        maxFilesLength: {
            table: {disable: true}
        },
        changeListEvent: {
            table: {disable: true}
        },
        maxFilesLengthError: {
            table: {disable: true}
        }
    }
} as Meta<typeof AebFileAttach>;

export const Default: StoryFn<typeof AebFileAttach> = (args) => ({
    components: {AebFileAttach},
    setup() {
        const handleClickOutside = (event: MouseEvent) => {
            action('Outside clicked')(event);
        };
        return {handleClickOutside, args};
    },
    template: html` <div
        style="background: #ffffff; width: 680px; height: 300px; display: flex; justify-content: space-around; align-items: center">
        <aeb-file-attach v-bind="args" />
    </div>`
});
