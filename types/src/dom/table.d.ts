import { GlobalDom, NodeProps } from '../base';
export declare class Table extends GlobalDom<HTMLTableElement> {
    constructor(props?: NodeProps<HTMLTableElement>);
}
export declare class TableRow extends GlobalDom<HTMLTableRowElement> {
    constructor(props?: NodeProps<HTMLTableRowElement>);
}
declare class Section extends GlobalDom<HTMLTableSectionElement> {
    constructor(node: HTMLTableSectionElement, props?: NodeProps<HTMLTableSectionElement>);
}
export declare class TableHeader extends Section {
    constructor(props?: NodeProps<HTMLTableSectionElement>);
}
export declare class TableFooter extends Section {
    constructor(props?: NodeProps<HTMLTableSectionElement>);
}
export declare class TableBody extends Section {
    constructor(props?: NodeProps<HTMLTableSectionElement>);
}
export interface HeaderNodeProps extends NodeProps<HTMLTableHeaderCellElement> {
    colspan?: number;
    rowspan?: number;
}
export declare class HeaderCell extends GlobalDom<HTMLTableHeaderCellElement> {
    constructor(props?: HeaderNodeProps);
}
export declare class Cell extends GlobalDom<HTMLTableCellElement> {
    constructor(props?: NodeProps<HTMLTableCellElement>);
}
export declare class Caption extends GlobalDom<HTMLTableCaptionElement> {
    constructor(props?: NodeProps<HTMLTableCaptionElement>);
}
declare class Col extends GlobalDom<HTMLTableColElement> {
    constructor(node: HTMLTableColElement, props?: NodeProps<HTMLTableColElement>);
}
export declare class TableColumn extends Col {
    constructor(props?: NodeProps<HTMLTableColElement>);
}
export declare class TableColumnGroup extends Col {
    constructor(props?: NodeProps<HTMLTableColElement>);
}
export {};
