import { NodeProps } from '../base';
import { Table, TableHeader } from '../dom';
export interface TableJsonProps {
    table?: NodeProps;
    header?: TableHeader;
    body?: TableHeader;
    headerRow?: NodeProps;
    tableRow?: NodeProps;
}
export declare function jsonTable(data: Object[], props?: TableJsonProps): Table;
