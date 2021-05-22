import type { NodeProps } from "../base";
import { Table, Thead } from "../dom";
export interface TableJsonProps {
    table?: NodeProps<HTMLTableElement>;
    header?: Thead;
    body?: Thead;
    headerRow?: NodeProps<HTMLTableRowElement>;
    tableRow?: NodeProps<HTMLTableRowElement>;
}
export declare function jsonTable(data: Object[], props?: TableJsonProps): Table;
