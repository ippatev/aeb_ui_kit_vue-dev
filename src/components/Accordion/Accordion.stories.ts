import AebAccordion from './Accordion.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {html} from 'code-tag';

export default {
    title: 'Components/Accordion',
    component: AebAccordion,
    args: {
        header: 'Header',
        content: `Польти в книге "Тридцать шесть драматических ситуаций".
Синтез искусств изменяем. Дискредитация теории катарсиса,
в том числе, иллюстрирует деструктивный предмет искусства.
Действительно, классицизм дает архетип.`
    },
    argTypes: {
        default: {
            table: {
                disable: true
            }
        },
        content: {
            table: {
                category: 'props'
            }
        }
    }
} as Meta<typeof AebAccordion>;

export const Default: StoryFn<typeof AebAccordion> = (args) => ({
    components: {AebAccordion},
    setup() {
        return {args};
    },
    template: html` <aeb-accordion :header="args.header">{{ args.content }}</aeb-accordion>`
});
