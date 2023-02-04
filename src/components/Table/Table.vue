<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IDataTableType, RowActionWithData} from './Table.types';
import {formatTable} from './formaters';

export default defineComponent({
    name: 'aeb-table',
    props: {
        tableConfig: {
            type: Object as PropType<IDataTableType<any>>
        },
        tableContent: {
            type: Array
        }
    },
    emits: ['action'],

    setup(props, {emit}) {
        const onRowActionClicked = (actionType: string, id: string) => {
            const userAction: RowActionWithData = {
                actionToPerform: actionType,
                id
            };
            emit('action', userAction);
        };
        return {props, onRowActionClicked, formatTable};
    }
});
</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th
                    v-for="(columnHead, i) in props.tableConfig?.columns"
                    :key="i"
                    :align="columnHead?.align || 'left'"
                    class="table-title">
                    {{ columnHead.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(columnData, i) in props.tableContent" :key="i">
                <td v-for="(columnHead, i) in props.tableConfig?.columns" :key="i" :align="columnHead.align || 'left'">
                    <div>
                        <div v-if="columnHead?.dataField === 'ROW_ACTION'">
                            <div class="table-action">
                                <div v-for="(action, i) in tableConfig?.rowActions" :key="i">
                                    <img
                                        :src="action?.logoImageUrl"
                                        alt="img"
                                        @click="onRowActionClicked(action.actionToPerform, columnData.id)" />
                                </div>
                            </div>
                        </div>
                        <div v-else-if="columnHead?.dataField === 'STATUS'">
                            <div>
                                <template v-for="(status, i) in props.tableConfig?.status" :key="i">
                                    <div
                                        v-if="columnHead.dataProperty && columnData[columnHead.dataProperty] === i"
                                        :style="{color: status.color}"
                                        class="table-status"
                                        @click="onRowActionClicked(columnHead.action || 'SHOW', columnData.id)">
                                        <img :src="status?.iconUrl" />
                                        <span>{{ status.label }}</span>
                                    </div>
                                </template>
                            </div>
                        </div>
                        <div
                            v-else
                            @click="onRowActionClicked(columnHead.action || 'SHOW', columnData.id)"
                            v-html="
                                columnHead?.dataProperty
                                    ? String(
                                          formatTable(
                                              columnData[columnHead.dataProperty],
                                              columnHead.format?.type,
                                              columnHead.format?.placeholder,
                                              columnHead.format?.local
                                          )
                                      )
                                    : ''
                            " />
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
@import './Table.scss';
</style>
