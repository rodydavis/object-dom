import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines a row in a table.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_tr.asp
 */
export declare class Tr extends GlobalDom<HTMLTableRowElement> {
    constructor(props?: NodeProps<HTMLTableRowElement>);
}
