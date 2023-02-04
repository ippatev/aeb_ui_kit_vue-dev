import AebTooltip from './Tooltip.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {html} from 'code-tag';

const style = {
    background: 'teal',
    width: '70px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    cursor: 'pointer'
};
const container = {marginLeft: '30px', padding: '80px', width: '200px', backgroundColor: 'white'};
const row = {width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px'};

const header = {marginBottom: '5px', width: '100%'};
const arrow = {marginRight: '10px', color: '#00BF41'};
const fstCurrency = {marginRight: '10px'};
const margin45 = {marginRight: '45px'};
const margin = {marginRight: '81px'};

const overflowWrap = {
    width: '150px',
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.3)',
    textOverflow: 'ellipsis'
};
const overflowSpan = {wordBreak: 'keep-all', whiteSpace: 'nowrap'};
export default {
    title: 'Components/Tooltip',
    component: AebTooltip,
    argTypes: {
        content: {
            table: {disable: true}
        },
        position: {
            table: {disable: true}
        },
        style: {
            table: {disable: true}
        },
        overflow: {
            table: {disable: true}
        },
        tooltip: {
            table: {disable: true}
        },
        default: {
            table: {disable: true}
        }
    }
} as Meta<typeof AebTooltip>;

export const Default: StoryFn<typeof AebTooltip> = (args) => ({
    components: {AebTooltip},
    setup() {
        return {args, style, container, row, arrow, fstCurrency, margin45, header, overflowWrap, overflowSpan, margin};
    },
    template: html` <div :style="container">
        <div :style="row">
            <aeb-tooltip content="Текст тултипа" position="top" :style="style"> TOP </aeb-tooltip>
            <aeb-tooltip :style="style" position="right">
                RIGHT
                <template v-slot:tooltip>
                    <div>
                        <div :style="header">14 августа 2020</div>
                        <div :style="header">
                            <span :style="arrow">&#9650;</span>
                            <span :style="fstCurrency">23,90 $</span> 0,7535%
                        </div>
                        <div :style="header">
                            <div><span :style="margin45">Открытие</span> <span>3171,92$</span></div>
                        </div>
                        <div :style="header">
                            <div><span :style="margin45">Закрытие</span> <span>3148,02$</span></div>
                        </div>
                        <div :style="header">
                            <div><span :style="margin">Мин</span> <span>3120,01$</span></div>
                        </div>
                        <div :style="header">
                            <div><span :style='{marginRight: "75px"}'>Макс</span> <span>3189,50$</span></div>
                        </div>
                    </div>
                </template>
            </aeb-tooltip>
        </div>
        <div :style="row">
            <aeb-tooltip content="Текст тултипа" position="left" :style="style"> LEFT </aeb-tooltip>
            <aeb-tooltip content="Текст тултипа" position="bottom" :style="style"> BOTTOM </aeb-tooltip>
        </div>
        <div>
            <aeb-tooltip :style="overflowWrap" content="Текст тултипа">
                <span :style="overflowSpan">sdlfksdlfjksldjf sdlfksdlfjksldjf sdlfksdlfjksldjf</span>
            </aeb-tooltip>
        </div>
    </div>`
});
