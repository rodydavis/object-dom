import { GlobalDom, NodeProps } from "../../object-dom";
export interface HeaderNodeProps extends NodeProps<HTMLTableHeaderCellElement> {
    colspan?: number;
    rowspan?: number;
}
/**
 * Defines a header cell in a table.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_th.asp
 */
export declare class Th extends GlobalDom<HTMLTableHeaderCellElement> {
    constructor(props?: HeaderNodeProps);
}
