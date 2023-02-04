export interface IDataTableType<T> {
    columns: IColumnType<T>[];
    rowActions?: IRowAction[];
    status?: IStatus[];
}

export interface IColumnType<T> {
    title: string;
    dataProperty?: keyof T;
    dataField?: 'ROW_ACTION' | 'STATUS' | 'DEFAULT';
    align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined;
    action?: string;
    format?: {
        type: 'date' | 'number';
        placeholder: string;
        local?: string;
    };
}

export interface IRowAction {
    actionToPerform: string;
    logoImageUrl: string;
}

export interface IStatus {
    status: number;
    label: string;
    iconUrl: string;
    color: string;
}

export interface RowActionWithData {
    actionToPerform: string;
    id: string;
}
