import { CoreDom, NodeProps } from '../base';
export declare class Table extends CoreDom<HTMLTableElement> {
    constructor(props: NodeProps);
}
export declare class TableRow extends CoreDom<HTMLTableRowElement> {
    constructor(props: NodeProps);
}
declare class Section extends CoreDom<HTMLTableSectionElement> {
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
export declare class HeaderCell extends CoreDom<HTMLTableHeaderCellElement> {
    constructor(props: HeaderNodeProps);
}
export declare class Cell extends CoreDom<HTMLTableCellElement> {
    constructor(props: NodeProps);
}
export declare class Caption extends CoreDom<HTMLTableCaptionElement> {
    constructor(props: NodeProps);
}
declare class Col extends CoreDom<HTMLTableColElement> {
    constructor(node: HTMLTableColElement, props: NodeProps);
}
export declare class TableColumn extends Col {
    constructor(props: NodeProps);
}
export declare class TableColumnGroup extends Col {
    constructor(props: NodeProps);
}
export {};
