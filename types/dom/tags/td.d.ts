import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines a cell in a table.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_td.asp
 */
export declare class Td extends GlobalDom<HTMLTableDataCellElement> {
    constructor(props?: NodeProps<HTMLTableDataCellElement>);
}
