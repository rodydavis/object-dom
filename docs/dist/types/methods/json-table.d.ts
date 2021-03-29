import { NodeProps } from '../base';
import { Table, TableHeader } from '../dom';
export interface TableJsonProps {
    table?: NodeProps<HTMLTableElement>;
    header?: TableHeader;
    body?: TableHeader;
    headerRow?: NodeProps<HTMLTableRowElement>;
    tableRow?: NodeProps<HTMLTableRowElement>;
}
export declare function jsonTable(data: Object[], props?: TableJsonProps): Table;
