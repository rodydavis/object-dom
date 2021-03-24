import { ObjectDom, NodeProps } from '../base';
export interface TableJsonProps {
    table?: NodeProps;
    header?: TableHeader;
    body?: TableHeader;
    headerRow?: NodeProps;
    tableRow?: NodeProps;
}
export declare function tableFromJsonList(data: Object[], props: TableJsonProps): Table;
export declare class Table extends ObjectDom<HTMLTableElement> {
    constructor(props: NodeProps);
}
export declare class TableRow extends ObjectDom<HTMLTableRowElement> {
    constructor(props: NodeProps);
}
declare class Section extends ObjectDom<HTMLTableSectionElement> {
    constructor(node: HTMLTableSectionElement, props: NodeProps);
}
export declare class TableHeader extends Section {
    constructor(props: NodeProps);
}
export declare class TableFooter extends Section {
    constructor(props: NodeProps);
}
export declare class TableBody extends Section {
    constructor(props: NodeProps);
}
export interface HeaderNodeProps extends NodeProps {
    colspan?: number;
    rowspan?: number;
}
export declare class HeaderCell extends ObjectDom<HTMLTableHeaderCellElement> {
    constructor(props: HeaderNodeProps);
}
export declare class Cell extends ObjectDom<HTMLTableCellElement> {
    constructor(props: NodeProps);
}
export declare class Caption extends ObjectDom<HTMLTableCaptionElement> {
    constructor(props: NodeProps);
}
declare class Col extends ObjectDom<HTMLTableColElement> {
    constructor(node: HTMLTableColElement, props: NodeProps);
}
export declare class TableColumn extends Col {
    constructor(props: NodeProps);
}
export declare class TableColumnGroup extends Col {
    constructor(props: NodeProps);
}
export {};
