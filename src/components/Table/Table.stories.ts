import AebTable from './Table.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {IDataTableType} from '@/components/Table/Table.types';
import {action} from '@storybook/addon-actions';
import {html} from 'code-tag';

interface CompanyClient {
    id: string;
    number: string;
    client: string;
    numberObc: string;
    status: Status;
    data: Date;
    price: number;
}

enum Status {
    Завершенный = 0,
    Действующий = 1,
    Расторгнут = 2
}

const clientsData: IDataTableType<CompanyClient> = {
    columns: [
        {title: 'Номер', dataProperty: 'number'},
        {title: 'Заказчик', dataProperty: 'client'},
        {title: 'Номер ОБС', dataProperty: 'numberObc', action: 'KEK'},
        {title: 'Статус', dataProperty: 'status', dataField: 'STATUS'},
        {
            title: 'Сумма, руб',
            dataProperty: 'price',
            align: 'right',
            format: {type: 'number', placeholder: '1.2-3'}
        },
        {
            title: 'Дата',
            dataProperty: 'data',
            align: 'right',
            format: {type: 'date', placeholder: 'P'}
        },
        {title: '', dataField: 'ROW_ACTION'}
    ],
    rowActions: [
        {
            actionToPerform: 'EDIT',
            logoImageUrl: './images/icon-edit.svg'
        },
        {
            actionToPerform: 'DELETE',
            logoImageUrl: './images/icon-trash.svg'
        },
        {
            actionToPerform: 'DOWNLOAD',
            logoImageUrl: './images/icon-download.svg'
        }
    ],
    status: [
        {
            label: Status[0],
            status: 0,
            iconUrl: './images/icon-success.svg',
            color: 'var(--others-green)'
        },
        {
            label: Status[1],
            status: 1,
            iconUrl: './images/icon-time.svg',
            color: 'var(--primary-gray)'
        },
        {
            label: Status[2],
            status: 2,
            iconUrl: './images/icon-failure.svg',
            color: 'var(--others-destructive)'
        }
    ]
};
const clients: CompanyClient[] = [
    {
        id: '1',
        number: '217',
        client: 'ГКУ «СГЗ РС (Я)»',
        numberObc: '40702 810 1 0000 1122321',
        status: 2,
        price: 208053.0,
        data: new Date('2011-08-12T20:17:46.384Z')
    },
    {
        id: '2',
        number: '186',
        client: 'ГКУ «СГЗ РС (Я)»',
        numberObc: '40702 810 1 0000 1122321',
        status: 1,
        price: 208053.0,
        data: new Date('2011-08-12T20:17:46.384Z')
    },
    {
        id: '3',
        number: '012',
        client: 'ГКУ «СГЗ РС (Я)»',
        numberObc: '40702 810 1 0000 1122321',
        status: 0,
        price: 208053.0,
        data: new Date('2011-08-12T20:17:46.384Z')
    }
];

const testClass = {width: '1200px', height: '400px', background: 'white', padding: '30px'};
export default {
    title: 'Components/Table',
    argTypes: {
        tableContent: {table: {disable: true}},
        tableConfig: {table: {disable: true}},
        action: {table: {disable: true}}
    },
    component: AebTable
} as Meta<typeof AebTable>;

export const Default: StoryFn<typeof AebTable> = () => ({
    components: {AebTable},
    setup() {
        return {clients, clientsData, testClass, action};
    },
    template: html`
        <div :style="testClass">
            <aeb-table
                :tableContent="clients"
                :tableConfig="clientsData"
                @action="(event) => action('Action')(event)" />
        </div>
    `
});
