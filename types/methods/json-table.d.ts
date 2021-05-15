import { NodeProps } from '../base';
import { Table, THead } from '../dom';
export interface TableJsonProps {
    table?: NodeProps<HTMLTableElement>;
    header?: THead;
    body?: THead;
    headerRow?: NodeProps<HTMLTableRowElement>;
    tableRow?: NodeProps<HTMLTableRowElement>;
}
export declare function jsonTable(data: Object[], props?: TableJsonProps): Table;
